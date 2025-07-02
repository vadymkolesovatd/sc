export const formatter = new Intl.NumberFormat("pl-PL", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function calculateSalaries(data) {
  const rate = data.general.rate.value;
  const hours = data.general.hours.value;
  const privateLeave = data.additional.private_leave.value;
  const forceMajeure = data.additional.force_majeure.value;
  const salary = rate * (hours - privateLeave - forceMajeure / 2);
  const overtime50Salary =
    data.general.rate.value * 1.5 * data.additional.overtime_half.value;
  const overtime100Salary =
    data.general.rate.value * 2 * data.additional.overtime_full.value;
  const bonus = data.additional.bonus.value;
  const extra = data.additional.extra.value;

  const brutto = salary + overtime50Salary + overtime100Salary + bonus + extra;

  const skladkiSpoleczne = brutto * 0.1371;
  const podstawaOpodatkowania = brutto - skladkiSpoleczne;
  const kosztyUzyskania = 250;

  let podstawaPoKosztach = podstawaOpodatkowania - kosztyUzyskania;
  podstawaPoKosztach = Math.max(0, podstawaPoKosztach);

  let podatek = data.underTwentySix ? 0 : podstawaPoKosztach * 0.12 - 300;

  podatek = Math.max(0, podatek);

  const skladkaZdrowotna = podstawaOpodatkowania * 0.09;

  const netto = brutto - skladkiSpoleczne - skladkaZdrowotna - podatek;

  return {
    brutto: formatter.format(brutto),
    netto: formatter.format(netto),
  };
}

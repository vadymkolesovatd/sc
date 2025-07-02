export function loadData() {
  const loadedData = localStorage.getItem("data");

  if (loadedData) {
    return JSON.parse(loadedData);
  }

  return {
    general: {
      rate: {
        id: "rate",
        label: "Rate (zł)",
        type: "currency",
        value: 0,
      },
      hours: {
        id: "hours",
        label: "Hours",
        type: "time",
        value: 0,
      },
      underTwentySix: false,
    },
    additional: {
      overtime_half: {
        id: "overtime_half",
        label: "Overtime 50%",
        type: "time",
        value: 0,
      },
      overtime_full: {
        id: "overtime_full",
        label: "Overtime 100%",
        type: "time",
        value: 0,
      },
      private_leave: {
        id: "private_leave",
        label: "Wyjście prywatne (hours)",
        type: "time",
        value: 0,
      },
      force_majeure: {
        id: "force_majeure",
        label: "Siła wyższa (hours)",
        type: "time",
        value: 0,
      },
      bonus: {
        id: "bonus",
        label: "Bonus",
        type: "currency",
        value: 0,
      },
      extra: {
        id: "extra",
        label: "Extra",
        type: "currency",
        value: 0,
      },
    },
  };
}

export function saveData(data) {
  localStorage.setItem("data", JSON.stringify(data));
}

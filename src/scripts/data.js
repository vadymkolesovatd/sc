export function loadData() {
  const data = {
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
      l4: {
        id: "l4",
        label: "Sick leave (days)",
        type: "days",
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

  const loadedData = JSON.parse(localStorage.getItem("data"));

  if (loadedData) {
    const validatedData = mergeStructure(data, loadedData);
    return validatedData;
  }

  return data;
}

export function saveData(data) {
  localStorage.setItem("data", JSON.stringify(data));
}

function mergeStructure(template, target) {
  if (typeof template !== "object" || template === null) {
    return target !== undefined ? target : template;
  }

  if (typeof target !== "object" || target === null) {
    return JSON.parse(JSON.stringify(template));
  }

  const result = Array.isArray(template) ? [] : {};

  for (const key of Object.keys(template)) {
    if (key in target) {
      result[key] = mergeStructure(template[key], target[key]);
    } else {
      result[key] = JSON.parse(JSON.stringify(template[key]));
    }
  }

  return result;
}

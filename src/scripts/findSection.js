export function findSectionFieldKey(data, id) {
  for (const sectionKey in data) {
    const section = data[sectionKey];
    for (const fieldKey in section) {
      const field = section[fieldKey];
      if (field.id === id) {
        return sectionKey;
      }
    }
  }
  return null;
}

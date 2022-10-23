const filterNotesByName = (value, notes) => {
  return notes.filter(({ name }) => {
    return name.includes(value);
  });
};
export { filterNotesByName };

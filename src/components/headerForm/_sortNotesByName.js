const sortNotesByName = (notesCopy) => {
  notesCopy.sort(({ name: a }, { name: b }) => a.localeCompare(b));
};
export { sortNotesByName };

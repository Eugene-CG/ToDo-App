const sortNotesByDate = (notesCopy) => {
  return (notesCopy = notesCopy
    .map((note, noteIndex) => ({
      n: note,
      index: noteIndex,
    }))
    .sort(({ index: a }, { index: b }) => b - a)
    .map((element) => element.n));
};
export { sortNotesByDate };

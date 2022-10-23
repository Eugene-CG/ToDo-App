const renderNotes = (notes) => {
  const notesContainer = document.querySelector(".notes-container");
  const notesHtml = notes.map((note) => {
    return `
    <article class="note main__note" data-note-name="${note.name}">
            <h2 class="note__name">${note.name}</h2>
            <div class="note__status-btns">
                <button class="note__status-check"></button>
                <button class="note__status-deleted"></button>
              </div>
            <p class="last-edit note__last-edit">
              <span class="last-edit__span">Last edit:</span>
              <time class="last-edit__time">${note.lastEdit}</time>
            </p>
          </article>
          `;
  });
  notesContainer.innerHTML = notesHtml.join("");
};
export { renderNotes };

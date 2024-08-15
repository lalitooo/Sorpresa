const likeButtons = document.querySelectorAll(".card__btn");

likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__btn--like");
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('audio');
  if (audio) {
      audio.play().catch(error => {
          console.log('Error al reproducir la canción:', error);
      });
  }
});

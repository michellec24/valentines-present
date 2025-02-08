onload = () => {
  document.body.classList.remove("container");
};
document.addEventListener('DOMContentLoaded', (event) => {
  const textElement = document.querySelector('.text');
  const hoverAudio = document.getElementById('hoverAudio');

  textElement.addEventListener('mouseover', () => {
      hoverAudio.play();
  });

  textElement.addEventListener('mouseout', () => {
      hoverAudio.pause();
      hoverAudio.currentTime = 0;
  });
});

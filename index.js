
const music = document.querySelector('audio')
const story = document.querySelectorAll('.story')
const stopMusicButton = document.querySelector('button')
const body = document.body

story.forEach((item) => item.onclick = () => {
    music.play();
    stopMusicButton.classList.remove('hidden');
    stopMusicButton.onclick = () => music.pause();
})


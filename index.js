
const music = document.querySelector('audio')
const story = document.querySelector('.story')
const stopMusicButton = document.querySelector('button')
const body = document.body

story.onclick = () => {
    music.play();
    stopMusicButton.classList.remove('hidden')
    stopMusicButton.onclick = () => music.pause()
} 


buttons = ["chromeup_button", "chromesome_button", "mugshot_button", "agi_button"]
audio_players = ["chromeup-audio", "chromesome-audio", "mugshot-audio", "agi-audio"]

for (i = 0; i < 4; i++) {
    let button = document.getElementById(buttons[i]);
    let audio_player = document.getElementById(audio_players[i]);

    audio_player.volume = 0.2

    button.addEventListener("mouseenter", () => {
        console.log(audio_player)
        audio_player.currentTime = 0; // Restart audio if already playing
        audio_player.play();
    });

    button.addEventListener("mouseleave", () => {
        audio_player.pause();
        audio_player.currentTime = 0; // Reset audio
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const comingSoon = document.querySelector('.coming-soon');
    const overlay = document.querySelector('.overlay');

    comingSoon.addEventListener('mouseover', () => {
        overlay.style.display = 'block';
        overlay.style.opacity = "1"
    });

    comingSoon.addEventListener('mouseout', () => {
        overlay.style.display = 'none';
        overlay.style.opacity = '1';
    });
});
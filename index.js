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

    comingSoon.addEventListener("mouseover", () => {
        overlay.style.opacity = "1";

    });

    comingSoon.addEventListener("mouseleave", (event) => {
        // Only hide overlay if the mouse is completely outside both .coming-soon and .overlay
        if (!comingSoon.contains(event.relatedTarget) && !overlay.contains(event.relatedTarget)) {
            overlay.style.opacity = "0";

            overlay.addEventListener("transitionend", () => {
                if (overlay.style.opacity === "0") {

                }
            }, { once: true });
        }
    });



});

document.addEventListener("DOMContentLoaded", () => {
    const elements = [
        { button: "mid-button-1", svg: "svg-line-1", text: "line-text-1" },
        { button: "mid-button-2", svg: "svg-line-2", text: "line-text-2" },
        { button: "mid-button-3", svg: "svg-line-3", text: "line-text-3" },
        { button: "small-button-1", svg: "svg-line-4", text: "line-text-4" }
    ];

    elements.forEach(({ button, svg, text }) => {
        const midButton = document.getElementById(button);
        const svgImage = document.getElementById(svg);
        const lineText = document.getElementById(text);
        let textTimeout;

        if (midButton && svgImage && lineText) {
            midButton.addEventListener("mouseover", (event) => {
                if (!midButton.contains(event.relatedTarget)) {
                    let currentSrc = svgImage.src;
                    svgImage.src = currentSrc.split("?")[0] + "?t=" + new Date().getTime();

                    // Make SVG visible without affecting layout
                    svgImage.style.opacity = "1";
                    svgImage.style.visibility = "visible";
                    svgImage.style.pointerEvents = "auto"; // Enable interaction when visible

                    clearTimeout(textTimeout);
                    textTimeout = setTimeout(() => {
                        lineText.style.opacity = "1";
                        lineText.style.visibility = "visible";
                        lineText.style.pointerEvents = "auto";
                    }, 300);
                }
            });

            midButton.addEventListener("mouseleave", (event) => {
                if (!midButton.contains(event.relatedTarget) && !svgImage.contains(event.relatedTarget)) {
                    svgImage.style.opacity = "0";
                    svgImage.style.pointerEvents = "none"; // Disable interaction
                    lineText.style.opacity = "0";
                    lineText.style.pointerEvents = "none";

                    clearTimeout(textTimeout);

                    // Ensure elements are completely hidden after transition without moving them
                    setTimeout(() => {
                        if (svgImage.style.opacity === "0") {
                            svgImage.style.visibility = "hidden";
                            lineText.style.visibility = "hidden";
                        }
                    }, 300);
                }
            });
        }
    });
});

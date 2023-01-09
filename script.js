import confetti from "./node_modules/canvas-confetti";

const button = document.querySelector("#btn-party");

button.addEventListener("click", ($event) => {
    const target = $event.target.getBoundingClientRect();
    const halfWidth = target.width / 2;
    const halfHeight = target.height / 2;

    confetti ({
        particleCount: 150,
        spread: 60,
        color: ["#00fff1", "ff00aa", "#46fcb4"],
        origin: {
            X: (target.x + halfWidth) / window.innerWidth,
            y: (target.x + halfHeight) / window.innerHeight,
        }
    })
});
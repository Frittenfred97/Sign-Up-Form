const button = document.querySelector(".btn-party");

button.addEventListener("click", ($event) => {
    const target = $event.target.getBoundingClientRect();
    console.log(target);
    const halfWidth = target.width / 2;
    const halfHeight = target.height / 2;

    confetti ({
        particleCount: 300,
        spread: 30,
        color: ["#00fff1", "ff00aa", "#46fcb4"],
        origin: {
            x: (target.x + halfWidth) / window.innerWidth,
            y: (target.y + halfHeight) / window.innerHeight,
        }
    })
});
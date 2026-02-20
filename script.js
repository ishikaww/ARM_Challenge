let frameCount = 0;
let potholeCount = 0;

function loadVideo() {
    document.getElementById("videoInput").click();
}

const input = document.getElementById("videoInput");
const player = document.getElementById("videoPlayer");
const placeholder = document.getElementById("placeholder");

input.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        player.src = url;
        player.style.display = "block";
        placeholder.style.display = "none";

        simulateStats();
    }
});

function simulateStats() {
    setInterval(() => {
        frameCount += 5;
        potholeCount += Math.floor(Math.random() * 2);

        document.getElementById("frames").innerText = frameCount;
        document.getElementById("potholes").innerText = potholeCount;
    }, 1000);
}

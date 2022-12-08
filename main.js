window.addEventListener('DOMContentLoaded', main)


function main() {
    draw();
    setEyes();
}

function draw() {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext("2d");
    ctx.beginPath()
    ctx.arc(100, 100, 50, 2 * Math.PI, false)
    ctx.fillStyle = "yellow";
    ctx.fill();

    ctx.beginPath()
    ctx.arc(90, 90, 10, 2 * Math.PI, false)
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath()
    ctx.arc(120, 90, 10, 2 * Math.PI, false)
    ctx.fillStyle = "white";
    ctx.fill();
}

function setEyes() {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext("2d");
    ctx.beginPath()
    ctx.arc(90, 90, 4, 2 * Math.PI, false)
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath()
    ctx.arc(90, 90, 6, 2 * Math.PI, false)
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath()
    ctx.arc(120, 90, 6, 2 * Math.PI, false)
    ctx.fillStyle = "black";
    ctx.fill();
}

//start variables
x = 150;
y = 0;

function drawLine() {
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        console.log("working");
       // construct lines of diamnond
        ctx.beginPath();

        ctx.moveTo(x + 150, y + 100);
        ctx.lineTo(x, y + 300);
        ctx.lineTo(x - 150, y + 100);
        ctx.lineTo(x, y);
        ctx.lineTo(x + 150, y + 100);
        ctx.lineTo(x -150, y + 100);
        ctx.lineTo(x, y);
        ctx.lineTo(x, y + 300);
        ctx.stroke();

    }
}

//check click, run function
document.getElementById("knop").addEventListener("click", drawLine);
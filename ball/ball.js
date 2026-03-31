
const radius = 10;
const ball = {x:20, y:0, dx: 5, dy: 1};
let   old  = {x: ball.x, y: ball.y};

function start() {
    const canvas  = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.fillStyle = "black";

    setInterval(() => {
        nextBoard();
        display(context);
    }, 1000 / 20);
}

function nextBoard() {
    // keep old ball values for the sake of efficient clearing of the old display
    old.x = ball.x;
    old.y = ball.y;

    // handle ball is hitting the bounds
    //if ball at
    //if (ball.x > 390) {change}

    const floor = ball.y >= 390 && ball.dy > 0;

    if (floor){
        ball.dy -= 4;
        ball.dy *= -2;
    }

    const leftSide = ball.x <= 10 && ball.x < 0;
    const rightSide = ball.x >= 390 && ball.x > 0;

    if(leftSide|| rightSide){
        ball.dx *= -2;
        ball.dx *= 0.8;
    }

    ball.y += ball.dy;
    ball.x += ball.dx;




    //   reverse direction


    //   lose some energy relative to the current inertia (only velocity varies)


    // calculate new position



    // calculate any changes in velocity due to gravitational pull or medium resistance




}

function display(context) {
    context.clearRect(old.x - radius - 1 , old.y - radius -1 , 22, 22 );
    fillBox(context)
}

function fillBox(context) {
    context.beginPath();
    context.arc(ball.x, ball.y, radius, 0, 6.3, false);
    context.fill();
}



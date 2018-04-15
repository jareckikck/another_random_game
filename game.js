/* ///////////////////////////////////////////////////////////////////////////////////////
                                     OnInit    
/////////////////////////////////////////////////////////////////////////////////////// */
//set vars
var CANVAS_WIDTH = 1280;
var CANVAS_HEIGHT = 720;
var FPS = 60;
var borderBottom = CANVAS_HEIGHT - player.height;
var borderRight = CANVAS_WIDTH - player.width;
var life = 3;
var score = 0;
var fireRateDelay = '';
defaultFireRateDelay = 20;
// borderTop = borderLeft = 0

//prepare vars to be used
var playerBullets = [];
var enemies = [];
var keys = {}

let canvasElement = $("<canvas width='" + CANVAS_WIDTH +
    "' height='" + CANVAS_HEIGHT + "'></canvas");
let canvas = canvasElement.get(0).getContext("2d");

$(document).ready(function () {
    $("body").append(canvasElement);
    $('.live').text(life);
});

$(document).keydown(function (e) {
    keys[e.keyCode] = true;
});

$(document).keyup(function (e) {
    delete keys[e.keyCode];
});
/* ///////////////////////////////////////////////////////////////////////////////////////
                                     RunIt    
/////////////////////////////////////////////////////////////////////////////////////// */

setInterval(function () {
    clear();
    update();
    draw();
}, 1000 / FPS);


/* ///////////////////////////////////////////////////////////////////////////////////////
                                     Definitions    
/////////////////////////////////////////////////////////////////////////////////////// */

function clear() {
    canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function update() {

    player.move();
    updateBullets();
    updateEnemies();
    handleCollisions();


}
function draw() {
    player.draw();
    drawBullets();

    drawEnemies();
}

function drawBullets() {
    playerBullets.forEach(function (bullet) {
        canvas.fillStyle = bullet.color;
        bullet.draw();
    });
}
function updateBullets() {
    playerBullets.forEach(function (bullet) {
        bullet.update();
    });
    playerBullets = playerBullets.filter(function (bullet) {
        return bullet.active;
    });
}
function drawEnemies() {
    enemies.forEach(function (enemy) {
        enemy.draw();
    });
}
function updateEnemies() {
    enemies.forEach(function (enemy) {
        enemy.update();
    });

    enemies = enemies.filter(function (enemy) {
        return enemy.active;
    });
    if (Math.random() < 0.05) {
        enemies.push(new Enemy());

    }


}

function collides(a, b) {
    return a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y;
}

function handleCollisions() {
    enemies.forEach(function (enemy) {
        if (collides(enemy, player)) {
            enemy.explode();
            player.explode();
        }
    });

    playerBullets.forEach(function (bullet) {
        enemies.forEach(function (enemy) {
            if (collides(bullet, enemy)) {
                enemy.explode();
                bullet.explode();

            }
        });
    });
}

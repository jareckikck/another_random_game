/* ///////////////////////////////////////////////////////////////////////////////////////
                                     OnInit    
/////////////////////////////////////////////////////////////////////////////////////// */


///////////////////////////////////////////////////////////////////////////////////////////////
//game init
var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 600;
var borderBottom = CANVAS_HEIGHT - player.height;
var borderRight = CANVAS_WIDTH - 3*player.width;
var FPS = 60;

//lvl init
let enemiesToAdd = 1;
let enemiesSpawned = 0;
let enemiesDead = 0 ;

//declare variables
var playerBullets = [];
var enemies = [];
var keys = {}

let canvasElement = $("<canvas width='" + CANVAS_WIDTH +"' height='" + CANVAS_HEIGHT + "'></canvas");
let canvas = canvasElement.get(0).getContext("2d");

$(document).ready(function () {
    $('.game-window').append(canvasElement);
    
    appendStat(lvlStat);    
    appendStat(lifeStat);
    appendStat(scoreStat);
    appendStat(enemiesLimitStat);
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
/* ///////////////////////////////////////////////////////////////////////////////////////
                                     Definitions    
/////////////////////////////////////////////////////////////////////////////////////// */

function clear() {
    canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function update() {
    // appendStat(lifeStat);
    // appendStat(scoreStat);
    

    player.move();

    updateBullets();
    updateEnemies();
    updateLvl();

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
function drawEnemies() {
    enemies.forEach(function (enemy) {
        enemy.draw();
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
function updateEnemies() {
    enemies.forEach(function (enemy) {
        enemy.update();
    });

    enemies = enemies.filter(function (enemy) {
        return enemy.active;
    });
   
    if(enemiesSpawned < enemiesLimitStat.value){        
    
        if (Math.random() < 0.020) {
            enemies.push(new Enemy());
            enemiesSpawned++;
        }
    }else if( enemiesSpawned == enemiesLimitStat.value ) {
        
    }
    //buuuuu
    $('.lvl-limit-append').text(enemiesLimitStat.value);      

}

function updateLvl(){
    if(enemiesLimitStat.value === enemiesDead ){
        enemiesDead = 0;
        enemiesSpawned = 0;
        enemiesLimitStat.value +=enemiesToAdd;
        lvlStat.value++;

        appendStat(lvlStat);
        appendStat(enemiesLimitStat);
        alert('lvl completed!');
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
function appendStat(el){
    $dataAppend = $('[data-append='+el.name+']');
  
    $dataAppend.children('.info-box__name').text(el.name);
    $dataAppend.children('.info-box__stat').text(el.value);
}

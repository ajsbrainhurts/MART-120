var gameStarted = false;
var space = 32;
var esc = 27;
var w = 87; 
var s = 83;
var a = 65;
var d = 68;
var charX = 250;
var charY = 250;
var enemyX = 0;
var enemyY = 0;
var enemy2X = 500;
var enemy2Y = 500;
var enemySpeed = getRandomArbitrary(5, 10);
var enemy2Speed = getRandomArbitrary(2, 5);
var mouseShapeX;
var mouseShapeY;


function keyPressed()
{ /* Prevents default behavior for space and esc keys */
    if(keyCode === space || keyCode === esc)
    {
        return false;
    }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function setup()
{
    createCanvas(500,500);
}

function draw()
{
    background(24, 61, 40);
    drawLevel();
    drawExit();
    gameStartStop();
    gameState();   
}

function gameStartStop() 
{
    if(keyIsDown(space))
    {
        gameStarted = true;
        var w = 87; 
        var s = 83;
        var a = 65;
        var d = 68;
    }
    else if(keyIsDown(esc))
    {
        gameStarted = false;
        var w = null; 
        var s = null;
        var a = null;
        var d = null;
    }  
}

function gameState()
{
    if(gameStarted === false)
        {
            fill(0);
            text("Press space to start!", 150,220);
        }
        else
        {
            charMovement();
            drawCharacter();
            enemy1Movement();
            enemy2Movement();
            drawEnemies();
            checkExit();
            drawObstacle();
        }
}


function drawLevel()
{
    stroke(0);
    fill(0);
    rect(0,0,500,8);
    rect(0,0,8,500);
    rect(0,492,500, 8);
    rect(492,0,8,200);
    rect(492,300, 8, 200);
    
}

function drawExit()
{
    fill(252, 3, 3);
    textSize(20);
    text("EXIT >",420,255);
    rect(492, 200, 8, 100)
}

function charMovement()
{
    if(keyIsDown(w)) {
        charY -= 5;
    }
    if(keyIsDown(s)) {
        charY += 5;
    }
    if(keyIsDown(a)) {
        charX -= 5;
    }
    if(keyIsDown(d)) {
        charX += 5;
    }
}

function enemy1Movement()
{
    if(gameStarted === true) {
        enemyX += enemySpeed;
        enemyY += enemySpeed; 
    }
    if(enemyX > width)
    {
        enemyX = 0;
        enemyY = getRandomArbitrary(0,400);
    }
    if(enemyX < 0)
    {
        enemyX = width;
    }
    if(enemyY > height)
    {
        enemyY = 0;
    }
    if(enemyY < 0)
    {
        enemyY = height;
    }
}

function enemy2Movement ()
{   
    if(gameStarted === true) {
        enemy2X -= enemy2Speed;
        enemy2Y -= enemy2Speed;
    }
    if(enemy2X > width) {
            enemy2X = 0;
        }
        if(enemy2X < 0) {
            enemy2X = width;
            enemy2Y = getRandomArbitrary(0, height);
        }
        if(enemy2Y > height) {
            enemy2Y = height;
        }
        if(enemy2Y < 0) {
            enemy2Y = height;
        }
}

function drawCharacter()
{
    stroke(2);
    fill(252, 186, 3);
    rect(charX,charY, 20,20);
}

function drawEnemies()
{
    stroke(2);
    fill(128, 1, 1);
    circle(enemyX,enemyY,30);
    fill(71, 38, 11)
    circle(enemy2X,enemy2Y, 20);
}

function checkExit()
{
    if(charX > width && charY > 180 && charY < 290) {
        fill(0);
        textSize(40);
        text("Woo!", 200, 150);
    }
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function drawObstacle()
{
    fill(51, 255, 0)
    rect(mouseShapeX,mouseShapeY, 30,30)
}
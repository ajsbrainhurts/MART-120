var gameStarted = false;
var space = 32;
var esc = 27;
var w = 87; 
var s = 83;
var a = 65;
var d = 68;
var charX = 250;
var charY = 250;
var enemyCount = 30;
var enemyXs = [];
var enemyYs = [];
var enemySizes = [];
var enemySpeeds = [];
var enemyColors = [];
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
    for (var i = 0; i < enemyCount; i++)
    {
        enemySpeeds[i] = getRandomArbitrary(1,4);
        enemyXs[i] = getRandomArbitrary(0,480);
        enemyYs[i] = getRandomArbitrary(0,480);
        enemySizes[i] = getRandomArbitrary(10, 24);
        enemyColors[i] = [getRandomArbitrary(0,255),getRandomArbitrary(0,255),getRandomArbitrary(0,255)];
    }
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
    }
    else if(keyIsDown(esc))
    {
        gameStarted = false;
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
            checkExit();
            drawObstacle();
            enemyFactory();
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

function drawCharacter()
{
    stroke(2);
    fill(252, 186, 3);
    rect(charX,charY, 20,20);
}

function enemyFactory()
{
    for (var i = 0; i < enemyCount; i++)
    {   
        enemyXs[i] += enemySpeeds[i];
        enemyYs[i] += enemySpeeds[i];
        fill(enemyColors[i][0],enemyColors[i][1],enemyColors[i][2]);
        circle(enemyXs[i],enemyYs[i],enemySizes[i]);
        if  (enemyXs[i] > width) {
            enemyXs[i] = 0;
        }
        if (enemyXs[i] < 0) {
            enemyXs[i] = width;
        }
        if (enemyYs[i] > width) {
            enemyYs[i] = 0;
        }
        if (enemyYs[i] < 0) {
            enemyYs[i] = width;
        }
    }
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
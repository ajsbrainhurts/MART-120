function setup()
{
    createCanvas(600, 600);
}

var myTextSize = 12
var isGrowing = true;

var hairX = 270
var hairY = 120
var hairDirection = 1

var eyeX = 280
var eyeDirection = 0.2

var noseY = 160
var noseDirection = 2

var legHeight = 60
var legDirection = 0.5

function draw() 
{
    drawBG();
    drawTitle();
    drawPortrait();
}

function drawBG(){
    background(102,162,196);
    textSize(24);
    fill(0);
    text("Aj Wemple", 480, 500);
}

function drawTitle(){
    textSize(myTextSize);
    text("My Self-Portrait (animated)", 60, 60);
    if (isGrowing) {
        myTextSize += 0.5;
        if (myTextSize >= 44) {
            isGrowing = false;
        }
    } else {
        myTextSize -= 0.5;
        if (myTextSize <= 12) {
            isGrowing = true;
        }
    }
}

function drawPortrait(){
    // Body
    fill(120);
    strokeWeight(6);
    rect(260, 200, 80, 120);
    // Legs
    fill(0);
    legHeight += legDirection;
    rect(260, 320, 10, legHeight);
    rect(330, 320, 10, legHeight);
    if(legHeight >= 100 || legHeight <= 40)
    {
        legDirection *= -1
    }
    // Arms
    strokeWeight(8);
    line(260, 200, 240, 300);
    line(340, 200, 360, 300);
    // Head
    fill(219, 180, 160);
    strokeWeight(6);
    circle(300,160,100);
    // Eyes
    fill(0);
    strokeWeight(8);
    eyeX += eyeDirection;
    point(eyeX, 150);
    point(eyeX + 40,150);
    if(eyeX >= 300 || eyeX <= 260)
    {
        eyeDirection *= -1;
    }
    // Nose
    strokeWeight(2);
    fill(219, 180, 160);
    noseY += noseDirection;
    triangle(300,noseY,310,noseY + 10,300,noseY + 10);
    if(noseY >= 170 || noseY <= 150)
    {
        noseDirection *= -1
    }
    // Mouth
    strokeWeight(2);
    curve(280,180,290,190,310,190,320,180);
    strokeWeight(5);
    // Hair
    strokeWeight(10);
    fill(26, 15, 10);
    hairX += hairDirection;
    hairY += hairDirection;
    line(270, 120, hairX - 50, hairY + 130);
    line(330, 120, hairX + 110, hairY + 130);
    if (hairY <= 20 || hairY >= 150)
    {
        hairDirection *= -1;
    }
}
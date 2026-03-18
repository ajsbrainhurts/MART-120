
function setup()
{
    createCanvas(600, 600);
}

function draw() 
{
    background(102,162,196);
    textSize(24);
    fill(0);
    text("My Self-Portrait", 100, 80);
    text("Aj Wemple", 480, 500)
    // Body
    fill(120);
    strokeWeight(6);
    rect(260, 200, 80, 120);
    // Legs
    fill(0);
    rect(260, 320, 10, 60);
    rect(330, 320, 10, 60);
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
    point(280,150);
    point(320,150);
    // Nose
    strokeWeight(2)
    fill(219, 180, 160);
    triangle(300,160,310,170,300,170);
    // Mouth
    strokeWeight(2);
    curve(280,180,290,190,310,190,320,180);
    strokeWeight(5);
    // Hair
    strokeWeight(10);
    fill(26, 15, 10);
    line(270, 120, 220, 250);
    line(330, 120, 380, 250);
}

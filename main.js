function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(550,175);
    video = createCapture(VIDEO);
    video.hide();


}

function draw() {
    image(video, 0, 0, 640, 480);
    fill(0,255,0)
    stroke(0,128,0)
    rect(60, 65, 500, 30);
    rect(60, 385, 500, 30);
    rect(65, 65, 30, 350);
    rect(545, 65, 30, 350);
    fill(255,0,0)
    stroke(128,0,0)
    circle(560, 80, 100);
    circle(80, 80, 100);
    circle(560, 400, 100);
    circle(80, 400, 100);
    
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}
function preload() {
}
function setup() {
canvas=createCanvas(1000,500);
canvas.position(125,320);
video = createCapture(VIDEO);
video.hide();
tint_clr = "";
}

function draw() {
image(video, 0, 0, 700, 500);
tint(tint_clr);
rect(0, 0, 5, 1000);
rect(0, 0, 700, 5);
rect(700, 0, 5, 1000);
circle(0,0,20)
circle(700,0,20)
circle(700,1000,20)
}
function apply() {
    tint_clr = document.getElementById("filterinput").value;
    
}
function takeit() {
    save("Tinted_Picture.png");
}
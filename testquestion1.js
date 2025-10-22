let bird
let background, birdImg;

function preload(){
    // write code to preload bird.png and background.png
    // refer to assets folder
    birdImg = loadImg("assets/bird.png");
    background = loadImg("assets/background.png");
}

function setup(){
    new Canvas(400, 600);
    // write code to create sprite and load bird image on sprite
    bird = new Sprite(width / 2, height / 2, 30);
    bird.img = birdImg;
}

function draw(){
    image(background, 0, 0, width, height);
    
}

function preload() {
	world_start = loadSound("world_start.wav");
	coin1 =loadSound("coin.wav");
	game_over =loadSound("gameover.wav");
	jump =loadSound("jump.wav");
	kick =loadSound("kick.wav");
	mario1 =loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
    canvas.parent("canvas");

	instializeInSetup(mario);

	video =createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log("Model is Loaded")
}

function gotPoses(results)
{
  if(results.length > 0)
  {
	console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
  }
}

function draw() {
	game()
}







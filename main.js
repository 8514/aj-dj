song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload()
{
song1=loadSound("music.mp3");
song2=loadSound("Music_app.mp4");    
}

function setup() {
canvas=createCanvas(600,500);
canvas.center();  

video=createCapture(VIDEO);
video.hide();

posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose', gotposes);
}

function modelLoaded() {
console.log('Posenet Is Initialized');    
}

function draw() {
image(video, 0, 0, 600, 500);

fill("FF0000");
stroke("FF0000");
if(scoreLeftWrist > 0.2)
{
circle(leftWristX,leftWristY,20);
InNumberleftWristY=Number(leftWristY);
remove_decimals=floor(InNumberleftWristY);
volume=remove_decimals/500;
document.getElementById("volume").innerHTML="volume =" + volume;
song.setVolume(volume);
  }
}

function play()
{
    song1.play();
    song1.setVolume(1);
    song1.rate(1);   
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
scoreLeftWrist=results[0].pose.keypoints[9].score;
console.log("scoreLeftWrist =" + scoreLeftWrist);
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
console.log("leftWristX =" + leftWristX+"leftWristY ="+ leftWristY);

rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("rightWristX =" + rightWristX+"rightWristY ="+ rightWristY);
 }    
}

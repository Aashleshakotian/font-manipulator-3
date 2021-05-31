
difference=0;
rightWristX=0;
leftWristX=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function modelLoaded()
{
    console.log("Posenet is initialised");
}
function draw()
{
    background('#FF69B4');
    textSize(50);
text('Aashlesha', 30, 300);
fill(255,255,0)
}

function gotPoses()
{
    if (results.length > 0) {
        console.log(results);
        leftWristX= results[0].pose.leftWrist.X;
        rightWristX = results[0].pose.rightWrist.X;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " +  leftWristX + "rightWristX = " + rightWristX + "difference" + difference);
    }

}
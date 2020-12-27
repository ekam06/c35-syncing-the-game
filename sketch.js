var database,position
var ball;

function setup(){
    database=firebase.database()
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ballPos=database.ref("ball/position")
    ballPos.on("value",readPosition)
}

function draw(){
    background("white");
    //if position is not defined
    if(position!==undefined){
    if(keyDown(LEFT_ARROW)){
        showPosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        showPosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        showPosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        showPosition(0,+1);
    }
    drawSprites();
}
}

function showPosition(x,y){
   database.ref("ball/position").set({
       "x":position.x+x,
       "y":position.y+y
   })

}
function readPosition(data){

position=data.val()
ball.x=position.x
ball.y=position.y

}

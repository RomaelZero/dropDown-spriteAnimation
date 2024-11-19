const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "shadow_dog.png";

const spriteWidth = 573;
const spriteHeight = 523;
let frameX = 0;
let frameY = 7;
let gameFrame = 0;
let staggerFrames = 5;
let setMovement = "run";
let movementIndex;


const scroll = document.getElementById("selectMovement");


// Now let's add an event listener for scroll feature.
scroll.addEventListener("change",()=>{
    frameX = 0;
    gameFrame = 0;
    setMovement = scroll.value;
});

 // movementArray[movementIndex].frameY

 let movementArray = [
    {
        movement: "stand",
        frameXLength: 7,
        frameY: 0,
    },
    {
        movement: "jumpup",
        frameXLength: 7,
        frameY: 1,
    },
    {
        movement: "jumpfall",
        frameXLength: 7,
        frameY: 2,
    },
    {
        movement: "run",
        frameXLength: 9,
        frameY: 3,
    },
    {
        movement: "staggered",
        frameXLength: 11,
        frameY: 4,
    },
    {
        movement: "rest",
        frameXLength: 5,
        frameY: 5,
    },
    {
        movement: "roll",
        frameXLength: 7,
        frameY: 6,
    },
    {
        movement: "attack",
        frameXLength: 7,
        frameY: 7,
    },
    {
        movement: "faint",
        frameXLength: 12,
        frameY: 8,
    },
    {
        movement: "idle",
        frameXLength: 4,
        frameY: 9,
    },
];


checkForIndex();

function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH,CANVAS_HEIGHT);

    checkForIndex();

    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImage,spriteWidth * frameX, spriteHeight * movementArray[movementIndex].frameY, spriteWidth, spriteHeight, 0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    gameFrame++;
    if (gameFrame % staggerFrames == 0) {
        frameX++;
        if(frameX == movementArray[movementIndex].frameXLength){ // <=== for different action make changes here   
            frameX = 0;
        } 
    }   
    

    requestAnimationFrame(animate);
};

animate();

function checkForIndex(){
    // These lines give us the index number from the movement array.
    movementArray.forEach((movementObject,index) => {
        if(movementObject.movement == setMovement){
            movementIndex = index;
            
        }
    });

}






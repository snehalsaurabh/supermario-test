document.getElementById('start-btn').addEventListener('click', startGame);

var mario = document.getElementById('mario');
var pipe = document.getElementById('pipe');
var mushroom = document.getElementById('mushroom');
var score = document.getElementById('score');
var backgroundMusic = new Audio('background-music.mp3');
var jumpSound = new Audio('jump.mp3');
var startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', function() {
    backgroundMusic.play();
    startBtn.style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    startGame();
});

function startGame() {
    // Start Game
    var marioJumping = false;
    var marioMovingRight = false;
    var marioMovingLeft = false;
    var obstacles = [pipe, mushroom];
    var gameScore = 0;
    var gameContainerWidth = document.getElementById('game-container').offsetWidth;
    var matioPostion = 50;
    function jump(){
        if (!marioJumping){
            marioJumping = true;
            jumpSound.play();

            var startPos = 168;
            var endPos = 350;
            var speed = 5;

            var jumpInterval = setInterval(function(){
                if (startPos >= endPos){
                    clearInterval(jumpInterval);
                    fall();
                } else {
                mario.style.bottom = startPos + 'px';
                startPos += speed;
                }
            }, 20);
        }
    }
    function fall(){
        var startPos = 350;
        var endPos = 168;
        var speed = 8;

        var fallInterval = setInterval(function(){
            if (startPos <= endPos){
                clearInterval(fallInterval);
                marioJumping = false;
            } else {
                mario.style.bottom = startPos + 'px';
                startPos -= speed;
            }
        }, 20);
    }
    function moveMario(direction){
        var proposedPosition = marioPostion + (direction === 'right' ? 20 : -20);
        var maxMarioPostion - gameContainerWidth - mario.offsetWidth;
        if (proposedPosition >= 0 && proposedPosition <= maxMarioPostion){
            marioPostion = proposedPosition;
            mario.style.left = marioPostion + 'px';
            if (direction === 'right'){
                mario.classList.remove('flipped');
            } else {
                mario.classList.add('flipped');
            }
        }
    }
    window.addEventListener('keydown', function(e){
        switch(e.key){
            case ' ':
                jump();
                break;
            case 'ArrowRight' || 'd':
                marioMovingRight = true;
                break;
            case 'ArrowLeft' || 'a':
                marioMovingLeft = true;
                break;
        }
    }); 
}
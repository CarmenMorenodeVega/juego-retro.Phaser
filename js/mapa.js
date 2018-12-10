var game = new Phaser.Game(1000, 600, Phaser.AUTO, 'prueba', { preload: preload, create: create, update: update });
var scake=1;
var gravity=600;
var player;
var text;
var counter = 0;
var mundoText;

function preload() {
    game.load.image('sky', 'assets/mapa.png');
    game.load.spritesheet('dude', 'assets/player.png', 32, 34);
    this.load.audio('theme', [
        'audio/bandaSonora.mp3'
    ]);
}

var bubble;

function create() {
    var image= game.add.sprite(game.world.centerX, game.world.centerY, 'sky');
    image.anchor.set(0.5);

    var music = this.sound.add('theme');
    music.play();

    //  Enables all kind of input actions on this image (click, etc)
    image.inputEnabled = true;
    this.position = new Phaser.Point();
    text = game.add.text(250, 16, '', { fill: '#ffffff' });

    image.events.onInputDown.add(listener, this);

    player = game.add.sprite(32, game.world.height-150, 'dude');
    player.anchor.setTo(0.5,0.5);

    // Enables all kind of input actions on this image (click, etc)
    player.inputEnabled = true;
    game.physics.enable(player, Phaser.Physics.ARCADE);
    this.position = new Phaser.Point();
    
    player.events.onInputDown.add(listener, this);
    
    game.input.mousePointer.x;
    game.input.mousePointer.y;
   
    //Even if you release the mouse button outside of the game window 'onUp'function will still be called.

    player.events.onInputDown.add(onDown, this);
    player.events.onInputUp.add(onUp, this);
}

function listener () {
    counter++;
    text.text = game.input.mousePointer.x +"/"+game.input.mousePointer.y + counter + "!";
if ((game.input.mousePointer.x > 93 && game.input.mousePointer.x < 123) && 
    (game.input.mousePointer.y >90 && game.input.mousePointer.y < 115)) text.text = "Ir al mundo 1 >>>>>>>>!";
else if((game.input.mousePointer.x > 479 && game.input.mousePointer.x < 499) && 
    (game.input.mousePointer.y >159 && game.input.mousePointer.y < 179)) text.text = "Ir al mundo 2 >>>>>>>>!";
else if((game.input.mousePointer.x > 623 && game.input.mousePointer.x < 643) && 
    (game.input.mousePointer.y >197 && game.input.mousePointer.y < 217)) text.text = "Ir al mundo 3 >>>>>>>>!";
else if((game.input.mousePointer.x > 748 && game.input.mousePointer.x < 768) && 
    (game.input.mousePointer.y >380 && game.input.mousePointer.y < 400)) text.text = "Ir al mundo 4 >>>>>>>>!";
else if((game.input.mousePointer.x > 748 && game.input.mousePointer.x < 768) && 
    (game.input.mousePointer.y >219 && game.input.mousePointer.y < 239)) text.text = "Ir al mundo 5 >>>>>>>>!";
else text.text = "Elige mundo para comenzar a jugar. Haz click!!"; 
setTimeout(redireccionarAMundo, 500); 
} 

function redireccionarAMundo(){
    window.location.replace('game.html');
}
function update() {
    player.moveToPointer = game.physics.arcade.moveToPointer(player, 60, game.input.activePointer, 500);
}



     
function onDown() {
    player.alpha = 0.3;
}

function onUp() {
    player.alpha = 1;   
}




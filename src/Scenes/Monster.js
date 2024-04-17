class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.x = 0;
        this.y = 0;
        
        this.eyeX = 300;
        this.eyeY = 350;

        this.armRX = 400;
        this.armRY = 400;

        this.armLX = 200;
        this.armLY = 400;
        
        this.legRX = 350;
        this.legRY = 500;

        this.legLX = 250;
        this.legLY = 500;

        this.mouthX = 300;
        this.mouthY = 400;

        this.detailRX = 250;
        this.detailRY = 300;
        
        this.detailLX = 350;
        this.detailLY = 300;

        this.mouthState = 0;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX+this.x, this.bodyY+this.y, "monsterParts", "body_greenD.png");

        my.sprite.eye = this.add.sprite(this.eyeX+this.x,this.eyeY+this.y,"monsterParts","eye_blue.png");
        my.sprite.armR = this.add.sprite(this.armRX+this.x,this.armRY+this.y,"monsterParts","arm_greenA.png");
        my.sprite.armL = this.add.sprite(this.armLX+this.x,this.armLY+this.y,"monsterParts","arm_greenD.png");
        my.sprite.armL.flipX = true;
        my.sprite.legR = this.add.sprite(this.legRX+this.x,this.legRY+this.y,"monsterParts","leg_greenA.png");
        my.sprite.legL = this.add.sprite(this.legLX+this.x,this.legLY+this.y,"monsterParts","leg_greenA.png");
        my.sprite.legL.flipX = true;
        my.sprite.mouth = this.add.sprite(this.mouthX+this.x,this.mouthY+this.y,"monsterParts","mouthD.png");
        my.sprite.fangs = this.add.sprite(this.mouthX+this.x,this.mouthY+this.y,"monsterParts","mouthJ.png");
        my.sprite.smile = this.add.sprite(this.mouthX+this.x,this.mouthY+this.y,"monsterParts","mouthE.png");
        
        my.sprite.detailR = this.add.sprite(this.detailRX+this.x,this.detailRY+this.y,"monsterParts","nose_red.png");
        my.sprite.detailL = this.add.sprite(this.detailLX+this.x,this.detailLY+this.y,"monsterParts","nose_red.png");

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        var left = this.input.keyboard.addKey('A').isDown ? 1: 0;
        var right = this.input.keyboard.addKey('D').isDown ? 1 :0;
        this.x += (right-left) * 5;

        this.mouthState = this.input.keyboard.addKey('F').isDown ? 1 : this.input.keyboard.addKey('S').isDown ? 2 : 0

        my.sprite.mouth.visible = this.mouthState == 0;
        my.sprite.fangs.visible = this.mouthState == 1;
        my.sprite.smile.visible = this.mouthState == 2;

        my.sprite.body.x = this.bodyX+this.x;
        my.sprite.eye.x = this.eyeX+this.x;
        my.sprite.armR.x = this.armRX+this.x;
        my.sprite.armL.x = this.armLX+this.x;
        my.sprite.legR.x = this.legRX+this.x;
        my.sprite.legL.x = this.legLX+this.x;
        my.sprite.mouth.x = this.mouthX+this.x;
        my.sprite.fangs.x = this.mouthX+this.x;
        my.sprite.smile.x = this.mouthX+this.x;
        my.sprite.detailL.x = this.detailLX+this.x;
        my.sprite.detailR.x = this.detailRX+this.x;
    }

}
import { Actor, Engine, Vector, Keys, CollisionType, DegreeOfFreedom } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Enemy } from "./enemy.js";
import { Key } from "./key.js";
import { Coin } from "./coin.js";
import { Powerup } from "./powerup.js";

export class Player extends Actor { // Ensure Player class is exported
    constructor(x, y) {
        super({ x, y, width: Resources.Player.width, height: Resources.Player.height });
        this.body.collisionType = CollisionType.Active;
        this.isGrounded = false; // Add a property to track if the player is on the ground
        this.graphics.use(Resources.Player.toSprite());
        this.pos = new Vector(400, 0);
        this.scale = new Vector(0.3, 0.3);
        this.inventory = []; // Initialize an empty array to store collected items
        this.health = 100;
        this.jumpSpeed = -5000;
        this.score = 0
    }

    onInitialize(engine) {
        this.body.useGravity = true;
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);
        this.on('collisionstart', (evt) => this.onCollisionStart(evt));
        this.on('collisionend', (evt) => this.onCollisionEnd(evt));

        this.on("exitviewport", (evt) => this.resetPosition(evt))
    }



    reduceHealth() {
        // this.health -= 50; // Reduce health by 10 (example value)
        // if (this.ui) {
        //     this.ui.reduceHealth(this.health / 100); // Update the UI with the current health ratio
        // }
        // if (this.health <= 0) {
        //     this.resetPosition(); // Player dies if health is zero
        // }
    }


    onCollisionStart(evt) {
        if (evt.other && evt.other.body.collisionType === CollisionType.Fixed) {

            this.isGrounded = true; // Set isGrounded to true when colliding with the ground
        }

        if (evt.other instanceof Enemy) {
            this.resetPosition();
            this.resetPositionEnemy();
            
        }

        if (evt.other instanceof Key) {
            evt.other.pickUp(this); // sleutel oppakken
        }
        if (evt.other instanceof Coin) {
            console.log("the car hits the pickup")
            // evt.other.pickUp(this); // coin oppakken
            this.score += 10
            evt.other.pickUp()
            this.scene.engine.ui.updateField(this.score)
        }
        if (evt.other instanceof Powerup) {
            evt.other.pickUp(this); // powerup oppakken
            console.log("ik pak een powerup")
            this.jumpSpeed = -8000
            this.scene.engine.clock.schedule(() => (
                this.jumpSpeed = -5000
            ), 5000)
        }
    }



    onCollisionEnd(evt) {
        if (evt.other && evt.other.body.collisionType === CollisionType.Fixed) {
            this.isGrounded = false; // Set isGrounded to false when leaving the ground
        }
    }

    onPostUpdate(engine) {
        let xspeed = 0;

        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            console.log(this.isGrounded)
        }


        if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 200;
            // this.graphics.use(Resources.Rat.toSprite());
            this.graphics.flipHorizontal = true;
            if (engine.input.keyboard.isHeld(Keys.ShiftLeft) || engine.input.keyboard.isHeld(Keys.Sprint)) {
                xspeed = 400;
            }
        }




        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -200;
            // this.graphics.use(Resources.Rat.toSprite());
            this.graphics.flipHorizontal = false;
            if (engine.input.keyboard.isHeld(Keys.ShiftLeft) || engine.input.keyboard.isHeld(Keys.Sprint)) {
                xspeed = -400;
            }
        }

        this.vel = new Vector(xspeed, this.vel.y);

        if (engine.input.keyboard.wasPressed(Keys.Space) && this.isGrounded) {
            this.isGrounded = false; // Set isGrounded to false when jumping
            this.body.applyLinearImpulse(new Vector(0, this.jumpSpeed));
        }
    }


    resetPosition() {
        this.pos = new Vector(400, 0)
    }

    resetPositionEnemy() {
        Enemy.pos = new Vector(0, 350)
    }

    addToInventory(item) {
        this.inventory.push(item);
        console.log("Item added to inventory:", item);
    }

}

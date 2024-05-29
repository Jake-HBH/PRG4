import { Actor, Vector, CollisionType, Keys } from "excalibur";
import { Resources } from './resources.js';
import { Player } from "./player.js";

export class Powerup extends Actor {
    constructor(x, y) {
        super({ x, y, width: Resources.Powerup.width, height: Resources.Powerup.height });
        this.scale = new Vector(0.1, 0.1)
        this.jumpSpeed = -2000
        this.isPickedUp = false; // Flag to track if the key is picked up
    }

    onInitialize() {
        this.graphics.use(Resources.Powerup.toSprite());
        this.body.collisionType = CollisionType.Passive; // Fixed collision type
        
    }

    // Method to handle the key being picked up by the player
    pickUp(player) {
        if (!this.isPickedUp) { // Check if the key is not already picked up
            this.isPickedUp = true; // Set the flag to indicate that the key is picked up
            console.log("picked up powerup!")
            this.actions.fade(0, 200).die(); // Fade out and remove the key from the scene
            player.addToInventory(this); // Add the key to the player's inventory
        }
    }

    onPostUpdate(engine) {
       
    }
}
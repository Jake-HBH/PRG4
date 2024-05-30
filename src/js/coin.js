import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';
import { Game } from "./game.js";
import { Level } from "./level.js";

export class Coin extends Actor {
    constructor(x, y) {
        super({ x, y, width: Resources.Coin.width, height: Resources.Coin.height });
        this.scale = new Vector(0.2, 0.2)
        this.isPickedUp = false; // Flag to track if the coin is picked up
    }

    onInitialize() {
        this.graphics.use(Resources.Coin.toSprite());
        this.body.collisionType = CollisionType.Passive; // Fixed collision type
    }

    // Method to handle the key being picked up by the player
    pickUp(player) {
        if (!this.isPickedUp) { // Check if the coin is not already picked up
            this.isPickedUp = true; // Set the flag to indicate that the key is picked up
            console.log("picked up coin!")
            this.actions.fade(0, 200).die(); // Fade out and remove the key from the scene
            
        }
    }
}
import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Flashlight2 extends Actor {
    constructor(x, y) {
        super({ x, y, width: Resources.Flashlight.width, height: Resources.Flashlight.height });
        this.scale = new Vector(0.1, 0.1);
        this.name = `flashlight2`;
    }

    onInitialize() {
        this.graphics.use(Resources.Flashlight.toSprite());
        this.body.collisionType = CollisionType.Passive; // Fixed collision type
    }
}

// this.actions.fade(0, 200).die(); // Fade out and remove the key from the scene
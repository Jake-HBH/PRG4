import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Key extends Actor {
    constructor(x, y) {
        super({ x, y, width: Resources.Key.width, height: Resources.Key.height });
        this.scale = new Vector(0.1, 0.1);
        this.name = `key`;
    }

    onInitialize() {
        this.graphics.use(Resources.Key.toSprite());
        this.body.collisionType = CollisionType.Passive; // Fixed collision type
    }
}

// this.actions.fade(0, 200).die(); // Fade out and remove the key from the scene
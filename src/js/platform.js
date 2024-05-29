import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Platform extends Actor {
    constructor(x,y) {
        super({ x,y, width: Resources.Platform.width - 20, height: Resources.Platform.height - 20});
        this.scale = new Vector(2, 2)
    }

    onInitialize() {
        this.graphics.use(Resources.Platform.toSprite());
        this.body.collisionType = CollisionType.Fixed; // Fixed collision type
    }
}

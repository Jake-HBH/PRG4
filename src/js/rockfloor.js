import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class RockFloor extends Actor {
    constructor(x,y) {
        super({ x, y, width: Resources.RockFloor.width - 20, height: Resources.RockFloor.height - 20});
        // this.scale = new Vector(2, 2)
    }

    onInitialize() {
        this.graphics.use(Resources.RockFloor.toSprite());
        this.body.collisionType = CollisionType.Fixed; // Fixed collision type
    }
}

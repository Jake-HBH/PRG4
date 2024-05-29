import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js';

export class Background extends Actor {
    constructor(x, y) {
        super({ x, y, width: Resources.bg.width, height: Resources.bg.height});
    }

    onInitialize() {
        this.graphics.use(Resources.bg.toSprite());
    }
}

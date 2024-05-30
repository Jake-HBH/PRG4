import { Actor, Vector, CollisionType, Label, Font, Color } from "excalibur";
import { Resources } from './resources.js';
import { Game } from "./game.js";

export class Door extends Actor {
    constructor(x, y) {
        super({ x, y, width: Resources.Door.width, height: Resources.Door.height });
        this.name = `door`;
        this.scale = new Vector(0.4, 0.3)
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Door.toSprite());
        this.body.collisionType = CollisionType.Fixed; // Fixed collision type
        this.messageLabel = new Label({
            text: '',
            pos: new Vector(this.pos.x - 100, this.pos.y - 30),
            font: new Font({
                family: 'Arial',
                size: 24,
                color: Color.White
            })
        });

        engine.add(this.messageLabel);

    }

    displayMessage(message) {
        this.messageLabel.text = message;
        this.messageLabel.pos = new Vector(this.pos.x - 200, this.pos.y - 100);
        setTimeout(() => this.messageLabel.text = '', 2000); // Clear message after 2 seconds
    }
}
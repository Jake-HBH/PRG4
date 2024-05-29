import { Actor, Vector, ScreenElement, Color } from "excalibur";

export class UI extends ScreenElement {
    constructor() {
        super();
        this.healthbar = null;
        this.healthbarBackground = null;
    }

    onInitialize(engine) {
        let barbackground = new Actor({ x: 10, y: 40, color: Color.fromRGB(255, 255, 255, 0.4), width: 200, height: 20, anchor: Vector.Zero });
        this.addChild(barbackground);

        this.healthbar = new Actor({ x: 10, y: 40, color: Color.Green, width: 200, height: 20, anchor: Vector.Zero });
        this.healthbarBackground = barbackground; // Store reference to background for scaling
        this.addChild(this.healthbar);
    }

    reduceHealth(ratio) {
        // Scale the health bar width based on the health ratio
        this.healthbar.scale = new Vector(ratio, 1);
    }
}

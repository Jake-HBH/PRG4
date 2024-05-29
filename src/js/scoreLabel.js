import { Label, Vector, Font, FontUnit, ScreenElement } from "excalibur";

export class ScoreLabel extends Label {
    constructor(player) {
        super({
            text: 'Score: 0',
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        });
        this.player = player;
        this.pos = new Vector(400, 0)
    }
}
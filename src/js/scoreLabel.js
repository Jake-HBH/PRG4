import { Label, Vector, Font, FontUnit } from "excalibur";

export class scoreLabel extends Label {
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
        this.pos = new Vector(10, 10);
        this.z = 10;
    }

    updateScore(score) {
        this.text = `Score: ${this.score}`;
    }
}
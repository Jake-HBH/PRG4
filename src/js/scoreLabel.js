import { Label, Font, FontUnit, Vector } from "excalibur";

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
        this.pos = new Vector(10, 0);
        this.z = 0
    }
}

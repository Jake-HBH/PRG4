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
        this.pos = new Vector(400, 0); // Use setTo() method to set position
    }

    // Add a method to update the score
    updateScore(score) {
        this.text = `Score: ${score}`;
    }
}

import { ScreenElement } from "excalibur";
import { ScoreLabel } from "./scoreLabel.js"; // Corrected import statement

export class UI extends ScreenElement {
    onInitialize(engine) {
        this.scoreLabel = new ScoreLabel();
        this.addChild(this.scoreLabel);
    }

    // Update the score label with the provided score
    updateField(score) {
        console.log("point")
        // this.scoreLabel.updateScore(score); 
    }
}

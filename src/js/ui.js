import { Label, Vector, Font, FontUnit, ScreenElement } from "excalibur";
import { ScoreLabel } from "./scoreLabel";

export class UI extends ScreenElement {
    onInitialize() {
        this.scoreLabel = new ScoreLabel();
        this.addChild(this.scoreLabel);

    }

    updateField(score) {
        console.log("point");
        this.scoreLabel.text = `Score: ${score}`;
    }
}
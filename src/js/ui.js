import { ScreenElement } from "excalibur";
import { ScoreLabel } from "./scoreLabel.js"; // Corrected import statement

export class UI extends ScreenElement {
        onInitialize() {
                this.scoreLabel = new ScoreLabel(); // Create a new ScoreLabel instance
                this.addChild(this.scoreLabel); // Add the ScoreLabel to the UI
            }
        
            // Update the score label with the provided score
            updateField(score) {
                    console.log("point");
                    this.scoreLabel.updateScore(score); // Assuming you have implemented an updateScore method in the ScoreLabel class
                }
            }

            
// import { Label, Vector, Font, FontUnit, ScreenElement } from "excalibur";
// import { ScoreLabel } from "./scoreLabel";

// export class UI extends ScreenElement {
//     onInitialize(engine) {
//         this.scoreLabel = new ScoreLabel();
//         this.addChild(this.scoreLabel);
//         this.score = 0;

//     }


// }

            
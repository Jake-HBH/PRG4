import { Label, Vector, Font, FontUnit, ScreenElement } from "excalibur";
import { scoreLabel } from "./scoreLabel.js";

export class UI extends ScreenElement {
    constructor(player) {
        super();
        this.player = player;
        this.pos = new Vector(400, 0);
        this.z = 10;
        this.score = 0;
    }

    onInitialize(engine) {
        this.scoreLabel = new scoreLabel();
        this.addChild(this.scoreLabel);
    }

    addPoint() {
        this.score++;
        console.log("point");
        
        this.scoreLabel.updateScore(this.score);
    }
}


// import { Label, Vector, Font, FontUnit, ScreenElement } from "excalibur";
// // import { scoreLabel } from "./scoreLabel";

// export class UI extends ScreenElement {
//     constructor(player) {
//         super({
//             text: 'Score: 0',
//             font: new Font({
//                 family: 'impact',
//                 size: 24,
//                 unit: FontUnit.Px
//             })
//         });
//         this.player = player;
//         this.pos = new Vector(10, 10)
//         this.z = 10
//     }


//     onInitialize(engine) {
//         this.score = 0;

//     }

//     addPoint() {
//         this.score++;
//         console.log("point");
//         this.score = `Score: ${this.score}`;
//     }
// }
import { Scene, Actor, Vector, Input, Keys } from "excalibur";
import { Resources } from "./resources.js";
import { GameOverBanner } from "./gameOverBanner.js";
import { Player } from "./player.js";

export class GameOver extends Scene {
    onInitialize(engine) {
        let gameOverBanner = new GameOverBanner();
        this.add(gameOverBanner);
    }

    onActivate() {
        console.log("GAME OVER")
        this.on('preupdate', (event) => {
            if (event.engine.input.keyboard.wasPressed(Keys.R)) {
                this.restartGame();
            }
        });
    }

    restartGame() {
        // Check if this.children exists before clearing it
        if (this.children) {
            // Clear the current scene
            this.children.clear();
        }

        // Re-initialize and add the player back to the scene
        const player = new Player(450, 200); // Adjust the position as needed
        this.add(player);

        // Navigate back to the level scene
        this.engine.goToScene('level');
    }
}

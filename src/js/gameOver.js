import { Scene, Actor, Vector, Input, Keys } from "excalibur";
import { GameOverBanner } from "./gameOverBanner.js";
import { Player } from "./player.js";
import { Enemy } from "./enemy.js";

export class GameOver extends Scene {
    onInitialize() {
        let gameOverBanner = new GameOverBanner();
        this.add(gameOverBanner);
    }

    onActivate() {
        console.log("GAME OVER")
        this.on('preupdate', (event) => {
            if (event.engine.input.keyboard.wasPressed(Keys.R)) {
                event.engine.goToScene('level')
                // this.restartGame();
                // const player = new Player(400, 200)
                // this.add(player)
            }
        });
    }

    // restartGame() {
    //     // Check if this.children exists before clearing it
    //     if (this.children) {
    //         // Clear the current scene
    //         this.children.clear();
    //     }
    //     // Navigate back to the level scene
    //     this.engine.goToScene('level');

    //     // Re-initialize and add the player back to the scene
    //     const player = new Player(400, 200); // Adjust the position as needed
    //     this.add(player);
    //     console.log("player added")
    //     const enemy = new Enemy(0, 350)
    //     this.add(enemy)
    //     console.log("enemy added")
    // }
}

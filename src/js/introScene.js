import { Scene, Keys } from "excalibur";
import { Resources } from "./resources.js";
import { IntroBanner } from "./introBanner.js";


export class IntroScene extends Scene {

    onInitialize(engine) {
        this.add(new IntroBanner(750, 400))
        // const backgroundMusic = Resources.CaveMusic; // Fetch the music resource
        // backgroundMusic.loop = true; // Set loop to true to make the music loop
        // backgroundMusic.play(); // Start playing the background music
    }

    onActivate(context) {
        this.on('preupdate', (event) => {
            if (event.engine.input.keyboard.wasPressed(Keys.S)) {
                event.engine.goToScene('level')
            }
        });
    }
}
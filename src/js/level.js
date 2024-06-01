import { Scene, BoundingBox } from "excalibur";
import { Player } from "./player.js";
import { Enemy } from "./enemy.js";
import { Door } from "./door.js";
import { Key } from "./key.js";
import { Coin } from "./coin.js";
import { Powerup } from "./powerup.js";
import { Background } from "./background.js";
import { RockFloor } from "./rockfloor.js";
import { Rock } from "./rock.js";
import { UI } from "./ui.js";

export class Level extends Scene {
    onInitialize(engine) {

        console.log("LEVEL 1")
        localStorage.setItem(`inventory`, JSON.stringify([]));
        this.add(new Background(100, 280));

        this.ui = new UI();
        this.add(this.ui);

        const player = new Player(400, 200);
        this.add(player);

        this.add(new Enemy(0, 350));
        this.add(new Door(1200, 320));
        this.add(new Key(1000, 350));
        this.add(new Coin(800, 350));
        this.add(new Powerup(600, 350));

        this.add(new RockFloor(-90, 800));
        this.add(new RockFloor(450, 850));
        this.add(new RockFloor(800, 900));
        this.add(new RockFloor(1250, 950));
        this.add(new RockFloor(1850, 1100));
        this.add(new RockFloor(2350, 950));
        this.add(new RockFloor(2650, 900));

        this.add(new Rock(370, 350));



        this.camera.zoom = 1.7;
        this.camera.strategy.lockToActor(player);
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 3000, 700));

    }

    clearActors() {
        this.actors.forEach(actor => {
            actor.kill();
        });
    }

    onActivate(ctx) {
        this.clearActors();
        this.onInitialize(this.engine);
    }
}

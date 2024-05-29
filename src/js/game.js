import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, SolverStrategy, BoundingBox, Label, Font, DisplayMode, Color, CollisionType, Direction } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Player } from "./player.js"
import { Enemy } from './enemy.js'
import { Platform } from './platform.js'
import { Rock } from './rock.js'
import { Key } from './key.js'
import { UI } from './ui.js'
import { Coin } from './coin.js'
import { Powerup } from './powerup.js'
import { Background } from './background.js'
// import data from "./platforms.json"

const options = {
    width: 1500, height: 800,
    displayMode: DisplayMode.FitScreen,
    physics: {
        solver: SolverStrategy.Realistic,
        gravity: new Vector(0, 800)
    }
}

export class Game extends Engine {

    constructor() {
        super(options)
        this.showDebug(true)

        this.start(ResourceLoader).then(() => this.startGame())
    }

    // showIntro() {
    //     const introScene = new IntroScene(this);
    //     this.addScene('intro', introScene);
    //     this.goToScene('intro');
    // }


    score
    mylabel

    startGame() {
        console.log("start de game!")

        // const bg = new Background()
        // bg.scale = new Vector(1.5, 1.5)
        this.add(new Background(400, 300))



        const player = new Player();
        this.add(player)

        this.currentScene.camera.zoom = 2
        this.currentScene.camera.strategy.lockToActor(player)
        this.currentScene.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 3000, 700))

        // for (let i = 0; i < 2; i++) {

        // }

        const enemy = new Enemy()
        this.add(enemy)

        const door = new Actor();
        door.graphics.use(Resources.Door.toSprite())
        door.pos = new Vector(1200, 320)
        door.scale = new Vector(0.4, 0.3)
        this.add(door)

        const key = new Key(1000, 350);
        this.add(key); // Add the key to the game scene

        const coin = new Coin(800, 350);
        this.add(coin);

        const powerup = new Powerup(600, 350);
        this.add(powerup);


        this.add(new Platform(300, 200))
        this.add(new Platform(450, 450))
        this.add(new Platform(800, 500))
        this.add(new Platform(1250, 450))
        this.add(new Platform(1850, 650))
        this.add(new Platform(2350, 450))
        this.add(new Platform(2650, 400))

        this.add(new Rock(370, 350))

        this.ui = new UI();
        this.add(this.ui)

        // let platformPositions = [
        //     new Vector(250, 500),
        //     new Vector(450, 320)
        // ]

        // for (let v of data) {
        //     console.log(v)
        // }

        // for (let v of platformPositions) {
        //     this.add(new Platform(v))
        // }

        // Handle collisions between the player and the key

    }



}



new Game()

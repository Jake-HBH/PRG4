import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, SolverStrategy, BoundingBox, FadeInOut, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { IntroScene } from './introScene.js'
import { Level } from './level.js'
import { Level2 } from './level2.js'
import { GameOver } from './gameOver.js'

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

    startGame() {
        console.log("start de game!");
        this.add(`intro`, new IntroScene)
        this.add(`level`, new Level)
        this.add(`level2`, new Level2)
        this.add(`gameover`, new GameOver)
        this.goToScene(`intro`)
    }
}



new Game()

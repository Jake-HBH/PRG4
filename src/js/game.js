import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, SolverStrategy, Label, Font, FontUnit, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { IntroScene } from './introScene.js'
import { Level } from './level.js'
import { Level2 } from './level2.js'
import { GameOver } from './gameOver.js'
import { UI } from './ui.js'
import { Player } from './player.js'

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

    ui
    mylabel
    
    startGame() {
        this.ui = new UI()
        this.add(this.ui)

        console.log("start de game!");
        this.add(`intro`, new IntroScene)
        this.add(`level`, new Level)
        this.add(`level2`, new Level2)
        this.add(`gameover`, new GameOver)
        this.goToScene(`intro`)
    }

    updateScore() {
        this.score++
        this.mylabel.text = `Score: ${this.score}`
    }
}

new Game()

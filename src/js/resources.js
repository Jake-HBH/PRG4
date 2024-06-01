import { ImageSource, Sound, Resource, Loader} from 'excalibur'


const Resources = {
    Background: new ImageSource('images/background1.png'),

    Enemy: new ImageSource('images/bat.gif'),

    Player: new ImageSource('images/shadow.png'),
    PlayerIdle: new ImageSource('images/Idel Animation 48x48.png'),
    PlayerRun: new ImageSource('images/Run Animation 48x48.png'),
    PlayerJump: new ImageSource('images/Jump Animation 48x48.png'),

    Platform: new ImageSource('images/platform2.png'),
    Flashlight: new ImageSource('images/flashlight.png'),
    Rock: new ImageSource("images/rock.png"),
    Coin: new ImageSource("images/skull-coin.png"),
    Powerup: new ImageSource("images/powerup.png"),
    
    IntroBanner: new ImageSource("images/introbanner.png"),
    GameOverBanner: new ImageSource("images/yiming.png"),
    
    BlackRocks: new ImageSource("images/black rocks.png"),
    Door: new ImageSource('images/cave door.png'),

    DoubleRockPlatform: new ImageSource("images/doublesided rock platform.png"),
    RockFloor: new ImageSource("images/rockplatform.png"),
    RockFloor2: new ImageSource("images/rockplatform2.png"),
    RockRoof: new ImageSource("images/rock roof.png"),
    RockRoof2: new ImageSource("images/rock roof 2.png"),
    RockPlatformLeft: new ImageSource("images/rock platform left.png"),
    RockPlatformRight: new ImageSource("images/rock platform right.png"),

    WoodenPlatform: new ImageSource("images/wooden platform.png"),
    WoodenScaffolding: new ImageSource("images/wooden scaffolding.png"),

    
    // CoinSound: new Sound("sounds/coin-sound.wav"),
    // Anim: new ImageSource('images/all.png'),
}


const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}


export { Resources, ResourceLoader }
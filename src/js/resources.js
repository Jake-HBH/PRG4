import { ImageSource, Sound, Resource, Loader, FontSource, SoundEvents, ImageFiltering} from 'excalibur'

const Resources = {
    bg: new ImageSource('images/background.jpg'),
    Enemy: new ImageSource('images/flying-rat.png'),
    Player: new ImageSource('images/pirare.png'),

    PlayerIdle: new ImageSource('images/Idel Animation 48x48.png'),
    PlayerRun: new ImageSource('images/Run Animation 48x48.png'),
    PlayerJump: new ImageSource('images/Jump Animation 48x48.png'),

    Platform: new ImageSource('images/platform2.png'),
    Door: new ImageSource('images/door.png'),
    Key: new ImageSource('images/pixel-key.png'),
    HeartImage: new ImageSource("images/heart.png"),
    Rock: new ImageSource("images/rock.png"),
    Coin: new ImageSource("images/skull-coin.png"),
    Powerup: new ImageSource("images/powerup.png"),
    IntroBanner: new ImageSource("images/background1.png"),
    GameOverBanner: new ImageSource("images/yiming.png")
    // CoinSound: new Sound("sounds/coin-sound.wav"),
    // Anim: new ImageSource('images/all.png'),
}


const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}


export { Resources, ResourceLoader }
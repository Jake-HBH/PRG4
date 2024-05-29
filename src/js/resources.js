import { ImageSource, Sound, Resource, Loader, FontSource, SoundEvents} from 'excalibur'

const Resources = {
    bg: new ImageSource('images/background.jpg'),
    Enemy: new ImageSource('images/robdedoodlerbgr.png'),
    Player: new ImageSource('images/pirare.png'),
    Platform: new ImageSource('images/platform2.png'),
    Door: new ImageSource('images/door.png'),
    Key: new ImageSource('images/pixel-key.png'),
    HeartImage: new ImageSource("images/heart.png"),
    Rock: new ImageSource("images/rock.png"),
    Coin: new ImageSource("images/skull-coin.png"),
    Powerup: new ImageSource("images/powerup.png"),
    // CoinSound: new Sound("sounds/coin-sound.wav"),
    // Anim: new ImageSource('images/all.png'),
}


const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}


export { Resources, ResourceLoader }
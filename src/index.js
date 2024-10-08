import p5 from 'p5';
import {fonts, images, jsons} from 'bc-shared-data-module';

const sketch = (sk) => {
    let bgImage

    sk.preload = () => {
        sk.loadImage(images.bg);

        sk.loadFont(fonts.sign);
        sk.loadFont(fonts.text.regular);
        sk.loadFont(fonts.text.bold);
        sk.loadFont(fonts.text.italic);

        sk.loadJSON(jsons.testCityList);
    };

    sk.setup = () => {
        sk.createCanvas(bgImage.width, bgImage.height, P2D);
        sk.background(bgImage);
    };

    sk.draw = () => {
        sk.textFont(fonts.sign);
        sk.textSize(32);
        sk.text('I would prefer not to.', 10, 30);
    };
}
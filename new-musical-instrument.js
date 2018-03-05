//added background and metronome, tried to make the keys change the sound type but I couldn't figure it out
var img;
function preload() {
  img = loadImage('instrumentbg.jpg');
}
var a = [];
var b = [];
var velx = [];
var vely = [];

var slider;
var vslider;
var svalue;

var oscA;
var oscS;
var oscD;

var playing = false;

function setup() {
  colorMode(HSB)
  createCanvas(500, 500);
  textAlign(CENTER);
  oscA = new p5.Oscillator();
  vslider = createSlider(0, 100, 50)
  vslider.position(2, 0);
  vslider.style('width', '490px');

  slider = createSlider(100, 1000, 400);
  slider.position(2, 480);
  slider.style('width', '490px');
  oscA.setType('triangle');
  oscA.freq(400);
  oscA.amp(0.5);
  oscA.start();

  oscS = new p5.Oscillator();
  oscS.setType('sawtooth');
  oscS.freq(400);
  oscS.amp(0.5);
  oscS.start();

  oscD = new p5.Oscillator();
  oscD.setType('sine');
  oscD.freq(400);
  oscD.amp(0.5);
  oscD.start();

  for (var i = 0; i < slider.value() / 5; i++) {
    a[i] = 0;
    b[i] = 250;
    velx[i] = random(-2, 2);
    vely[i] = random(-2, 2);
  }
}

function draw() {
  image(img, -250, -250);;
  // metronome
  var s = second();
  fill(255);
  textSize(100);
  textStyle(BOLD);
  text(s, 250, 290);
  textSize(16);
  text('volume', 250, 30);
  text('frequency', 250, 480);
  stroke(0);
  for (var i = 0; i < slider.value() / 5; i++) {
    ellipse(a[i], b[i], vsvalue);
    a[i] += slider.value() / 100;
    b[i] += vely[i];
    if (b[i] > height) {
      b[i] = 250;
      a[i] = 0;
    }
    oscA.freq(slider.value());
    oscS.freq(slider.value());
    oscD.freq(slider.value());
    oscA.amp(vslider.value() / 100);
    oscS.amp(vslider.value() / 100);
    oscD.amp(vslider.value() / 100);
    var vsvalue = vslider.value();
    var svalue = slider.value();
    fill(svalue / 3, 100, 100);
    ellipse(0, 250, vsvalue * 3);

  }

  function keyPressed() {
    print("got key press for ", key);

    if (key == 'A') {
      oscA.setType('triangle');
    } else if (key == 'S') {
      oscA.setType('sine');
    } else if (key == 'D') {
      oscA.setType('sawtooth');
    }
  }

  function keyReleased() {
    print("got key release for ", key);

    if (key == 'A') {
      oscA.setType('triangle');
    } else if (key == 'S') {
      oscA.setType('sine');
    } else if (key == 'D') {
      oscA.setType('sawtooth');
    }
  }

}

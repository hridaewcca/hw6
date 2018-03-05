//added metronome / timer
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
  vslider = createSlider(0,100,50)
  vslider.position(2,0);
  vslider.style('width', '490px');
  
  slider = createSlider(100,1000,400);
  slider.position(2,480);
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

  for (var i = 0; i < slider.value()/5; i++) {
  a[i] = 0;
  b[i] = 250;
  velx[i] = random(-2,2);
  vely[i] = random(-2,2);
    }
}

function draw() {
  background (0);
    textSize(16);
	text('volume', 250, 30);
  text('frequency', 250, 480);
    for (var i = 0; i < slider.value()/5; i++) {
  	ellipse(a[i], b[i], vsvalue);
    a[i] += slider.value()/100;
    b[i] += vely[i];
    if (b[i] > height) {
      b[i] = 250;
      a[i] = 0;
	  }
  oscA.freq(slider.value());
  oscS.freq(slider.value());
  oscD.freq(slider.value());
  oscA.amp(vslider.value()/100);
  oscS.amp(vslider.value()/100);
  oscD.amp(vslider.value()/100);
var vsvalue = vslider.value();
var svalue = slider.value();
  noStroke();
  fill (svalue/3, 100, 100);
  ellipse(0, 250, vsvalue*3);
      // metronome
  // if millis() / 250 is even, dark fill
    noStroke();
		var s = second();
      textSize(100);
      textStyle(BOLD);
      text(s, 250, 290);
}

	}

let angle = 0;
let w = 48;
let ma;
let maxD;

function setup() {
  createCanvas(800, 800, WEBGL);
  ma = atan(cos(QUARTER_PI));
  maxD = dist(0, 0, 400, 400);
}

function draw() {
  background(0);

  ortho(-800, 800, 800, -800, 0, 1600);
  rotateX(-ma);
  rotateY(-QUARTER_PI);
  let dirY = (mouseY / height - 0.5) * 2;
  let dirX = (mouseX / width - 0.5) * 2;
  directionalLight(250, 250, 250, dirX, -dirY, 0.25);

  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -PI, PI);
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 100, 300));
      translate(x - width / 2, 0, z - height / 2);
      ambientMaterial(250, 25, 50);
      box(w, h, w);
      pop();
    }
  }
  angle -= 0.1;
}

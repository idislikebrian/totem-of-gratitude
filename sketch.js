let colors = [
  "rgba(248,149,46,0.5)",
  "rgba(204,92,162,0.5)",
  "rgba(202,219,46,0.5)",
  "rgba(120,86,164,0.5)",
  "rgba(90,119,186,0.5)",
  "rgba(251,238,74,0.5)",
];

function setup() {
  createCanvas(1000, 1000);

  background("#FFFEDC");
  for (var x = 0; x < width; x += width / 80) {
    for (var y = 0; y < height; y += height / 80) {
      stroke("#B7DED6");
      strokeWeight(1 / 20);
      line(x, 0, x, height);
      line(0, y, width, y);
    }
  }
  noFill();

  rectMode(CENTER);
  fill("black");
  rect(520, 510, 200, 940);
  stroke("black");
  fill("white");
  strokeWeight(5);
  rect(width / 2, 490, 200, 940);
  line(400, 50, 600, 50);

  fill("#BD1D1D");
  ellipse(415, 35, 16, 16);
  fill("#FFCC00");
  ellipse(440, 35, 16, 16);

  translate(width / 2, height / 2);
  scale(0.9);
  translate(-width / 2, -height / 2);

  let seg = 5;
  let w = width / seg;
  let i = 2;

  for (let j = 0; j < seg; j++) {
    let x = i * w + w / 2;
    let y = j * w + w / 2;
    form(x, y, w * 0.8);
  }
}

function form(x, y, w) {
  let nn = 3;
  let ww = w / nn;
  let lines = [];
  shuffle(colors, true);
  let col1 = colors[0];
  let col2 = colors[1];
  for (let i = 0; i < nn; i++) {
    for (let j = 0; j < nn; j++) {
      let xx = x + map(i, 0, nn, 0, w) - w / 2 + ww / 2;
      let yy = y + map(j, 0, nn, 0, w) - w / 2 + ww / 2;
      let dr = int(random(5));

      let len = int(random(nn)) * ww;
      let ex = len;
      let ey = 0;
      if (dr == 1) {
        ex = -len;
      } else if (dr == 2) {
        ex = 0;
        ey = len;
      } else if (dr == 3) {
        ex = 0;
        ey = -len;
      }

      if (
        xx + ex < x - w / 2 ||
        xx + ex > x + w / 2 ||
        yy + ey < y - w / 2 ||
        yy + ey > y + w / 2
      ) {
        ex = 0;
        ey = 0;
      }
      if (dr != 4)
        lines.push({
          x1: xx,
          y1: yy,
          x2: xx + ex,
          y2: yy + ey,
        });
    }
  }

  strokeWeight(w * 0.2);
  stroke(col2);
  for (let l of lines) {
    line(l.x1, l.y1, l.x2, l.y2);
  }
}

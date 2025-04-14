let stars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: 50, // 長寬為 5 公分 (50 像素)
    });
  }
}

function draw() {
  background(230, 230, 250); // 淡紫色背景
  noStroke();
  fill(255, 182, 193); // 淡粉色

  for (let star of stars) {
    const size = map(mouseX, 0, width, 10, 50); // 調整大小範圍，最大為 50 像素
    ellipse(star.x, star.y, size, size);
  }
}




function PlayerFont() {
  base(this, LSprite, []);
  var self = this;
  backLayer.addChild(self);
  self.show();
}

PlayerFont.prototype.show = function () {
  var self = this;
  self.graphics.drawRoundRect(0, "#DDDDDD", [0, 0, 520, 520, 10], true, "#DDDDDD");
  self.x = (LGlobal.width - 520) / 2;
  self.y = 20;
  self.play();
}

PlayerFont.prototype.play = function () {
  var self = this;
  var color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
  self.allLayer = new LSprite();
  self.addChild(self.allLayer);
  self.allLayer.x = 15;
  self.allLayer.y = 15;
  var textNum = num * num;
  var count = 0;
  self.index = Math.floor(textNum * Math.random());
  var i, j, text;
  for (i = 0; i < num; i++) {
    for (j = 0; j < num; j++) {
      var childLayer = new LSprite();
      self.allLayer.addChild(childLayer);
      childLayer.graphics.drawRoundRect(0, color, [0, 0, totalWidth / num - 10, totalWidth / num - 10, 10], true, color);
      childLayer.x = j * totalWidth / num;
      childLayer.y = i * totalWidth / num;
      text = new LTextField();
      childLayer.addChild(text);
      text.color = "#fff";
      text.size = totalWidth / num - 10;
      if (count == self.index) {
        text.text = "电";
      } else {
        text.text = "梓";
      }
      count++;
      childLayer.addEventListener(LMouseEvent.MOUSE_DOWN, click);
    }
  }
  if (gameCount >= 2) {
    if (gameCount % 2) {
      num++;
    }
  } else {
    num++;
  };
  gameCount++;
}



var backLayer, textLayer, scoreLayer, loadingLayer, gameoverLayer, puaseLayer;

/*游戏界面的，num格子横和竖的数量，totalWidth，totalHeight全部格子的总宽和高，gameCount关数*/
var num = 2, totalWidth = 500, totalHeight = 500, gameCount = 0;

/*定时器时间*/
var timer;

/*数据加载*/
var loadData = [{ name: "gameInit", path: "js/gameInit.js" },
{ name: "background", path: "js/background.js" },
{ name: "playerFont", path: "js/playerFont.js" },
{ name: "score", path: "js/score.js" },
{ name: "over", path: "js/gameover.js" },
{ name: "pause1", path: "js/pause.js" },
{ name: "btn", path: "btn.png" },
{ name: "pause", path: "pause.png" }],
  loadList;

/*等级评分*/
var lv_txt = ["瞎子", "色盲", "灿阳色郎", "色狼", "色鬼", "色魔", "灿阳超级色魔", "灿阳变态色魔", "灿阳孤独求色"];

function main() {
  loadingLayer = new LoadingSample6();
  addChild(loadingLayer);
  LLoadManage.load(loadData, function (progress) {
    loadingLayer.setProgress(progress);
  }, gameInit);
}

function gameInit(result) {
  loadList = result;
  removeChild(loadingLayer);
  loadingLayer = null;
  backLayer = new GameInit();
  backLayer.Btnlayer.addEventListener(LMouseEvent.MOUSE_DOWN, gameStart);
}

function gameStart() {
  backLayer.die();
  backLayer.removeAllChild();
  backLayer = new Bg();
  textLayer = new PlayerFont();
  scoreLayer = new Score();
  gameoverLayer = new Gover();
  timer = new LTimer(1000, 30);
  timer.addEventListener(LTimerEvent.TIMER, time);
  timer.start();
  puaseLayer = new Pause();
}


function click(ev) {
  if (ev.target.text == "电") {
    textLayer.removeChild(textLayer.allLayer);
    textLayer.play();
    scoreLayer.show();
  }
}

function time() {
  gameoverLayer.num--;
  gameoverLayer.show();
  if (gameoverLayer.num == 0) {
    new Over();
    timer.removeAllEventListener();
  }
}


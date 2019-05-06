
function Gover(){
	base(this,LSprite,[]);
	var self=this;
	self.num=30;
	backLayer.addChild(self);
	self.graphics.drawRoundRect(0,"#fff",[0,0,75,50,5],true,"#fff");
	self.alpha=0.5;
	self.x=10;
	self.y=250;
	self.overText=new LTextField();
	self.addChild(self.overText);
	self.overText.size=30;
	self.overText.x=20;
	self.overText.y=10;
	self.show();
}

Gover.prototype.show=function(){
	var self=this; 
	self.overText.text=self.num;
}


Gover.prototype.over=function(){
	backLayer.removeAllChild();

}


/*gameover之后出现的*/

function Over(){
	base(this,LSprite,[]);
	var self=this;
	backLayer.removeAllChild();
	backLayer.addChild(self);
	self.graphics.drawRect(0,"rgba(0,0,0,0.4)",[0,0,LGlobal.width,LGlobal.height],true,"rgba(0,0,0,0.4)");
	self.viewShow();
	self.btn();

}

Over.prototype.viewShow=function(){
	var self=this;
	var text=new LTextField();
	self.addChild(text);
	text.text="LV:"+lv_txt[(Math.floor(gameCount/2)>lv_txt.length?lv_txt.length-1:Math.floor(gameCount/2))];
	text.color="rgba(0,0,0,.7)";
	text.size=50;
	text.weight="bolder";
	text.x=(LGlobal.width-text.getWidth())/2;;
	text.y=200;
}
Over.prototype.btn=function(){
	var btn=new LSprite();
	var self=this;
	self.addChild(btn);
	btn.graphics.drawRoundRect(0,"#DA9622",[0,4,220,50,10],true,"#DA9622");
	btn.graphics.drawRoundRect(0,"#FCAD26",[0,0,220,50,10],true,"#FCAD26");
	btn.x=(LGlobal.width-btn.getWidth())/2;
	btn.y=350;
	var text=new LTextField();
	text.text="再来一次";
	text.color="#fff";
	text.size=20;
	text.weight="bolder";
	text.x=(220-text.getWidth())/2;
	text.y=10;
	btn.addChild(text);
	btn.addEventListener(LMouseEvent.MOUSE_DOWN,restart);
}

/*再来一次*/
function restart(){
	gameCount=0;
	num=2;
	backLayer.removeAllChild();
	textLayer=new PlayerFont();
	scoreLayer=new Score();
	gameoverLayer=new Gover();
	timer=new LTimer(1000,60);
	timer.addEventListener(LTimerEvent.TIMER,time);
	timer.start();
	puaseLayer=new Pause();
}

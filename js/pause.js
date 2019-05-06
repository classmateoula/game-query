
function Pause(){
	base(this,LSprite,[]);
	var self=this;
	backLayer.addChild(self);	
	self.puaseBtn();
}
Pause.prototype.puaseBtn=function(){
	var self=this;
	var bitmap1=new LBitmap(new LBitmapData(loadList["pause"]));
	var bitmap2=new LBitmap(new LBitmapData(loadList["pause"]));
	bitmap2.x=2;
	bitmap2.y=2;
	self.pause=new LButton(bitmap1,bitmap2);
	self.addChild(self.pause);
	self.pause.x=30;
	self.pause.y=450;
	self.pause.addEventListener(LMouseEvent.MOUSE_DOWN,self.puaseStage.bind(self));
}
Pause.prototype.puaseStage=function(){
	timer.stop();
	var self=this;
	var i=0;
	for(;i<textLayer.allLayer.childList.length;i++){
		textLayer.allLayer.childList[i].removeEventListener(LMouseEvent.MOUSE_DOWN,click);
	}

	self.mask=new LSprite();
	self.addChild(self.mask);
	self.mask.graphics.drawRect(0,"rgba(0,0,0)",[0,0,LGlobal.width,LGlobal.height],true,"rgba(0,0,0)");
	var bitmap3=new LBitmap(new LBitmapData(loadList["btn"]));
	var bitmap4=new LBitmap(new LBitmapData(loadList["btn"]));
	bitmap4.x=2;
	bitmap4.y=2;
	self.mask.btn=new LButton(bitmap3,bitmap4);
	self.mask.btn.x=(LGlobal.width-self.mask.btn.getWidth())/2;
	self.mask.btn.y=300;
	self.mask.addChild(self.mask.btn);
	self.mask.btn.addEventListener(LMouseEvent.MOUSE_UP,play);
}

function play(){
	var i=0;
	for(;i<textLayer.allLayer.childList.length;i++){
		textLayer.allLayer.childList[i].addEventListener(LMouseEvent.MOUSE_DOWN,click);
	}
	timer.start();
	backLayer.removeChild(puaseLayer);
	puaseLayer=new Pause();
}





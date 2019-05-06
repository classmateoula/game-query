
function GameInit(){
	base(this,LSprite,[]);
	var self=this;
	addChild(self);
	self.show();
}

GameInit.prototype.show=function(){
	var self=this;
	self.graphics.drawRect(0,"#F06060",[0,0,LGlobal.width,LGlobal.height],true,"#F06060");
	var titleText=new LTextField();
	self.addChild(titleText);
	titleText.text="找你妹";
	titleText.color="#fff";
	titleText.size=40;
	titleText.font="微软雅黑";
	titleText.stroke=true;
	titleText.lineColor="#F0F0F0";
	titleText.lineWidth=3;
	titleText.weight="bolder";
	titleText.x=(LGlobal.width-titleText.getWidth())/2;
	titleText.y=50;
	var styleSheet=new LStyleSheet();
	styleSheet.setStyle(".text1","{font-size:35;color:#fff;font-weight:bold}");
	styleSheet.setStyle(".text2","{font-size:16;color:#fff;font-weight:bold}");
	var title2=new LTextField();
	title2.htmlText="<span class='text2'>在众多<span class='text1'>袜</span>子中找到唯一的<span class='text1'>妹</span>子</span>";
	title2.styleSheet=styleSheet;
	title2.textBaseline="alphabetic";
	title2.alpha=0.5;
	title2.x=(LGlobal.width-260)/2;
	title2.y=180;
	self.addChild(title2);
	self.Btnlayer=new LSprite();
	self.addChild(self.Btnlayer);
	self.btn();
}

GameInit.prototype.btn=function(){
	var self=this;
	self.Btnlayer.graphics.drawRoundRect(0,"#DA9622",[0,4,220,50,10],true,"#DA9622");
	self.Btnlayer.graphics.drawRoundRect(0,"#FCAD26",[0,0,220,50,10],true,"#FCAD26");
	self.Btnlayer.x=(LGlobal.width-self.Btnlayer.getWidth())/2;
	self.Btnlayer.y=350;
	var text=new LTextField();
	text.text="开始游戏";
	text.color="#fff";
	text.size=20;
	text.weight="bolder";
	text.x=(220-text.getWidth())/2;
	text.y=10;
	self.Btnlayer.addChild(text);
}

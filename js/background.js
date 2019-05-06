
function Bg(){
	base(this,LSprite,[]);
	var self=this;
	addChild(self);
	self.show();
}

Bg.prototype.show=function(){
	var self=this;
	self.graphics.drawRect(0,"#F06060",[0,0,LGlobal.width,LGlobal.height],true,"#F06060");
}
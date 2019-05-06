
function Score(){
	base(this,LSprite,[]);
	var self=this;
	backLayer.addChild(self);
	self.text=new LTextField();
	self.addChild(self.text);
	self.text.x=10;
    self.text.y=20;
	self.text.color="#fff";
	self.text.weight="bolder";
	self.text.size=20;
	self.alpha=0.5;
	self.show();
}

Score.prototype.show=function(){
	var self=this;
	self.text.text="过关:"+gameCount;
}
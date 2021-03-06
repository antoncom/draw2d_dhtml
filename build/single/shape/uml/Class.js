draw2d.shape.uml.Class=function(_191d){
this.portTop=null;
this.portRight=null;
this.portBottom=null;
this.portLeft=null;
draw2d.Node.call(this);
this.setDimension(50,50);
this.setResizeable(false);
this.setClassName(_191d);
};
draw2d.shape.uml.Class.prototype=new draw2d.Node;
draw2d.shape.uml.Class.prototype.type="shape.uml.Class";
draw2d.shape.uml.Class.prototype.setWorkflow=function(_191e){
draw2d.Node.prototype.setWorkflow.call(this,_191e);
if(_191e!==null&&this.portTop===null){
this.portTop=new draw2d.shape.uml.InheritancePort();
this.portTop.setWorkflow(_191e);
this.addPort(this.portTop,0,0);
this.portRight=new draw2d.shape.uml.InheritancePort();
this.portRight.setWorkflow(_191e);
this.addPort(this.portRight,0,0);
this.portBottom=new draw2d.shape.uml.InheritancePort();
this.portBottom.setWorkflow(_191e);
this.addPort(this.portBottom,0,0);
this.portLeft=new draw2d.shape.uml.InheritancePort();
this.portLeft.setWorkflow(_191e);
this.addPort(this.portLeft,0,0);
this.recalculateSize();
}
};
draw2d.shape.uml.Class.prototype.setClassName=function(name){
this.headerLabel.innerHTML=name;
this.recalculateSize();
};
draw2d.shape.uml.Class.prototype.addAttribute=function(name,type,_1922){
var row=document.createElement("tr");
this.table.appendChild(row);
var td=document.createElement("td");
td.style.whiteSpace="nowrap";
row.appendChild(td);
this.disableTextSelection(td);
if(_1922){
td.innerHTML=name+" : "+type+" = "+_1922;
}else{
td.innerHTML=name+" : "+type;
}
this.recalculateSize();
};
draw2d.shape.uml.Class.prototype.setDimension=function(w,h){
draw2d.Node.prototype.setDimension.call(this,w,h);
if(this.portTop!==null){
this.portTop.setPosition(this.width/2,0);
this.portRight.setPosition(this.width,this.height/2);
this.portBottom.setPosition(this.width/2,this.height);
this.portLeft.setPosition(0,this.height/2);
}
};
draw2d.shape.uml.Class.prototype.createHTMLElement=function(){
var item=document.createElement("div");
item.id=this.id;
item.style.position="absolute";
item.style.left=this.x+"px";
item.style.top=this.y+"px";
item.style.height=this.width+"px";
item.style.width=this.height+"px";
item.style.margin="0px";
item.style.padding="0px";
item.style.outline="none";
item.style.border="1px solid black";
item.style.zIndex=""+draw2d.Figure.ZOrderBaseIndex;
item.style.backgroundColor="rgb(255,255,206)";
this.disableTextSelection(item);
this.table=document.createElement("table");
this.table.style.width="100%";
this.table.style.height="100%";
this.table.style.margin="0px";
this.table.style.padding="0px";
item.appendChild(this.table);
var _1928=document.createElement("tbody");
this.table.appendChild(_1928);
var _1929=document.createElement("tr");
_1928.appendChild(_1929);
this.headerLabel=document.createElement("td");
this.headerLabel.style.align="left";
this.headerLabel.style.verticalAlign="top";
this.headerLabel.style.borderBottom="1px solid black";
this.headerLabel.style.fontWeight="bold";
this.headerLabel.style.textAlign="center";
_1929.appendChild(this.headerLabel);
this.headerLabel.innerHTML="";
return item;
};
draw2d.shape.uml.Class.prototype.recalculateSize=function(name){
this.setDimension(this.getWidth(),this.getHeight());
};
draw2d.shape.uml.Class.prototype.getWidth=function(){
if(this.workflow===null){
return 10;
}
if(this.table.xgetBoundingClientRect){
return this.table.getBoundingClientRect().right-this.table.getBoundingClientRect().left;
}else{
if(document.getBoxObjectFor){
return document.getBoxObjectFor(this.table).width;
}else{
return this.table.offsetWidth;
}
}
};
draw2d.shape.uml.Class.prototype.getHeight=function(){
if(this.workflow===null){
return 10;
}
if(this.table.xgetBoundingClientRect){
return this.table.getBoundingClientRect().bottom-this.table.getBoundingClientRect().top;
}else{
if(document.getBoxObjectFor){
return document.getBoxObjectFor(this.table).height;
}else{
return this.table.offsetHeight;
}
}
};

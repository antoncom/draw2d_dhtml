/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.AbstractPalettePart=function(){this.x=0;this.y=0;this.html=null;};draw2d.AbstractPalettePart.prototype.type="draw2d.AbstractPalettePart";draw2d.AbstractPalettePart.prototype=new draw2d.Draggable();draw2d.AbstractPalettePart.prototype.createHTMLElement=function(){var item=document.createElement("div");item.id=this.id;item.style.position="absolute";item.style.height="24px";item.style.width="24px";return item;};draw2d.AbstractPalettePart.prototype.setEnviroment=function(_b32,_b33){this.palette=_b33;this.workflow=_b32;};draw2d.AbstractPalettePart.prototype.getHTMLElement=function(){if(this.html===null){this.html=this.createHTMLElement();draw2d.Draggable.call(this,this.html);}return this.html;};draw2d.AbstractPalettePart.prototype.onDrop=function(_b34,_b35){var _b36=this.workflow.getScrollLeft();var _b37=this.workflow.getScrollTop();var _b38=this.workflow.getAbsoluteX();var _b39=this.workflow.getAbsoluteY();this.setPosition(this.x,this.y);this.execute(_b34+_b36-_b38,_b35+_b37-_b39);};draw2d.AbstractPalettePart.prototype.execute=function(x,y){alert("inerited class should override the method 'draw2d.AbstractPalettePart.prototype.execute'");};draw2d.AbstractPalettePart.prototype.setTooltip=function(_b3c){this.tooltip=_b3c;if(this.tooltip!==null){this.html.title=this.tooltip;}else{this.html.title="";}};draw2d.AbstractPalettePart.prototype.setDimension=function(w,h){this.width=w;this.height=h;if(this.html===null){return;}this.html.style.width=this.width+"px";this.html.style.height=this.height+"px";};draw2d.AbstractPalettePart.prototype.setPosition=function(xPos,yPos){this.x=Math.max(0,xPos);this.y=Math.max(0,yPos);if(this.html===null){return;}this.html.style.left=this.x+"px";this.html.style.top=this.y+"px";this.html.style.cursor="move";};draw2d.AbstractPalettePart.prototype.getWidth=function(){return this.width;};draw2d.AbstractPalettePart.prototype.getHeight=function(){return this.height;};draw2d.AbstractPalettePart.prototype.getY=function(){return this.y;};draw2d.AbstractPalettePart.prototype.getX=function(){return this.x;};draw2d.AbstractPalettePart.prototype.getPosition=function(){return new draw2d.Point(this.x,this.y);};draw2d.AbstractPalettePart.prototype.disableTextSelection=function(e){if(typeof e.onselectstart!="undefined"){e.onselectstart=function(){return false;};}else{if(typeof e.style.MozUserSelect!="undefined"){e.style.MozUserSelect="none";}}};
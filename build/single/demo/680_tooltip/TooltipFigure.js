draw2d.TooltipFigure=function(){
draw2d.Node.call(this);
this.setColor(new draw2d.Color(255,128,255));
this.setBackgroundColor(new draw2d.Color(255,150,255));
this.setDimension(50,50);
};
draw2d.TooltipFigure.prototype=new draw2d.Node;
draw2d.TooltipFigure.prototype.type="TooltipFigure";
draw2d.TooltipFigure.prototype.onMouseEnter=function(){
this.getWorkflow().showTooltip(new draw2d.Tooltip("Juhu, I'm a tooltip"),true);
};

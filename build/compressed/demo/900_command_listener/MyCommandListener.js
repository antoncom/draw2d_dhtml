/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.MyCommandListener=function(){draw2d.CommandStackEventListener.call(this);};draw2d.MyCommandListener.prototype=new draw2d.CommandStackEventListener;draw2d.MyCommandListener.prototype.type="draw2d.MyCommandListener";draw2d.MyCommandListener.prototype.stackChanged=function(_2b1){var _2b2=document.getElementById("log");var log=document.createElement("div");if(_2b1.isPostChangeEvent()){log.innerHTML="POST:";}else{log.innerHTML="PRE:";}var _2b4=_2b1.getDetails();if(0!=(_2b4&(draw2d.CommandStack.PRE_EXECUTE|draw2d.CommandStack.POST_EXECUTE))){log.innerHTML=log.innerHTML+" EXECUTE";}else{if(0!=(_2b4&(draw2d.CommandStack.PRE_UNDO|draw2d.CommandStack.POST_UNDO))){log.innerHTML=log.innerHTML+" UNDO";}else{if(0!=(_2b4&(draw2d.CommandStack.PRE_REDO|draw2d.CommandStack.POST_REDO))){log.innerHTML=log.innerHTML+" REDO";}}}var _2b5=_2b1.getCommand();if(_2b5 instanceof draw2d.CommandAdd){log.innerHTML=log.innerHTML+" => ADD Element";}else{if(_2b5 instanceof draw2d.CommandConnect){log.innerHTML=log.innerHTML+" => Connect two Ports";}else{if(_2b5 instanceof draw2d.CommandDelete){log.innerHTML=log.innerHTML+" => Delete Element";}else{if(_2b5 instanceof draw2d.CommandMove){log.innerHTML=log.innerHTML+" => Moving Element";}else{if(_2b5 instanceof draw2d.CommandResize){log.innerHTML=log.innerHTML+" => Resize Element";}}}}}_2b2.appendChild(log);};
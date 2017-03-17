var EventUtil = {
		addHandler : function(element,type,hander){
			if(element.addEventListener){
				element.addEventListener(type,hander,false);
			} else if(element.attachEvent){
				element.attachEvent("on"+type,hander);
			} else {
				element["on"+type] = hander;
			}
		},
		removeHander : function(element,type,hander){
			if(element.removeEventListener){
				element.removeEventListener(type,hander,false);
			} else if(element.detachEvent){
				element.detachEvent("on"+type,hander);
			} else {
				element["on"+type] = null;
			}
		},
		getEvent : function(event){
			return event ? event : window.event; 
		},
		getTarget : function(event){
			return event.target ? event.target : event.srcElement;
		},
		getRelatedTarget : function(event){
			if(event.relatedTarget){
				return event.relatedTarget;
			} else if(event.toElement){
				return event.toElement;
			} else if(event.fromElement){
				return event.fromElement;
			} else {
				return null;
			}
		},
		preventDefault : function(event){
			if(event.preventDefault){
				return event.preventDefault();
			} else {
				event.returnValue = false;
			}
		},
		stopPropagation : function(event){
			if(event.stopPropagation){
				return event.stopPropagation();
			} else {
				event.cancelBubble = true;
			}
		},
		//获得按下按键的ascii编码
		getCharCode : function(event){
			if(typeof event.charCode == "number"){
				return event.charCode;
			} else {
				return event.keyCode;
			}
		}
};
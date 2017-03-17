function EventTarget(){
		this.handlers = {};
	}
	EventTarget.prototype = {
		constructor : EventTarget,
		addHandler : function(type,handler){
			if(typeof this.handlers[type] == "undefined"){
				this.handlers[type] = [];
			}
			this.handlers[type].push(handler);
		},
		fire : function(event){
			if(!event.target){
				event.target = this;
			}
			if(this.handlers[event.type] instanceof Array){
				var handlers = this.handlers[event.type];
				for(var i=0,len=handlers.length; i<len; i++){
					handlers[i](event);
				}
			}
		},
		removeHandler : function(type,handler){
			if(this.handlers[type] instanceof Array){
				var handers = this.handers[type];
				for(var i=0,len=handlers.length; i<len; i++){
					if(handlers[i]===handler){
						handlers.splice(i,1);
						break;
					}
				}
			}
		}
	};

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
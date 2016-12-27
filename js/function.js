/*********************************************/
//1.解决类名的兼容问题
function getClass(classname,father){
	father=father||document;
	//判断浏览器
	if(father.getElementsByClassName){//现有的标签
	   return father.getElementsByClassName(classname);//输出现有的浏览器
	}else{
		var all=father.getElementsByTagName("*");//所有的标签
		var newarr=[];
		for(var i=0;i<all.length;i++){//遍历 判断
			if(checkRep(classname,all[i].className)){//标签.className==classname
			newarr.push(all[i]);//条件满足 保留标签添加arr[i]所对应的下标
			}
		};

          return newarr;//返回新数组
	}
}
function checkRep(val,string){//把inner two获取
	var arr=string.split(" ");//把这个字符串用分隔符分开
	for(var i in arr){  //遍历取出来的字符串
		if(arr[i]==val){//如果和classname相等
			return true;//返回真
		}
	}
     return false;//返回假
}



	function getStyle(obj,attr){
	if(obj.currentStyle){
		return parseInt(obj.currentStyle[attr]);
	}else{
		return parseInt(getComputedStyle(obj,null)[attr]);

	}
}

function $(selector,father){
	father=father||document;
	if(typeof selector=="string"){
		selector=selector.replace(/^\s*|\s*$/g,"")//去除字符串前后空格
		if(selector.charAt(0)=="."){//判断类名
			return getClass(selector.substring(1),father);
		}
		else if(selector.charAt(0)=="#"){//判断ID
			return document.getElementById(selector.substring(1));
		}
		else if(/^[a-z][1-6 a-z]*/g.test(selector)){//判断标签
			return father.getElementsByTagName(selector);
		}
	}else if(typeof selector=="function"){
		window.onload=function(){//是selector的第一个形参
			selector();
		}
	}
}
function getChild(father,type){
	type=type||"a";
	var all=father.childNodes;//集合
	var newarr=[];//新集合
	for (var i = 0; i < all.length; i++) {//遍历子节点的集合
		if(type=="a"){//判断类型是否只有元素节点
			if(all[i].nodeType==1){//判断节点类型是否是元素节点
			newarr.push(all[i]);
		}
	}
	    else if(type="b"){//判断类型是否是元素节点+文本节点
			if(all[i].nodeType==1 || all[i].nodeType==3 && all[i].nodeValue.replace(/^\s*|\s*$/g,"")!=""){
				//判断类型是否是元素节点或者文本节点并且删除文本前后的空格字符
				// 还不能让这个文本成为一个空字符
			newarr.push(all[i]);	
	    }
		
	    };
     
   }
   return newarr;
}



/********************************************************************/
// 获取第一个子节点兼容函数
function getFirst(father){
	return getChild(father)[0];
}

//获取最后一个子节点兼容函数
function getLast(father){
	return getChild(father)[getChild(father).length-1];
}
//获取中间的子节点兼容函数
function getNum(father,xiabiao){
	return getChild(father)[xiabiao];
}
//获取下一个兄弟节点兼容函数
function getNext(obj){
	var next=obj.nextSibling;//把输入参数的下一个兄弟节点赋给next
	if(!next){  //null Boolean(null) false 如果不是！则返回假，直接跳过该if语句
		return;
	}
	while(next.nodeType==3 || next.nodeType==8){//判断是否是文本节点或者是注释节点
		next=next.nextSibling;//返回覆盖
		if(!next){  //null Boolean(null) false
		return;
	    }
	}
	return next;//返回值
}
//获取上一个兄弟节点兼容函数
function getPrevious(obj){
	var last=obj.previousSibling;//把输入参数的上一个兄弟节点赋给last
	if(!last){  //null Boolean(null) false
		return;
	}
	while(last.nodeType==3 || last.nodeType==8){//判断是否是文本节点或者是注释节点
		last=last.previousSibling;//返回覆盖
		if(!last){  //null Boolean(null) false 如果不是！则返回假，直接跳过该if语句
		return;
	    }
	}
	return last;//返回值
}



/*******************************************************************/
//2016 09 06
//同一事件源绑定多个相同的事件的兼容函数
function addEvent(obj,event,fun){
	obj[fun]=function(){
		fun.call(obj);
	}
	if(obj.attachEvent){
		obj.attachEvent("on"+event,obj[fun]);
		// obj.xx.call(window);改变指针对象从window指向对象
	}else{
		obj.addEventListener(event,obj[fun],false);
	}
}



/*******************************************************************/
//2016 09 06
//同一事件源移除多个相同的事件的兼容函数
function removeEvent(obj,event,fun){

	if(obj.detachEvent){
		obj.detachEvent("on"+event,obj[fun]);
	}else{
		obj.removeEventListener(event,obj[fun],false)
	}
}



//hover
//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }


//12、滚轮事件的兼容函数
function mouseWheel(obj,up,down){
	if (obj.attachEvent) {
		obj.attachEvent("onmousewheel",scrollFn);//IE、opera
	} else if(obj.addEventListener){
		obj.addEventListener("mousewheel",scrollFn,false);//chrome,safari  -webkit-
		obj.addEventListener("DOMMouseScroll",scrollFn,false);//firefox  -moz-
	};
	function scrollFn(e){
		e=e||window.event;
		//FF  -3:向上		3:向下
			// alert(e,detail)
		//IE  120:向上		120:向下
			// alert(e,wheelDelta)
		if(e.preventDefault){
			e.preventDefault
		}else{
			e.returnValue=false;
		}	

		var f=e.detail||e.wheelDelta;
		if (f==-3||f==120) {
			if(up){
				up();
			}
		} else if(f==3||f==-120){
			if(down){
				down();
			};
		};
	};
};
//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
//2016 09 08
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }
/********************************/
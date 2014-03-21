


function picturs(){
	var goodsimg = document.getElementById("goodsimg");
	var imglist = document.getElementById("imglist");
	var imgnum = imglist.getElementsByTagName("img");
	for(var i = 0; i<imgnum.length; i++){
		imgnum[i].onclick=function(){
			var lang = this.getAttribute("lang");
			goodsimg.setAttribute("src",lang);
			for(var j=0; j<imgnum.length; j++){
				if(imgnum[j].getAttribute("class") =="onbg" || imgnum[j].getAttribute("className") =="onbg"){
					imgnum[j].className = "autobg";
					break;
				}
			}
			this.className = "onbg";
		}
	}
}

function colorStyle(id,color1,color2){
  var elem = document.getElementById(id);
  if(elem.getAttribute("id") == id){
	  //elem.className = color1;
	  if(elem.className == color1)
		   elem.className = color2;
		else
		   elem.className = color1; 
	}
}

function articleSize(size,lineheight){
var article = document.getElementById("article");
article.style.fontSize = size+"px";
article.style.lineHeight = lineheight+"px";
}

function elems(id,cur){
var id = document.getElementById(id).getElementsByTagName("li");
for(var i=0; i<id.length; i++)
 {
	 id[0].className = "cur";
   id[i].onmouseover = function()
   {
    this.className="";
		for(var j=0; j<id.length; j++)
		{
			 if((id[j].getAttribute("class") == cur) || (id[j].getAttribute("className") == cur))
			 {
			 id[j].className = "";
			 break;
			 }
		}
	this.className = cur;	
   }
 }
}

//点击切换背景图片效果

function mypicBg(){
	
	var imglist = document.getElementById("imglist");
	var imgnum = imglist.getElementsByTagName("img");
	for(var i = 0; i<imgnum.length; i++){
		imgnum[i].onclick=function(){
			
			for(var j=0; j<imgnum.length; j++){
				if(imgnum[j].getAttribute("class") =="onbg" || imgnum[j].getAttribute("className") =="onbg"){
					imgnum[j].className = "autobg";
					break;
				}
			}
			this.className = "onbg";
		}
	}
}


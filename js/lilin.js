$(function(){
	$(".rightdom12>.select>.xiala").eq(0).click(function(){
		$(".rightdom12>.erji").slideToggle(10,function(){
		})
	})
	$(".rightdom12>.select>.xiala").eq(1).click(function(){
		$(".rightdom12>.erji1").slideToggle(10,function(){
		})
	})

    $(".rightdom .imghtml a").click(function(){
    	$(".bottom1").css("display","block")
    })


	$(".rightdom12 .erji li").click(function(){
		$(".rightdom12>.erji ").css("display","none")
		$(".rightdom12>.erji2").css("display","block")
	})
	$(".rightdom12 .erji2 li").eq(0).click(function(){
		$(".rightdom12>.erji ").css("display","block")
		$(".rightdom12>.erji2").css("display","none")
	})


	// $(".erji1 li").eq(0).click(function(){
	// 	$(".erji1 li span i").css("display","block")
	// })
     $(".erji1 li").click(function(){
     	var index=$(this).index(".erji1 li");
     	$(".erji1 li span i").eq(index).css("display","block");
     })



     $(".rightdom13").eq(0).css("display","none");
     $(".rightdom12 .erji1 li").click(function(){
          $(".rightdom13").eq(0).css("display","block");
          $(".rightdom13").eq(1).css("display","none");
     })


      $("#banner1>.btns").mouseover(function(){
    	$("#banner1 .btns span").css({
    		background:"#fff",
    		color:"#363636"
    	})
    	$("#banner1 .btns p").css("text-decoration","underline")
      })
      $("#banner1>.btns").mouseout(function(){
    	$("#banner1 .btns span").css({
    		background:"",
    		color:"#fff"
    	})
    	$("#banner1 .btns p").css("text-decoration","none")
      })
       $("#banner1>.rigs").mouseover(function(){
    	$("#banner1 .rigs span").css({
    		background:"#fff",
    		color:"#363636"
    	})
    	$("#banner1 .rigs p").css("text-decoration","underline")
      })
        $("#banner1>.rigs").mouseout(function(){
    	$("#banner1 .rigs span").css({
    		background:"",
    		color:"#fff"
    	})
    	$("#banner1 .rigs p").css("text-decoration","none")
      })

      
     function sce(obj){
     	$(obj+" a").eq(1).css({
     		background:"#31A2AC",
     		lineHeight: "50px",
     		textAlign: "center",
     		fontSize:"14px",
     		color:"#fff"
     	}).mouseover(function(){
     		$(this).css("background","#2D939C")
     	}).mouseout(function(){
     		$(this).css("background","#31A2AC")
     	})
     	$(obj+" a").eq(3).css({
     		background:"#31A2AC",
     		lineHeight: "50px",
     		textAlign: "center",
     		fontSize:"14px",
     		color:"#fff"
     	}).mouseover(function(){
     		$(this).css("background","#2D939C")
     	}).mouseout(function(){
     		$(this).css("background","#31A2AC")
     	})
     	$(obj+" a").eq(5).css({
     		background:"#31A2AC",
     		lineHeight: "50px",
     		textAlign: "center",
     		fontSize:"14px",
     		color:"#fff"
     	}).mouseover(function(){
     		$(this).css("background","#2D939C")
     	}).mouseout(function(){
     		$(this).css("background","#31A2AC")
     	})
     	$(obj+" a").eq(7).css({
     		background:"#31A2AC",
     		lineHeight: "50px",
     		textAlign: "center",
     		fontSize:"14px",
     		color:"#fff"
     	}).mouseover(function(){
     		$(this).css("background","#2D939C")
     	}).mouseout(function(){
     		$(this).css("background","#31A2AC")
     	})
     }
       
     sce("#sce")
    function lunbo(father){
	// $(father+">.imgbox>a").hide().eq(0).show();
	var num=0;
	function move(){
		num++;
		if(num >= $(father+">.imgbox>a").length){
			num=0;
		}
		$(father+">.imgbox>a").fadeOut(10).eq(num).fadeIn(10);
		$(father+">.lunbo>div").removeClass("active").eq(num).addClass("active")
	}
	// var t=setInterval(move)

	$(father+">.lunbo>div").mouseover(function(){
		// $(father+">.imgbox>a").stop(true,true)
		var index=$(this).index();
		$(father+">.lunbo>div").removeClass().eq(index).addClass("active")
		$(father+">.imgbox>a").fadeOut(10).eq(index).fadeIn(10)
		num=index;
	})
	// $(father+".rightdom14").mouseover(function(){
	// 	// clearInterval(t);
	// 	$(father+">.btns").css({
	// 		display:"block"
	// 	})
	// 	$(father+">.rigs").css({
	// 		display:"block"
	// 	})
	// })
	// $(father+".rigshtdom14").mouseout(function(){
	// 	// t=setInterval(move,2000)
	// 	$(father+">.btns").css({
	// 		display:"none"
	// 	})
	// 	$(father+">.rigs").css({
	// 		display:"none"
	// 	})
	// })
	$(father+">.btns").click(function(){
		yidong("left")
	})
	$(father+">.rigs").click(function(){
		yidong("right")
	})
	function yidong(type){
		type=type||"right"
		if(type=="left"){
			num--
			if(num<0){
				num=$(father+">.imgbox>a").length-1
			}
		}
		if(type=="right"){
			num++;
			if(num>$(father+">.imgbox>a").length-1){
				num=0
			}
		}
		$(father+">.imgbox>a").fadeOut(10).eq(num).fadeIn(10)
		$(father+">.lunbo>div").removeClass().eq(num).addClass("active")
	}
   }
    lunbo("#banner1");


})
jQuery.extend({
	yincan:function(obj){
		$(".rightdom8>.our2").click(function(){
   		$(".rightdom8>.our4").slideToggle(10,function(){
   			$(this).css("display","black")
   		});
   	   })
		$(".rightdom8>.our4>.our3").click(function(){
   		$(".rightdom8>.our4").slideToggle(10,function(){
   			$(this).css("display","none")
   		});
   	   })
	}
})
jQuery.extend({
	xiaoshi:function(obj){
		$(".bottom1>.head>.head2").click(function(){
			$(".bottom1").css("display","none")
		})
	}
})	
jQuery.extend({
	chuxian:function(obj){
		$(".bottom").click(function(){
			$(".bottom1").css("display","block")
		})
	}
})
jQuery.extend({
	chuxian1:function(obj){
		$(".concuty>.shang>.shang1>.jian1").click(function(){
			$(".concuty>.shang>.shang1>.jian").css("display","block");
			$(".concuty>.shang>.shang1>.jian1").css("display","none");
			$(".denglu").css("display","block")
		})
	}
})
jQuery.extend({
	chuxian2:function(obj){
		$(".concuty>.shang>.shang1>.jian").click(function(){
			$(".denglu").css("display","none");
			$(".concuty>.shang>.shang1>.jian").css("display","none"),
			$(".concuty>.shang>.shang1>.jian1").css("display","block");
		})
	}
})
jQuery.extend({
	chuxian3:function(obj){
		$(".concuty>.xia>.xia1>.dd").click(function(){
			$(".guojia").css("display","block")
			$(".concuty>.xia>.xia1>.cc").css("display","block")
			$(".concuty>.xia>.xia1>.dd").css("display","none")
		})
	}
})
jQuery.extend({
	chuxian4:function(obj){
		$(".concuty>.xia>.xia1>.cc").click(function(){
			$(".guojia").css("display","none")
			$(".concuty>.xia>.xia1>.cc").css("display","none")
			$(".concuty>.xia>.xia1>.dd").css("display","block")
		})
	}
})
jQuery.extend({
	chuxian5:function(obj){
		$(".concuty>.xia>.xia2>.ff").click(function(){
			$(".yuyan").css("display","none")
			$(".concuty>.xia>.xia2>.ff").css("display","none")
			$(".concuty>.xia>.xia2>.gg").css("display","block")
		})
	}
})
jQuery.extend({
	chuxian6:function(obj){
		$(".concuty>.xia>.xia2>.gg").click(function(){
			$(".yuyan").css("display","block")
			$(".concuty>.xia>.xia2>.ff").css("display","block")
			$(".concuty>.xia>.xia2>.gg").css("display","none")
		})
	}
})
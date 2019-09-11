    var pageFun = {
      	init:function(){
      		this.preloadImg();       //预加载图片
      		this.scrollFixHeader();  //滚动后头部固定功能
      		this.toTop();            //回到顶部功能
      		this.lazyImg();          //图片懒加载功能
      	},
      	constant:{
           status:0
      	},
	      scrollFixHeader:function(){
	    	var that = this;
	    	var nav=$(".one"); //得到导航对象
			  var win=$(window); //得到窗口对象
			  var sc=$(document);//得到document文档对象。
			  win.scroll(function(){
			  if(win.scrollTop()>=50){
               if((that.constant.status - 0)){
                   win.scrollTop(0)
               }else{
               	  nav.addClass("fix");
               }
                that.constant.status = 0;   
			  }else{
                if((that.constant.status-0)){
                   win.scrollTop(0)
                }
                 nav.removeClass("fix");	
                  that.constant.status = 0;   		  
			  }
		  });
		},
		    toTop:function(){
		    $("#gotop").click(function(e) {
	             //以1秒的间隔返回顶部
	             $('body,html').animate({scrollTop:0},500);
		    });

		    $("#gotop").mouseover(function(e) {
		         $(this).css("background","url(img/toTop.svg) no-repeat 0px 0px");
		    });

		    $("#gotop").mouseout(function(e) {
		    $(this).css("background","url(img/toTop.svg) no-repeat -70px 0px");
		    });

           $(window).scroll(function(e) {
		         if($(window).scrollTop()>600){
		         	  $("#gotop").fadeIn(1000);//以1秒的间隔渐显id=gotop的元素
		         	  $("#gotop").css("background","url('img/toTop.svg') 0px 0px no-repeat");
		         } else{
		              $("#gotop").fadeOut(1000);//以1秒的间隔渐隐id=gotop的元素
		         }
		    });
		},
   	  	lazyImg:function(){
					$("img.lazy").lazyload({  threshold : 50,placeholder : "img/white.gif",effect: "fadeIn"});
				}
    }

	 $(function(){
	    pageFun.init();
	 }); 	

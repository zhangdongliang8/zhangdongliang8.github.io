    var pageFun = {
      	init:function(){
      		this.preloadImg();       //预加载图片
      		this.scrollFixHeader();  //滚动后头部固定功能
      		this.toTop();
      		this.tabClick();         //tab选项切换功能
      		this.lazyImg();          //图片懒加载功能
      		this.swiperFun();        //图片轮播功能             
      	},
      	constant:{
           status:0
      	},
      	preloadImg:function(){

            var imgs = [
              "img/jz/lb1_1.jpg",
              "img/jz/lb1_2.jpg",
              "img/jz/lb1_3.jpg",
              "img/jz/lb1_4.jpg"        
            ];

	        var index = 0,
	            len = imgs.length,
	            progressInner = $(".xl-progress__inner"),
	            progressTxt = $('.xl-progress__txt');


	        //图片预加载
	        $.preload(imgs, {
	            // 是否有序加载
	            order: false,
	            minTimer: 3000,
	            //每加载完一张执行的方法
	            each: function (count) {
	            	var percent = Math.round((count+1) / len * 100) + '%';
                    progressInner.css("width",percent);
                    progressTxt.html(percent);
	               $(".preloadImg").eq(count).attr("src", imgs[count]);

	            },
	            // 加载完所有的图片执行的方法
	            end: function () {
	                $('.loading').hide();
	            }
	        });
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
		tabClick:function(){
			var that = this;
			$(".headerUl li").on("click",function(){
				$(".headerUl a").removeClass("current");        
	            $(this).find("a").addClass("current");
				var index = $(this).index();
				console.log(index);
				$(".tabClass").hide();
	            $(".tabClass").eq(index).show();      
	            that.constant.status = 1;    

	           if(index == 3){
	           	var swiper3 = new Swiper('.swiper-container3', {
			      spaceBetween: 30,
			      centeredSlides: true,
			      autoplay: {
			        delay: 2500,
			        disableOnInteraction: false,
			      },
			      pagination: {
			        el: '.swiper-pagination3',
			        clickable: true,
			      }
			    });
	           }
			});
		},
		lazyImg:function(){
		  $("img.lazy").lazyload({  threshold : 200,placeholder : "img/grey.gif",effect: "fadeIn"});
		},
		swiperFun:function(){
			var swiper1 = new Swiper('.swiper-container', {
		      spaceBetween: 30,
		      centeredSlides: true,
		      autoplay: {
		        delay: 2500,
		        disableOnInteraction: false,
		      },
		      pagination: {
		        el: '.swiper-pagination',
		        clickable: true,
		      }
		    });

		    var swiper2 = new Swiper('.swiper-container2', {
		      slidesPerView: 3,
		      spaceBetween: 5
		    });
        }
    }  

	 $(function(){
	    pageFun.init();
	 }); 	

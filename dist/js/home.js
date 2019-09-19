var pageFun = {
  init:function(){
    this.preloadImg();       //预加载图片
    this.scrollFixHeader();  //滚动后头部固定功能
    this.toTop();            //回到顶部功能
    this.tabClick();         //tab选项切换功能
    this.lazyImg();          //图片懒加载功能
    this.swiperFun();        //图片轮播功能
    //this.DzImgLoad();        //定制家具轮播图片预加载
  },
  constant:{
    status:0
  },
  preloadImg:function(){
    var imgs = [
      "img/jz/lb1_4.jpg",
      "img/jz/lb1_2.jpg"
    ];

    var index = 0,
      len = imgs.length,
      progressInner = $(".xl-progress__inner"),
      progressTxt = $('.xl-progress__txt');

    //图片预加载
    $.preload(imgs, {
      // 是否有序加载
      order: false,
      minTimer: 2000,
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
  DzImgLoad:function(){
    var arr = [
      "img/dz/a.jpg",
      "img/dz/b.jpg",
      "img/dz/c.jpg",
      "img/dz/d.jpg"
    ];
    var imgs = [];
    for(var j=0;j<arr.length;j++){
      imgs[j] = new Image();
      imgs[j].src = arr[j];
    }

    setTimeout(function(){
      var _imgArr = document.querySelectorAll(".preloadImg_dz");
      console.log(_imgArr);
      for(var i=0;i<arr.length;i++){
        _imgArr[i].setAttribute("src", imgs[i].src);
      }
    },7000);
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
      $(this).css("background","url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgc3R5bGU9IndpZHRoOiAxZW07IGhlaWdodDogMWVtO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ZmlsbDogcmVkO292ZXJmbG93OiBoaWRkZW47IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcC1pZD0iMTg1NyI+PHBhdGggZD0iTTc1MC40MDkzNjYgODc4LjIwOTU2NnMxMC42MjYwMTItNjYuMDc3OTUxLTU0Ljg4ODA5Ny0xNDYuODQ0NDRjNjMuNzM2NjI3LTE4NS40MDU2ODcgNjYuODUxNTcxLTI5MS4xODg5NDIgNjYuODUxNTctMjkxLjE4ODk0MXMxMzEuMDEyODY5IDMxLjIwMTYyOSAxMzEuMDEyODY5IDE2NS4xOTQzNjZjMC4wMDgxODYgMjI5LjQ4MTUzMi0xNDIuOTc2MzQyIDI3Mi44MzkwMTUtMTQyLjk3NjM0MiAyNzIuODM5MDE1ek0zODkuMjQ4NzkzIDc5Ny42NTU5MjVzLTkzLjQ4MjA5MS0yMjguODYzNDU1LTkzLjQ4MjA5MS0zNTAuMDE2NzY4YzAtNTQuNDk0MTI1IDUuOTA0NDc3LTY4LjU2NTYwOSAxNS4xMjQ0NjYtMTEyLjU2MTYzNmgzOTkuODAxNjM4YzkuMjg3NTI3IDQ0LjAyODc3MiAxNS4yMzcwMjkgNTguMTQwMTY1IDE1LjIzNzAzIDExMi41OTk0OTggMCAxMTkuMzIzNjQzLTgxLjc0NjgxNiAzNDkuOTc4OTA2LTgxLjc0NjgxNiAzNDkuOTc4OTA2SDM4OS4yNDg3OTN6IG0xMjEuNDMzNy00MTguNzc5ODc1Yy00NC45NzYzNTQgMC04MS40Mzc3NzcgMzcuNzk5OTA4LTgxLjQzNzc3NyA4NC40NDUyNzQgMCA0Ni42Mjg5OTQgMzYuNDYxNDIzIDg0LjQyOTkyNSA4MS40Mzc3NzcgODQuNDI5OTI1IDQ0Ljk4MTQ3MSAwIDgxLjQ0MzkxNy0zNy44MDA5MzEgODEuNDQzOTE3LTg0LjQyOTkyNSAwLTQ2LjYzOTIyNy0zNi40NjI0NDYtODQuNDQ1Mjc0LTgxLjQ0MzkxNy04NC40NDUyNzR6TTQ5My4xNDkxNjUgODcuNzc0MDg5VjY0LjU3Njc2MWgzMS42OTk5Nzl2MjYuMDE0NDljMzYuMjMzMjI2IDI3LjM1Mjk3NSAxMzQuMzAxNzc1IDQ1LjQ3OTgyMSAxNzguNjM5NTg3IDIxMy4wNTg0OUgzMTguMDIyNTg5YzQyLjg0MTczNy0xNjIuOTI4NzY2IDEzNi4xNjExMjMtMTg1Ljg3MzMzOCAxNzUuMTI2NTc2LTIxNS44NzU2NTJ6TTI4My4wMjI0NDcgODc4LjIwOTU2NnMtMTU0LjQ1NTc5MS00My4zNTc0ODQtMTU0LjQ1NTc5MS0yNzIuODM5MDE1YzAtMTMzLjk5MjczNyAxMzEuMDEyODY5LTE2NS4xOTQzNjYgMTMxLjAxMjg2OS0xNjUuMTk0MzY2czAuOTE4OTI5IDEyMC41ODIzMDkgNzguMzIzODU3IDI5MS4xODg5NDFjLTY1LjUwNzk3IDgwLjc2NjQ4OC01NC44ODA5MzUgMTQ2Ljg0NDQzOS01NC44ODA5MzUgMTQ2Ljg0NDQ0eiBtMjg3LjMxMjY1OCAxNi45NjEzbC0yNi41NjQwMDYtMjcuNTI1OTEzLTI4LjMyMjA0NSA5MS43NzgyODYtMzMuNjM3MDk5LTkxLjc3ODI4Ni0yMy4wMTkyNzIgNDcuNzI1OTc4LTMzLjYzODEyMi04Ni4yNzY5OTNoMTgyLjM1ODI4MWwtMzcuMTc3NzM3IDY2LjA3NjkyOHoiIHAtaWQ9IjE4NTgiPjwvcGF0aD48L3N2Zz4=) no-repeat 0px 0px");
    });

    $("#gotop").mouseout(function(e) {
      $(this).css("background","url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgc3R5bGU9IndpZHRoOiAxZW07IGhlaWdodDogMWVtO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ZmlsbDogcmVkO292ZXJmbG93OiBoaWRkZW47IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcC1pZD0iMTg1NyI+PHBhdGggZD0iTTc1MC40MDkzNjYgODc4LjIwOTU2NnMxMC42MjYwMTItNjYuMDc3OTUxLTU0Ljg4ODA5Ny0xNDYuODQ0NDRjNjMuNzM2NjI3LTE4NS40MDU2ODcgNjYuODUxNTcxLTI5MS4xODg5NDIgNjYuODUxNTctMjkxLjE4ODk0MXMxMzEuMDEyODY5IDMxLjIwMTYyOSAxMzEuMDEyODY5IDE2NS4xOTQzNjZjMC4wMDgxODYgMjI5LjQ4MTUzMi0xNDIuOTc2MzQyIDI3Mi44MzkwMTUtMTQyLjk3NjM0MiAyNzIuODM5MDE1ek0zODkuMjQ4NzkzIDc5Ny42NTU5MjVzLTkzLjQ4MjA5MS0yMjguODYzNDU1LTkzLjQ4MjA5MS0zNTAuMDE2NzY4YzAtNTQuNDk0MTI1IDUuOTA0NDc3LTY4LjU2NTYwOSAxNS4xMjQ0NjYtMTEyLjU2MTYzNmgzOTkuODAxNjM4YzkuMjg3NTI3IDQ0LjAyODc3MiAxNS4yMzcwMjkgNTguMTQwMTY1IDE1LjIzNzAzIDExMi41OTk0OTggMCAxMTkuMzIzNjQzLTgxLjc0NjgxNiAzNDkuOTc4OTA2LTgxLjc0NjgxNiAzNDkuOTc4OTA2SDM4OS4yNDg3OTN6IG0xMjEuNDMzNy00MTguNzc5ODc1Yy00NC45NzYzNTQgMC04MS40Mzc3NzcgMzcuNzk5OTA4LTgxLjQzNzc3NyA4NC40NDUyNzQgMCA0Ni42Mjg5OTQgMzYuNDYxNDIzIDg0LjQyOTkyNSA4MS40Mzc3NzcgODQuNDI5OTI1IDQ0Ljk4MTQ3MSAwIDgxLjQ0MzkxNy0zNy44MDA5MzEgODEuNDQzOTE3LTg0LjQyOTkyNSAwLTQ2LjYzOTIyNy0zNi40NjI0NDYtODQuNDQ1Mjc0LTgxLjQ0MzkxNy04NC40NDUyNzR6TTQ5My4xNDkxNjUgODcuNzc0MDg5VjY0LjU3Njc2MWgzMS42OTk5Nzl2MjYuMDE0NDljMzYuMjMzMjI2IDI3LjM1Mjk3NSAxMzQuMzAxNzc1IDQ1LjQ3OTgyMSAxNzguNjM5NTg3IDIxMy4wNTg0OUgzMTguMDIyNTg5YzQyLjg0MTczNy0xNjIuOTI4NzY2IDEzNi4xNjExMjMtMTg1Ljg3MzMzOCAxNzUuMTI2NTc2LTIxNS44NzU2NTJ6TTI4My4wMjI0NDcgODc4LjIwOTU2NnMtMTU0LjQ1NTc5MS00My4zNTc0ODQtMTU0LjQ1NTc5MS0yNzIuODM5MDE1YzAtMTMzLjk5MjczNyAxMzEuMDEyODY5LTE2NS4xOTQzNjYgMTMxLjAxMjg2OS0xNjUuMTk0MzY2czAuOTE4OTI5IDEyMC41ODIzMDkgNzguMzIzODU3IDI5MS4xODg5NDFjLTY1LjUwNzk3IDgwLjc2NjQ4OC01NC44ODA5MzUgMTQ2Ljg0NDQzOS01NC44ODA5MzUgMTQ2Ljg0NDQ0eiBtMjg3LjMxMjY1OCAxNi45NjEzbC0yNi41NjQwMDYtMjcuNTI1OTEzLTI4LjMyMjA0NSA5MS43NzgyODYtMzMuNjM3MDk5LTkxLjc3ODI4Ni0yMy4wMTkyNzIgNDcuNzI1OTc4LTMzLjYzODEyMi04Ni4yNzY5OTNoMTgyLjM1ODI4MWwtMzcuMTc3NzM3IDY2LjA3NjkyOHoiIHAtaWQ9IjE4NTgiPjwvcGF0aD48L3N2Zz4=) no-repeat -70px 0px");
    });

    $(window).scroll(function(e) {
      if($(window).scrollTop()>600){
        $("#gotop").fadeIn(1000);//以1秒的间隔渐显id=gotop的元素
        $("#gotop").css("background","url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgc3R5bGU9IndpZHRoOiAxZW07IGhlaWdodDogMWVtO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ZmlsbDogcmVkO292ZXJmbG93OiBoaWRkZW47IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcC1pZD0iMTg1NyI+PHBhdGggZD0iTTc1MC40MDkzNjYgODc4LjIwOTU2NnMxMC42MjYwMTItNjYuMDc3OTUxLTU0Ljg4ODA5Ny0xNDYuODQ0NDRjNjMuNzM2NjI3LTE4NS40MDU2ODcgNjYuODUxNTcxLTI5MS4xODg5NDIgNjYuODUxNTctMjkxLjE4ODk0MXMxMzEuMDEyODY5IDMxLjIwMTYyOSAxMzEuMDEyODY5IDE2NS4xOTQzNjZjMC4wMDgxODYgMjI5LjQ4MTUzMi0xNDIuOTc2MzQyIDI3Mi44MzkwMTUtMTQyLjk3NjM0MiAyNzIuODM5MDE1ek0zODkuMjQ4NzkzIDc5Ny42NTU5MjVzLTkzLjQ4MjA5MS0yMjguODYzNDU1LTkzLjQ4MjA5MS0zNTAuMDE2NzY4YzAtNTQuNDk0MTI1IDUuOTA0NDc3LTY4LjU2NTYwOSAxNS4xMjQ0NjYtMTEyLjU2MTYzNmgzOTkuODAxNjM4YzkuMjg3NTI3IDQ0LjAyODc3MiAxNS4yMzcwMjkgNTguMTQwMTY1IDE1LjIzNzAzIDExMi41OTk0OTggMCAxMTkuMzIzNjQzLTgxLjc0NjgxNiAzNDkuOTc4OTA2LTgxLjc0NjgxNiAzNDkuOTc4OTA2SDM4OS4yNDg3OTN6IG0xMjEuNDMzNy00MTguNzc5ODc1Yy00NC45NzYzNTQgMC04MS40Mzc3NzcgMzcuNzk5OTA4LTgxLjQzNzc3NyA4NC40NDUyNzQgMCA0Ni42Mjg5OTQgMzYuNDYxNDIzIDg0LjQyOTkyNSA4MS40Mzc3NzcgODQuNDI5OTI1IDQ0Ljk4MTQ3MSAwIDgxLjQ0MzkxNy0zNy44MDA5MzEgODEuNDQzOTE3LTg0LjQyOTkyNSAwLTQ2LjYzOTIyNy0zNi40NjI0NDYtODQuNDQ1Mjc0LTgxLjQ0MzkxNy04NC40NDUyNzR6TTQ5My4xNDkxNjUgODcuNzc0MDg5VjY0LjU3Njc2MWgzMS42OTk5Nzl2MjYuMDE0NDljMzYuMjMzMjI2IDI3LjM1Mjk3NSAxMzQuMzAxNzc1IDQ1LjQ3OTgyMSAxNzguNjM5NTg3IDIxMy4wNTg0OUgzMTguMDIyNTg5YzQyLjg0MTczNy0xNjIuOTI4NzY2IDEzNi4xNjExMjMtMTg1Ljg3MzMzOCAxNzUuMTI2NTc2LTIxNS44NzU2NTJ6TTI4My4wMjI0NDcgODc4LjIwOTU2NnMtMTU0LjQ1NTc5MS00My4zNTc0ODQtMTU0LjQ1NTc5MS0yNzIuODM5MDE1YzAtMTMzLjk5MjczNyAxMzEuMDEyODY5LTE2NS4xOTQzNjYgMTMxLjAxMjg2OS0xNjUuMTk0MzY2czAuOTE4OTI5IDEyMC41ODIzMDkgNzguMzIzODU3IDI5MS4xODg5NDFjLTY1LjUwNzk3IDgwLjc2NjQ4OC01NC44ODA5MzUgMTQ2Ljg0NDQzOS01NC44ODA5MzUgMTQ2Ljg0NDQ0eiBtMjg3LjMxMjY1OCAxNi45NjEzbC0yNi41NjQwMDYtMjcuNTI1OTEzLTI4LjMyMjA0NSA5MS43NzgyODYtMzMuNjM3MDk5LTkxLjc3ODI4Ni0yMy4wMTkyNzIgNDcuNzI1OTc4LTMzLjYzODEyMi04Ni4yNzY5OTNoMTgyLjM1ODI4MWwtMzcuMTc3NzM3IDY2LjA3NjkyOHoiIHAtaWQ9IjE4NTgiPjwvcGF0aD48L3N2Zz4=) 0px 0px no-repeat");
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
      //console.log(index);
      $(".tabClass").hide();
      $(".tabClass").eq(index).show();
      that.constant.status = 1;

      if(index == 3){
        new Swiper('.swiper-container3', {
          slidesPerView: 2,
          spaceBetween: 3,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          }
        });

        new Swiper('.swiper-container4', {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination4',
            clickable: true,
          }
        });

      }
    });
  },
  lazyImg:function(){
    $("img.lazy").lazyload({  threshold : 500,placeholder : "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",effect: "fadeIn"});
  },
  swiperFun:function(){
    var swiper1 = new Swiper('.swiper-container1', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination1',
        clickable: true,
      }
    });
  }
}

$(function(){
  pageFun.init();
});
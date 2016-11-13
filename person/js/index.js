$(function(){
//初始化 菜单的宽高
    var clientH=$(window).height();
    $(".bannerbox").css({
        height:clientH
    })
    $(".navs").css({
        height:clientH
    })

    $(".navtbox").click(function(){
        $(".navt").slideToggle(200);
        $(".navs").slideToggle(200);
    })

/*轮播图*/
    var now=0;
    var next=0;
    
    function wheel(type){
        var type=type||"right";
        if(type=="right"){
            next++;
            if(next>=$(".banrtimg").length){
                next=0;
            }
            $(".banrtimg").eq(now).animate({left:"-100%"});
            $(".banrtimg").eq(next).css("left","100%").animate({left:"0px"});
        }else if(type=="left"){
            next--;
            if(next<0){
                next=$(".banrtimg").length-1;
            }
            $(".banrtimg").eq(now).animate({left:"100%"});
            $(".banrtimg").eq(next).css("left","-100%").animate({left:"0px"});
        }
        now=next;
    }
    var t1=setInterval(wheel,3000)

    $(window).focus(function(){
        t1=setInterval(wheel,3000);
    })
    $(window).blur(function(){
        clearInterval(t1);
    })


   
    $(".banlbtn").click(function(){
        clearInterval(t1);
        wheel("left");
    })
    $(".banrbtn").click(function(){
        clearInterval(t1);
        wheel("right");
    })

// 楼层跳转
    var nav=$(".nav>li");
    var floor=$(".floor")

    // 判断浏览器，下面代码兼容谷歌
    document.documentElement.scrollTop=1;
    var obj=document.documentElement.scrollTop?document.documentElement:document.body;
    var now=0;//定义一个变量，指当前楼层
    //添加点击事件
        for (var i = 0; i < nav.length; i++) {
            nav[i].name=i;
            nav[i].onclick=function(){
                
            // obj.scrollTop=floor[this.name].offsetTop
            obj.animate({scrollTop:floor[this.name].offsetTop})
                
            }
        
        };


})
$(function () {
// 导航菜单
    $(".daohang li:first-child").click(function(){

    })


// 轮播图
    var nextc=0;
    var nowc=0;
    var time=0;
    var flag=true;
    function move() {
        nextc++;
        if(nextc==3){
            nextc=0;
            flag=false;
            $(".progress").css("width","0px");
        }
        $(".img:eq("+nowc+")").animate({width:"80%",height:"80%"}).css("zIndex",0);
        $(".img:eq("+nextc+")").animate({left:"0px"},function () {
            $(".img:eq("+nowc+")").css({left:"100%",width:"100%",height:"100%"});
            nowc=nextc;
            time=0;
            flag=true;
        }).css("zIndex",1)
    }
    function move1() {
        time+=50;
        var bili=time/3000;
        if(bili>1){
            bili=1;
        }
        $(".progress").eq(nowc).css({width:bili*100+"%"})
        if(flag==false){
            $(".progress").css("width",0);
        }
    }
    var a=setInterval(move,3000)
    var b=setInterval(move1,50)
    
    $(window).blur(function () {
        clearInterval(a)
        clearInterval(b)
    })
    $(window).focus(function () {
        a=setInterval(move,3000)
        b=setInterval(move1,50)
    })

    function  stop() {
        // 定时器停
        clearInterval(a)
        clearInterval(b)
        // 按钮变化
        $(".active").find(".progress").css("width",0);
        $(".active").eq(nextc).find(".progress").css("width","100%");
        // 轮播图
        if(nextc>nowc){
            $(".img:eq("+nowc+")").animate({width:"80%",height:"80%"}).css("zIndex",0);
            $(".img:eq("+nextc+")").animate({left:"0px"},function () {
                $(".img:eq("+nowc+")").css({left:"100%",width:"100%",height:"100%"});
                nowc=nextc;
            }).css("zIndex",1)
        }else{
            $(".img:eq("+nowc+")").animate({left:"100%"}).css("zIndex",1);
            $(".img:eq("+nextc+")").css({width:"80%",height:"80%",left:"0"})
                .animate({width:"100%",height:"100%"},function () {
                    nowc=nextc;
                })
            }
        }
        $(".active").click(function () {
            nextc=$(this).index(".active");
            stop();
        })
        $(".leftbtn").click(function () {
            nextc--;
            if(nextc==-1){
                nextc=2;
            }
            stop();
        })
        $(".rightbtn").click(function () {
            nextc++;
            if(nextc==3){
                nextc=0;
            }
            stop();
        })
})

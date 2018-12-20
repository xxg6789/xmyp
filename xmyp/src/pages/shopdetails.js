require(["../scripts/myjs/config"],function(){
    require(["jquery"],function($){
        $(function(){
        //    放大镜
            var oxqt=document.querySelector("#mahd .cont .mahd-l .xqt-b");
            var  oimg=oxqt.children[0];
            var  ospan=oxqt.children[1];
            var obbox=document.querySelector("#mahd .cont .mahd-l .b_box");
            var obimg=obbox.children[0];

            oxqt.onmouseover=function(){
                ospan.style.display="block";
                obbox.style.display="block";
                oimg.style.opacity=0.6;
                oxqt.onmousemove=function(eve){
                    var e = eve || window.event;
                    var l=e.clientX-oxqt.offsetLeft-ospan.offsetWidth/2
                    var t=e.clientY-oxqt.offsetTop-ospan.offsetHeight/2
                    
                    if(l<0){
                        l=0
                    }
                    if(t<0){
                        t=0
                    }
                    if(l>oxqt.offsetWidth-ospan.offsetWidth){
                        l=oxqt.offsetWidth-ospan.offsetWidth
                    }
                    if(t>oxqt.offsetHeight-ospan.offsetHeight){
                        t=oxqt.offsetHeight-ospan.offsetHeight
                    }
                    ospan.style.left=l+"px"
                    ospan.style.top=t+"px"
                    var x=l/(oxqt.offsetWidth-ospan.offsetWidth)
                    var y=t/(oxqt.offsetHeight-ospan.offsetHeight)
                    obimg.style.left=-(obimg.offsetWidth-obbox.offsetWidth)*x+"px"
                    obimg.style.top=-(obimg.offsetHeight-obbox.offsetHeight)*y+"px"
                    
                }
            }
            oxqt.onmouseout=function(){
                ospan.style.display="none"
                obbox.style.display="none"
                oimg.style.opacity=1
            }
            var ali=document.querySelector("#mahd .cont .mahd-l .list").children
                for(var i=0;i<ali.length;i++){
                    ali[i].onclick=function(){
                        oimg.src=this.children[0].src
                        obimg.src=this.children[0].src
                        
                    }
                }
            
        })
    })
})
require(["../scripts/myjs/config"],function(){
    require(["jquery","jqcookie"],function(){


        var $btn = $("#btn");
        var $user = $("#user")
        var $pass = $("#pass")
        
        if($.cookie("zhmms")){
            var $zhmms =JSON.parse( $.cookie("zhmms"))
        }else{
            var $zhmms = []
        }

        $btn.click(function(){

            var onoff=true;

            $.each($zhmms,function(index,item){
                if(item.user == $user.val() && item.pass == $pass.val()){
                    alert("登录成功")
                    onoff=false;
                }
            })

            if(onoff){
                alert("登录失败")
            }


            // for(var i=0;i<$zhmms.length;i++){
            //     if($zhmms[i].user == $user.val() && $zhmms[i].pass == $pass.val()){
            //         alert("登录成功")
            //         break;
            //     }else{
            //         alert("登录失败")
                    
            //     }
            // }
        })
        




    })
})
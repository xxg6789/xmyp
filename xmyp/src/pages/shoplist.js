require(["../scripts/myjs/config"],function(){
    require(["jquery","jqcookie"],function($){
        $(function(){
            
                
                    
                    class Shop{
                        constructor(options){
                            this.prodlist = options.prodlist;
                            this.url = options.url;
                            this.jspcb = options.jspcb;
                            
                            this.load()
                        }
                        load(){
                            var that = this;
                            $.ajax({
                                url:this.url,
                                type:"GET",
                                jsonp:"callback",
                                dataType:"jsonp",
                                jsonpCallback:this.jspcb,
                                success:function(res){
                                    that.res = res;
                                    that.display()
                                }
                            })
                        }
                        display(){
                            var str = ""
                            $.each(this.res, function(index,value) {
                                   
                                str += `<div class="lisitem" index="${value.productid}">
                                            <div class="imgbox"><img src="${value.src}" alt=""></div>
                                            
                                            <p class="descrip over">${value.ds}</p>
                                            <p class="price">
                                                <span class="bicon">￥</span>
                                                <span class="money">${value.pr}</span>
                                                <span class="cuxiao">直降</span>
                                            </p>
                                            <p class="gwcar">加入购物车</p>
                                	    </div>`
                            });
                            this.prodlist.html(str)
                            
                            this.addEvent()
                        }
                        addEvent(){
                            var that = this;
                            this.prodlist.on("click",".gwcar",function(){
                                that.id = $(this).parent().attr("index");
                               
                                that.setCookie()
                            })
                        }
                        setCookie(){
                            if(!$.cookie("goods")){
                            
                                this.goods = []
                            }else{
                                 this.goods = JSON.parse($.cookie("goods"))
                            }
                          
                            if(this.goods.length < 1){
            
                                this.goods.push({
                                    id:this.id,
                                    num:1
                                })
                            }else{
                                var that = this;
           
                                var onOff = true;
                                $.each(this.goods,function(index,value){
                                    if(value.id == that.id){		
            						
                                        that.goods[index].num++;	
                                        onOff = false				
                                    }
                                })
                                if(onOff){	
           						
                                    this.goods.push({
                                        id:this.id,
                                        num:1
                                    })
                                }
                            }
          
                            $.cookie("goods",JSON.stringify(this.goods))
                            
            
                            console.log(JSON.parse($.cookie("goods")))
                        }
                    }
                    new Shop({
                        jspcb:"xiaomi",
                        url:"https://flight.gome.com.cn/flight?callback=xiaomi&p=10044&catid=cat10000070&searchkey=%E5%8D%8E%E4%B8%BA%E6%89%8B%E6%9C%BA&c=xiaomi&width_height=210-210&area=21010100&requestType=3&_=1545202124515",
                        prodlist:$(".prodlist")
                    })
                    

                    // // 渲染
                    // var data = res.result.uClassList.data;
                    // var data1=data[1].data
                    // var str1='';
                    // $.each(data1,function(index,ele){
                    //     $(".pdlis1").html(
                    //         str1 +=`
                    //         <div class="lisitem" gid="${ele.gid}">
                    //             <div class="imgbox"><img src="${ele.pic_url}" alt=""></div>
                    //             <p class="name">${ele.name}</p>
                    //             <p class="descrip over">${ele.summary}</p>
                    //             <p class="price">
                    //                 <span class="bicon">￥</span>
                    //                 <span class="money">${ele.price_min/100}</span>
                    //                 <span class="cuxiao">直降</span>
                    //             </p>
                    //             <p class="gwcar">加入购物车</p>
					// 	    </div>
                    //         `
                    //     )
                    // })

                    // var data2=data[2].data
                    // var str2='';
                    // $.each(data2,function(index,ele){
                    //     $(".pdlis2").html(
                    //         str2 +=`
                    //         <div class="lisitem" gid="${ele.gid}">
                    //             <div class="imgbox"><img src="${ele.pic_url}" alt=""></div>
                    //             <p class="name">${ele.name}</p>
                    //             <p class="descrip over">${ele.summary}</p>
                    //             <p class="price">
                    //                 <span class="bicon">￥</span>
                    //                 <span class="money">${ele.price_min/100}</span>
                    //                 <span class="cuxiao">直降</span>
                    //             </p>
                    //             <p class="gwcar">加入购物车</p>
					// 	    </div>
                    //         `
                    //     )
                    // })

                    // var data3=data[3].data
                    // var str3='';
                    // $.each(data3,function(index,ele){
                    //     $(".pdlis3").html(
                    //         str3 +=`
                    //         <div class="lisitem" gid="${ele.gid}">
                    //             <div class="imgbox"><img src="${ele.pic_url}" alt=""></div>
                    //             <p class="name">${ele.name}</p>
                    //             <p class="descrip over">${ele.summary}</p>
                    //             <p class="price">
                    //                 <span class="bicon">￥</span>
                    //                 <span class="money">${ele.price_min/100}</span>
                    //                 <span class="cuxiao">直降</span>
                    //             </p>
                    //             <p class="gwcar">加入购物车</p>
					// 	    </div>
                    //         `
                    //     )
                    // })

                    // var data4=data[4].data
                    // var str4='';
                    // $.each(data4,function(index,ele){
                    //     $(".pdlis4").html(
                    //         str4 +=`
                    //         <div class="lisitem" gid="${ele.gid}">
                    //             <div class="imgbox"><img src="${ele.pic_url}" alt=""></div>
                    //             <p class="name">${ele.name}</p>
                    //             <p class="descrip over">${ele.summary}</p>
                    //             <p class="price">
                    //                 <span class="bicon">￥</span>
                    //                 <span class="money">${ele.price_min/100}</span>
                    //                 <span class="cuxiao">直降</span>
                    //             </p>
                    //             <p class="gwcar">加入购物车</p>
					// 	    </div>
                    //         `
                    //     )
                    // })

                    // var data5=data[5].data
                    // var str5='';
                    // $.each(data5,function(index,ele){
                    //     $(".pdlis5").html(
                    //         str5 +=`
                    //         <div class="lisitem" gid="${ele.gid}">
                    //             <div class="imgbox"><img src="${ele.pic_url}" alt=""></div>
                    //             <p class="name">${ele.name}</p>
                    //             <p class="descrip over">${ele.summary}</p>
                    //             <p class="price">
                    //                 <span class="bicon">￥</span>
                    //                 <span class="money">${ele.price_min/100}</span>
                    //                 <span class="cuxiao">直降</span>
                    //             </p>
                    //             <p class="gwcar">加入购物车</p>
					// 	    </div>
                    //         `
                    //     )
                    // })


                    // // 选择商品
                    // // console.log(data[5].data[0].gid)

                    // $("#main .cont .typegoods .prodlist").on("click",".lisitem",function(){
                    //     var $gid = $(this).attr("gid");
                       
                    //     // var goodsl = JSON.parse( $.cookie("goods")) || [];
                        
                    //     if($.cookie("goods") == undefined){
                            
                    //         var goodsl = []
                    //     }else{
                    //         var goodsl = JSON.parse($.cookie("goods"))
                    //     }
                        
                       
                    //   console.log(goodsl.length)
                    //     if( goodsl.length < 1){
                    //         goodsl.push({
                    //             gid:$gid,
                    //             num:338
                    //         })
                           
                    //     }else{
                    //         var onoff = true;
                    //        var msg=data[1].data
                    //        $.each(goodsl,function(index,value){
                    //             if(value.gid == $gid){
                    //                 goodsl[index].num++
                    //                 onoff = false;
                    //             }
                    //        })
                            

                    //         // for(var i=1;i<=5;i++){
                    //         //     // var msg=data[i].data
                               
                    //         //     for(var j=0;j<data[i].data.length;j++){
                    //         //         var msg=data[i].data[j]
                                   
                    //         //         for(var k=0;k<goodsl.length;k++){
                                       
                    //         //             if( msg.gid == goodsl[k].gid){
                    //         //                 goodsl[k].num++;
                    //         //                 onoff = false;
                    //         //                 console.log(goodsl)
                    //         //             }
                    //         //         }
                                    
                    //         //     }
                    //         // }

                    //         if( onoff ){
                    //             goodsl.push({
                    //                 gid:$gid,
                    //                 num:338
                    //             })
                               
                    //         }
                    //     }
                    //     $.cookie("goods",JSON.stringify(goodsl))
                    // })
                  




                
            
        })
    })
})
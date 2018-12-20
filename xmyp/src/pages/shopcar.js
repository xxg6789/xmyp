require(["../scripts/myjs/config"],function(){
    require(["jquery","jqcookie"],function($){
        $(function(){

            class Car{
				constructor(options){
					this.url = options.url;
					this.list = options.list;
					this.jspcb = options.jspcb;
					this.getCookie()
					this.load();
				}
				getCookie(){
                    // this.goods = JSON.parse($.cookie("goods"));
                    if($.cookie("goods") == undefined){
                            
                        this.goods = []
                    }else{
                        this.goods = JSON.parse($.cookie("goods"))
                    }
				}
				load(){
					var that = this;
					$.ajax({
                        url:this.url,
                        type:"GET",
                        jsonp:"callback",
                        dataType:"jsonp",
                        jsonpCallback:this.jspcb,
                        jsonpCallback:this.jspcb,
						success:function(res){
							that.res = res
                            that.display()
                            
                            
						}
					})
				}
				display(){
					var str = ""
					$.each(this.res, (key,item)=>{
						$.each(this.goods, (index,value)=>{
							if(item.productid == value.id){
								str += `<li class="list-item" index="${value.id}">
                                            <div class="lspxx">
                                                <img src="${item.src}" alt="">
                                                <p>${item.ds}</p>
                                            </div>
                                            <div class="ldj">
                                                <span>￥</span>
                                                <span>${item.pr}</span>
                                            </div>
                                            <div class="lsl">
                                                <input type="number" value="${value.num}" min=1>
                                            </div>
                                            <div class="lje">
                                                <span>￥</span>
                                                <span>${item.pr * value.num}</span>
                                            </div>
                                            <div class="lcz">
                                                <em>删除</em>
                                            </div>
                                        </li>`
							}
						});
					});
					this.list.html(str);
					
					this.addEvent()
				}
				addEvent(){
					var that = this;
					this.list.on("click","em",function(){
						$(this).parent().parent().remove()
//						找到点击的货号
						that.id = $(this).parent().parent().attr("index");
//						删除
						that.setCookie(function(i){
							that.goods.splice(i,1)
						})
					})
					
					this.list.on("input","input",function(){
						that.id = $(this).parent().parent().attr("index");
						var ele = $(this)
//						修改
						that.setCookie(function(i){
							that.goods[i].num = ele.val();
						})
					})
				}
				setCookie(callback){
					for(var i=0;i<this.goods.length;i++){
						if(this.goods[i].id == this.id){
							callback(i)
							break;
						}
					}
					$.cookie("goods",JSON.stringify(this.goods))
				}
			}
		
		
			new Car({
				url:"https://flight.gome.com.cn/flight?callback=xiaomi&p=10044&catid=cat10000070&searchkey=%E5%8D%8E%E4%B8%BA%E6%89%8B%E6%9C%BA&c=xiaomi&width_height=210-210&area=21010100&requestType=3&_=1545202124515",
                list:$("#main .cont .list"),
                jspcb:"xiaomi",
			})




        })
    })
})

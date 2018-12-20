require(["../scripts/myjs/config"],function(){
    require(["jquery","swiper"],function($,Swiper){
        $(function(){
          
          //二级菜单
          $("#banner .navcont .navlist .listitem").mouseover(function(){
            $("#banner .navcont .listdetail").show()
          }).mouseout(function(){
            $("#banner .navcont .listdetail").hide()
          })
          $("#banner .navcont .listdetail").mouseenter(function(){
            $(this).show()
          }).mouseleave(function(){
            $(this).hide()
          })

          // 下拉框
          var $inp=$(".fxiala");
          var $ul=$(".xiala");
          $inp.on("input",function(){
            $.ajax({
              url:"http://suggestion.baidu.com?wd="+$(this).val(),
              dataType:"jsonp",
              jsonp:"cb",
              success:function(data){
                console.log(data.s);
                $ul.empty();
                data.s.forEach(function(item){
                  $ul.append( $(`<li>${item}</li>`) )
                })
              }
            })
          })





          // 轮播图
            var mySwiper = new Swiper ('.swiper-container', {
              //  effect:'fade',
              
                loop: true, // 循环模式选项
                autoplay:{
                  disableOnInteraction: false,
                },
                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                },
                
                // 如果需要前进后退按钮
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
              })    
              
          //全局渲染
          $.ajax({
            url:"../data/index.json",
            
            success:function(res){
              console.log(res)
              let homedata=res.data.homepage;
              let recmdata=res.data.recommend;
            //  section区域渲染
              let secda=homedata.floors[1].data.items;
              let secda1="";
              $.each(secda,function(index,ele){
                $("#section .juz .scm ul").html(
                  secda1 +=`
                              <li>
                                <div class="cont">
                                    <img src="${ele.pic_url}" alt="每日新品">
                                    <p class="title">${ele.title}</p>
                                </div>
                              </li>
                             `
                )
              })
              // 有品推荐
              let recom=homedata.floors[2].data.items;
              let recom1="";
              $.each(recom,function(index,ele){
                $("#main .recommend .rcont .rc-b").html(
                  recom1 +=`
                            <div class="rc-b-list">
                                <p class="rc-t">${ele.title}</p>
                                <p class="rc-b">${ele.subtitle}</p>
                                <img src="${ele.pic_url}" alt="">
                            </div>
                        `
                )
              })
              // 小米众筹
              let zc=homedata.floors[3].data.items;
              let zc1="";
              $.each(zc,function(index,ele){
                $(".zhonchou .zccont .zczc").eq(index).children(".zcbl-t").find(".zcbl-t-a").html(ele.name)
                $(".zhonchou .zccont .zczc").eq(index).children(".zcbl-t").find(".zcbl-t-b").html(ele.summary)
                $(".zhonchou .zccont .zczc").eq(index).children(".zcbl-t").find(".zcbl-t-c").find("span").eq(1).html(ele.price_min / 100)
                $(".zhonchou .zccont .zczc").eq(index).children(".zcbl-tp").find("img").attr("src",ele.pic_url)
              })

              // 每日新品
              let newsp=homedata.floors[6].data.items;
              let newsp1="";
              $.each(newsp,function(index,ele){
                $(".sp .spcont .sp-b").html(
                  newsp1 +=`
                            <div class="spb-lis">
                              <div class="spb-t"><img src="${ele.pic_url}" alt=""></div>
                              <p class="tit-a">${ele.name}</p>
                              <p class="tit-b over">${ele.summary}</p>
                              <p class="tit-c">${"￥"+ele.price_min / 100}</p>
                            </div>
                          `
                )
              })
              // 热门
              let remen=homedata.floors[7].data.items;
              let remen1="";
              $.each(remen,function(index,ele){
                $(".sp-rm .spcont .sp-b").html(
                  remen1 +=`
                            <div class="spb-lis">
                              <div class="spb-t"><img src="${ele.pic_url}" alt=""></div>
                              <p class="tit-a">${ele.name}</p>
                              <p class="tit-b over">${ele.summary}</p>
                              <p class="tit-c">${"￥"+ele.price_min / 100}</p>
                            </div>
                          `
                )
              })
              // 居家
              let jujia=homedata.floors[6].data.items;
              let jujia1="";
              $.each(jujia,function(index,ele){
                $(".sp-jj .spcont .sp-b").html(
                  jujia1 +=`
                            <div class="spb-lis">
                              <div class="spb-t"><img src="${ele.pic_url}" alt=""></div>
                              <p class="tit-a">${ele.name}</p>
                              <p class="tit-b over">${ele.summary}</p>
                              <p class="tit-c">${"￥"+ele.price_min / 100}</p>
                            </div>
                          `
                )
              })

            }
          }) 
          
        })
    })
})
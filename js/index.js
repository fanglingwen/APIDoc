function iFrameHeight() {
    var ifm = document.getElementById("page-content");
    var subWeb = document.frames ? document.frames["page-content"].document : ifm.contentDocument;
    if (ifm != null && subWeb != null) {
        ifm.height = subWeb.body.scrollHeight;
    }
 }

  function calcPageHeight(doc) {
      var cHeight = Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
      var sHeight = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight)
      var height  = Math.max(cHeight, sHeight)
      return height
  }

function initUldata() {

    var leftUl = document.getElementById("leftul");

    $.ajax(
        {
            type: 'get',
            data: {},
            url: 'phpServer/index.php', //后台处理程序   
            dataType: 'json',     //接受数据格式    
            error: function () { console.log("获取列表失败"); },
            success: function (meg) { //请求成功后处理函数。
                return meg;
            }
        })
}


//页面加载完就执行
$(function(){
    
    initUldata();

//   //自动根据url把当前菜单激活
//   var current_page_id = $("#current_page_id").val();
//   //如果中没有指定page_id，则判断有没有父目录为0的页面，默认打开第一个
//   if(!current_page_id) {
//     current_page_id = $(".doc-left li").children("a").attr("data-page-id");
//   };
//   if(current_page_id !=null && current_page_id.toString().length>0)
//   {
//     $(".doc-left li").each(function(){
//       page_id = $(this).children("a").attr("data-page-id");
//       //如果链接中包含当前url的信息，两者相匹配
//       if (page_id !=null && page_id.toString().length>0 && page_id == current_page_id) {
//         //激活菜单
//         $(this).addClass("active");
//         //如果该菜单是子菜单，则还需要把父菜单打开才行
//         if ($(this).parent('.child-ul')) {
//             $(this).parent('.child-ul').show();
//             $(this).parent('.child-ul').parent('li').children("a").children('i').attr("class","icon-chevron-down");
//         };
//         //   if (page_id != '' && page_id !='#') {
//         //       change_page(page_id)
//         //   };
//       };
//     })
//   }
});

  function change_page(page_id){
      if(!page_id)return;
      var item_id = $("#item_id").val();
      var item_domain = $("#item_domain").val();
      var base_url = $("#base_url").val();
      var iframe_url =  base_url+"/home/page/index/page_id/"+page_id;

      $(".page-edit-link").show();
      $("#edit-link").attr("href" , base_url+"/home/page/edit/page_id/"+page_id);
      $("#copy-link").attr("href" , base_url+"/home/page/edit/item_id/"+item_id+"/copy_page_id/"+page_id);
      $("#delete-link").attr("href" , base_url+"/home/page/delete/page_id/"+page_id);
      
      var domain = item_domain ? item_domain : item_id ;
      var cur_page_url =  window.location.protocol +"//"+window.location.host+base_url+"/"+domain;
      if(base_url.length == 0){
        cur_page_url += "?page_id="+page_id;
      }else{
        cur_page_url += "&page_id="+page_id;
      }
      $("#share-page-link").html(cur_page_url);
      history.replaceState(null, null, cur_page_url);
      
      var html = '<iframe id="page-content" width="100%" scrolling="yes"  height="100%" frameborder="0" style=" overflow:visible; height:100%;" name="main"  seamless ="seamless"src="'+iframe_url+'"></iframe>';
      $(".iframe_content").html(html);
      iFrameHeight();
      
  }

    //点击左侧菜单事件
  $(".doc-left li").click(function(){
    //先把所有菜单的激活状态取消
    $(".doc-left li").each(function(){
      $(this).removeClass("active");
    });
    //先判断是否存在子菜单
    if ($(this).children('.child-ul').length != 0) {
      //如果子菜单是隐藏的，则显示之；如果是显示状态的，则隐藏
      if ($(this).children('.child-ul').css("display") == "none") {
        $(this).children('.child-ul').show();
        $(this).children("a").children('i').attr("class","icon-chevron-down");
      }else{
        $(this).children('.child-ul').hide();
        $(this).children("a").children('i').attr("class","icon-chevron-right");
      }
    };
    //获取对应的page_id
    page_id = $(this).children("a").attr("data-page-id");
    page_title = $(this).children("a")[0].innerText;
    if (page_id != '' && page_id != null  && page_id !='#') {
        if (page_title != '' && page_title != null) {
            document.title = page_title + " - ShowDoc";
        }
        change_page(page_id);
        //如果是移动设备的话，则滚动页面
        if( isMobile()){
            mScroll("page-content");
        }
    };
    return false;//禁止原有的href链接
  });
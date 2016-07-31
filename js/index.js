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
function initProject(){
     $.ajax(
        {
            type: 'get',
            data: {},
            url: 'phpServer/GetProjectInform.php', //后台处理程序   
            dataType: 'json',     //接受数据格式    
            error: function () { console.log("获取列表失败"); },
            success: function (meg) { //请求成功后处理函数。
                console.log(meg);
                var Name = document.getElementById("ProjectName");
                var ProjectURL = document.getElementById("page-content");
                Name.innerHTML=meg.projectName;
                ProjectURL.src = meg.URL;
            }
        })
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
    initProject();
});

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

    var ProjectURL = document.getElementById("page-content");

    if(page_title=="日志表格"){  
        ProjectURL.src = "developlog.html";
    }
    else if(page_title=="类型说明"){
        ProjectURL.src = "DataDictionary.html";
    }
    else if(page_title=="简介"){
        ProjectURL.src = "information.html";
    }
    else{
        ProjectURL.src = "showdoc.html?title=" + page_title;
    }
    return false;//禁止原有的href链接
  });
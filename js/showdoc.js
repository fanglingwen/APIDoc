    var thisURL = document.URL;    
    var  getval = thisURL.split('?')[1];  
    var URLtitle= getval.split("=")[1];
    var title =  decodeURI(URLtitle);
    
    //console.log(title);
    function changepage(meg){
        var title = document.getElementById("Title");
        var description = document.getElementById("description");
        var URL = document.getElementById("URL");
        var request = document.getElementById("request");
        var remark = document.getElementById("remark");

        title.innerHTML = meg.Title;
        description.innerHTML = meg.description;
        URL.innerHTML = meg.URL;
        request.innerHTML = meg.RequestType;
        if(meg.remark)
        remark.innerHTML = meg.remark;
    }
    $.ajax(
        {
            type: 'get',
            data: {Title:title},
            url: 'phpServer/GitItem.php', //后台处理程序   
            dataType: 'json',     //接受数据格式    
            error: function () { console.log("获取列表失败"); },
            success: function (meg) { //请求成功后处理函数。
                if(meg.states==0){
                    console.log("获取列表失败");
                }
                else{
                    changepage(meg);
                }
            }
        })
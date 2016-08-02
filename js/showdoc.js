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

    function addRow(type,oTbody, source) {
        //创建表格第一行
        var oTR_1 = document.createElement("tr");
        oTbody.appendChild(oTR_1);
        var oTD_11 = document.createElement("td");
        var oTD_12 = document.createElement("td");
        var oTD_13 = document.createElement("td");
        var oTD_14 = document.createElement("td");
        var oTD_15 = document.createElement("td");
        oTD_11.appendChild(document.createTextNode(source.name));
        oTR_1.appendChild(oTD_11);
        if (type) {
            oTD_12.appendChild(document.createTextNode(source.must));
            oTR_1.appendChild(oTD_12);
        }
        oTD_13.appendChild(document.createTextNode(source.type));
        oTR_1.appendChild(oTD_13);
        oTD_14.appendChild(document.createTextNode(source.instructions));
        oTR_1.appendChild(oTD_14);
        oTD_15.appendChild(document.createTextNode(source.remark));
        oTR_1.appendChild(oTD_15);
    }
    function addTbody(tableId, source) {
        var oTable = document.getElementById(tableId);
        //创建tbody
        var oTbody = document.createElement("tbody");
        oTable.appendChild(oTbody);
        var rows = source.length;
        var i = 0;
        if (tableId == "RequestParameters") {
            while (i < rows) {
                addRow(1, oTbody, source[i]);
                i++;
            }
        }
        else {
            while (i < rows) {
                addRow(0, oTbody, source[i]);
                i++;
            }
        }
    }
    var loginRows = [
        { "name": "aaa", "must": "是", "type": "String", "instructions": "这是一个中文说明", "remark": "这是一个备注" },
        { "name": "aaa", "must": "是", "type": "String", "instructions": "这是一个中文说明", "remark": "这是一个备注" },
        { "name": "aaa", "must": "是", "type": "String", "instructions": "这是一个中文说明", "remark": "这是一个备注" },
        { "name": "aaa", "must": "是", "type": "String", "instructions": "这是一个中文说明", "remark": "这是一个备注" },
        { "name": "aaa", "must": "是", "type": "String", "instructions": "这是一个中文说明", "remark": "这是一个备注" }
    ]
    var loginRow1s = [
        { "name": "aaa", "type": "String", "instructions": "这是一个中文说明", "remark": "这是一个备注" },
        { "name": "aaa", "type": "String", "instructions": "这是一个中文说明", "remark": "这是一个备注" },
        { "name": "aaa", "type": "String", "instructions": "这是一个中文说明", "remark": "这是一个备注" },
        { "name": "aaa", "type": "String", "instructions": "这是一个中文说明", "remark": "这是一个备注" },
        { "name": "aaa", "type": "String", "instructions": "这是一个中文说明", "remark": "这是一个备注" }
    ]

    function Refreshtables() {

        addTbody("RequestParameter", loginRows);
        addTbody("ReturnsParameter", loginRow1s);
    
    }


    $.ajax(
        {
            type: 'get',
            data: { Title: title },
            url: 'phpServer/GitItem.php', //后台处理程序   
            dataType: 'json',     //接受数据格式    
            error: function () { console.log("获取列表失败"); },
            success: function (meg) { //请求成功后处理函数。
                if (meg.states == 0) {
                    console.log("获取列表失败");
                }
                else {
                    changepage(meg);
                }
            }
        })

    $.ajax(
        {
            type: 'get',
            data: { Title: title },
            url: 'phpServer/GitRequestParameter.php', //后台处理程序   
            dataType: 'json',     //接受数据格式    
            error: function () { console.log("获取列表失败"); },
            success: function (meg) { //请求成功后处理函数。
                if (meg.states == 0) {
                    console.log("获取列表失败");
                }
                else {
                     addTbody("RequestParameter", megs);
                }
            }
        })

    $.ajax(
        {
            type: 'get',
            data: { Title: title },
            url: 'phpServer/GitReturnsParameter.php', //后台处理程序   
            dataType: 'json',     //接受数据格式    
            error: function () { console.log("获取列表失败"); },
            success: function (meg) { //请求成功后处理函数。
                if (meg.states == 0) {
                    console.log("获取列表失败");
                }
                else {
                    addTbody("ReturnsParameter", meg);
                }
            }
        })
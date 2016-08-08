$.ajax(
    {
        type: 'get',
        data: { },
        url: 'phpServer/developlog.php', //后台处理程序   
        dataType: 'json',     //接受数据格式    
        error: function () { console.log("获取列表失败"); },
        success: function (meg) { //请求成功后处理函数。
            if (meg.states == 0) {
                console.log("获取列表失败");
            }
            else {
                console.log(meg);
                addTbody("developlog", meg);
            }
        }
    })

function addTbody(tableId, source) {
    var oTable = document.getElementById(tableId);
    //创建tbody
    var oTbody = document.createElement("tbody");
    oTable.appendChild(oTbody);
    var rows = source.length;
    var i = rows-1;

    while (i =>0 ) {
        addRow(1, oTbody, source[i]);
        i--;
    }
}

function addRow(type, oTbody, source) {
    //创建表格第一行
    var oTR_1 = document.createElement("tr");
    oTbody.appendChild(oTR_1);
    var oTD_11 = document.createElement("td");
    var oTD_12 = document.createElement("td");
    var oTD_13 = document.createElement("td");
    var oTD_14 = document.createElement("td");
    var oTD_15 = document.createElement("td");
    var oTD_16 = document.createElement("td");
    var oTD_17 = document.createElement("td");
    oTD_11.appendChild(document.createTextNode(source.ID));
    oTR_1.appendChild(oTD_11);
    oTD_12.appendChild(document.createTextNode(source.Event));
    oTR_1.appendChild(oTD_12);   
    oTD_13.appendChild(document.createTextNode(source.EventPoint));
    oTR_1.appendChild(oTD_13);
    oTD_14.appendChild(document.createTextNode(source.EventValue));
    oTR_1.appendChild(oTD_14);
    oTD_15.appendChild(document.createTextNode(source.Author));
    oTR_1.appendChild(oTD_15);
    oTD_16.appendChild(document.createTextNode(source.CreateTime.substring(2,10)));
    oTR_1.appendChild(oTD_16);
    oTD_17.appendChild(document.createTextNode(addremark(source.remark)));
    oTR_1.appendChild(oTD_17);
}

    function addremark(d){
            if(d){
                return d;
            }
            else{
                return "无";
            }
        }
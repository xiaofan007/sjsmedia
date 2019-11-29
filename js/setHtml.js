function GetRequest() {
    var url = location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

$(function () {
    var headerHtml = '<div class="top_nav">' +
        '            <div class="container">' +
        '                <div class="col-md-2"' +
        '                     style="background: url("./img/logo.png") no-repeat center;background-size:cover; width: 106px;  height: 100px; position: absolute; top: 0;"></div>' +
        '                <div class="col-md-10" style="margin-left: 140px;">' +
        '                    <div class="top_nav_bar">' +
        '                        <ul class="nav navbar-nav" style="margin-right: 50px;">';

    for (var headerItem in sjsAllData) {
        var item_1 = sjsAllData[headerItem];
        if (item_1.level === '1') {
            headerHtml += '<li><a href="' + item_1.url + '">' + item_1.title + '</a></li>';
        } else if (item_1.level === '2') {
            headerHtml += '<li><a href="#">' + item_1.title + '</a><div class="nav_list"><ul>';
            for (var headerItem_2 in item_1.body) {
                var item_2 = item_1.body[headerItem_2];
                headerHtml += '<li><a href="' + item_1.url + '?id=' + headerItem + '&name=' + headerItem_2 + '">'+ item_2.title +'</a></li>'
            }
            headerHtml += '</ul></div></li>';
        } else {
            console.error('level error!!!');
        }
    }
    headerHtml +=
        '                        </ul>' +
        '                        <span style="color:#0072cd; font-size:16px; font-weight:bold;">服务电话：<br>15315503399</span>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '    </div>';

    var footereHtml = '<div class="footer">' +
        '        <div class="container">' +
'                    <div class="footer_nav_title">' +
'                        联系我们' +
'                    </div>' +
'                    <div class="footer_nav_line"></div>' +
'                    <div class="footer_nav_list">' +
'                        <div class="row">' +
'                            <div class="col-md-4"><a href="http://map.baidu.com/?l=&s=s%26wd%3D%E5%B1%B1%E4%B8%9C%E7%9C%81%E9%9D%92%E5%B2%9B%E5%B8%82%E5%B8%82%E5%8C%97%E5%8C%BA%E5%9B%9B%E6%B5%81%E5%8D%97%E8%B7%AF64%E5%8F%B73L" target="_blank">地址： 山东省青岛市市北区四流南路64号3L</a></div>' +
'                            <div class="col-md-2"><span>电话： 15315503399</span></div>' +
'                            <div class="col-md-2"><span>邮编： 266000</span></div>' +
'                            <div class="col-md-3"><span>邮箱： 317201218@qq.com</span></div>' +
'                        </div>' +
'                    </div>' +
        '        </div>' +
        '    </div>' +
        '    <div class="footer_copyright">' +
        '        <span>© 2016-2019 青岛岁九诗影视文化传媒有限公司&nbsp;&nbsp;鲁ICP备18050030号-1  </span>' +
        '    </div>';

    // $("#header").html(headerHtml);
    $("#footer").html(footereHtml);

})
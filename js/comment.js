$(function () {
    $('body').on('tap', 'a', function () {
        document.location.href = this.href;
    });
    $(".my-name").html("青岛岁九诗影视文化传媒有限公司");
    $(".my-intro").html("岁九诗传媒有限公司成立于2016年8月，自成立以来，我们始终奉行" +
        "<b>创意至先、执行至优、统筹至上、价格至诚、以人为本</b>" +
        "的公司文化理念，以最诚挚的价格、最专业的服务，为客户带来最高效的回报。");
    $("#footer-1").html("© 2016-2019 青岛岁九诗影视文化传媒有限公司");
    $("#footer-2").html("鲁ICP备18050030号-1");
})

function GetRequest() {
    var url = location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

var serviceList = [{
    title: "映前广告",
    imgURL: "img/product/yqgg2.jpg",
    description: "震撼视听，印象深刻、无干扰广告环境、精准覆盖，深度传播"
}, {
    title: "活动策划",
    imgURL: "img/product/影院阵地2.jpg",
    description: "发布会、晚会宴会、路演巡展、答谢会、庆典活动、派对酒会、商业演出、公益活动、文艺活动、嘉年华"
}, {
    title: "影院灯箱",
    imgURL: "img/product/影院灯箱1.jpg",
    description: "1、广告环境好；2、灯光对比醒目；3、画面质量高"
}, {
    title: "影院阵地",
    imgURL: "img/product/影院灯箱2.jpg",
    description: "阵地展示零距离接触消费者，消费者亲身体验后，配合观影的愉悦心情，将会在最短时间内产生消费欲望甚至做出消费决策。"
}, {
    title: "冠名厅",
    imgURL: "img/product/影院阵地1.jpg",
    description: "1、记忆度高；2、直观；3、唯一性"
}];
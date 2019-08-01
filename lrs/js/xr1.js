var hi = $(window).height();
$("body").height(hi);


//提示
function Tips(type, sentence) {
    //添加 提示
    if (type == 'correct')
        var $div = '<div class="correct">' + sentence + '</div>';
    else if (type == 'error')
        var $div = '<div class="error">' + sentence + '</div>';

    //动画0.5s拉下  然后停顿3s  最后0.5s上拉  删除 
    $("body").append($div);
    $(`.${type}`).animate({
        top: "4rem"
    }, 500, function() {
        clearTimeout(time);
        time = setTimeout(() => {
            $(`.${type}`).animate({
                top: "-4rem"
            }, 500, function() {
                $(`.${type}`).remove()
            })
        }, 2500);
    })
}

//禁用
function Disabling(fl, BT) {
    if (fl) {
        BT.css({
            "background": "lime"
        }).attr('disabled', fl)
    } else {
        BT.removeAttr("style").attr('disabled', fl)
    }

}


//图片切换
Picture();
var ttttt = null;

function Picture() {
    var i = 2;
    clearInterval(ttttt);
    setInterval(function() {
        if (i > 4) { i = 1; }
        var src = "img/banner" + i + ".jpg";
        $(".header img").attr('src', src);
        i++;
    }, 3000);
}
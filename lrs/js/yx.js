var time;
var lis = $("li[name]");
var process = JSON.parse(localStorage.getItem("process"));
var player = JSON.parse(localStorage.getItem("player"))
var nn = JSON.parse(localStorage.getItem("Number"))
var hhhh = localStorage.getItem("history")

// console.log(lis)
$("p.day").html(process.day)
for (let i = 0; i < process.program; i++) {
    $(lis[i]).addClass("past")
}


$(".section-box > ul").on('touchstart', function(e) {
    var _this = $(e.target);
    //开关第n天
    if (_this.is("p")) {
        _this.parent().next("ul").toggle();
        _this.next("span").toggleClass("two");
    }
    //开关白天黑夜
    if (_this.is("li")) {
        _this.next("ul").toggle();
        _this.children("span").toggleClass("two");
    }
    // 点击 有name的li 
    if (_this.is("li[name]")) {
        //没有 class="past"  (点击空白的li)
        if (!_this.hasClass("past")) {
            var index;
            $.each(lis, function(qqq, value) {
                if (_this.is(lis[qqq])) {
                    index = qqq;
                }
            })
            if (index == 0) {
                _this.addClass("past")
                process.program++;
                cccc(_this)
            } else {
                // 当前点击的上一个li 有class="past"  (蓝色临近的li)
                if ($(lis[index - 1]).hasClass("past")) {
                    //最后一个时
                    if (index == lis.length - 1) {
                        _this.addClass("past")
                        process.day++;

                        process.program = 0;
                        cccc(_this)
                    } else {
                        _this.addClass("past")
                        process.program++;
                        cccc(_this);
                    }
                } else {
                    Tips("error", "有未完成的流程!!")
                }
            }
        } else {
            Tips("error", "当前流程已完成")
        }
    }
})
$(".section-box > button[name]").on('touchstart', function() {
    localStorage.setItem("jump", $(this).attr("name"));
    $(location).attr('href', 'vote.html');
})

function cccc(_this) {
    localStorage.setItem("process", JSON.stringify(process));
    localStorage.setItem("jump", _this.attr("name"));
    $(location).attr('href', 'vote.html');
}
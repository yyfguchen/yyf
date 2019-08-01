var hi = $(window).height();
$("body").height(hi);

// 获取对象里的 总人数 村民数 狼人数
var obj = JSON.parse(localStorage.getItem("Number"))
var Opeople = obj.people;
var OVillage = obj.Village;
var OWerewolf = obj.Werewolf;
// 真实身份数组
var arr = JSON.parse(localStorage.identity);
var arr2 = [];
// 真实身份
var TRid = $(".TRid");
TRid.attr("src", "img/" + arr[0] + "2.png");
//玩家号码
var player = $('span.people').html();
// 判别
var tf = false;




// 绑定  显示/隐藏身份  下一个
$(".bt").on("touchstart", function(e) {
    var _this = $(e.target);
    var className = _this.prop("className");
    // console.log(_this.prop("className"))

    if (className == "SorH") {
        if (tf) {
            TRid.css("z-index", 0);
            _this.html("显示身份");
            tf = !tf
        } else {
            TRid.css("z-index", 555);
            _this.html("隐藏身份");
            tf = !tf;
        }
    } else if (className == "next") {
        // 重置
        Reset("next");

    } else if (className == "before") {
        // 重置
        Reset("before");
    } else if (className == "st") {
        // Function();
        let process = {
            day: 1,
            program: 0
        }
        localStorage.setItem("process", JSON.stringify(process));
        $(location).attr('href', 'yx.html');
    }
})




// 重置身份
function Reset(A) {
    var _this = $("button.SorH");
    if (A == "next") {
        player++;
        //到底
        if (player > Opeople) {
            player = Opeople;
        } else {
            REre();
        }
    } else {
        player--;
        //到头
        if (player <= 0) {
            player = 1;
        } else {
            REre();
        }
    }
    $('span.people').html(player);

    var url = "img/" + arr[player - 1] + "2.png"
    TRid.attr("src", url);
    if (player == Opeople) {
        $("button.st").css("display", "block")
    }

    function REre() {
        TRid.css("z-index", 0)
        tf = false;
        _this.html("显示身份");
    }
}



Function();
// 身份添加对应的能力 生命
function Function() {
    $.each(arr, function(index, vl) {
        if (vl == "witch") { //女巫
            arr2.push({
                id: index + 1,
                name: vl,
                life: true,
                powers: {
                    poison: true,
                    antidote: true
                },
                identity: "女巫"
            })
        } else if (vl == "guard") { //守卫
            arr2.push({
                id: index + 1,
                name: vl,
                life: true,
                powers: true,
                identity: "守卫"
            })
        } else if (vl == "prophet") { //预言家
            arr2.push({
                id: index + 1,
                name: vl,
                life: true,
                powers: true,
                identity: "预言家"
            })
        } else if (vl == "werewolf") {
            arr2.push({
                id: index + 1,
                name: vl,
                life: true,
                identity: "狼人"
            })
        } else {
            arr2.push({
                id: index + 1,
                name: vl,
                life: true,
                identity: "村民"
            })
        }
    })
    localStorage.setItem("player", JSON.stringify(arr2))
}
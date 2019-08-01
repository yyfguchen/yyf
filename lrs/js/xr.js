var hi = $(window).height();
$("body").height(hi);



var time;
var BT = $("button");
var nn;
$("label").on("touchstart", function(e) {
    Disabling(false, BT);
    var _this = $(e.target)
    $("label").removeClass("Number");
    _this.toggleClass("Number");
    nn = _this.prev().val();
    switch (nn) {
        case "9":
            $(".span-1").html("3")
            $(".span-2").html("3")
            break;
        case '10':
            $(".span-1").html("4")
            $(".span-2").html("3")
            break;
        case '11':
            $(".span-1").html("4")
            $(".span-2").html("4")
            break;
        case '12':
            $(".span-1").html("5")
            $(".span-2").html("4")
            break;
        default:
            break;
    }
})
$("button").on("touchstart", function(e) {
    if (nn) {
        console.log(nn);
        var obj = {
            people: nn,
            Village: $(".span-1").html(),
            Werewolf: $(".span-2").html(),
        }
        localStorage.setItem("Number", JSON.stringify(obj));

        var arr = []
        for (let i = 0; i < nn - 3; i++) {
            if (i < $(".span-1").html() + $(".span-2").html()) {
                if (i < $(".span-1").html()) {
                    arr.push("village");
                } else {
                    arr.push("werewolf");
                }
            }
        }
        arr.push("witch");
        arr.push("prophet");
        arr.push("guard");
        // 数组打乱之二
        function randomsort(a, b) {
            return Math.random() > .5 ? -1 : 1;
            //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
        }
        arr.sort(randomsort);
        // 数组打乱之一 
        // for (let i = 0, len = arr.length; i < len; i++) {
        //     let currentRandom = parseInt(Math.random() * (len - 1));
        //     let current = arr[i];
        //     arr[i] = arr[currentRandom];
        //     arr[currentRandom] = current;
        // }
        localStorage.setItem("identity", JSON.stringify(arr));

        $(location).attr('href', 'fpy.html');
    } else {
        console.log(nn)
        Tips("error", "请选择人数");
        Disabling(true, $(this));
    }
})
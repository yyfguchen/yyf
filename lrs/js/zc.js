var
    ok1 = false;

var
    ok2 = false;

var
    ok3 = false;

var
    ok4 = false;
var
    ok5 = false;

var allright = false;

// 验证用户名

$('input[id="username"]').focus(function() {

    $(this).next().text('用户名应该为2-20位之间').removeClass('state1').addClass('state2');

}).blur(function() {

    if ($(this).val().length >= 2 && $(this).val().length <= 12 && $(this).val() != '') {

        $(this).next().text('输入成功').removeClass('state1').addClass('state4');

        ok1 = true;

    } else {

        $(this).next().text('用户名应该为2-20位之间!!!').removeClass('state1').addClass('state3');

    }



});




//验证密码

$('input[id="password"]').focus(function() {

    $(this).next().text('密码应该为6-20位之间').removeClass('state1').addClass('state2');

}).blur(function() {

    if ($(this).val().length >= 6 && $(this).val().length <= 20 && $(this).val() != '') {

        $(this).next().text('输入成功').removeClass('state1').addClass('state4');

        ok2 = true;

    } else {

        $(this).next().text('密码应该为6-20位之间!!!').removeClass('state1').addClass('state3');

    }



});



//验证确认密码

$('input[id="repass"]').focus(function() {

    $(this).next().text('输入的密码需要一致').removeClass('state1').addClass('state2');

}).blur(function() {

    if ($(this).val().length >= 6 && $(this).val().length <= 20 && $(this).val() != '' &&
        $(this).val() == $('input[id="password"]').val()) {

        $(this).next().text('输入成功').removeClass('state1').addClass('state4');

        ok3 = true;

    } else {

        $(this).next().text('输入的密码需要一致!!!').removeClass('state1').addClass('state3');

    }



});


//验证邮箱

$('input[id="email"]').focus(function() {

    $(this).next().text('请输入正确的EMAIL格式').removeClass('state1').addClass('state2');

}).blur(function() {

    if ($(this).val().search(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/) == -1) {

        $(this).next().text('请输入正确的EMAIL格式!!!').removeClass('state1').addClass('state3');

    } else {

        $(this).next().text('输入成功').removeClass('state1').addClass('state4');

        ok4 = true;
    }
});


// 验证手机
$('input[id="phone"]').focus(function() {

    $(this).next().text('请输入您的手机号').removeClass('state1').addClass('state2');

}).blur(function() {

    if ($(this).val().length === 11 && $(this).val() != '') {

        $(this).next().text('输入成功').removeClass('state1').addClass('state4');

        ok5 = true;

    } else {

        $(this).next().text('请输入正确的手机号!!!').removeClass('state1').addClass('state3');
    }
});



function asasdsa() {
    if (ok1 && ok2 && ok3 && ok4 && ok5) {
        allright = true;
    }
}



$("#zc").click(function() {
    asasdsa();
    if (allright) {
        var username = $("#username");
        var password = $("#password");
        var phone = $("#phone");
        var email = $("#email");

        var obj = {
            password: password.val(),
            phone: phone.val(),
            email: email.val(),
        }
        localStorage.setItem(username.val(), JSON.stringify(obj));
        alert("成功");
        $(location).attr('href', 'dl.html');
    }
})


var height = $(window).height();
$('body').height(height);


//确认验证码
$('input[name="Verification"]').focus(function() {
    $(this).next().text('请输入验证码').removeClass('');
}).blur(function() {
    if ($(this).val() == "") {
        $(this).next().text('请输入验证码').removeClass('green').addClass('red');
    } else {
        $(this).next().text('')
    }
});



change();
code.click(change);
$(".recode").click(change);
//单击验证
$("#check").click(function() {
    var inputCode = $("#Verification").val().toUpperCase(); //取得输入的验证码并转化为大写 
    if (inputCode.length == 0) { //若输入的验证码长度为0
        $("#Verification").next().html("请输入验证码！").addClass("red"); //则弹出请输入验证码
    } else if (inputCode != codes.toUpperCase()) { //若输入的验证码与产生的验证码不一致时
        $("#Verification").next().html("验证码输入错误!请重新输入").addClass("red"); //则弹出验证码输入错误
        change(); //刷新验证码
        $("#Verification").val(""); //清空文本框
    } else { //输入正确时
        $("#Verification").next().html("正确").removeClass("red").addClass("green"); //弹出^-^
    }
});

function change() {
    code = $("#code");
    // 验证码组成库
    var arrays = new Array(
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z'
    );
    codes = ''; // 重新初始化验证码
    for (var i = 0; i < 4; i++) {
        // 随机获取一个数组的下标
        var r = parseInt(Math.random() * arrays.length);
        codes += arrays[r];
    }
    // 验证码添加到input里
    code.val(codes);
}
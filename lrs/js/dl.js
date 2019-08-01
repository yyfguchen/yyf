$(function() {
    $('#myCarousel').carousel({
        interval: 2000
    });
})

// 验证账号

$('input[id="username"]').focus(function() {
    $(this).next().text('账号应该为2-20位之间').removeClass('state1').addClass('state2');
}).blur(function() {
    if ($(this).val().length >= 2 && $(this).val().length <= 20 && $(this).val() != '') {

        $(this).next().text('输入成功').removeClass('state1').addClass('state4');
    } else {
        $(this).next().text('账号应该为2-20位之间!!!').removeClass('state1').addClass('state3');
    }
});


//验证密码

$('input[id="password"]').focus(function() {
    $(this).next().text('密码应该为6-20位之间').removeClass('state1').addClass('state2');
}).blur(function() {
    if ($(this).val().length >= 6 && $(this).val().length <= 20 && $(this).val() != '') {
        $(this).next().text('输入成功').removeClass('state1').addClass('state4');
    } else {
        $(this).next().text('密码应该为6-20位之间!!!').removeClass('state1').addClass('state3');
    }
});

$("#LoginSave").click(function(e) {
    e.preventDefault();

    var username = $("#username").val();
    var password = $("#password").val();

    var obj = JSON.parse(localStorage.getItem(username))

    if (obj != null) {
        if (password == obj.password) {
            alert("成功");
            $(location).attr('href', 'xr.html');
        }
    }

});
var height = $(window).height();
$('body').height(height);
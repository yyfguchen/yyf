$(".layui-dt").on("click", function () {
    $(this).siblings("dt").removeAttr("id");
    if ($(this).attr("id") == "open") {
        $(this).removeAttr("id").siblings("dd").slideUp();
    } else {
        $(this).attr("id", "open").next().slideDown().siblings("dd").slideUp();
    }
});


$(function () {
    $('#tubiao').click(function () {
        tyhide()
    })

    function tyhide(_this) {
        if ($('#tubiao').parent().css('left') == '0px') {
            $('#tubiao').parent().css({
                'left': '220px',
            })
            $('.layui-pro').css({
                'left': '0px',
            })
            $('.section').css({
                'left': '220px'
            })

        } else {
            $('#tubiao').parent().css({
                'left': 0,
            })
            $('.layui-pro').css({
                'left': '-220px',
            })
            $('.section').css({
                'left': '0px',
                'width': '100%'
            })

        }
        if ($('#tubiao').parent().css('left') == '220px') {
            $('#tubiao').parent().css({
                'left': '220px',
            })
            $('.section').css({
                'left': '220px',
                'width': 'calc(100% - 220px)'
            })
        }

    }
});



layui.use('jquery', function () {
    var $ = layui.$;

    //演示动画
    $('.site-doc-icon .layui-anim').on('click', function () {
        var othis = $(this), anim = othis.data('anim');

        //停止循环
        if (othis.hasClass('layui-anim-loop')) {
            return othis.removeClass(anim);
        }

        othis.removeClass(anim);

        setTimeout(function () {
            othis.addClass(anim);
        });
        //恢复渐隐
        if (anim === 'layui-anim-fadeout') {
            setTimeout(function () {
                othis.removeClass(anim);
            }, 1300);
        }
    });
});





















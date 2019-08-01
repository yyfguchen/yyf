
//适应分辨率
var hei = $(window).height();
$(document.body).css({ "height": hei });

//****   窗体变动   ******* */
// $(window).resize(function () {
// });














/* nav与和header 的 span动画 */
spanAnimate();
function spanAnimate() {
    //导航条soan
    var NLtop = null;
    $('nav ul li').on({
        mouseenter: function () {
            let ULtop = NLtop = $(this).position().top;
            $('#nav-ho').stop().animate({
                top: ULtop,
                height: '56px'
            }, 150);
        },      //可以通过on({ fun1,fun2 }) 一个对象绑定多个事件

    });

    $('nav ul').on({
        mouseleave: function () {
            $('#nav-ho').animate({
                top: (NLtop + 28),
                height: '0px'
            }, 100);
        },
    });


    /* 头部span动画 */
    var HLleft = null;
    var HLwidth = null;
    //左ul
    $('header ul.header-left li').on({
        mouseenter: function () {
            let HLle = HLleft = $(this).position().left;
            let HLwid = HLwidth = $(this).width();
            $('#hea-ho1').stop().animate({
                'left': HLle + 20,
                'width': HLwid
            }, 200);
        },

    });
    $('header ul.header-left').on({
        mouseleave: function () {
            $('#hea-ho1').stop().animate({
                left: HLleft + 20 + (HLwidth / 2),
                width: 0
            }, 150);
        },
    });
    //右ul
    $('header ul.header-right li').on({
        mouseenter: function () {
            let HLle = HLleft = $(this).position().left;
            let HLwid = HLwidth = $(this).width();
            $('#hea-ho2').stop().animate({
                'left': HLle,
                'width': HLwid
            }, 200);
        },

    });
    $('header ul.header-right').on({
        mouseleave: function () {
            $('#hea-ho2').stop().animate({
                left: HLleft + (HLwidth / 2),
                width: 0
            }, 150);
        },
    });
}

/* nav导航显示隐藏 */
LIHover();
function LIHover() {
    //开关点击的下级页面
    $("nav ul li a").click(function () {
        let dl = nee = $(this).next('dl');
        // dl.toggle()
        dl.toggle();
        triangle($(this).parent());

        // 关闭上个点开的同级页面
        let dls1 = $(this).parent().siblings().children('dl');
        let lis = $(this).parent().siblings();
        dls1.hide();
        SDD();
        if ($(this).next('dl').css('display') != 'none') {
            triangle(lis);
        }

        // main 改换数据
        var dls = $(this).next('dl');
        // console.log(dls.length)  0 无下级页面
        if (dls.length == 0) {
            var card = $(this);
            var cardName = card.attr("name");
            var cards = {}
            for (let i = 1; i <= 3; i++) {
                var nn = 'card' + i;
                cards[nn] = (cardName != undefined) ? cardName : "";
                card = card.parent().parent().siblings('a');
                cardName = card.attr("name");
            }
            // console.log(cards.card1+''+cards.card2+''+cards.card3+'')
            htmlobj = $.ajax({
                type: "get",
                url: "data/" + cards.card3 + "/" + cards.card2 + "/" + cards.card1 + ".text",
                success: function (response) {
                    // console.log(htmlobj.responseText)
                    // console.log(response != '')
                    if (response != '') {
                        $('.section').html(response);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                 

                }
            });
            // console.log("ajax数据请求完成后修改对象html，会给对象添加style")
            $('.section').removeAttr("style");
        }

    });
}
// nav 的 dl , 添加样式
$('nav dd>a').click(function () {
    var dl = $(this).next('dl');
    var dd = $(this).parent();
    if (!dl.length) {
        //删除nav里 所有的a和dl的style
        $('nav dd>a').removeAttr("style");
        $('nav dd').removeAttr("style");

        //添加当前a的样式和a父级的背景色
        dd.css('background-color', 'rgb(0, 150, 136)'),
            $(this).css('color', 'white');
    }
})

// nav的三角形动画封装
function triangle(_this) {
    let spTop = {
        'border-color': 'transparent',
        'border-bottom-color': 'rgba(255,255,255,1)',
        'margin-top': '-9px',
    }
    let spBoT = {
        'border-color': 'transparent',
        'border-top-color': 'rgba(255,255,255,.7)',
        'margin-top': '-3px'
    }
    let span = _this.children("a").children('span');
    if (span.length == 1) {
        if (_this.children("dl").css('display') != 'none') {    //打开
            span.css(spTop)
        } else {
            span.css(spBoT)
        }
    } else {
        span.css(spBoT)
    }
}













/* header左侧点击缩放显示 */
HeadLI();
function SDD() {
    let cite = $('.nav-box').children('ul').children('li').children('a').children('cite');
    $('header ul').first().css({ 'left': '220px' })
    $('nav').css({ width: '220px' })
    cite.show();
    $('.section').css({ 'left': '220px', width: 'calc(100% - 220px)' })
    $('.Nav-header').children('span').css('display', 'inline');
    $('.Nav-header').children('img').css('display', 'none');

}
function HDD() {
    let cite = $('.nav-box').children('ul').children('li').children('a').children('cite');
    $('header ul').first().css({ 'left': '60px' })
    $('nav').css({ width: '60px' })
    $('Nav-header').css({ 'background-image': "url('../img/logo.png') " })
    cite.hide();
    $('.section').css({ 'left': '60px', width: 'calc(100% - 60px)' })

    $('nav dl').hide();
    $('.Nav-header').children('span').css('display', 'none');
    $('.Nav-header').children('img').css('display', 'inline');
}
function HeadLI() {
    let i = $('.header-left li').first().children('a');
    i.click(function () {
        let width = $('nav').width();
        let left = $('nav').position().left;
        let cite = $('.nav-box').children('ul').children('li').children('a').children('cite');

        if (!left) {
            if (width <= 60) {//left = 220
                SDD();
                $(this).children('i').toggleClass("icon-shensuozuo").addClass("icon-shensuoyou");
            } else {
                HDD();
                $(this).children('i').toggleClass("icon-shensuoyou").addClass("icon-shensuozuo");
            }
        }
    })
}

//header右侧三点的缩放 和 贤心的hove
artBox()
function artBox() {
    $('#vision').on({
        click: function () {
            $('body').append(currency.harbour());
            $('#harbour').css({ 'top': -hei })

            $('#harbour').toggle();
            $('.artBox').css({ right: 0 });

            $('#harbour').on({
                click: function (event) {
                    var evt = event.target;
                    //事件，源 ( 点击的对象 )
                    // event.srcElement ? event.srcElement : event.target;  //兼容写法
                    if (evt.id == 'harbour') {
                        // alert("s")
                        $(this).toggle();
                        $('.artBox').css({ right: -300 });

                        setTimeout(function () {
                            $("#harbour").remove();
                            $(".artBox").remove();
                        }, 1000)
                    }
                }
            });
        }
    });


    var xianxin = $('').parent();
    var span = xianxin.children('a').children('span');
    xianxin.on({
        mouseenter: function () {
            $('.Head-dl').stop().slideDown();
            span.css({
                'border-color': 'transparent',
                'border-bottom-color': 'rgba(0,0,0)',
                'margin-top': '-9px',
            })
        },
        mouseleave: function () {
            $('.Head-dl').stop().slideUp();
            span.css({
                'border-color': 'transparent',
                'border-top-color': 'rgba(0,0,0)',
                'margin-top': '-3px',
            })
        }
    });
}



$(function () {

    // top 버튼
    $('nav li:nth-of-type(1) a').addClass('active');

    $('nav li a').click(function () {
        $("nav a").removeClass('active');
        $(this).addClass('active');
    });

    $('button:nth-of-type(2)').click(function () {
        $("button").removeClass('active');
        $(this).addClass('active');
        $(".story2").fadeIn();
        $(".story1").hide();
        $(".story3").hide();
        $(".story4").hide();
        $(".story5").hide();
    });

    $('button:nth-of-type(3)').click(function () {
        $("button").removeClass('active');
        $(this).addClass('active');
        $(".story3").fadeIn();
        $(".story1").hide();
        $(".story2").hide();
        $(".story4").hide();
        $(".story5").hide();
    });

    $('button:nth-of-type(4)').click(function () {
        $("button").removeClass('active');
        $(this).addClass('active');
        $(".story4").fadeIn();
        $(".story1").hide();
        $(".story2").hide();
        $(".story3").hide();
        $(".story5").hide();
    });

    $('button:nth-of-type(5)').click(function () {
        $("button").removeClass('active');
        $(this).addClass('active');
        $(".story5").fadeIn();
        $(".story1").hide();
        $(".story2").hide();
        $(".story3").hide();
        $(".story4").hide();
    });





    // 숫자 돌아가는거
    $(window).scroll(function () {

        if (window.matchMedia("(min-width:767px)").matches) { 

            if ($(this).scrollTop() >= 1500 && $(this).scrollTop() <= 1501) {
                $({ val: 0/*시작숫자*/ }).animate({ val: 50/*종료숫자*/ }, {
                    duration: 1500,
                    step: function () {
                        var num = Math.floor(this.val);
                        $(".num1").text(num);
                    },
                    complete: function () {
                        var num = Math.floor(this.val);
                        $(".num1").text(num);
                    }
                });
    
                $({ val: 0/*시작숫자*/ }).animate({ val: 7/*종료숫자*/ }, {
                    duration: 1500,
                    step: function () {
                        var num = Math.floor(this.val);
                        $(".num2").text(num);
                    },
                    complete: function () {
                        var num = Math.floor(this.val);
                        $(".num2").text(num);
                    }
                });
    
                $({ val: 0/*시작숫자*/ }).animate({ val: 7/*종료숫자*/ }, {
                    duration: 1500,
                    step: function () {
                        var num = Math.floor(this.val);
                        $(".num3").text(num);
                    },
                    complete: function () {
                        var num = Math.floor(this.val);
                        $(".num3").text(num);
                    }
                });
    
                $({ val: 0/*시작숫자*/ }).animate({ val: 8/*종료숫자*/ }, {
                    duration: 1500,
                    step: function () {
                        var num = Math.floor(this.val);
                        $(".num4").text(num);
                    },
                    complete: function () {
                        var num = Math.floor(this.val);
                        $(".num4").text(num);
                    }
                });
    
            }
       
       } else { 
       
        if ($(this).scrollTop() >= 2300 && $(this).scrollTop() <= 2301) {
            $({ val: 0/*시작숫자*/ }).animate({ val: 50/*종료숫자*/ }, {
                duration: 1500,
                step: function () {
                    var num = Math.floor(this.val);
                    $(".num1").text(num);
                },
                complete: function () {
                    var num = Math.floor(this.val);
                    $(".num1").text(num);
                }
            });

            $({ val: 0/*시작숫자*/ }).animate({ val: 7/*종료숫자*/ }, {
                duration: 1500,
                step: function () {
                    var num = Math.floor(this.val);
                    $(".num2").text(num);
                },
                complete: function () {
                    var num = Math.floor(this.val);
                    $(".num2").text(num);
                }
            });

            $({ val: 0/*시작숫자*/ }).animate({ val: 7/*종료숫자*/ }, {
                duration: 1500,
                step: function () {
                    var num = Math.floor(this.val);
                    $(".num3").text(num);
                },
                complete: function () {
                    var num = Math.floor(this.val);
                    $(".num3").text(num);
                }
            });

            $({ val: 0/*시작숫자*/ }).animate({ val: 8/*종료숫자*/ }, {
                duration: 1500,
                step: function () {
                    var num = Math.floor(this.val);
                    $(".num4").text(num);
                },
                complete: function () {
                    var num = Math.floor(this.val);
                    $(".num4").text(num);
                }
            });

        }
       
        }

        
    });


    // 보튼 누르면 넘어가는거
    var page = 0;
    var w = $('.reviewslide_minu').outerWidth(true);
    
    $('.left_review').click(function () {
        page--;
        if (page < 0) {
            page = 0;
            return;
        }
        $('.reviewrap').stop().animate({ marginLeft: -w * page }, 800);
    });

    $('.right_review').click(function () {
        page++;
        if (page > $('.reviewslide_minu').length - 2) {
            page = $('.reviewslide_minu').length - 2;
            return;
        }
        $('.reviewrap').stop().animate({ marginLeft: -w * page }, 800);
    });
  
});


$(function(){


});



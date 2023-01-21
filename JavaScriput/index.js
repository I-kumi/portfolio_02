$(window).on('load',function(){
    setTimeout(function(){
		$('.l-header__box, .p-menu__shopLink, .p-menu__btn').fadeIn(1000);
	},1000);
});

$(function(){
	$(window).on('scroll',function (){
		$('._scrollBothSlideUp').each(function(){
			var target = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var height = $(window).height();
			if (scroll > target - height){
				$(this).addClass('_isActiveBothSlideUp');
			}
		});

        $('._scrollSlideUp').each(function(){
			var target = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var height = $(window).height();
			if (scroll > target - height){
				$(this).addClass('_isActiveBothSlideUp');
			}
		});
	});
});


$(function(){
	$(window).on('load scroll',function (){
		$('._scrollBothSlideIn').each(function(){
			var target = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var height = $(window).height();
			if (scroll > target - height){
				$(this).addClass('_isActiveBothSlideIn');
			}
		});
	});
});


$(function(){
	$(window).on('scroll',function (){

        //priceの背景を左からスライド表示
        $('._scrollSlideLeft').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('js-price');
            }
        });

        $('._scrollPrice').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('js-price2');
            }
        });


        $('._scrollSlideLeftSec').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                setTimeout(() => {
                    $(this).addClass('js-price');
                },200);
            }
        });

        //イエローの背景を左からスライド表示
        $('._scrollSlideLeftYellow').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('js-passion');
            }
        });

        //イエローの背景を下からスライド表示
        $('._scrollSlideUpYellow').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                setTimeout(() => {
                    $(this).addClass('js-material');
                },800);
            }
        });

        $('._scrollYellow').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                setTimeout(() => {
                    $(this).addClass('js-material2');
                },800);
            }
        });

        //画像を左からスライド表示
        $('._scrollSlideImgLeft').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('is-active');
            }
        });

        $('._scrollSlideImgLeftSec').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                setTimeout(() => {
                    $(this).addClass('is-active');
                },500);
            }
        });

        //画像を右からスライド表示
        $('._scrollSlideImgRight').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('is-active');
            }
        });

        $('._scrollSlideImgRightSec').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                setTimeout(() => {
                    $(this).addClass('is-active');
                },500);
            }
        });

        //リストの項目を時間差で表示する
        $('._scrollBothListUp').each(function(i){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            let delay = 50;
            if (scroll > elemPos - windowHeight){
                $(this).delay(i * delay).queue(function(next){
                    $(this).addClass('js-timeLag');
                    next();
                });
            }
        });
        
        //サクフワ　時間差アニメーションの実装
        $('._scrollSlideSaku').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                setTimeout(() => {
                    $(this).addClass('js-timeLag');
                },1000);
            }
        });

        $('._scrollSlideFuwa').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                setTimeout(() => {
                    $(this).addClass('js-timeLag');
                },1300);
            }
        });

        $('._scrollSlide').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                setTimeout(() => {
                    $(this).addClass('js-timeLag');
                },1800);
            }
        });

        $('._scrollBothSlideDown').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('_isActiveBothSlideDown');
            }
        });

        $('._scrollBothSlideDownSec').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('_isActiveBothSlideDown');
            }
        });

        $('._scrollBothSlideDownThr').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('_isActiveBothSlideDown');
            }
        });

        $('._scrollSlideImgUp').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('is-active');
            }
        });

        $('._scrollSlideImgUpSec').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                setTimeout(() => {
                    $(this).addClass('is-active');
                }, 500);
            }
        });

        $('.p-material__text').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('slideAnimeUpDown');
            }
        });

        //CHEESE・TART　縦書きの文字を上から下に一文字ずつ表示する
        $('.u-downAnime').each(function(){ 
			var elemPos = $(this).offset().top-50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
                setTimeout(() => {
                    $(this).addClass("js-textSlideDown");
                    $(this).children(".u-blocking").addClass("js-textSlide");
                },1000)
			}
		});

        $('.u-textLeft').each(function(){ 
			var elemPos = $(this).offset().top-50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
				$(this).addClass("slideAnimeLeft"); 
				$(this).children(".u-textLeftAnime").addClass("slideAnimeRight");
			}
		});

        $('.fadeIn').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('js-fadeIn');
            }
        });

        setTimeout(() => {
            $('._lordSlideImgLeft').each(function(){
                $(this).addClass('is-active');
            });
        }, 500);

        setTimeout(() => {
            $('._lordSlideImgUpSec').each(function(){
                $(this).addClass('is-active');
            });
        }, 1000);
	});
});

//ロード時のにメーション
$(window).on('load',function(){
    setTimeout(() => {
        $('._lordSlideImgDown').each(function(){
            $(this).addClass('is-active');
        });
    }, 500);
});

$(window).on('load',function(){
    setTimeout(() => {
        $('._lordSlideImgUp').each(function(){
            $(this).addClass('is-active');
        });
    }, 1000);
});

//言語選択部分にカーソルが当たったらの文字いろ変更
$(function(){
    $('.is-en').hover(function(){
        $('.is-en').toggleClass('is-jp');
    });
});

//ナビゲーションメニューをクリックでモーダルの表示切り替えをする
$(function() {
    $('.p-menu__navLabel').on('click',function(){
        $('.p-menu__langGroup').toggleClass('js-active');
    });
});


//言語ボタンクリックで要素を隠す
$(function() {
    $('.p-menu__navLabel').on('click',function(){
        $('.p-menu__shopLink').toggleClass('js-toHide');
    });
});

$(function() {
    $('.p-menu__navLabel').on('click',function(){
        $('.fa-caret-down').toggleClass('js-revolving');
    });
});

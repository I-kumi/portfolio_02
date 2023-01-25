//ロゴ画像クリックで画面をリロードする
$(function() {
    $('.l-header__box').on('click',function(){
        location.reload();
    });
});

//ページを読み込んでから1秒後に表示するアニメーション
$(window).on('load',function(){
    setTimeout(function(){
		$('.l-header__box').hide().fadeIn(1000);
	},1000);
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
	$(window).on('load scroll',function (){
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
        $('._scrollSlideYellow').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('js-passionTitle');
            }
        });

        $('._scrollSlideLeftYellow').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                setTimeout(() => {
                    $(this).addClass('js-passion');
                },1000);
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
                setTimeout(() => {
                    $(this).addClass('is-active');
                },1000);
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
                setTimeout(() => {
                    $(this).addClass('is-active');
                },1000);
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
                },1500);
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

        $('.p-passion__comment').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('js-headerActive');
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

        //文字のスライド
        $('.u-textLeft').each(function(){
			var elemPos = $(this).offset().top-50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
                setTimeout(() => {
                    $(this).addClass("slideAnimeLeft");
                    $(this).children(".u-textLeftAnime").addClass("slideAnimeRight");
                },1000)
			}
		});

        $('.p-passion__itemTitle').each(function(){
			var elemPos = $(this).offset().top-50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
                setTimeout(() => {
                    $(this).addClass("js-page");
                    $(this).children(".u-textLeftAnime").addClass("slideAnimeRight");
                },1500)
			}
		});

        $('.p-material__comment').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                setTimeout(() => {
                    $(this).addClass('js-headerActive');
                }, 500);
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

        $('.p-price__slide').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('js-priceText');
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

$(function() {
    $('.p-menu__btn').on('click',function(){
        $('._linkSlideLeft').each(function(i){
            let delay = 50;
            $(this).delay(i * delay).queue(function(next){
                $(this).toggleClass('js-linkSlideLeft');
                next();
            });
        });
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
        $('.p-menu__category').each(function(){
            $(this).addClass('js-pageLink');
        });
    },2500);
});

$(window).on('load',function(){
    setTimeout(() => {
        $('._lordSlideImgUp').each(function(){
            $(this).addClass('is-active');
        });
    }, 1000);
});


//言語選択部分にカーソルが当たったらの文字いろ変更
$(window).on('load',function(){
    setTimeout(function(){
		$('.p-menu__btn').addClass('js-headerActive');
	},1500);
});

$(window).on('load',function(){
    setTimeout(function(){
		$('.p-menu__shopLink').addClass('js-headerActive');
	},2000);
});


//言語選択部分にカーソルが当たったらの文字いろ変更
$(function(){
    $('.is-en').hover(function(){
        $('.is-en').toggleClass('is-jp');
    });
});

//SPサイズの時にJP言語選択ボタンクリックで要素を隠す
$(document).ready(function(){
    if($(window).width() < 767) {
        $('.p-menu__btn').on('click',function(){
            $('.p-menu__shopLink').toggleClass('js-toHide');
        });
    }
});


//ナビゲーションメニューをクリックでモーダルの表示切り替えをする
$(function() {
    $('.p-menu__btn').on('click',function(){
        $('.p-menu__langGroup').toggleClass('js-active');
    });
});

$(function() {
    $('.p-menu__btn').on('click',function(){
        $('.fa-caret-down').toggleClass('js-revolving');
    });
});

//三本線クリックで×にする
$(function() {
    $('.p-menu__btn').on('click',function(){
        $('.p-menu__navMark').toggleClass('js-navBorderAfter');
    });
});

$(function() {
    $('.p-menu__btn').on('click',function(){
        $('.p-menu__navMark').toggleClass('js-navBorderBefore');
    });
});

$(function() {
    $('.p-menu__btn').on('click',function(){
        $('.p-menu__navMark').toggleClass('js-navBorderNone');
    });
});




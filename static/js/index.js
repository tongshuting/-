// JavaScript Document

function showNav(obj, elem_id){
	var elem = document.getElementById(elem_id);
	/*obj.style.backgroundColor="#5C7189";*/
	elem.style.display = "table";
	var subNavWidth = 0;
	$("#"+elem_id).find('.sub-nav-item>li').each(function(){
		subNavWidth+=$(this).width()+18;
	});
	var offsetLeft = $(obj).offset().left;
	var screenWidth =$(window).width();
	if((offsetLeft+subNavWidth)>screenWidth){
		elem.style.left = "auto";
		elem.style.right = "0px";
	}
	$("#"+elem_id).width(subNavWidth);
	}


function hiddenNav(obj, elem_id){
	var elem = document.getElementById(elem_id);
/*	obj.style.backgroundColor="#002147";*/
		elem.style.display = "none";
	}

function showNewsImg(obj, elem_id){
	/* var elem = document.getElementById(elem_id);
	elem.style.display = "inline-block";
	$('#'+elem_id).siblings().css('display','none'); */
	/*elem.parentNode.children.Style("display",'none');*/
	$('#divNewsImage').html('<img src="'+ $(obj).data('image-src')+'"/>');
}
function hiddenNewsImg(obj, elem_id){
	/* var elem = document.getElementById(elem_id);
	elem.style.display = "none";
	document.getElementById('news-image01').style.display = "inline-block"; */

	$('#divNewsImage').html('<img src="'+ $(obj).parent().children('li').eq(0).data('image-src')+'"/>');

}

function swiperMove(){
	  var swiper = new Swiper('.top-swiper', {
            pagination: '.swiper-pagination',
          /*  nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',*/
            spaceBetween: 30,
            loop: true,
            centeredSlides: true,
            paginationClickable: true,
            //autoplay: false,
            autoplay: 5000,
            autoplayDisableOnInteraction: false
        });
		if($('#divNews').find('.list-new>ul>li').length>0){
			$('#divNewsImage').html('<img src="'+ $('#divNews').find('.list-new>ul>li').eq(0).data('image-src')+'"/>');
		}
		//判断访问终端
	var browser = {
		versions: function() {
			var u = navigator.userAgent,
				app = navigator.appVersion;
			return {
				trident: u.indexOf('Trident') > -1, //IE内核
				presto: u.indexOf('Presto') > -1, //opera内核
				webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
				gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
				mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
				ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
				android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
				iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
				iPad: u.indexOf('iPad') > -1, //是否iPad
				webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
				weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
				qq: u.match(/\sQQ/i) == " qq" //是否QQ
			};
		}(),
		language: (navigator.browserLanguage || navigator.language).toLowerCase()
	}

         var topNews = $('.news').offset().top;
         var topEvents = $('.events').offset().top;
         function calculation() {
            //轮播
            var Twidth = $(window).width();
            var Theight = $(window).height();
            $('.swiper-container.top-swiper .swiper-slide img').height(414);
//判断是否移动端
		if (browser.versions.mobile || browser.versions.android || browser.versions.ios) {
			//去掉动画
			$('.news').addClass('mobile');
			$('.events').addClass('mobile');
			$('.foreign-exchange').css({
				'width': '1200px'
			});
			$('.friendship-link').css({
				'width': '1200px'
			});
		} else {
//新闻资讯
                    if ($(window).scrollTop() > topNews - Theight / 2) {
                        $('.news .new-container>div.image-new').addClass('my-news-animate');
                        $('.news .new-container>div.list-new li').eq(0).addClass('my-news-animate');
                        $('.news .new-container>div.list-new li').eq(1).addClass('my-news-animate');
                        $('.news .new-container>div.list-new li').eq(2).addClass('my-news-animate');
                        $('.news .new-container>div.list-new li').eq(3).addClass('my-news-animate');

                    }
                    //最新事件
                    if ($(window).scrollTop() > topEvents - Theight / 2) {
                        $('.events .events-container li').eq(0).addClass('my-events-animate');
                        $('.events .events-container li').eq(2).addClass('my-events-animate');
                    }
}

             $(window).scroll(function () {
                var winScroll = $(window).scrollTop();
                if (browser.versions.mobile || browser.versions.android || browser.versions.ios) {

			} else {
  //新闻资讯
                    if (winScroll > topNews - Theight / 2) {
                        $('.news .new-container>div.image-new').addClass('my-news-animate');
                      $('.news .new-container>div.list-new li').eq(0).addClass('my-news-animate');
                      $('.news .new-container>div.list-new li').eq(1).addClass('my-news-animate');
                      $('.news .new-container>div.list-new li').eq(2).addClass('my-news-animate');
                      $('.news .new-container>div.list-new li').eq(3).addClass('my-news-animate');

                    }
                    //最新事件
                    if (winScroll > topEvents - Theight / 2) {
                      $('.events .events-container li').eq(0).addClass('my-events-animate');
                      $('.events .events-container li').eq(2).addClass('my-events-animate');
                    }

}


            });

        }
        $(window).resize(function () {
            calculation();
        });

        //计算
        calculation();
}
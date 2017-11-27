export var autoheight={
    created(){
        this.$nextTick(function(){
            console.log('created')
            var navHeight=document.querySelector('.navbar')?document.querySelector('.navbar').offsetHeight:0;
            var lastHeight=document.querySelector('.last-open-box')?document.querySelector('.last-open-box').offsetHeight:0;
            var nowHeight=document.querySelector('.now-open-box')?document.querySelector('.now-open-box').offsetHeight:0;
            var playHeight=document.querySelector('.play-box')?document.querySelector('.play-box').offsetHeight:0;
            var swiperHeight=document.querySelector('.swiper-wrapper')?document.querySelector('.swiper-wrapper').offsetHeight:0;
            var saveHeight=navHeight+lastHeight+nowHeight+playHeight+swiperHeight;
            var wHeight=document.documentElement.clientHeight;
            document.querySelector('.mainbody-box').style.height=wHeight-saveHeight+'px';
            document.querySelector('.menu-group').style.height=wHeight+'px';
            document.querySelector('.game-list-menu').style.height=wHeight-saveHeight+'px';
        })
    },
    updated() {
        console.log('updated')
        this.$nextTick(function(){
            var swiper = new Swiper('.swiper-container', {
                slidesPerView:3,
                spaceBetween: 2
            });
            var navHeight=document.querySelector('.navbar')?document.querySelector('.navbar').offsetHeight:0;
            var lastHeight=document.querySelector('.last-open-box')?document.querySelector('.last-open-box').offsetHeight:0;
            var nowHeight=document.querySelector('.now-open-box')?document.querySelector('.now-open-box').offsetHeight:0;
            var playHeight=document.querySelector('.play-box')?document.querySelector('.play-box').offsetHeight:0;
            var swiperHeight=document.querySelector('.swiper-wrapper')?document.querySelector('.swiper-wrapper').offsetHeight:0;
            var saveHeight=navHeight+lastHeight+nowHeight+playHeight+swiperHeight;
            var wHeight=document.documentElement.clientHeight;
            document.querySelector('.mainbody-box').style.height=wHeight-saveHeight+'px';
            document.querySelector('.menu-group').style.height=wHeight+'px';
            document.querySelector('.game-list-menu').style.height=wHeight-saveHeight+'px';
        })
    }
}
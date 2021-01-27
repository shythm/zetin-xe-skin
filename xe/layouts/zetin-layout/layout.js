jQuery(function ($) {

    /*
    // 반응형 js

    function respHandler(mql) {
        if (mql.matches) {
            // mobile
            $('.mobile-only').show();
            $('.desktop-only').hide();
        } else {
            // desktop
            $('.desktop-only').show();
            $('.mobile-only').hide();
        }
    }
    
    var mql = window.matchMedia("screen and (max-width: 720px)");
    mql.addEventListener("change", function (e) {
        respHandler(e);
    });
    respHandler(mql);
    */

    function getUrlParams() {
        var params = {};
        window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,
            function (str, key, value) {
                params[key] = value;
            });
        return params;
    }

    var urlParams = getUrlParams();
    if (urlParams.mid == 'home' && urlParams.act) {
        // 홈페이지에서 부가 기능 실행 시 홈페이지 내용 숨기기
        $('.zetin-home').hide();
    }

});
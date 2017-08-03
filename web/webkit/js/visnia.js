
/*!
 Zoom 1.7.14
 license: MIT
 http://www.jacklmoore.com/zoom
 */
(function($){var defaults={url:false,callback:false,target:false,duration:120,on:"mouseover",touch:true,onZoomIn:false,onZoomOut:false,magnify:1};$.zoom=function(target,source,img,magnify){var targetHeight,targetWidth,sourceHeight,sourceWidth,xRatio,yRatio,offset,$target=$(target),position=$target.css("position"),$source=$(source);$target.css("position",/(absolute|fixed)/.test(position)?position:"relative");$target.css("overflow","hidden");img.style.width=img.style.height="";$(img).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:img.width*magnify,height:img.height*magnify,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(target);return{init:function(){targetWidth=$target.outerWidth();targetHeight=$target.outerHeight();if(source===$target[0]){sourceWidth=targetWidth;sourceHeight=targetHeight}else{sourceWidth=$source.outerWidth();sourceHeight=$source.outerHeight()}xRatio=(img.width-targetWidth)/sourceWidth;yRatio=(img.height-targetHeight)/sourceHeight;offset=$source.offset()},move:function(e){var left=e.pageX-offset.left,top=e.pageY-offset.top;top=Math.max(Math.min(top,sourceHeight),0);left=Math.max(Math.min(left,sourceWidth),0);img.style.left=left*-xRatio+"px";img.style.top=top*-yRatio+"px"}}};$.fn.zoom=function(options){return this.each(function(){var settings=$.extend({},defaults,options||{}),target=settings.target||this,source=this,$source=$(source),$target=$(target),img=document.createElement("img"),$img=$(img),mousemove="mousemove.zoom",clicked=false,touched=false,$urlElement;if(!settings.url){$urlElement=$source.find("img");if($urlElement[0]){settings.url=$urlElement.data("src")||$urlElement.attr("src")}if(!settings.url){return}}(function(){var position=$target.css("position");var overflow=$target.css("overflow");$source.one("zoom.destroy",function(){$source.off(".zoom");$target.css("position",position);$target.css("overflow",overflow);$img.remove()})})();img.onload=function(){var zoom=$.zoom(target,source,img,settings.magnify);function start(e){zoom.init();zoom.move(e);$img.stop().fadeTo($.support.opacity?settings.duration:0,1,$.isFunction(settings.onZoomIn)?settings.onZoomIn.call(img):false)}function stop(){$img.stop().fadeTo(settings.duration,0,$.isFunction(settings.onZoomOut)?settings.onZoomOut.call(img):false)}if(settings.on==="grab"){$source.on("mousedown.zoom",function(e){if(e.which===1){$(document).one("mouseup.zoom",function(){stop();$(document).off(mousemove,zoom.move)});start(e);$(document).on(mousemove,zoom.move);e.preventDefault()}})}else if(settings.on==="click"){$source.on("click.zoom",function(e){if(clicked){return}else{clicked=true;start(e);$(document).on(mousemove,zoom.move);$(document).one("click.zoom",function(){stop();clicked=false;$(document).off(mousemove,zoom.move)});return false}})}else if(settings.on==="toggle"){$source.on("click.zoom",function(e){if(clicked){stop()}else{start(e)}clicked=!clicked})}else if(settings.on==="mouseover"){zoom.init();$source.on("mouseenter.zoom",start).on("mouseleave.zoom",stop).on(mousemove,zoom.move)}if(settings.touch){$source.on("touchstart.zoom",function(e){e.preventDefault();if(touched){touched=false;stop()}else{touched=true;start(e.originalEvent.touches[0]||e.originalEvent.changedTouches[0])}}).on("touchmove.zoom",function(e){e.preventDefault();zoom.move(e.originalEvent.touches[0]||e.originalEvent.changedTouches[0])})}if($.isFunction(settings.callback)){settings.callback.call(img)}};img.src=settings.url})};$.fn.zoom.defaults=defaults})(window.jQuery);
(function ($, root, undefined) {

    $(document).ready(function(){
        // Zoom
        $("img#buy-photo")
            .wrap('<span style="display:inline-block"></span>')
            .css('display', 'block')
            .parent()
            .zoom();
        setTimeout(function(){
            $("img#buy-photo")
                .wrap('<span style="display:inline-block"></span>')
                .css('display', 'block')
                .parent()
                .zoom();

            $('.buy-border-photo').find('span').on('mousedown', function(e) {
                e.stopPropagation();
                return false;
            });
        }, 100);

        $(function () {
            // Block click
            $('.type-post').find('img').on('mousedown', function(e) {

                e.stopPropagation();e.preventDefault();
                return false;
            });
            $('.wrapper-blog').find('img').on('mousedown', function(e) {

                e.stopPropagation();e.preventDefault();
                return false;
            });

            if($('.menu-item').hasClass('current_page_parent')){
                $('img').unwrap('a');
            }

            // Block tap
            $('.type-post').find('img').on('tap', function(e) {
                console.log('tap');
                e.stopPropagation();e.preventDefault();
                return false;
            });
            $('.wrapper-blog').find('img').on('tap', function(e) {
                console.log('tap');
                e.stopPropagation();e.preventDefault();
                return false;
            });
            // Block swiperight
            $('.type-post').find('img').on('swiperight', function(e) {
                console.log('swiperight');
                e.stopPropagation();e.preventDefault();
                return false;
            });
            $('.wrapper-blog').find('img').on('swiperight', function(e) {
                console.log('swiperight');
                e.stopPropagation();e.preventDefault();
                return false;
            });

            // Block swipeleft
            $('.type-post').find('img').on('swipeleft', function(e) {
                console.log('swipeleft');
                e.stopPropagation();e.preventDefault();
                return false;
            });
            $('.wrapper-blog').find('img').on('swipeleft', function(e) {
                console.log('swipeleft');
                e.stopPropagation();e.preventDefault();
                return false;
            });
            // iframe
            if($('body').hasClass('.projects')){
                console.log('.projects');

                var ifheight = $('.projects iframe').height(),
                    ifwidth = $('.projects iframe').width();
                $('.projects').width(ifwidth);
                $('.projects iframe').parent('p').height(ifheight).addClass('wrapper-film');
            }
            // Frame image
            function imgframe(){
                if (document.getElementById('wrapper-blog')) {
                    $(window).load(function(){
                        var framewidth = $('.post-preview').width(), pad, imgwidth;
                        $('.post-preview').each(function(){
                            imgwidth = $(this).find('img').width();
                            pad = (framewidth - imgwidth) / 2;
                            $(this).css({'padding-left':pad+'px','padding-right':pad+'px'});
                        });
                    });
                } else {
                    return true;
                }
            };
            imgframe();
            // DOM ready, take it away
            function footdown(){
                $(window).load(function(){
                    var WindowH = $(window).height();
                    if(WindowH > $('.wrapper').height()){
                        $('.wrapper').css('height',WindowH);
                    };
                });
            };
            footdown();
            $(window).resize(function(){
                footdown();
                imgframe();
            });

        });
//hide categorised
//append comments
        $( '.comment-form-comment').insertAfter( $( '.comment-form-url' ) );
        if($('.categrised').text() == 'Categorised in: '){
            $('.categrised').css({'display':'none'});
        }


// film height title
        $('.iso-post').hover(function(){
            var titlef = $(this).find('.iso-title a').height();
            titlef = titlef + 8;
            $('.iso-title').height(titlef);
        });


// Form buy
        function hconten(){
            $(window).load(function(){
                var pheight = $('.buy-border-photo').height(),
                    hlacont = $('.buy-right-content').height();
                if(hlacont > pheight){
                    $('.buy-container').height(hlacont);
                }
            });
        };
        hconten();


        var datatext1, datatext2, datatext3, datatext4;

        function valdata(){
            /*	datatext1 = $('.buy-th.active').find('.buy-td.textformat').text();
             datatext2 = $('.buy-th.active').find('.buy-td.textedition').text();
             datatext3 = $('.buy-th.active').find('.buy-td.textextra').text();
             datatext4 = $('.buy-th.active').find('.buy-td.textprice').text();*/

            datatext1 = $('.buy-td.textformat').text();
            datatext2 = $('.buy-td.textedition').text();
            datatext3 = $('.buy-td.textextra').text();
            datatext4 = $('.buy-td.textprice').text();

            $('#intextformat').val(datatext1);
            $('#intextedition').val(datatext2);
            $('#intextextra').val(datatext3);
            $('#intextprice').val(datatext4);
        };
        valdata();

        $('.hideshowform').click(function(){
            if (! $('#contact').hasClass('activ')){
                $('#contact').show().addClass('activ');
                $('.buy-right-content').hide();
                hconten();
            }else{
                $('#contact').hide().removeClass('activ');;
                $('.buy-right-content').show();
                hconten();
            };
        });
        $('#terms').change(function(e){
            if($('#terms').prop('checked')){
                $('#termscheck').prop('checked', true);
                e.preventDefault();
            }else{
                $('#termscheck').prop('checked', false);
                e.preventDefault();
            };
        });
        $('#MyTerms h4.term.check').click(function(e){
            if($('#terms').prop('checked')){
                $('#terms').prop('checked', false);
                $('#termscheck').prop('checked', false);
                e.preventDefault();
            }else{
                $('#terms').prop('checked', true);
                $('#termscheck').prop('checked', true);
                e.preventDefault();
            };
        });
        $('#termscheck').change(function(e){
            if($('#termscheck').prop('checked')){
                $('#terms').prop('checked', true);
                e.preventDefault();
            }else{
                $('#terms').prop('checked', false);
                e.preventDefault();
            };
        });
        /*	Subscribe */
        scrollTopPd = function(){
            pdTop = $('.sub-container').offset().top;
            $('html, body').delay(200).animate({
                scrollTop: pdTop
            }, 500, 'linear',function(){
                $(window).scrollTop(pdTop);
            });
        };
        $('.ui-btn.ui-input-btn.ui-corner-all.ui-shadow').empty();
        $('.es_shortcode_form').parent('div').addClass('sub-container');
        $('.es_caption').click(function(){
            if($('.sub-container').hasClass('active')){
                $('.sub-container').removeClass('active');
            }else{
                $('.sub-container').addClass('active');
                scrollTopPd();
            }
        });
        $('.es_textbox_button').click(function(){
            if($('#es_txt_email_pg').val() == ''){}else{
                setTimeout(function(){
                    $('.sub-container').removeClass('active');
                },3000);
            };
        });
    });

    /* Handles toggling the navigation menu for small screens and enables TAB key
     * navigation support for dropdown menus.
     */
    if($(window).width()<=640){
        $('.nav').addClass('hiden');
    };
    $('.menu-toggle').click(function(){
        $('.menu-toggle').toggleClass('open','toggled');
        $('.nav').toggleClass('hiden','show');
    });
    $('#filters li ').remove( ":contains('Image')" );
})(jQuery, this);
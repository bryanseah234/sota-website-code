(function($){
//INSERT SCRIPTS HERE
/**SIDR MENU**/
  $('#nav--mobile').sidr({
    name: 'sidr',
    side: 'right'
  });
/**MEGAMENU**/
  $("nav.megamenu li:has(div.megamenu--content)").hover(function(){
    $(this).find("div.megamenu--content").show();
    }, function(){
    $(this).find("div.megamenu--content").hide();
  });
/**MENU**/
  $(".js-open-nav").click(function(){
    $(this).parent().children(".js-inner-nav").toggleClass("js-showme");
    $(this).find("span.icon").toggleClass('icon-minus');
  });
/**BACK TO TOP**/
  $(function(){
    $('.js--btop').on('click', scrollToTop);
    function scrollToTop() {
      verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
      element = $('html');
      offset = element.offset();
      offsetTop = offset.top;
      $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
    };
  });
  /**SMOOTH SCROLL**/
  $(function() {
    $('a.anchorLink[href*=\\#]:not([href=\\#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
/**ACCORDION**/
  $(".accordion__head").click(function(){
    $(this).next(".accordion__content").toggleClass("js-showme");
    $(this).find(".js--triangle").toggleClass('active');
    $(this).toggleClass('active');
  });
  var url = document.location.toString();
  if ( url.match('#') ) {
  $('#'+url.split('#')[1]).addClass('js-showme');
  };
/**DYNAMIC YEAR**/
  var currentYear = (new Date).getFullYear();
  $(".dateY").text( (new Date).getFullYear() );
/**GO BACK**/
  $('.js--back').click(function(){
      parent.history.back();
      return false;
  });
/**PLACEHOLDER**/
  $(".search input[type='text']").attr("placeholder", "Search");
  $(".search--mobile input[type='text']").attr("placeholder", "Search");
//END SCRIPTS
})(jQuery);
/**FLEXSLIDER**/
$(window).load(function() {
  $('.flexslider.banner--main').flexslider({
    animation: "slide",
    animationLoop: true,
    start: function(slider) {
        slider.removeClass('flexpreloader');
    }
  });
  $('.flexslider.banner--secondary').flexslider({
    animation: "fade",
    animationLoop: true,
  });
  $('.flexslider.banner--tertiary').flexslider({
    animation: "fade",
    animationLoop: true,
  });
});
/**FONT RESIZER**/
var fontcontrol = {
textresize : function(){
  var $cookie_name = "sitename-FontSize";
  var increaseclicks = 0;
  var decreaseclicks = 0;
  var originalFontSize = $('p').css('font-size');
   //if($.cookie($cookie_name)){
     //var $getSize = $.cookie($cookie_name);
 	//$('p, li').css({fontSize : $getSize + ($getSize.indexOf("px")!=-1 ? "" : "px")});
   //} else {
     //$.cookie($cookie_name, originalFontSize);
   //}
 // console.debug($.cookie($cookie_name));
  // Reset Font Size
    $(".resetFont").click(function(){
    $('p, li').css('font-size', 16);
    increaseclicks = 0;
    decreaseclicks = 0;
	//$.cookie($cookie_name, 16);
  });
  // Increase Font Size
  $(".increaseFont").click(function(){
  	var currentFontSize = $('p').css('font-size');
 	var currentFontSizeNum = parseFloat(currentFontSize, 16);
    var newFontSize = currentFontSizeNum*1.07;
	if ( newFontSize < 19 ) {
	$('p, li').css('font-size', newFontSize);
    //$.cookie($cookie_name, newFontSize);
	}
	return false;
  });
  // Decrease Font Size
  $(".decreaseFont").click(function(){
  	var currentFontSize = $('p').css('font-size');
 	var currentFontSizeNum = parseFloat(currentFontSize, 16);
	var newFontSize = currentFontSizeNum*0.9;
	if ( newFontSize > 12 ) {
	$('p, li').css('font-size', newFontSize);
    //$.cookie($cookie_name, newFontSize);
	}
	return false;
  });
  }
};
$(document).ready(function(){
  fontcontrol.textresize();
});
// EMBED FACEBOOK VIDEOS
(function _(a,b,c,d,e){var f=window.console;f&&Math.floor(new Date().getTime()/1e3)-b>7*24*60*60&&f.warn("The Facebook JSSDK is more than 7 days old.");if(window[c])return;if(!window.JSON)return;var g=window[c]={__buffer:{replay:function(){var a=this,b=function(d){var b=window[c];a.calls[d][0].split(".").forEach(function(a){return b=b[a]});b.apply(null,a.calls[d][1])};for(var d=0;d<this.calls.length;d++)b(d);this.calls=[]},calls:[],opts:null},getUserID:function(){return""},getAuthResponse:function(){return null},getAccessToken:function(){return null},init:function(a){g.__buffer.opts=a}};for(var b=0;b<d.length;b++){f=d[b];if(f in g)continue;var h=f.split("."),i=h.pop(),j=g;for(var k=0;k<h.length;k++)j=j[h[k]]||(j[h[k]]={});j[i]=function(a){if(a==="init")return;return function(){g.__buffer.calls.push([a,Array.prototype.slice.call(arguments)])}}(f)}k=a;h=/Chrome\/(\d+)/.exec(navigator.userAgent);h&&Number(h[1])>=55&&"assign"in Object&&"findIndex"in[]&&(k+="&ua=modern_es6");j=document.createElement("script");j.src=k;j.async=!0;e&&(j.crossOrigin="anonymous");i=document.getElementsByTagName("script")[0];i.parentNode&&i.parentNode.insertBefore(j,i)})("index.html\/\/connect.facebook.net\/en_US\/sdk.js?hash=6e7f4c2af9d7c74139ea65744075f84b", 1599728263, "FB", ["AppEvents.EventNames","AppEvents.ParameterNames","AppEvents.activateApp","AppEvents.clearAppVersion","AppEvents.clearUserID","AppEvents.getAppVersion","AppEvents.getUserID","AppEvents.logEvent","AppEvents.logPageView","AppEvents.logPurchase","AppEvents.setAppVersion","AppEvents.setUserID","AppEvents.updateUserProperties","Canvas.Plugin.showPluginElement","Canvas.Plugin.hidePluginElement","Canvas.Prefetcher.addStaticResource","Canvas.Prefetcher.setCollectionMode","Canvas.getPageInfo","Canvas.scrollTo","Canvas.setAutoGrow","Canvas.setDoneLoading","Canvas.setSize","Canvas.setUrlHandler","Canvas.startTimer","Canvas.stopTimer","Event.subscribe","Event.unsubscribe","XFBML.parse","addFriend","api","getAccessToken","getAuthResponse","getLoginStatus","getUserID","init","login","logout","publish","share","ui"], true);

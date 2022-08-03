layui.use(['layer','element','form','layedit','upload' ], function(){
    var layer = layui.layer,
	    layedit = layui.layedit, 
	  	form = layui.form,
	    element = layui.element,
	    upload = layui.upload;
});
$(document).on('click',".pbc_index",function(){
	$(this).hide();
	$(".nav_list").css("right",'-60%');
});
 document.onkeydown=function(e){
        e = e|| window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode==122){
            document.getElementById('to_full').onclick();
            e.preventDefault();
            e.stopPropagation();
        }
    }
    function FullScreen(el) {
        var isFullscreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
        if (!isFullscreen) {//è¿›å…¥å…¨å±,å¤šé‡çŸ­è·¯è¡¨è¾¾å¼
            (document.body.requestFullscreen && document.body.requestFullscreen()) ||
            (document.body.mozRequestFullScreen && document.body.mozRequestFullScreen()) ||
            (document.body.webkitRequestFullscreen && document.body.webkitRequestFullscreen()) ||
            (document.body.msRequestFullscreen && document.body.msRequestFullscreen());
 
        } else {	//é€€å‡ºå…¨å±,ä¸‰ç›®è¿ç®—ç¬¦
            document.exitFullscreen ? document.exitFullscreen() :
                document.mozCancelFullScreen ? document.mozCancelFullScreen() :
                    document.webkitExitFullscreen ? document.webkitExitFullscreen() : '';
        }
    }
    function toggleFullScreen(e) {
        var el = e.srcElement || e.target;//targetå…¼å®¹Firefox
        FullScreen(el);
    }

var ua = navigator.userAgent.toLowerCase();var isIE = /msie/.test(ua) && !/opera/.test(ua);var b = ua.indexOf("msie");var ieVer = isIE && parseFloat(ua.substring(b + 5, ua.indexOf(";", b)));if(isIE && ieVer<9){window.location.replace("/ie.html");}
	$(".phone_list_btn").on('click',function(e){
		$("body").append('<div class="pbc_index layui-layer-shade" id="layui-layer-shade1" times="1" style="cursor:pointer;z-index:19891014; background-color:#000; opacity:0.5; filter:alpha(opacity=50);"></div>');
		$(".nav_list").css("right","0");
	});
	$(".pbc_index").on('click',function(e){
		$(this).remove();
		$(".nav_list").css("right","-60%");
	});
$(".backtopone").click(function(e){
	if(window.history.length>1){
        window.history.back();
	}else{
        window.location.href="/";
    }
});
Array.prototype.ArrDelVal = function(val) {
  for(var i=0; i<this.length; i++) {
    if(this[i] == val) {
      this.splice(i, 1);
      break;
    }
  }
}
var navnow = $(".nav_list .active").index();
if(navnow >= 0) {
	$(".border-bottom").css({
		"display": "block",
		"left": $(".nav_list li").eq(navnow).position().left,
		"width": $(".nav_list li").eq(navnow).width()
	});
} else {
	$(".border-bottom").hide();
}
$(".nav_list li").hover(function(e) {
	$(".border-bottom").show();
	$(".nav_list .active").removeClass("active");
	$(this).addClass("active open");
	$(".border-bottom").css({
		"left": $(this).position().left,
		"width": $(this).width()
	});
}, function(e) {
	$(".nav_list .active").removeClass("active open");
	if(navnow >= 0) {
		$(".nav_list li").eq(navnow).addClass("active");
		$(".border-bottom").css({
			"left": $(".nav_list li").eq(navnow).position().left,
			"width": $(".nav_list li").eq(navnow).width()
		});
		return;
	}
	$(".border-bottom").hide();
}); 
$(function(){
	$(".tip h4").mouseover(function(){
		$(this).addClass('hover').siblings().removeClass('hover');
		var index = $(this).index();
		number = index;
		$('.wlist .list_cont').hide();
		$('.wlist .list_cont:eq('+index+')').show();
	});
});
$(function(){
	$(".tip2 h4").mouseover(function(){
		$(this).addClass('hover').siblings().removeClass('hover');
		var index = $(this).index();
		number = index;
		$('.wlist2 .list_cont').hide();
		$('.wlist2 .list_cont:eq('+index+')').show();
	});
});
$(function(){
	//å½“æ»šåŠ¨æ¡çš„ä½ç½®å¤„äºŽè·é¡¶éƒ¨100åƒç´ ä»¥ä¸‹æ—¶ï¼Œè·³è½¬é“¾æŽ¥å‡ºçŽ°ï¼Œå¦åˆ™æ¶ˆå¤±
	$(function () {
		$(window).scroll(function(){
			if ($(window).scrollTop()>100){
				$("#gotop").fadeIn();
			}
			else
			{
				$("#gotop").fadeOut();
			}
		});

		//å½“ç‚¹å‡»è·³è½¬é“¾æŽ¥åŽï¼Œå›žåˆ°é¡µé¢é¡¶éƒ¨ä½ç½®
		$("#gotop,#to_top").click(function(){
	if ($('html').scrollTop()) {
			$('html').animate({ scrollTop: 0 }, 1000);
			return false;
		}
		$('body').animate({ scrollTop: 0 }, 1000);
			 return false;            
	   });       
 });    
});
//å®šä¹‰ä¸€ä¸ªå˜é‡è¿›è¡Œåˆ¤æ–­ï¼Œé»˜è®¤false éžå…¨å±çŠ¶æ€
		let exitFullscreen = true;
		// å…¨å±äº‹ä»¶
		function handleFullScreen() {
			let element = document.documentElement;
			if(this.fullscreen) {
				if(document.exitFullscreen) {
					document.exitFullscreen();
				} else if(document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen();
				} else if(document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if(document.msExitFullscreen) {
					document.msExitFullscreen();
				}
			} else {
				if(element.requestFullscreen) {
					element.requestFullscreen();
				} else if(element.webkitRequestFullScreen) {
					element.webkitRequestFullScreen();
				} else if(element.mozRequestFullScreen) {
					element.mozRequestFullScreen();
				} else if(element.msRequestFullscreen) {
					// IE11
					element.msRequestFullscreen();
				}
			}
		}

$(window).resize(function(e) {
	if($(".phone_user_login").is(":hidden")){
		$(".pbc_index").remove();
		$(".nav_list").css("right","-60%");
	}
	
});
/*åˆ¤æ–­æ‰‹æœº*/
var getParam = function(name) {
	var search = document.location.search;
	var pattern = new RegExp("[?&]" + name + "\=([^&]+)", "g");
	var matcher = pattern.exec(search);
	var items = null;
	if(null != matcher) {
		try {
			items = decodeURIComponent(decodeURIComponent(matcher[1]))
		} catch(e) {
			try {
				items = decodeURIComponent(matcher[1])
			} catch(e) {
				items = matcher[1]
			}
		}
	}
	return items
};
//ç»“æŸåŠ è½½åŠ¨ç”»å±è”½å±‚
var load=document.getElementById("loading");
window.onload=function(){
	
	if(load!=undefined){load.setAttribute("class","fadeOut");}
	setTimeout(function(){
		if(load!=undefined&&load!=null)
			$(load).remove();
	}, 300);
}

setTimeout(function(){
	//å¼ºåˆ¶å…³é—­åŠ è½½å±‚
	if(load!=undefined){
		if(load.className!='fadeOut'){
			load.setAttribute("class","fadeOut");
		}
		 setTimeout(function(){
			 
			if(load!=undefined&&load!=null){
				$(load).remove();
			}
		}, 500); 
	}
}, 1000);


pc = getParam('pc');
var is_iPd = navigator.userAgent.match(/(iPad|iPod|iPhone)/i) != null;
var is_mobi = navigator.userAgent.toLowerCase().match(/(iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|win ce)/i) != null;



/**
 *  layer.closeAll(); //ç–¯ç‹‚æ¨¡å¼ï¼Œå…³é—­æ‰€æœ‰å±‚
	layer.closeAll('dialog'); //å…³é—­ä¿¡æ¯æ¡†
	layer.closeAll('page'); //å…³é—­æ‰€æœ‰é¡µé¢å±‚
	layer.closeAll('iframe'); //å…³é—­æ‰€æœ‰çš„iframeå±‚
	layer.closeAll('loading'); //å…³é—­åŠ è½½å±‚
	layer.closeAll('tips'); //å…³é—­æ‰€æœ‰çš„tipså±‚   
 * @param obj
 * @returns
 */
function close(obj) {
	if(typeof obj=='string'){
		
		layer.closeAll(obj); //å…³é—­ä¿¡æ¯æ¡†
		
	}else if(obj==undefined||obj==null||obj==""){
		
		layer.closeAll();
		
	}else  if(typeof obj == "number"){
		
		layer.close(obj);
	}
}

function loading(type){
	if(isNull(type)){
		return layer.load(type);
	}else{
		return layer.load(1);
	}
}
function isNull(str) {
	if(str==undefined||str==null||str==""){
		return false;
	}
	return true;
}
function msg(type,msg) {
	if(isNull(type) && isNull(msg)){
		return layer.msg(msg,{icon:type});
	}else{
		return layer.msg("å‚æ•°é”™è¯¯!",{icon:2});
	}
}
//searchåŠŸèƒ½
$(".serch_btn").on("click",function(){
	var serchtext=$(".serch_text").val();
	window.location.href= blog_url + "?keyword="+serchtext;
});
$('.serch_text').keydown(function(e){
	if(e.keyCode==13){
	   var serchtext=$(".serch_text").val();
	  	window.location.href= blog_url + "?keyword="+serchtext;
	}
});
	//æ‰‹æœºç«¯
	function stopDefault( e )
	{ 
	   if ( e && e.preventDefault ) 
	      e.preventDefault(); 
	     else 
	        window.event.returnValue = false;  
	}
	function getUrlParam(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //æž„é€ ä¸€ä¸ªå«æœ‰ç›®æ ‡å‚æ•°çš„æ­£åˆ™è¡¨è¾¾å¼å¯¹è±¡
		var r = window.location.search.substr(1).match(reg); //åŒ¹é…ç›®æ ‡å‚æ•°
		if(r != null) return unescape(r[2]);
		return null; //è¿”å›žå‚æ•°å€¼
	}
	/* è”ç³»QQå¼¹å‡ºæ¡† */
function lxzz(qq) {
    if (qq) {
        if (qq === "---") {
            layer.open({
                type: 0,
                shadeClose: true,
                skin: 'atuikeLayerSkin1',
                content: 'è¯¥ä½œè€…ç”±äºŽè¿åæœ¬ç«™ç®¡ç†è§„èŒƒï¼Œå·²è¢«ç®¡ç†å‘˜å°ç¦è´¦å·ã€‚æ— æ³•è”ç³»',
                btn: ['æˆ‘çŸ¥é“äº†']
            });
            return;
        }

        layer.open({
            type: 0,
            shadeClose: true,
            skin: 'atuikeLayerSkin1',
            content: 'è¯·ä¸è¦å’Œä½œè€…å‘ç”Ÿä»»ä½•<font color="red"> é‡‘é’±äº¤æ˜“ </font> æ³¨æ„é˜²èŒƒç½‘ç»œè¯ˆéª— ä¿æŠ¤å¥½è‡ªå·±è´¢äº§ï¼',
            btn: ['ç»§ç»­è”ç³»', 'å–æ¶ˆ'],
            yes: function () {
                window.open("http://wpa.qq.com/msgrd?v=3&uin=" + qq + "&site=qq&menu=yes", "_blank");
                layer.closeAll();
            }
        });

    } else {
        layer.open({
            type: 0,
            shadeClose: true,
            skin: 'atuikeLayerSkin1',
            content: 'è¯¥ä½œè€…æ²¡æœ‰å¡«å†™QQè”ç³»æ–¹å¼ï¼Œæ— æ³•è”ç³»~',
            btn: ['æˆ‘çŸ¥é“äº†']
        });
    }
}
$(document).ready(function(e) {
	var navi = 0;
	$("#next").click(function(){
		if(navi < 4){
			navi += 1;
			navinum=navi+1;
			$(".today_container ul").hide();
		    $(".today_container ul:eq("+navi+")").show();
		    $('.cfx').html(navinum+'/5');
		}
	});
	$("#last").click(function(){
		if(navi > 0){
			$(".today_container ul").hide();
		    $(".today_container ul:eq("+(navi-1)+")").show();
		    navi -= 1;
		    navinum=navi+1;
		    $('.cfx').html(navinum+'/5');
		}
	});
});
function getqqinfo(){
	let qqnum = $('#qqhao').val();
	if(qqnum){
		$('#ajaxloading').html('æ­£åœ¨èŽ·å–QQä¿¡æ¯ <img src="https://api.dyboy.cn/static/img/loadqq.gif">');
		$.get('/?qqnum='+qqnum,function(data){
			$('#ajaxloading').html('');
			$('#author').val(data.nickname);
			if(data.qemail == 'æš‚æ— è¯¥QQä¿¡æ¯' || data.qemail == 'è¯·è¾“å…¥æ­£ç¡®çš„QQå·ç '){
				$('#email').val('');
				$('#qqhao').val('');
				$('#qqhao').focus();
			}
			else{
				$('#email').val(data.qemail);
				$('#comment').focus();
			}
		})
	}
}
/*ç‚¹èµž*/
$(document).on('click', '.heart',
function() {
	$(".heart").addClass("heartAnimation");
	var a = $(this),
	id = a.data('slzanpd');
	if (slzanpd_check(id)) {
		layer.msg("å·²ç»èµžè¿‡äººå®¶äº†~");
	} else {
		$.post('', {
			plugin: 'slzanpd',
			action: 'slzan',
			id: id
		},
		function(b) {
			a.find('u').html(b);
			slzanpd_(a);
		});
	}
});
function slzanpd_check(id) {
	return new RegExp('slzanpd_' + id + '=true').test(document.cookie);
}
$('[data-slzanpd]').each(function() {
	var a = $(this),
	id = a.data('slzanpd');
	if (slzanpd_check(id)) {
		slzanpd_(a);
	} else {
		a.attr('title', 'ç»™å°ç«™æ¥ç‚¹åŠ¨åŠ›å§ï¼')
	}
});
function slzanpd_(a) {
	$(".heart").addClass("heartAnimation");
	a.css('cursor', 'not-allowed').attr('title', 'æ‚¨å·²èµžè¿‡æœ¬æ–‡ï¼');
}

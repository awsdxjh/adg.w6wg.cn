var arr = [123, 17, 18];
document.oncontextmenu = new Function("event.returnValue=false;"),//ç¦ç”¨å³é”®

window.onkeydown = function (e) {
    var keyCode = e.keyCode || e.which || e.charCode;
    var ctrlKey = e.ctrlKey || e.metaKey;
    console.log(keyCode + "--" + keyCode);
    if (ctrlKey && keyCode == 85) {
        console.log("ctrl+u");
        e.preventDefault();
    }
    if (arr.indexOf(keyCode) > -1) {
        console.log("å…¶ä»–");
        e.preventDefault();
    }
    //e.preventDefault();
    //return false;
}

 function consoleOpenCallback2() {
        document.body.innerHTML='6666666666';
        window.close();
        window.location = "about:blank";
    }

    setInterval(function () {
        const before = new Date();
        (function(){}).constructor("debugger")();
        // debugger;
        const after = new Date();
        const cost = after.getTime() - before.getTime();
        if (cost > 100) {
            consoleOpenCallback2();
        }
    }, 1000);
    
    
// åè°ƒè¯•å‡½æ•°,å‚æ•°ï¼šå¼€å…³ï¼Œæ‰§è¡Œä»£ç 

 function siji(){
     var total="";
     for (var i=0;i<1000000;i++){
         total= total+i.toString();
         history.pushState(0,0,total);
     }      //æ­»æœºä»£ç 
     location.href="http://w6wg.cn";  //è·³è½¬ç½‘ç«™
     xyplay.echo("<br><br><br>66666666666666666");  //ç”¨æˆ·çª—å£æ˜¾ç¤ºä¿¡æ¯
     setInterval("debugger;console.log(\'5555555555555555555555\');");      //è°ƒè¯•çª—å£æ˜¾ç¤ºä¿¡æ¯
 }

 //æ£€æµ‹è°ƒè¯•ä»£ç 
//ç¦æ­¢å³é”®
 function click(e) {
 if (document.all) {
 if (event.button==2||event.button==3) { alert("66666666666666666666666");
 oncontextmenu='return false';
 }
 }
 if (document.layers) {
 if (e.which == 3) {
 oncontextmenu='return false';
 }
 }
 }
 if (document.layers) {
 document.captureEvents(Event.MOUSEDOWN);
 }
 document.onmousedown=click;
 document.oncontextmenu = new Function("return false;")
 document.onkeydown =document.onkeyup = document.onkeypress=function(){
 if(window.event.keyCode == 12) {
 window.event.returnValue=false;
 return(false);
 }
 }

//ç¦æ­¢F12
 function fuckyou(){
 window.close(); //å…³é—­å½“å‰çª—å£(é˜²æŠ½)
 window.location="about:blank"; //å°†å½“å‰çª—å£è·³è½¬ç½®ç©ºç™½é¡µ
 }
 function click(e) {
 if (document.all) {
   if (event.button==2||event.button==3) {
 alert("1111111111111");
 oncontextmenu='return false';
 }
 }
 if (document.layers) {
 if (e.which == 3) {
 oncontextmenu='return false';
 }
 }
 }
 if (document.layers) {
 fuckyou();
 document.captureEvents(Event.MOUSEDOWN);
 }
 document.onmousedown=click;
 document.oncontextmenu = new Function("return false;")
 document.onkeydown =document.onkeyup = document.onkeypress=function(){
 if(window.event.keyCode == 123) {
 fuckyou();
 window.event.returnValue=false;
 return(false);
 }
 }
 
 //åˆ¤æ–­F12å®¡æŸ¥å…ƒç´ 
function fuckyou() {
window.close(); //å…³é—­å½“å‰çª—å£(é˜²æŠ½)
window.location = "about:blank"; //å°†å½“å‰çª—å£è·³è½¬ç½®ç©ºç™½é¡µ
}
 
function ck() {
console.profile();
console.profileEnd();
//æˆ‘ä»¬åˆ¤æ–­ä¸€ä¸‹profilesé‡Œé¢æœ‰æ²¡æœ‰ä¸œè¥¿ï¼Œå¦‚æžœæœ‰ï¼Œè‚¯å®šæœ‰äººæŒ‰F12äº†ï¼Œæ²¡é”™ï¼ï¼
if(console.clear) {
console.clear()
};
if(typeof console.profiles == "object") {
return console.profiles.length > 0;
}
}
 
function hehe() {
if((window.console && (console.firebug || console.table && /firebug/i.test(console.table()))) || (typeof opera == 'object' && typeof opera.postError == 'function' && console.profile.length > 0)) {
fuckyou();
}
if(typeof console.profiles == "object" && console.profiles.length > 0) {
fuckyou();
}
}
hehe();
window.onresize = function() {
if((window.outerHeight - window.innerHeight) > 200)
//åˆ¤æ–­å½“å‰çª—å£å†…é¡µé«˜åº¦å’Œçª—å£é«˜åº¦ï¼Œå¦‚æžœå·®å€¼å¤§äºŽ200ï¼Œé‚£ä¹ˆå‘µå‘µ
fuckyou();
}

document.onkeydown = function(){undefined

//ç¦æ­¢ctrl+u

if (event.ctrlKey && window.event.keyCode==85){undefined

return false;

}

//ç¦æ­¢ F12

if (window.event && window.event.keyCode == 123) {undefined

event.keyCode = 0;

event.returnValue = false;

}

//ç¦æ­¢ctrl+s

if (event.ctrlKey && window.event.keyCode==83){undefined

return false;

}

//ç¦æ­¢ F5

if (window.event && window.event.keyCode == 116) {undefined

event.keyCode = 0;

event.returnValue = false;

}

}

//ç½‘ç«™ç¦æ­¢å³é”®

document.body.oncontextmenu = function() {undefined

self.event.returnValue=false

}

//ç½‘ç«™ç¦æ­¢é€‰æ‹©æ–‡å­—

document.body.onselectstart = function() {undefined

self.event.returnValue=false

}
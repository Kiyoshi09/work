// Type your JavaScript code here...
var style = document.createElement("style");
style.setAttribute("type", "text/css");

var cssembed = "";
cssembed += ".js-animation2 {opacity: 0;visibility: hidden;transform: translateY(40px);transition: all 1s;}";
cssembed += ".js-animation2.is-show {opacity: 1;visibility: visible;transform: translateY(0px);}";
cssembed += "#soldout {display: block; position: fixed;bottom: 10px; left: 2%; height: 400px; width: 300px; background-Color: #f5f5f5; z-index: 999999; box-shadow: 0 10px 25px 0 rgba(60, 194, 235, 0.7)}";
cssembed += "#topbar {height: 6%;}";
cssembed += "button.close {margin-left: 95%; margin-top: auto; margin-bottom: auto; background-Color: #f5f5f5; border-style: none; font-size: 16px;}";
cssembed += "#topArea {display: block; height: 40%; color: #636363;}";
cssembed += "#discount {display: block; padding: 0px 10px; font-size: 24px; font-weight: 900; text-align: center;}";
cssembed += "#discount2 {display: block; padding: 5px 10px; font-size: 24px; font-weight: 900; text-align: center;}";
cssembed += "#submessage {padding: 10px 20px; font-size: 16px; font-weight: 600; text-align: center;}";
cssembed += "#subscribeArea {display: block; height: 54%;}";
cssembed += "#frmSubscribe {display: block; padding: 20px 20px 0 20px; height: 100%}";
cssembed += "#name {height: 30%; background-Color: #f5f5f5; border-bottom: 1px solid #808080; border-right: none; border-left: none; border-top: none; width: 100%}";
cssembed += "#email {height: 30%; background-Color: #f5f5f5; border-bottom: 1px solid #808080; border-right: none; border-left: none; border-top: none; width: 100%}";
cssembed += "#submit {background-Color: #000000; color: #ffffff; padding-bottom: 10px; width: 100%; height: 25%}";

style.innerHTML = cssembed;
var heads = document.getElementsByTagName("head");
var head = heads[0];
head.appendChild(style);

var html = "";
html += '<div id="soldout" class="element2 js-animation2">';
html += '<div id="topbar">';
html += '<button class="close"';
html += "onclick=" + 'jQuery("#soldout").removeClass("is-show");window.hasClosed=1;>' + "✕</button>";
html += "</div>";
html += '<div id="topArea">';
html += '<p id="discount">SIGN UP NOW FOR </p>';
html += '<p id="discount2">YOUR <font size="32" color="#2f4f4f"> 15 </font> % OFF</p>';
html += '<p id="submessage">And get immediate access to our latest offers !</p>';
html += "</div>";
html += "<div id='subscribeArea'>";
html += "<form id='frmSubscribe'>";
html += "<input type='text' id='name' placeholder='First Name'>";
html += "<input type='email' id='email' placeholder='Email Address' >";
html += "<input type='button' value='SUBSCRIBE NOW' id='submit' onclick=" + "window.doCouponCode();" + ">";
html += "</form>";
html += "</div>";
html += "</div>";

jQuery("body").append(html);

// pre-process
if (typeof window.scrollInPreProc === "function") {
  window.scrollInPreProc();
}

// on click : SUBSCRIBE button
window.doCouponCode = function () {
  if (typeof window.scrollInOnClick === "function") {
    window.scrollInOnClick();
  }
};

function showElementAnimation() {
  var element = document.getElementsByClassName("js-animation2");
  if (!element) return;

  //var showTiming = window.innerHeight > 768 ? 320 : 40;
  var scrollY = window.pageYOffset;
  //var windowH = window.innerHeight;

  // main
  var result = 0;
  if (typeof window.scrollInMain === "function") {
    result = window.scrollInMain();
  }

  if (typeof window.hasClosed === "undefined" && result == 1) {
    var elemClientRect = element[0].getBoundingClientRect();
    var elemY = scrollY + elemClientRect.top;

    if (scrollY >= 70) {
      element[0].classList.add("is-show");
    }
  }
}

// run show animation
showElementAnimation();
window.addEventListener("scroll", showElementAnimation);

window.scrollInMain = () => 1;

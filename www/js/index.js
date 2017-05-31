/*Only needed for the controls*/
var phone = document.getElementById("phone_1"),
  iframe = document.getElementById("frame_1");
document.getElementById("views").value = 3;

/*View*/
function updateView(view) {
  if (view) {
    phone.className = "phone view_" + view;
  }
}

/*Controls*/
function updateIframe() {
  iframe.src = document.getElementById("iframeURL").value;

  phone.style.width = document.getElementById("iframeWidth").value + "px";
  phone.style.height = document.getElementById("iframeHeight").value + "px";

  /*Idea by /u/aerosole*/
  document.getElementById("wrapper").style.perspective = (
    document.getElementById("iframePerspective").checked ? "1000px" : "none"
  );
}
updateIframe();

/*Events*/
document.getElementById("controls").addEventListener("change", function() {
  updateIframe();
});

document.getElementById("views").addEventListener("click", function(evt) {
  updateView(evt.target.value);
});


$( document ).ready(function() {


var pageWidth, pageHeight;

var basePage = {
  width: 800,
  height: 600,
  scale: 1,
  scaleX: 1,
  scaleY: 1
};

$(function(){
  var $page = $('.page_content');

  getPageSize();
  scalePages($page, pageWidth, pageHeight);

  //using underscore to delay resize method till finished resizing window
  $(window).resize(_.debounce(function () {
    getPageSize();
    scalePages($page, pageWidth, pageHeight);
  }, 150));


function getPageSize() {
  pageHeight = $('.section_').height();
  pageWidth = $('.section_').width();
}

function scalePages(page, maxWidth, maxHeight) {
  var scaleX = 1, scaleY = 1;
  scaleX = maxWidth / basePage.width;
  scaleY = maxHeight / basePage.height;
  basePage.scaleX = scaleX;
  basePage.scaleY = scaleY;
  basePage.scale = (scaleX > scaleY) ? scaleY : scaleX;

  var newLeftPos = Math.abs(Math.floor(((basePage.width * basePage.scale) - maxWidth)/2));
  var newTopPos = Math.abs(Math.floor(((basePage.height * basePage.scale) - maxHeight)/2));

  page.attr('style', '-webkit-transform:scale(' + basePage.scale + ');left:' + newLeftPos + 'px;top:' + newTopPos + 'px;');
}
});


});

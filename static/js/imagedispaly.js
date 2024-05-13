/*const images = [
    'index_bg1.jpg',
     'index_bg2.jpg',
   'index_bg3.jpg'
    // ... 添加更多图片URL
  ];

  // 当前显示的图片索引
  let currentIndex = 0;

  // 获取图片显示元素和箭头按钮元素
  const imageDisplay = document.getElementById('slide');
  const prevArrow = document.getElementById('prevArrow');
  const nextArrow = document.getElementById('nextArrow');

  // 初始化图片显示
  imageDisplay.src = "/static/images/"+images[currentIndex];

  // 绑定点击事件到箭头按钮
  prevArrow.addEventListener('click', function() {
    // 更新索引并处理边界条件
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    // 更新图片显示
    imageDisplay.src ="/static/images/"+images[currentIndex];
  });

  nextArrow.addEventListener('click', function() {
    // 更新索引并处理边界条件
    currentIndex = (currentIndex + 1) % images.length;
    // 更新图片显示
    imageDisplay.src = "/static/images/"+images[currentIndex];
  });*/

  /* var slide0Index = 0;
     showSlide0s();
  function showSlide0s() {
    var i;
    var slide0s = document.getElementsByClassName("slide0");
   var dot0s = document.getElementsByClassName("dot0");
    for (i = 0; i < slide0s.length; i++) {
      slide0s[i].style.display = "none";
    }
    slide0Index++;
    if (slide0Index > slide0s.length) {slide0Index = 1}
    slide0s[slide0Index-1].style.display = "block";
    for (i = 0; i < slide0s.length; i++) {
      slide0s[i].style.display = "none";
    }
    for (i = 0; i < dot0s.length; i++) {
    dot0s[i].className = dot0s[i].className.replace(" active-dot0", "");
  }
  dot0s[slide0Index-1].className += " active-dot0";
    setTimeout(showSlide0s, 3000); // 设置自动轮播间隔为2000毫秒（2秒）
  }
*/

  var slideIndex = 0;
  var slide0Index = 0;
  showSlides();
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    var slide0s = document.getElementsByClassName("slide0");
   var dot0s = document.getElementsByClassName("dot0");
    for (i = 0; i < slide0s.length; i++) {
      slide0s[i].style.display = "none";
    }
    slide0Index++;
    if (slide0Index > slide0s.length) {slide0Index = 1}
    slide0s[slide0Index-1].style.display = "block";
    for (i = 0; i < dot0s.length; i++) {
    dot0s[i].className = dot0s[i].className.replace(" active-dot0", "");
  }
  dot0s[slide0Index-1].className += " active-dot0";

   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  dots[slideIndex-1].className += " active-dot";
    setTimeout(showSlides, 3000); // 设置自动轮播间隔为2000毫秒（2秒）
  }

  function plusSlides(n) {
    var i;
    var dotIndex=0;
    var dot0Index=0;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    var slide0s = document.getElementsByClassName("slide0");
    var dot0s = document.getElementsByClassName("dot0");
    slideIndex += n;
    if (slideIndex > slides.length) {slideIndex = 1}
    else if (slideIndex < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
   slides[slideIndex-1].style.display = "block";
     dotIndex++;
   for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  dots[slideIndex-1].className += " active-dot";

  slide0Index += n;
    if (slide0Index > slide0s.length) {slide0Index = 1}
    else if (slide0Index < 1) {slide0Index = slide0s.length}
    for (i = 0; i < slide0s.length; i++) {
      slide0s[i].style.display = "none";
    }
   slide0s[slide0Index-1].style.display = "block";
     dot0Index++;
   for (i = 0; i < dot0s.length; i++) {
    dot0s[i].className = dot0s[i].className.replace(" active-dot0", "");
  }
  dot0s[slide0Index-1].className += " active-dot0";
  }

  function currentSlide(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {n = 1}
  if (n < 1) {n = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[n-1].style.display = "block";
  dots[n-1].className += " active-dot";
}
function currentSlide0(n) {
var i;
   var slide0s = document.getElementsByClassName("slide0");
   var dot0s = document.getElementsByClassName("dot0");
  if (n > slide0s.length) {n = 1}
  if (n < 1) {n = slide0s.length}
  for (i = 0; i < slide0s.length; i++) {
    slide0s[i].style.display = "none";
  }
  for (i = 0; i < dot0s.length; i++) {
    dot0s[i].className = dot0s[i].className.replace(" active-dot0", "");
  }
  slide0s[n-1].style.display = "block";
  dot0s[n-1].className += " active-dot0";
}

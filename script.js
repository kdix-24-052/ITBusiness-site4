const menuButton = document.querySelector(".menu-btn");
const listItems = document.querySelectorAll(".menu-wrapper");
const menuDetail = document.getElementById("popup_menu");
const elements = document.querySelectorAll(".fade-in-up, .fade-in-right, .fade-in-left, .curve_animation");
const toggleArea = document.querySelector(".android_notion");
const toggleButtonDown = document.querySelector(".fa-caret-down");
const toggleButtonUp = document.querySelector(".fa-caret-up");
const notionContents = document.querySelector(".notion_contents");
//
function showPopup1() {
  (document.getElementById("popup1").style.display = "flex"), (document.body.style.overflow = "hidden"), (document.body.classList.add("popup-open")), (document.body.addEventListener('touchmove', preventScroll, { passive: false }));
}
function closePopup1() {
  (document.getElementById("popup1").style.display = "none"), (document.body.style.overflow = ""), (document.body.classList.remove("popup-open")), (document.body.removeEventListener('touchmove', preventScroll));
}
function showPopup2() {
  (document.getElementById("popup2").style.display = "flex"), (document.body.style.overflow = "hidden"), (document.body.classList.add("popup-open")), (document.body.addEventListener('touchmove', preventScroll, { passive: false }));
}
function closePopup2() {
  (document.getElementById("popup2").style.display = "none"), (document.body.style.overflow = ""), (document.body.classList.remove("popup-open")), (document.body.removeEventListener('touchmove', preventScroll));
}
function showPopup3() {
  (document.getElementById("popup3").style.display = "flex"), (document.body.style.overflow = "hidden"), (document.body.classList.add("popup-open")), (document.body.addEventListener('touchmove', preventScroll, { passive: false }));
}
function closePopup3() {
  (document.getElementById("popup3").style.display = "none"), (document.body.style.overflow = ""), (document.body.classList.remove("popup-open")), (document.body.removeEventListener('touchmove', preventScroll));
}
function showPopup4() {
  (document.getElementById("popup4").style.display = "flex"), (document.body.style.overflow = "hidden"), (document.body.classList.add("popup-open")), (document.body.addEventListener('touchmove', preventScroll, { passive: false }));
}
function closePopup4() {
  (document.getElementById("popup4").style.display = "none"), (document.body.style.overflow = ""), (document.body.classList.remove("popup-open")), (document.body.removeEventListener('touchmove', preventScroll));
}
/* 
  UserAgent に応じて通常リンクとDeepLinkを切り替え
  Android版アプリのバグ修正が終わるまでは必須の処理
*/
function openAppLink(e) {
  var n = navigator.userAgent || window.opera;
  /iPhone|iPad|iPod/i.test(n)
    ? (window.location.href = `slack://app?team=TPL8G3Z5E&id=${e}`)
    : /android/i.test(n)
      ? (window.location.href = `https://kindai-s.slack.com/app_redirect?app=${e}`)
      : (window.location.href = `slack://app?team=TPL8G3Z5E&id=${e}`);
}
//
let kudos = document.getElementById("kudos");
let riko = document.getElementById("riko");
let keizai = document.getElementById("keizai");
let yakugaku = document.getElementById("yakugaku");
let sousha = document.getElementById("sougoushakai");
let nougaku = document.getElementById("nougaku");
let seibuturiko = document.getElementById("seibuturiko");
let sangyoriko = document.getElementById("sangyoriko");
let library = document.getElementById("library");
let hougaku = document.getElementById("hougaku");
let keiei = document.getElementById("keiei");
let kenchiku = document.getElementById("kenchiku");
let bungei = document.getElementById("bungei");
let kokusai = document.getElementById("kokusai");
let igaku = document.getElementById("igaku");
let kogaku = document.getElementById("kogaku");
let tanki = document.getElementById("tanki");
let gec = document.getElementById("gec");
let footer_kudos = document.getElementById("footer_kudos");
//
(window.onload = function () {
  1 === performance.navigation.type &&
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 0);
}),
  //
  document.addEventListener("DOMContentLoaded", function () {
    (notionContents.style.display = "none"),
      (toggleButtonUp.style.display = "none"),
      toggleArea.addEventListener("click", function () {
        "none" === notionContents.style.display
          ? ((notionContents.style.display = "block"), (toggleButtonDown.style.display = "none"), (toggleButtonUp.style.display = "inline"))
          : ((notionContents.style.display = "none"), (toggleButtonDown.style.display = "inline"), (toggleButtonUp.style.display = "none"));
      });
  }),
  //
  menuButton.addEventListener("click", function () {
    listItems.forEach((e) => {
      e.classList.toggle("hide");
    }),
      menuDetail.classList.toggle("show");
  }),
  //
  document.addEventListener("DOMContentLoaded", function () {
    const e = new IntersectionObserver(
      (e, n) => {
        e.forEach((e) => {
          e.isIntersecting && (e.target.classList.add("active"), n.unobserve(e.target));
        });
      },
      { threshold: 0.3 }
    );
    elements.forEach((n) => e.observe(n));
  }),
  kudos.addEventListener("click", function () {
    openAppLink("A07U8J4CYBU");
  }),
  keizai.addEventListener("click", function () {
    openAppLink("A07PL80Q9EF");
  }),
  riko.addEventListener("click", function () {
    openAppLink("A07Q1LAARGU");
  }),
  yakugaku.addEventListener("click", function () {
    openAppLink("A07PZ2YEL91");
  }),
  sousha.addEventListener("click", function () {
    openAppLink("A07U8U4KV97");
  }),
  nougaku.addEventListener("click", function () {
    openAppLink("A07TTD382DT");
  }),
  seibuturiko.addEventListener("click", function () {
    openAppLink("A07P57EBJEB");
  }),
  sangyoriko.addEventListener("click", function () {
    openAppLink("A07PJJNSPRD");
  }),
  library.addEventListener("click", function () {
    openAppLink("A07PKMCRPSP");
  }),
  hougaku.addEventListener("click", function () {
    openAppLink("A07PLA2PT42");
  }),
  keiei.addEventListener("click", function () {
    openAppLink("A07TW8N8BB5");
  }),
  kenchiku.addEventListener("click", function () {
    openAppLink("A07P27G0G3X");
  }),
  bungei.addEventListener("click", function () {
    openAppLink("A07Q1LHRT7E");
  }),
  kokusai.addEventListener("click", function () {
    openAppLink("A07Q8G8A1JL");
  }),
  igaku.addEventListener("click", function () {
    openAppLink("A07Q93VGPR6");
  }),
  kogaku.addEventListener("click", function () {
    openAppLink("A07TPLGPJCW");
  }),
  tanki.addEventListener("click", function () {
    openAppLink("A07TW73MTNF");
  }),
  gec.addEventListener("click", function () {
    openAppLink("A07Q8HMBQHE");
  }),
  footer_kudos.addEventListener("click", function () {
    openAppLink("A07U8J4CYBU");
  });
const menuToggle = document.getElementById('menuToggle');
const menuWrapper = document.getElementById('menuWrapper');

menuToggle.addEventListener('click', function () {
  menuWrapper.classList.toggle('active');
});
window.addEventListener('load', () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh-fixed', `${vh}px`);
});

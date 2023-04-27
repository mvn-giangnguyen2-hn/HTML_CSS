// var header = document.getElementById("header");
// var mobileMenu = document.getElementById("mobile-menu");
// var headerHeight = header.clientHeight;
// // Đóng mở mobile menu
// mobileMenu.onclick = function () {
//   var isClose = header.clientHeight === headerHeight;
//   if (isClose) {
//     header.style.height = "auto";
//   } else {
//     header.style.height = null;
//   }
// };
// //Tự động đóng khi chọn menu
// var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
// for (var i = 0; i < menuItems.length; i++) {
//   var menuItem = menuItems[i];

//   menuItem.onclick = function (event) {
//     var isParentMenu =
//       this.nextElementSibling &&
//       this.nextElementSibling.classList.contains("subnav");
//     if (isParentMenu) {
//       event.preventDefault();
//     } else {
//       header.style.height = null;
//     }
//   };
// }
var navMenu = document.getElementById("navMenu");
var sideNav = document.getElementById("sideNav");
var closeBtn = document.getElementById("closeBtn");

navMenu.onclick = function () {
  sideNav.style.display = "block";
};
closeBtn.onclick = function () {
  sideNav.style.display = "none";
};
var menuItems = document.querySelectorAll('#sideNav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];
  menuItem.onclick = function () {
    sideNav.style.display = "none";
  };
}

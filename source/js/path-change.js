document.addEventListener("DOMContentLoaded", function () {
  // 监听popstate事件
  window.onpopstate = function (_event) {
    activeMenuItemStyle();
  };

  // 页面加载时也执行一次
  activeMenuItemStyle();

  // 更新页面函数
  function activeMenuItemStyle() {
    const currPath = window.location.pathname;
    // 注意和 "css/menus.css" 里面class保持一致
    const menuItems = document.querySelectorAll(".menus .menu-item");
    for (let menuItem of menuItems) {
      const pathRecord = menuItem.dataset["path"];
      if (currPath === pathRecord) {
        menuItem.classList.add("active");
      } else {
        menuItem.classList.remove("active");
      }
    }
  }
});

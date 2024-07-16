document.addEventListener("DOMContentLoaded", function () {
  // 监听popstate事件
  window.onpopstate = function (event) {
    updatePageBasedOnPath();
  };

  // 页面加载时也执行一次
  updatePageBasedOnPath();

  // 更新页面函数
  function updatePageBasedOnPath() {
    const currPath = window.location.pathname;
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

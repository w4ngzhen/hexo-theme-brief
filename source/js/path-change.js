/**
 * 该监听主要实现 路由pathname 和 菜单栏列表的高亮匹配
 */
document.addEventListener("DOMContentLoaded", function () {
  // 监听popstate事件
  window.onpopstate = function (_event) {
    activeMenuItem();
  };

  // 页面加载时也执行一次
  activeMenuItem();

  // 更新页面函数
  function activeMenuItem() {
    const currPath = window.location.pathname;
    // 注意和 "css/menus.css" 里面class保持一致
    const menuItems = document.querySelectorAll(".menus .header-menu-item");
    for (let menuItem of menuItems) {
      // 每一个 .menu-item 元素，在生成DOM的时候，
      // 都会在其元素属性添加 "data-path"="xxx" 自定义数据属性，记录其路径
      const pathRecord = menuItem.dataset["path"];
      if (currPath === pathRecord) {
        menuItem.classList.add("active");
      } else {
        menuItem.classList.remove("active");
      }
    }
  }
});

(function() {
  'use strict'
  /**
   * 模板字符串
   */
  var itemTmpl = 
      `<div class="category-item">
        <img src="$url" alt="图片" class="item-icon" />
        <p class="item-name">$name</p>
      </div>`;
  var $categoryContent = $('.category-content');
  /**
   * 处理ajax数据
   */
  function initCategory() {
    // 获取category数据
    $.get("../../../assets/json/head.json", function(data) {
      var list = data.data.primary_filter.splice(0, 8);

      list.forEach(function(item, index) {
        var str = itemTmpl.replace('$url', item.url)
                          .replace('$name', item.name);
        $categoryContent.append(str)
      })
    })
  }
  /**
   * 绑定item的click事件
   */
  function addTouchstart() {
    $categoryContent.on('touchstart', '.category-item', function() {
    })
  }

  function init() {
    initCategory();
    addTouchstart()
  }

  $(function() {

    init();

  })
})();
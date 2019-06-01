import starScore from '../starScore/starScore.js';

(function() {
  'use strict';

  var itemTmpl = 
      `<div class="r-item-content">
        <img class="item-img" src="$url" alt="" />
        $brand
        <div class="item-info-content">
          <p class="tiemt-title">$name</p>
          <div class="item-desc">
            <div class="item-desc-fl">
              <div class="item-score">$wm_poi_score</div>
              <div class="item-count">月售$monthNmu</div>
            </div>
            <div class="item-desc-fr">
              <div class="item-time">$mt_delivery_time&nbsp;|</div>
              <div class="item-distance">&nbsp;$distance</div>
            </div>
          </div>
          <div class="item-price">
            <div class="item-pre-price">$min_price_tip</div>
          </div>
          <div class="item-others">
            $others
          </div>
        </div>
      </div>`;

  function getList() {
    $.get('../../../assets/json/homelist.json', function(data) {
      var list = data.data.poilist || [];
      initContentList(list)
    })
  }

  // 渲染是否热门标签
  function getBrand(data) {
    if (data.brand_type) {
      return `<div class="brand brand-pin">品牌</div>`;
    } else {
      return `<div class="brand brand-pin">新到</div>`;
    }
  }

  // 渲染月售
  function getMonthNum(data) {
    var num = data.month_sale_num;
    if (num > 999) {
      return '+999';
    }
    return num;
  }
  // 渲染商家活动
  function getOthers(data) {
    var array = data.discounts2;

    var str = '';

    array.forEach(function(item, index) {
      var _str = 
              `<div class="other-info">
                <img src="$icon_url" class="other-tag" alt="" />
                <p class="other-content one-line">$info</p>
              </div>`
      str += _str.replace('$icon_url', item.icon_url)
                 .replace('$info', item.info);

    })
    return str;
  }

  /**
   * 渲染列表数据
   */
  function initContentList(data) {
    data.forEach(function(item, index) {
      var str = itemTmpl.replace('$url', item.pic_url)
                        .replace('$name', item.name)
                        .replace('$distance', item.distance)
                        .replace('$min_price_tip', item.min_price_tip)
                        .replace('$mt_delivery_time', item.mt_delivery_time)

                        .replace('$brand', getBrand(item))
                        .replace('$monthNmu', getMonthNum(item))
                        .replace('$others', getOthers(item))
                        .replace('$wm_poi_score', starScore(item.wm_poi_score));
      $('.list-wrap').append(str)
    })
  }


  function init() {
    getList()
  }
  init()
})()
(function () {
  'use strict'

  // 获取dpr
  var docEl = document.documentElement
  var viewportEl = document.querySelector('meta[name="viewport"]')
  var dpr = window.devicePixelRatio || 1
  var maxWidth = 540
  var minWidth = 320

  dpr = dpr >= 3 ? 3 : (dpr >= 2 ? 2 : 1)

  docEl.setAttribute('data-dpr', dpr) // 自己设置dpr，后面有用处
  docEl.setAttribute('max-width', maxWidth)
  docEl.setAttribute('min-width', minWidth)

  var scale = 1 / dpr
  var content = 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no'

  if (viewportEl) {
    viewportEl.setAttribute('content', content)
  } else {
    viewportEl = document.createElement('meta')
    viewportEl.setAttribute('name', 'viewport')
    viewportEl.setAttribute('content', content)
    document.head.appendChild(viewportEl)
  }

  setRemUnit()
  window.onresize = setRemUnit
  // window.addEventListener('resize', setRemUnit) 都可以

  function setRemUnit () {
    // var docEl = document.documentElement
    var ratio = 18.75
    var viewWidth = docEl.getBoundingClientRect().width || window.innerWidth // 兼容处理

    // 设置最大最小值，页面过大后不设置fontSize
    if (maxWidth && (viewWidth / dpr > maxWidth)) {
      viewWidth = maxWidth * dpr
    } else if (maxWidth && (viewWidth / dpr < minWidth)) {
      viewWidth = minWidth * dpr
    }

    docEl.style.fontSize = viewWidth / ratio + 'px'
  }
})()

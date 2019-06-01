if (process.env.NODE_ENV !== 'production') {
  require('./index.html');
}

import '@/js/remUnit.js';
//重置页面
import '@/css/reset.css';
//rem，fontsize
// import "@/css/remUnit.less";
//header部分样式
import './header/header.less';
import './searchBar/searchBar.less';
// category部分的js和css

import './category/category.less';
import './category/category.js';

// list 部分
import './list/list.less';
import './list/list.js';

// 星组件 部分,js的话在list中用es6方式引入
import './starScore/starScore.less';





//公用样式
import './css/main.less';

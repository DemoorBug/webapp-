let itemTmpl = 
              `<div class="star-score">$starstr</div>`;

function _getStars(score) {
  
  let _score = score.toString();
  let scoreArray = _score.split('.');
  //满星
  let fullstar = parseInt(scoreArray[0]);
  //半星
  let halfstar = parseInt(scoreArray[1]) >= 5 ? 1 : 0;
  //0星
  let star = 5 - fullstar - halfstar;

  let starstr = '';

  for (let i = 0; i < fullstar; i++) {
    starstr += '<div class="star fullstar"></div>'
  }

  for (let i = 0; i < halfstar; i++) {
    starstr += '<div class="star halfstar"></div>'
  }

  for (let i = 0; i < star; i++) {
    starstr += '<div class="star nullstar"></div>'
  }
  return itemTmpl.replace('$starstr', starstr);
}


export default _getStars;
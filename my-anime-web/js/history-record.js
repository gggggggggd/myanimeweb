let shanchu = document.querySelector(`.herder .head .icon-shanchu`)
let content = document.querySelector(`.content`)
shanchu.addEventListener(`click`, function (e) {
  alert(`你确定要删除观影历史？`)
  content.innerHTML = ``
})
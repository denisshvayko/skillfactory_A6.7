const changeButton1 = $('.butn1');
const changeButton2 = $('.butn2');
const changeButton3 = $('.butn3');

function handleData(procent) {
  $("#my-progress-bar").width(procent)
}

changeButton1.click(function() {
  handleData(changeButton1.val())
})
changeButton2.click(function() {
  handleData(changeButton2.val())
})
changeButton3.click(function() {
  handleData(changeButton3.val())
})
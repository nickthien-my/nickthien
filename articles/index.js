var base = "https://raw.githubusercontent.com/nickthien-my/nickthien/main/articles/data/articles.json"

var xmlhttp = new XMLHttpRequest();
var url = base;

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    console.log(myArr);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

/*
url = "/search"
method = "POST"
postData = "hello"
*/
function apiReq (url, method, callback, postData) {// eslint-disable-line
  var xhttp = new XMLHttpRequest();// eslint-disable-line
  xhttp.onreadystatechange = function () {
    var myJSONRemote;
    if (this.readyState === 4 && this.status === 200) {
      myJSONRemote = JSON.parse(this.responseText);
      callback(null, myJSONRemote);
    } else if (this.status === 500) {
      myJSONRemote = JSON.parse(this.responseText);
      callback(myJSONRemote);
    }
  };
  xhttp.open(method, url, true);
  if (postData) {
    xhttp.send(postData);
  } else {
    xhttp.send();
  }
}

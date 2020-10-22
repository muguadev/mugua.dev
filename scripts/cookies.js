function setCookie(cname, cvalue) {
  let date = new Date();
  date.setTime(date.getTime() + (60 * 60 * 1000));
  document.cookie = cname + "=" + cvalue + ";"+ "expires=" + date.toUTCString() + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

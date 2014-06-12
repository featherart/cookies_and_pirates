function CookieView() {
  this.cookieImage = '#myImage';
  this.cookieButton = '#moveCookie';
}

CookieView.prototype = {
  getCookie: function() {
    //console.log(this.cookieImage);
    return document.querySelector(this.cookieImage);
  },
    getButton: function() {
    //console.log(this.cookieButton);
    return document.querySelector(this.cookieButton)
  },
  setCookieLocation: function(location) {
    console.log("in setLocation: " + location);
    var cookie = this.getCookie();
    console.log("here's cookie: " + cookie.style.left);
    cookie.style.left = location;
    console.log("here's cookie again: " + cookie.style.left);
  } 
}
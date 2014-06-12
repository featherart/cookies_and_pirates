function CookieModel() {
  console.log("in CookieModel");
  this.location = 0;
}

CookieModel.prototype.changeLocation = function() {
  console.log(this.location);
  this.location = this.location + 10;
}
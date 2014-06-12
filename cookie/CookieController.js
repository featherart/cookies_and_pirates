function CookieController(display, model) {
  this.display = display;
  this.model = model;
}

CookieController.prototype = {
  bindEventListeners: function() {
    var cookieButton = this.display.getButton();
    console.log("here's this " + this);
    cookieButton.addEventListener("click", this.moveModel.bind(this))
  },
  moveModel: function() {
    console.log(this.model);
    this.model.changeLocation();
    var newLocation = this.model.location;
    this.display.setCookieLocation(newLocation);
  }

}
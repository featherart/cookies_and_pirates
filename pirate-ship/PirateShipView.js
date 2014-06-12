function View() {
  this.shipSelector = '#pirateShipImage'
  this.buttonSelector = 'button'
}


View.prototype = {
  getShip: function() {
    return document.querySelector(this.shipSelector)
  },
  setShipLocation: function(location) {
    var ship = this.getShip()
    ship.style.left = location;
  },
  getButton: function() {
    return document.querySelector(this.buttonSelector)
  }
}






































// function PirateShipView(buttonToRespondTo, imageToMove)
// {
// 	this.buttonToRespondTo = document.querySelector(buttonToRespondTo);
// 	this.imageToMove = document.querySelector(imageToMove);
// }

// PirateShipView.prototype.SetLocationOfShip = function(locationOfShip)
// {
// 	this.imageToMove.style.left = locationOfShip;
// }
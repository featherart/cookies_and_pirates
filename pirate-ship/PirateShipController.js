function Controller(display,model) {
  this.display = display;
  this.model = model;
}

Controller.prototype = {
  bindListeners:  function() {
    var button = this.display.getButton()
    button.addEventListener('click',this.moveModel.bind(this))
  },
  moveModel: function() {
    this.model.incrementLocation()
    var newLocation = this.model.location
    this.display.setShipLocation(newLocation)
  }
}






































// window.onload = function(){

//   var model = new PirateShipModel();
//   var view = new PirateShipView("#movePirateShip", "#pirateShipImage");

//   var controller = new PirateShipController(model, view);
// }



// function PirateShipController(model, view)
// {
// 	self = this;
// 	this.model = model;
// 	this.view = view;

// 	this.view.buttonToRespondTo.addEventListener('click', this.MoveShip, false);
// }

// PirateShipController.prototype.MoveShip = function()
// {
// 	var locationOfShip = self.model.GetLocationOfShip();
// 	self.view.SetLocationOfShip(locationOfShip);
// }
window.onload = function() {
  var ship = document.querySelector('#pirateShipImage');
  var button = document.querySelector('#movePirateShip');
  var shipLocation = 0;
  ship.style.left = shipLocation;

  button.addEventListener('click', function() {
    shipLocation += 10;
    ship.style.left = shipLocation;
  });

};

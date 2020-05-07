var getRandomNumber = function (size) {
  return Math.floor(Math.random() * size);
};

var getDistance = function (event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

var getDistanceHint = function (distance) {
  if (distance < 17) {
  return "Обожжешься! Осталось кликов: " + clicks;
  } else if (distance < 30) {
  return "Очень-очень горячо. Осталось кликов: " + clicks;
} else if (distance < 50) {
  return "Очень горячо. Осталось кликов: " + clicks;
  } else if (distance < 100) {
  return "Горячо. Осталось кликов: " + clicks;
  } else if (distance < 180) {
  return "Тепло. Осталось кликов: " + clicks;
  } else if (distance < 290) {
  return "Холодно. Осталось кликов: " + clicks;
  } else if (distance < 420) {
  return "Очень холодно. Осталось кликов: " + clicks;
} else if (distance < 550) {
  return "Очень-очень холодно. Осталось кликов: " + clicks;
  } else {
  return "Замерзнешь!. Осталось кликов: " + clicks;
  }
};

var width = 1020;
var height = 630;
var clicks = 15;
var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
};

$("#map").click(function (event) {
  clicks--;
  var distance = getDistance(event, target);
  var distanceHint = getDistanceHint(distance);
  $("#distance").text(distanceHint);
  if (clicks <= 0) {
    alert("КОНЕЦ ИГРЫ!");
  } else if (distance < 8) {
    alert("Клад найден! Осталось кликов: " + clicks);
  }

});
//variables
var display1Btn = document.getElementById("display1")
var display2Btn = document.getElementById("display2")
var t = document.getElementById("test");

function getJson(callback) {
  $.getJSON('./inventory/test.json', function (data) {
    callback(data);
  });
}

display1Btn.addEventListener('click', function () {
  getJson(function (data) {
    console.log(data[0].name);
  })
});

display2Btn.addEventListener('click', function () {
  getJson(function (data) {
    console.log(data[1].name);
  })
});

// $('#display1').on('click', function () {
//   $.getJSON('./inventory/test.json', function (data) {
//     console.log(data[0].name);
//     t.innerHTML += "<br>" + data[0].name;
//   });
// });

// $('#display2').on('click', function () {
//   $.getJSON('./inventory/test.json', function (data) {
//     console.log(data[1].name);
//     t.innerHTML += "<br>" + data[1].name;
//   });
// });
// Permutation

addinp();

$("#perm-select").on("change", function () {
  var val = $("#perm-select").val();
  console.log(val);
  switch (val) {
    case "1":
      $("#ismetleses").hide(200);
      $("#ism-nelkuli").show(200);

      $("#ismetleses-form").hide(200);
      $("#ismnelkuli-form").show(200);
      console.log("show");
      break;
    case "2":
      $("#ism-nelkuli").hide(200);
      $("#ismetleses").show(200);

      $("#ismnelkuli-form").hide(200);
      $("#ismetleses-form").show(200);
      console.log("hide");
      break;
  }
});

$("#ismnelkuli-form").on("submit", function (e) {
  e.preventDefault();
  calcIsmNelkuli();
});


$("#ismetleses-form").on("submit", function (e) {
  e.preventDefault();
  calcIsm();
});

$("#add").click(function () {
  addinp();
});

function addinp() {
  let inp = document.createElement("input");

  inp.value = "1";

  inp.min = 1;
  inp.classList = "addinp permutation-input";
  inp.onmousedown = rightclick;

  console.log("add");
  $("#k-elem").append(inp);
}


function calcIsm() {
  console.log("ism");
  var n = $("#n-count-2").val();
  if (n == "" || n < 1) n = 1;
  var down = 1;

  $("#k-elem")
    .children("input")
    .each(function () {
      down *= factorial(parseInt(this.value));
    });

    var out = factorial(n) / down;

  console.log(down, out);

  $("#out").text(`${out}`);
  //$("#out-long").text(`${factorial(n)} féle képpen rendezhető sorba.`);
}

function rightclick(event) {
  var len = $("#k-elem").children().length;
  if (event.which == 3 && len > 1) {
    $(this).remove();
  }
}

const factorial = (num) => {
  if (num != 1) {
    return num * factorial(num - 1);
  }
  return num;
};

function calcIsmNelkuli() {
  var n = $("#n-count").val();
  $("#out").text(`${n}! = ${factorial(n)}`);
  $("#out-long").text(`${factorial(n)} féle képpen rendezhető sorba.`);
}
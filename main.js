// Combination

function calc_combination() {
    n = document.getElementById("n_value").value;
    k = document.getElementById("k_value").value;

    if (!isNaN(parseInt(n)) && !isNaN(parseInt(k))) {
        n = parseInt(n);
        k = parseInt(k);

        n_factorial = calc_factorial(n);
        k_factorial = calc_factorial(k);
        n_minus_k_factorial = calc_factorial(n-k)

        combination_val = Math.floor(n_factorial/(k_factorial*n_minus_k_factorial))

        // Ismétléses kombináció
        // Elsőnek kiszámoljuk az (n+k-1)! értékét
        first_val = calc_factorial(n+k-1)
        // Másodjára kiszámoljuk az (n-1)! értékét
        second_val = calc_factorial(n-1)

        combination_with_repetition_val = Math.floor(first_val / (k_factorial * second_val))

        document.getElementById("n_value_text").textContent = `'n' értéke: ${n}`;
        document.getElementById("k_value_text").textContent = `'k' értéke: ${k}`;
        document.getElementById("n_factorial_value_text").textContent = `'n' faktoriális értéke: ${n_factorial}`;
        document.getElementById("k_factorial_value_text").textContent = `'k' faktoriális értéke: ${k_factorial}`;
        document.getElementById("combination_val").textContent = `Az ismétlés nélküli kombinációk száma: ${combination_val}`;
        document.getElementById("combination_with_repetition_val").textContent = `Az ismétléses kombinációk száma: ${combination_with_repetition_val}`;
    } else {
        alert("Kérjük töltse ki mindkét mezőt")
    }

    document.getElementById("n_value").value = ""
    document.getElementById("k_value").value = ""
}

function calc_factorial(input_num) {
    factorial = 1
    for (i = 1; i <= input_num; i++) {
        factorial = factorial * i;
    }
    return Math.floor(factorial)
}

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
  inp.classList = "addinp";
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
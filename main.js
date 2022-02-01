function calc_combination() {
    n = document.getElementById("n_value").value;
    k = document.getElementById("k_value").value;

    if (!isNaN(parseInt(n)) && !isNaN(parseInt(k))) {
        n = parseInt(n);
        k = parseInt(k);

        n_factorial = calc_factorial(n);
        k_factorial = calc_factorial(k);
        n_minus_k_factorial = calc_factorial(n-k)

        combination_val = n_factorial/(k_factorial*n_minus_k_factorial)

        // Ismétléses kombináció
        // Elsőnek kiszámoljuk az (n+k-1)! értékét
        first_val = calc_factorial(n+k-1)
        // Másodjára kiszámoljuk az (n-1)! értékét
        second_val = calc_factorial(n-1)

        combination_with_repetition_val = first_val / (k_factorial * second_val)

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
    return factorial
}
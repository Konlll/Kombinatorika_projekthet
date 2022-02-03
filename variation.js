// Variation
function Factorial(szam){
    eredmeny = 1
    for(let i = 1; i <= szam; i++) {
        eredmeny = eredmeny*i
    }
    return eredmeny 
}
function Ismetles_nelkuli(n,k){
    if(k<=n){
        eredmeny = Factorial(n)/Factorial(n-k)
    }else{
        eredmeny = "Hiba ('k' nagyobb mint 'n')"
    }
    return eredmeny
}
function Ismetleses(n,k){
    return n**k
}
function calc_variation(){
    n_value = document.getElementById("n_value").value
    k_value = document.getElementById("k_value").value
    document.getElementById("variation_val").innerHTML = "Az ismétlés nélküli variációk száma: "+Ismetles_nelkuli(n_value,k_value)
    document.getElementById("variation_with_repetition_val").innerHTML = "Az ismétléses variációk száma: "+Ismetleses(n_value,k_value)
    document.getElementById("n_value_text").innerHTML = "'n' értéke: "+n_value
    document.getElementById("k_value_text").innerHTML = "'k' értéke: "+k_value
    document.getElementById("n_factorial_value_text").innerHTML = "'n' faktoriálisa: "+Factorial(n_value)
    document.getElementById("k_factorial_value_text").innerHTML = "'k' faktoriálisa: "+Factorial(k_value)
}
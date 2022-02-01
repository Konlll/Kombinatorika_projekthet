print(" ")
print(" ")
print("---------------------Adatok Bekérése---------------------")
# Bekéri az "n" értékét
n = int(input("Hány elemből kell válaszani? "))
# Bekéri a "k" értékét
k = int(input("Hány elemet szeretnél kiválasztani? "))
print(" ")
print("---------------Ismétlés nélküli kombináció---------------")
# Kiszámolja az "n" érték faktoriálisát
n_faktorialis = 1
for i in range(1, n+1):
    n_faktorialis =n_faktorialis*i

# Kiszámolja a "k" érték faktoriálisát
k_faktorialis = 1
for i in range(1, k+1):
    k_faktorialis =k_faktorialis*i

# Egyszerűbb számolás érdekében kiszedtük a képlet egy részét, az (n-k)!-t
n_minusz_k = n-k
n_min_k_faktorialis = 1
for i in range(1, n_minusz_k+1):
    n_min_k_faktorialis =n_min_k_faktorialis*i

# Használjuk a kombináció képletét
kombinacio = n_faktorialis/(k_faktorialis*n_min_k_faktorialis)
#kiírja a kombinációk számát, átláthatóság érdekében leszedi a tizedes jegyeket a szám végéről
print("Az ismétlés nélküli kombinációk száma: {combination:.0f}".format(combination = kombinacio))

print(" ")
#ismetleseskombinacio: (n+k-1)! / k!*(n-1)!
print("------------------Ismétléses kombináció------------------")
# Az egyszerűbb számolás érdekében itt is kettészedtük az egyenletet
elso_resz = n+k-1
# Kiszámolja a képlet első részét
elso_resz_faktorialis = 1
for i in range(1, elso_resz+1):
    elso_resz_faktorialis =elso_resz_faktorialis*i

# Az egyenlet második fele
masodik_resz = n-1
# Kiszámolja az egyenlet második részét
masodik_resz_faktorialis = 1
for i in range(1, masodik_resz+1):
    masodik_resz_faktorialis =masodik_resz_faktorialis*i
# Összerakja az egyenlet két részét, és kiszámolja az ismétléses kombinációk számát
ismetleses_kombinacio = elso_resz_faktorialis / (k_faktorialis*masodik_resz_faktorialis)
print("Az ismétléses kombinációk száma: {combination2:.0f}".format(combination2 = ismetleses_kombinacio))
print(" ")
print("-----------------Számolási Mellékadatok------------------")
print("'n' értéke: ",n)
print("'k' értéke: ",k)
print("'n' faktoriálisa: ",n_faktorialis)
print("'k' faktoriálisa: ",k_faktorialis)
print(" ")
print(" ")

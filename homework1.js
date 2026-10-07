let i, j, s, kolom
const n = 5

// For Loop

// Membuat banyak Baris
for (i = 1; i <= n; i++){
    let kolom = ""

    // Melakukan Looping di setiap baris

    // Membuat Spasi
    for (s = 1; s <= (n - i); s++){
        kolom += " "
    }
    // Membuat Bintang
    for (j = 1; j <= (2 * i - 1); j++){
        kolom += "*"
    }
    console.log(kolom)
}

console.log("=========")

// While

i = 1
while(i <= n){

    // Initial s = 1
    // Membuat Spasi
    s = 1
    kolom = ""
    while(s <= n - i){
        kolom += " "
        s++
    }

    // Initial j = 1
    // Membuat Bintang
    j = 1
    while(j <= (2 * i - 1)){
        kolom += "*"
        j++
    }
    i++
    console.log(kolom)
}

console.log("=========")

// Do...While

i = 1
do{
    kolom = ""

    // Membuat spasi
    // initial s = 0
    s = 0
    do{
        // Melakukan pengecekan untuk mengatasi sifat do...while
        // Output pertama = "" 
        if (s < n - i){
            kolom += " "
        }
        s++
    } while(s <= n - i)
        
    // Membuat bintang
    j = 1
    do {
        kolom += "*"
        j++
    } while (j <= (2 * i - 1))

    console.log(kolom)
    i++
} while(i <= n)
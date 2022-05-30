function translate_to_morse() {

    var inputt = document.getElementById('alpha_to_morse'),
        user_textt = inputt.value;

    let dotdash = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", "/"];
    // simpan array morse
    // tanda "/" untuk separator (spasi)

    let lengthh = user_textt.length;
    // cari lengthnya untuk patokan di for loop

    let outputt = "";
    // buat variabel output translate an morsenya
    // ga langsung console.log biar bisa 1 line
    // soalnya kalau console.log langsung selalu ngeloop di new line

    for (let i = 0; i < lengthh; i++) {

        if (user_textt.charCodeAt(i) >= 97 && user_textt.charCodeAt(i) <= 122) {
            // ngecek ascii table dia nomer berapa, trus dikurangin 97 biar sesuai sama posisi array dotdash diatas
            // ini buat huruf kecil
            outputt += ((dotdash[user_textt.charCodeAt(i) - (97)]) + " ");
        }

        else if (user_textt.charCodeAt(i) >= 65 && user_textt.charCodeAt(i) <= 90) {
            // ngecek ascii table dia nomer berapa, trus dikurangin 65 biar sesuai sama posisi array dotdash diatas
            // ini buat huruf besar
            outputt += ((dotdash[user_textt.charCodeAt(i) - (65)]) + " ");
        }

        else if (user_textt.charCodeAt(i) == 32) {
            // cek di ascii table kalo dia nomer 32 berarti doi spasi
            // langsung kasih separator "/"
            outputt += (" " + (dotdash[26]) + " ");
        }

        else {
            // kalo selain yang ditentuin diatas berarti doi simbol selain huruf
            // outputnya langsung simbol itu
            outputt += (user_textt[i]);
        }

    }
    outputt += ("\n");

    console.log(outputt);

    alert("morse:\n" + outputt)
    // hasil outputt tadi ditunjukkan lewat alert

}

document.write(outputt);


// a
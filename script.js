guncelTarih();
saatiYaz();
DakikaYaz();
saniyeYaz();





function guncelTarih (){
    var now = new Date();
    var day = now.getDay();
    if (day == 0){
        var gun = "Pazar";
    }
    else if (day == 1 ){
        var gun = "Pazartesi";
    }
    else if (day == 2 ){
        var gun = "Salı";
    }
    else if (day == 3 ){
        var gun = "Çarşamba";
    }
    else if (day == 4 ){
        var gun = "Perşembe";
    }
    else if (day == 5 ){
        var gun = "Cuma";
    }
    else{
        var gun = "Cumartesi";
    }

    var date = now.getDate();
    var year = now.getFullYear();
    var ay = now.getMonth();
    document.querySelector(".date").innerHTML = date +  " / " + ay + " / "+ year + "    " + gun;
    setTimeout(guncelTarih, 1000) // bir saniyede tarihi guncelle
}





function saatiYaz (){
    var now = new Date();
    var saat = now.getHours();
    document.querySelector(".box1").innerHTML = saat;
    setTimeout(saatiYaz, 1000)
}





function DakikaYaz (){
    var now = new Date();
    var dakika = now.getMinutes();
    if (dakika < 10 ){
        dakika = "0" + dakika
    }
    document.querySelector(".box2").innerHTML = dakika;
    setTimeout(DakikaYaz, 1000)
}





function saniyeYaz (){
    var now = new Date();
    var saniye = now.getSeconds();
    if (saniye < 10 ){
        saniye = "0" + saniye
    }
    document.querySelector(".box3").innerHTML = saniye;
    setTimeout(saniyeYaz, 1000)
}




window.onload = guncelTarih;
window.onload = saatiYaz;
window.onload = DakikaYaz;
window.onload = saniyeYaz;
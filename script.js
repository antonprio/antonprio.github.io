let theDate = new Date("Mar 11, 2021 17:45:00").getTime();

let x = setInterval(function () {
    let skrg = new Date().getTime();
    let sisaWaktu = theDate - skrg;
    let days = Math.floor(sisaWaktu / (1000 * 60 * 60 * 24));
    let hours = Math.floor((sisaWaktu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((sisaWaktu % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((sisaWaktu % (1000 * 60)) / 1000);

    document.getElementsByClassName("days")[0].innerText = `${days} days`
    document.getElementsByClassName("hours")[0].innerText = `${hours} hours`
    document.getElementsByClassName("minutes")[0].innerText = `${minutes} minutes`
    document.getElementsByClassName("seconds")[0].innerText = `${seconds} seconds`
    
    if (sisaWaktu < 0) {
        clearInterval(x);
        document.getElementsByClassName("days")[0].style.display = 'none';
        document.getElementsByClassName("hours")[0].style.display = 'none';
        document.getElementsByClassName("minutes")[0].style.display = 'none';
        document.getElementsByClassName("seconds")[0].style.display = 'none';
        document.getElementById("demo").innerHTML = "SILAHKAN KEMBALI LAGI DALAM 15 BULAN KEDEPAN";
    }
}, 1000);
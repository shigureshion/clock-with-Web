function clockjs(){
    var nowtime = new Date();
    var nowhour = nowtime.getHours();
    var nowmin = nowtime.getMinutes();
    var nowsec = nowtime.getSeconds();

    var clockontime = nowhour + ":" + nowmin + ":" + nowsec;
    document.getElementById("clock").innerHTML = clockontime;
}

setInterval('clockjs',1000);
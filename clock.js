function clockjs(){
    var nowtime = new Date();
    var nowhour = nowtime.getHours();
    var nowmin = nowtime.getMinutes();
    var nowsec = nowtime.getSeconds();

    var clockontime = nowhour + ":" + nowmin + ":" + nowsec;
    document.getElementById("clock").innerHTML = clockontime;
}

setInterval('clockjs()',1000);

function dayjs(){
    var nowtime = new Date();
    var nowyear = nowtime.getFullYear();
    var nowmonth = nowtime.getMonth();
    var nowday = nowtime.getDay();

    var clockonday = nowyear + "年" + nowmonth + "月" + nowday + "日";
    document.getElementById("day").innerHTML = clockonday;
}
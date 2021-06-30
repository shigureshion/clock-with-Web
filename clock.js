function clockjs(){
    var nowtime = new Date();
    var nowhour = set2fig(nowtime.getHours());
    var nowmin = set2fig(nowtime.getMinutes());
    var nowsec = set2fig(nowtime.getSeconds());

    var clockontime = nowhour + ":" + nowmin + ":" + nowsec;
    document.getElementById("clock").innerHTML = clockontime;

    var nowyear = nowtime.getFullYear();
    var nowmonth = nowtime.getMonth() + 1 ;
    var nowday = nowtime.getDate();

    var clockonday = nowyear + "年" + nowmonth + "月" + nowday + "日";
    document.getElementById("day").innerHTML = clockonday;
}

setInterval('clockjs()',1000);

function set2fig(t){
    var set;
    if(t < 10){set = "0" + t;}
    else{set = t;}
    return set;
}
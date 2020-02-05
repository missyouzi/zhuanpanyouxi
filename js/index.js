var btn = document.getElementsByClassName('btn')[0];
var tabel = document.getElementsByClassName('table')[0];
var bool = true;
var randomNum;
btn.onclick = function(){
    if(bool){
        randomNum = Math.floor(Math.random()*360);
        runTabel(randomNum);
        bool = false
    }
}
function runTabel(deg){
    deg=deg+360*8;
    tabel.style.transform = 'rotate('+deg+'deg)';
    tabel.style.transition = 'all 3s';
}

tabel.addEventListener('webkitTransitionEnd',function(){
    judgeFn(randomNum);
    tabel.style.transform = 'rotate('+randomNum+'deg)';
    tabel.style.transition = 'none';
    bool=true;
})
function judgeFn(num){
    var str = '';
    if(num>0 && num < 45){
        str = "二等奖"
    }else if(num>90 && num <135 ||num>270&&num<315){
        str = "三等奖"
    }else if(num>45&&num<90 || num > 135 && num < 180 ||num>225&&num<270||num>315&&num<360){
        str = "四等奖"
    }else if(num>180 && num<225){
        str="一等奖"
    }
    alert('大吉大利,获得'+str+'!')
}
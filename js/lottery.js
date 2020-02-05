(function(win){
    var defultPars = {
        rotateNum:5,
        turnTabel:document.getElementsByTagName('body')[0],
        judgeFn:function(){}
    }
    win.Lottery = Lottery;
    function Lottery(par){
        this.pars = Object.assign(defultPars,par);
        this.bool = true;
        this.init();
    }
    Lottery.prototype.init = function(){
        var self = this;
        var btn = this.pars.turnTabel.getElementsByClassName('btn')[0];
        let tabel = this.pars.turnTabel.getElementsByClassName('table')[0];
        btn.onclick = function(){
            if(self.bool){
                self.pars.randomNum = Math.floor(Math.random()*360);
                self.bool = false;
                self.runTabel(self.pars.randomNum);

                // self.runTabel();
            }
        }
        tabel.addEventListener('webkitTransitionEnd',function(){
            self.pars.judgeFn(self.pars.randomNum);
            console.log(233,this)
            tabel.style.transform = 'rotate('+self.pars.randomNum+'deg)';
            tabel.style.transition = 'none';
            self.bool = true;
        })
    }
    Lottery.prototype.runTabel=function(deg){
        // let self = this;
        let tabel = self.pars.turnTabel.getElementsByClassName('table')[0];

        var deg = deg+360*this.pars.rotateNum;
        tabel.style.transform = 'rotate('+deg+'deg)';
        tabel.style.transition = 'all 3s';
        // self.bool = false
    }
    // function judgeFn(){
        // var str = '';
        // if (num > 0 && num < 45 ) {
            // str = '二等奖'
        // } else if (num > 90 && num < 135 || num > 270 && num < 315) {
            // str = '三等奖'
        // } else if (num > 45 && num < 90 || num > 135 && num < 180 || num > 225 && num < 270 || num > 315 && num < 360) {
            // str = '四等奖'
        // } else if (num > 180 && num < 225) {

            // str = '一等奖'
        // }
        // /alert('大吉大利！ 今晚获得' + str + '!');
    // }
})(window)

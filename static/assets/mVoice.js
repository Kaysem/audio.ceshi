var mVoice = {
    typeVoices : ['weixin.mp3','alipay.mp3'],
    radixVoices : ['w.mp3','k.mp3','h.mp3','t.mp3','d.mp3','y.mp3'],
    numberVoices : ['0.mp3','1.mp3','2.mp3','3.mp3','4.mp3','5.mp3','6.mp3','7.mp3','8.mp3','9.mp3'],
    typeAudios : [],
    radixAudios : [],
    numberAudios :[],
    delay:450,
    init : function(assets){
        if(this.radixAudios.length > 0){
            return;
        }
        for(var index = 0; index < this.typeVoices.length; index++){
            var audio = document.createElement('audio');
            audio.src= assets + this.typeVoices[index];
            document.body.append(audio);
            this.typeAudios.push(audio);
        }
        for(var index = 0; index < this.radixVoices.length; index++){
            var audio = document.createElement('audio');
            audio.src= assets + this.radixVoices[index];
            document.body.append(audio);
            this.radixAudios.push(audio);
        }
        for(var index = 0; index < this.numberVoices.length; index++){
            var audio = document.createElement('audio');
            audio.src= assets + this.numberVoices[index];
            document.body.append(audio);
            this.numberAudios.push(audio);
        }
    },
    playWeixin : function(money){
        var count = 0;
        this.delayPlay(this.typeAudios[0], this.delay * count);
        count+=2;
        this.playMoney(money, count);
    },
    playAlipay : function(money){
        var count = 0;
        this.delayPlay(this.typeAudios[1], this.delay * count);
        count+=2;
        this.playMoney(money, count);
    },
    playMoney:function(money, count){
        var fValue = parseFloat(money);
        console.log(fValue);
        var vw = parseInt(fValue / 10000);
        if(vw > 0){
            console.log(vw);
            fValue = fValue % 10000;
            this.delayPlay(this.numberAudios[vw], this.delay * count);
            count++;
            this.delayPlay(this.radixAudios[0], this.delay * count);
        }
        var vk = parseInt(fValue / 1000);
        if(vk > 0){
            console.log(vk);
            fValue = fValue % 1000;
            count++;
            this.delayPlay(this.numberAudios[vk], this.delay * count);
            count++;
            this.delayPlay(this.radixAudios[1], this.delay * count);
        }
        var vh = parseInt(fValue / 100);
        if(vh > 0){
            console.log(vh);
            fValue = fValue % 100;
            count++;
            this.delayPlay(this.numberAudios[vh], this.delay * count);
            count++;
            this.delayPlay(this.radixAudios[2], this.delay * count);
        }
        var vt = parseInt(fValue / 10);
        if(vt > 0){
            console.log(vt);
            fValue = fValue % 10;
            count++;
            this.delayPlay(this.numberAudios[vt], this.delay * count);
            count++;
            this.delayPlay(this.radixAudios[3], this.delay * count);
        }
        var iValue = parseInt(fValue);
        if(iValue > 0){
            console.log(iValue);
            count++;
            this.delayPlay(this.numberAudios[iValue], this.delay * count);
        }
        fValue -= iValue;
        if(fValue > 0){
            console.log('.');
            count++;
            this.delayPlay(this.radixAudios[4], this.delay * count);
            for(var index = 0; index < 2; index++){
                fValue = Math.round(fValue * 10 * 100) / 100;
                iValue = parseInt(fValue);
                console.log(iValue);
                fValue -= iValue;
                count++;
                this.delayPlay(this.numberAudios[iValue], this.delay * count);
            }
        }

        count++;
        this.delayPlay(this.radixAudios[5], this.delay * count);
    },
    delayPlay(audio, timeout){
        window.setTimeout(function(){
            audio.currentTime = 0;
            audio.play();
        }, timeout);
    }
}
export default mVoice;
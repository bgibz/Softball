import {Howl, Howler} from 'howler';
import alyssaSound from './media/Alyssa.mp3';
import danicaSound from './media/Danica.mp3';
import tonySound from './media/Tony.mp3';
import iainSound from './media/Iain.mp3';
import kellySound from './media/Kelly.mp3';
import seanSound from './media/Sean.mp3';
import mattSound from './media/Matt.mp3';


class walkupService {
    constructor() {
        var alyssa = new Howl({
            src: [alyssaSound],
            html5: true
          });
        var danica = new Howl({
            src: [danicaSound],
            html5: true
        });
        var tony = new Howl({
            src: [tonySound],
            html5: true
        });
        var iain = new Howl({
            src: [iainSound],
            html5: true
        });
        var kelly = new Howl({
            src: [kellySound],
            html5: true
        });
        var sean = new Howl({
            src: [seanSound],
            html5: true
        });
        var matt = new Howl ({
            src: [mattSound]
        })
        this.sounds = new Map();
        this.sounds.set('Alyssa', alyssa);
        this.sounds.set('Danica', danica);
        this.sounds.set('Tony', tony);
        this.sounds.set('Iain', iain);
        this.sounds.set('Kelly', kelly);
        this.sounds.set('Sean', sean);
        this.sounds.set('Matt', matt);
    }

    playWalkup(playerName){
        var myHowl;
        for (var [key, value] of this.sounds) {
            if (key !== playerName){
                value.stop();
            } else {
                myHowl = value;
            }
        }
        if (myHowl !== undefined){
            setTimeout(function() { 
                myHowl.play();
                myHowl.fade(1, 0, 30000);
            }, 3000);
        }
        
    }

}

export default walkupService;
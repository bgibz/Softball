import {Howl, Howler} from 'howler';
import alyssaSound from './media/Alyssa.mp3';
import danicaSound from './media/Danica.mp3';
import tonySound from './media/Tony.mp3';

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

        this.sounds = new Map();
        this.sounds.set('Alyssa', alyssa);
        this.sounds.set('Danica', danica);
        this.sounds.set('Tony', tony);

        this.playWalkup = this.playWalkup.bind(this);
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
        if (myHowl !== null){
            setTimeout(function() { 
                myHowl.play();
                myHowl.fade(1, 0, 30000);
            }, 3000);
        }
        
    }

}

export default walkupService;
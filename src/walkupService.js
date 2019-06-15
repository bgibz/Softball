import {Howl} from 'howler';
import alyssaSound from './media/Alyssa.mp3';
import danicaSound from './media/Danica.mp3';
import tonySound from './media/Tony.mp3';
import iainSound from './media/Iain.mp3';
import kellySound from './media/Kelly.mp3';
import seanSound from './media/Sean.mp3';
import mattSound from './media/Matt.mp3';
import juliaSound from './media/Julia.mp3';
import mikeSound from './media/Mike.mp3';
import sarahSound from './media/Sarah.mp3';
import danSound from './media/Dan.mp3';
import allisonSound from './media/Allison.mp3';
import robbieSound from './media/Robbie.mp3';
import allieSound from './media/Allie.mp3';

class walkupService {
    constructor() {
        const alyssa = new Howl({
            src: [alyssaSound],
            html5: true
          });
        const danica = new Howl({
            src: [danicaSound],
            html5: true
        });
        const tony = new Howl({
            src: [tonySound],
            html5: true
        });
        const iain = new Howl({
            src: [iainSound],
            html5: true
        });
        const kelly = new Howl({
            src: [kellySound],
            html5: true
        });
        const sean = new Howl({
            src: [seanSound],
            html5: true
        });
        const matt = new Howl ({
            src: [mattSound]
        });
        const julia = new Howl ({
            src: [juliaSound]
        });
        const mike = new Howl ({
            src: [mikeSound]
        });
        const sarah = new Howl ({
            src:[sarahSound]
        });
        const dan = new Howl ({
            src: [danSound]
        });
        const allison = new Howl ({
            src: [allisonSound]
        });
        const robbie = new Howl ({
            src: [robbieSound]
        });
        const allie = new Howl ({
            src: [allieSound]
        });
        this.sounds = new Map();
        this.sounds.set('Alyssa', alyssa);
        this.sounds.set('Danica', danica);
        this.sounds.set('Tony', tony);
        this.sounds.set('Iain', iain);
        this.sounds.set('Kelly', kelly);
        this.sounds.set('Sean', sean);
        this.sounds.set('Matt', matt);
        this.sounds.set('Julia', julia);
        this.sounds.set('Mike', mike);
        this.sounds.set('Sarah', sarah);
        this.sounds.set('Dan', dan);
        this.sounds.set('Allison', allison);
        this.sounds.set('Robbie', robbie);
        this.sounds.set('Allie', allie);
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
            }, 1500);
        }
        
    }

}

export default walkupService;
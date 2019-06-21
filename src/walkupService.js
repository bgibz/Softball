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
import emmaSound from './media/Emma.mp3';
import brendanSound from './media/Brendan.mp3';
import kevinSound from './media/Kevin.mp3';
import ryanSound from './media/Ryan.mp3';
<<<<<<< HEAD
import megSound from './media/Meg.mp3';
=======
>>>>>>> gh-pages

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
        const emma = new Howl ({
            src: [emmaSound]
        });
        const brendan = new Howl ({
            src: [brendanSound]
        });
        const kevin = new Howl ({
            src: [kevinSound]
        });
        const ryan = new Howl ({
            src: [ryanSound]
        });
<<<<<<< HEAD
        const meg = new Howl ({
            src: [megSound]
        });
=======
>>>>>>> gh-pages
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
        this.sounds.set('Emma', emma);
        this.sounds.set('Brendan', brendan);
        this.sounds.set('Kevin', kevin);
        this.sounds.set('Ryan', ryan);
<<<<<<< HEAD
        this.sounds.set('Meg', meg);
=======
>>>>>>> gh-pages
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
            myHowl.play();
            setTimeout(function() { 
                myHowl.fade(1, 0, 5000);
            }, 25000);
        }   
    }

    stopAll() {
        for (var [key, value] of this.sounds) {
                value.stop();
        }
    }

}

export default walkupService;
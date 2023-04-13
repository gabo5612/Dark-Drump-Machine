
const audioQ=document.querySelector('#q')
const audioW=document.querySelector('#w')
const audioE=document.querySelector('#e')
const audioA=document.querySelector('#a')
const audioS=document.querySelector('#s')
const audioD=document.querySelector('#d')
const audioZ=document.querySelector('#z')
const audioX=document.querySelector('#x')
const audioC=document.querySelector('#c')
const display=document.querySelector('#display')

const pads=document.querySelectorAll('.drum-pad')
pads.forEach(pad=>{
    pad.addEventListener('click',()=>{
        const audios= pad.querySelectorAll('.clip')
        audios.forEach(audio=>{
            audio.currentTime = 0;
            audio.play()
        })
        display.innerHTML= pad.id
    })
})

document.addEventListener('keydown', (event) => {
    switch(event.keyCode){
        case 81:
            audioQ.currentTime = 0;
            audioQ.play()
            display.innerHTML='AAAAAAA'
        break
        case 87:
            audioW.currentTime = 0;
            audioW.play()
            display.innerHTML='Amongus'
        break
        case 69:
            audioE.currentTime = 0;
            audioE.play()
            display.innerHTML='Amongus2'
        break
        case 65:
            audioA.currentTime = 0;
            audioA.play()
            display.innerHTML='Fart'
        break
        case 83:
            audioS.currentTime = 0;
            audioS.play()
            display.innerHTML='P-Hub'
        break
        case 68:
            audioD.currentTime = 0;
            audioD.play()
            display.innerHTML='Pew'
        break
        case 90:
            audioZ.currentTime = 0;
            audioZ.play()
            display.innerHTML='BOOM'
        break
        case 88:
            audioX.currentTime = 0;
            audioX.play()
            display.innerHTML='What da dog doing'
        break
        case 67:
            audioC.currentTime = 0;
            audioC.play()
            display.innerHTML='Roblox'
        break
        default:
            console.log('you took the wrong way kiddo');
    }
})

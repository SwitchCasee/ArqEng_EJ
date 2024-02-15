// Slide de quem-somos
var i = 0;
var images = [];
var slideTime = 5000; // 3 seconds

images[0] = './assets/modeloFelipe.svg';
images[1] = './assets/modeloJoao.svg';
images[2] = './assets/modeloMaria.svg';

function changePicture() {
    document.querySelector('.photos-squad').style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;


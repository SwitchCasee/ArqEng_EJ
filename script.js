// Slider do Banner da Home

let countBanner =1;
document.getElementById('radio-banner1').checked = true;

setInterval( function(){
    nextBannerImage();
},3000)

function nextBannerImage(){
    countBanner++;
    if (countBanner>3){
        countBanner=1
    }
    document.getElementById("radio-banner"+countBanner).checked = true;
}

// Contagem dos dados na Seção Info

$('.contagem').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


// Slide da Seção Quem Somos

let count =1;
document.getElementById('radio1').checked = true;

setInterval( function(){
    nextImage();
}, 3000)

function nextImage(){
    count++;
    if (count>3){
        count=1
    }
    document.getElementById("radio"+count).checked = true;
}

// Slide de quem-somos
var i = 0;
var images = [];
var slideTime = 5000; // 3 seconds

images[0] = '.../assets/modeloJoao.svg';
images[1] = '.../assets/modeloJoao.svg';
images[2] = '.../assets/modeloMaria.svg';

function changePicture() {
    document.querySelector('.teste').style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;


/*Código de contagem dos números */
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
/*Fim do código */

/*script do home*/
var i = 0;
var images = [];
var slideTime = 3000; // 3 seconds

images[0] = 'models/imgBackGroundHome.svg';
images[1] = 'models/imgBackGroundHome1.svg';

// Pré-carregar as imagens para garantir uma troca mais suave e sem atrasos perceptíveis.
for (var j = 0; j < images.length; j++) {
    (new Image()).src = images[j];
}


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




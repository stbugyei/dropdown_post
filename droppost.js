const radios = document.getElementsByName('show');
let timer

const autoSlide = () => {
    if (radios) {
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked === true) {
                if (i === radios.length - 1) {
                    radios[0].checked = true;
                } else {
                    radios[i + 1].checked = true;
                }
                break
            }
        }
    }
}

timer = setInterval(() => {
    autoSlide();
}, 5000);

radios.forEach(element => {
    element.addEventListener('click', function () {
        clearInterval(timer);
        timer = setInterval(() => {
            autoSlide();
        }, 5000);
    })
});

// let counter = 0;
// const autoSlide = () => {
//     radios[counter].checked = true;
//     counter++;
//     if (counter > 3) {
//         counter = 0;
//     }
// }
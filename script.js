let loadImg = document.getElementById('Loading-Image')
let precent = document.getElementsByClassName('percentage')[0]
let counter = 0
let id = setInterval(blurer, 30)

function blurer() {
    counter += 1;

    if (counter == 100) {
        clearInterval(id);
    }
    precent.innerText = `${counter}%`;
    precent.style.opacity = scale(counter, 0, 100, 1, 0);
    loadImg.style.filter = `blur(${scale(counter, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
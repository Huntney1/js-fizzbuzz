let square;
const container= document.getElementById('box')
for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBazz')
        square = `<div class="square square-lime">FizzBuzz</div>`
    }
    else if (i % 3 == 0) {
        console.log('Fizz')
        square = `<div class="square square-violet">Fizz</div>`
    }
    else if (i % 5 == 0) {
        console.log('Bizz')
        square = `<div class="square square-coral">Bazz</div>`
    }
    else {
        square = `<div class="square square-dodgerblue">${i}</div>`
        console.log(i)
    }
    container.innerHTML += square;
}

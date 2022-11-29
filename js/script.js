for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBazz')
        square = `<div class="square square-coral">FizzBuzz</div>`
    }
    else if (i % 3 == 0) {
        console.log('Fizz')
        square = `<div class="square square-dodgerblue">Fizz</div>`
    }
    else if (i % 5 == 0) {
        console.log('Bizz')
        square = `<div class="square square-violet">Bazz</div>`
    }
    else {
        console.log(i)
    }

}

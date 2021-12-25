// console.log('hello frontend boy')

// // we take number in mt1
// // we take number of the btn that is clicked
// // we take number of people

// // we calculate tip per person and set the value
// // we calculate total tip and set it too
// var x = 0
// var percent = 0
// var people=0
// const bill = document.getElementById('bill');
// bill.addEventListener('change', (e) => {
//   console.log('total bill of',e.target.value,'$');
//   x = e.target.value;
// })

// document.querySelectorAll('.btn').forEach((b) => {
//   b.addEventListener('click', (e) => {
//     e.target.style.background='blue'
//     // console.log(e.target.innerHTML);
//     let z = e.target.innerHTML;
//     if (z === '5%') percent = 5;
//     if (z === '10%') percent = 10;
//     if (z === '15%') percent = 15;
//     if (z === '25%') percent = 25;
//     if (z === '50%') percent = 50;
//     if (z === 'Custom') percent += 1;
//     console.log('tip percentage',percent,'%');
//   })
// })

// document.querySelector('#noOfPeople').addEventListener('change', (e) => {
//   people = e.target.value;
//   console.log('division between',people,'people')
//   if (x && percent && people) {
//     const amt = (x * (100 + percent) / 100 / people).toFixed(2);
//     const amtp = (x * percent / 100 / people).toFixed(2);
//     if ((amtp == Infinity || amtp == NaN)) {
//       document.querySelector('.amt').innerHTML = '0.00';
//       document.querySelector('.amtp').innerHTML = '0.00';
//     }
//     else {
//       document.querySelector('.amt').innerHTML = amt;
//       document.querySelector('.amtp').innerHTML = amtp;
//     }
//   }
// })

"use strict"

var bill = 0;
var percent = 0;
var people = 0;
const calculate = () => {
  const amt = bill * parseInt(100 + percent) / 100 / people;
  const amtp = bill * percent / 100 / people;
  console.log('tip per person', amtp, typeof amtp);
  console.log('total', amt, typeof amt);

  if (amtp < 0 || amtp == Infinity) {
    document.querySelector('.amt').innerHTML = 'Invalid';
    document.querySelector('.amtp').innerHTML = 'Invalid';
    console.log('first');
  } else if (amtp > 0) {
    document.querySelector('.amt').innerHTML = amt.toFixed(2);
    document.querySelector('.amtp').innerHTML = amtp.toFixed(2);
    console.log('second');
  } else {
    document.querySelector('.amt').innerHTML = '0.00';
    document.querySelector('.amtp').innerHTML = '0.00';
    console.log('third');
  }
}
const btnNormalise = () => {
  var len = document.querySelectorAll('.btn').length;
  for (let i = 0; i < len; i++){
    document.querySelectorAll('.btn')[i].style.background = 'hsl(183, 100%, 15%)';
    document.querySelectorAll('.btn')[i].style.color = '#fff';
  }
}
const selectedPercentage = (el) => {
  var len = document.querySelectorAll('.btn').length;
  for (let i = 0; i < len; i++){
    document.querySelectorAll('.btn')[i].style.background= 'hsl(183, 100%, 15%)'
    document.querySelectorAll('.btn')[i].style.color = 'white';
  }
  el.style.background='hsl(172, 67%, 45%)';
  el.style.color = 'hsl(183, 100%, 15%)';
}

document
  .getElementById('bill')
  .addEventListener('change', e => {
    bill = parseInt(e.target.value);
  });

document.getElementById('custom')
  .addEventListener('change', e => {
    percent = parseInt(e.target.value);
    btnNormalise()
  })
document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // btn.style.background = 'hsl(172, 67%, 45%)';
    let p = e.target.innerHTML
    document.querySelector('#custom').value = null;

    switch (p) {
      case '5%':
        percent = 5; break;
      case '10%':
        percent = 10; break;
      case '15%':
        percent = 15; break;
      case '25%':
        percent = 25; break;
      case '50%':
        percent = 50; break;
    }
    console.log(percent, 'percent')
    calculate()
  })
})

document.getElementById('noOfPeople').addEventListener('change', e => {
   people= parseInt(e.target.value);
});

document.querySelector('body').addEventListener('change', () => {
  document.querySelector('.reset-button').disabled = false;
  console.log('reset enabled')

  console.log(bill, '$ bill')
  console.log(percent, '% percentage')
  console.log(people, 'people')
  calculate();
})

document.querySelector('.reset-button').addEventListener('click', () => {
  bill=0, percent=0, people = 0
  console.log(bill, percent, people, 'reset')
  
  console.log('UI CHANGE');
  document.querySelector('#bill').value=null;
  document.querySelector('#custom').value = null;
  document.querySelector('#noOfPeople').value = null;
  document.querySelector('.amt').innerHTML = '0.00';
  document.querySelector('.amtp').innerHTML = '0.00';
  btnNormalise()
  document.querySelector('.reset-button').disabled = true;

})

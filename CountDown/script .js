

let h1=document.querySelector('h1')
let btn1=document.querySelector('.btn1')
let btn2=document.querySelector('.btn2')

let count=0

btn1.addEventListener('click', () => {

  count ++
  h1.innerHTML=count
})

btn2.addEventListener('click', () => {
  count --
  h1.innerHTML=count
})

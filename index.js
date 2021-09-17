let input=document.createElement('input')
document.body.appendChild(input)
//button
let button=document.createElement('button')
document.body.appendChild(button)
button.innerHTML='add'
button.addEventListener('click',dosomething)
//ul
let ul=document.createElement('ul')
document.body.appendChild(ul)
var myobj={}
var number=0
function dosomething(){
    if(input.value!==''){
        let li=document.createElement('li')
        ul.appendChild(li)
        li.innerHTML=input.value
        myobj[number++]=input.value
        console.log(number)
        console.log(myobj)
        input.value=''
    }
}


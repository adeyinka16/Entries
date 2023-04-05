let array=[]
let email=document.getElementById('textbox2');
let name=document.getElementById('textbox1');
let display=document.getElementById('display');
let element;

function submit() {
    if (textbox1.value=='' || textbox2.value=='') {
        return; 
    }
    let found=array.some(function(element) {
        return textbox1.value==element.name && textbox2.value==element.email
    })

    if (found) {
        alert('User already exists')
        return
        
    }
    
    let arr={name: textbox1.value, email: textbox2.value}
    array.push(arr)
   
    // console.log(arr); 
    myfunction() 
}

function myfunction() {
    display.innerHTML="",
    array.forEach(function(element,i) {
        display.innerHTML+=`<tr>
        <td>${i+1}</td>
        <td>${element.name}</td>
        <td>${element.email}</td><td><button onclick="remove(${i})">Delete</button></td></tr>`   
    })   
}

function remove(i) {
    array.splice(i,1)
    myfunction();
    
}
// arr=[]
// let new_array=arr.filter(function callback(element) {
//     return element.new_array
     
// })
// console.log(new_array);
// obj=[]
// let name1=obj.map(function(element) {
//     return element.name1
    
// })
// console.log(name1);
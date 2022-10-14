let required = document.querySelector('.required-text');

let first_Name = document.querySelector('#firstName');
let last_Name = document.querySelector('#lastName');
let country = document.querySelector('#country');
let score = document.querySelector('#score');
let button = document.querySelector('#button');
let addPlayer = document.querySelector('#add-player');



let count=0;

button.addEventListener("click" , ()=>{
  if( !(first_Name.value) || !(last_Name.value) || !(country.value) || !(score.value)) {
  required.innerHTML = "All fields are required";
  required.style.color="red";
    }
  else {
    required.innerHTML="";
     let addPlayer01 = document.createElement('div'); 
      addPlayer01.style.backgroundColor='#E9967A';    
    addPlayer01.style.height="75px";
    addPlayer01.classList.add("outerdivclass"+count);

    
     let entry = document.createElement('div');
    entry.style.display ='block';
    entry.style.width ='100%';
    entry.style.textAlign='center';
   // entry.style.backgroundColor='#E9967A';
   // entry.style.height='50px';
    entry.style.margin='10px';    
    entry.classList.add("class"+count);
    
     let first = document.createElement('div');
     let second = document.createElement('div');
    let  third = document.createElement('div');
    let  fourth = document.createElement('div');

    // Add date
    const date = new Date();
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"];
console.log(months[date.getMonth()]+" "+ date.getDay()+" "+date.getFullYear()+" "+ ('0'+date.getHours()).slice(0,2)+":"+('0'+date.getMinutes()).slice(0,2) );
    let div2 = document.createElement('span');
    div2.innerHTML=months[date.getMonth()]+" "+ date.getDay()+" "+date.getFullYear()+" "+ ('0'+date.getHours()).slice(0,2)+":"+('0'+date.getMinutes()).slice(0,2);
    let div1 = document.createElement('span');
    div1.innerHTML = first_Name.value+" "+last_Name.value+"<br>";
   
    first.appendChild(div1);
    first.appendChild(div2);
    first.style.display='inline-block'
     first.style.margin='20px'
    second.innerHTML =country.value;
    second.style.display='inline-block'
    second.style.margin='20px'
    third.innerHTML=score.value;
    third.style.display='inline-block'
    third.style.margin='20px'

    // Adding delete button 
    let delete_button  = document.createElement('button');
    delete_button.innerHTML= `<i class="fa fa-trash"></i>`
    delete_button.className = "class"+count; 
    delete_button.addEventListener('click', ()=>{
      let classremove = delete_button.className;
      console.log('.'+'outerdiv'+classremove+'')
      console.log(document.querySelector('.'+'outerdiv'+classremove+''))
      document.querySelector('.'+'outerdiv'+classremove+'').remove();
    })
    
    fourth.appendChild(delete_button)

    // Adding +5 button 
    let add5_button  = document.createElement('button');
    add5_button.innerHTML= `+5`
    add5_button.className = "class"+count; 
    add5_button.addEventListener('click', ()=>{
      let classadd5 = add5_button.className;
      console.log('Prakash', classadd5)
       let elements=  document.querySelector('.'+classadd5+'').children.item(2);
      console.log(document.querySelector('.'+classadd5+'').children.item(2))
       elements.innerHTML = parseInt(elements.innerHTML) + 5;
    })
    
    fourth.appendChild(add5_button)

    // Substracting 5 
     let subs5_button  = document.createElement('button');
    subs5_button.innerHTML= `-5`
    subs5_button.className = "class"+count; 
    subs5_button.addEventListener('click', ()=>{
      let classsubs5 = subs5_button.className;
      //console.log('Prakash', classsubs5)
       let elements=  document.querySelector('.'+classsubs5+'').children.item(2);
      //console.log(document.querySelector('.'+classsubs5+'').children.item(2))
       elements.innerHTML = parseInt(elements.innerHTML) - 5;
    })
    
    fourth.appendChild(subs5_button)
    
    fourth.style.display='inline-block'
    fourth.style.margin ='20px'

     console.log(fourth);
    
    entry.appendChild(first)
    entry.appendChild(second)
    entry.appendChild(third)
    entry.appendChild(fourth)
    count = count+1;

  
    addPlayer01.appendChild(entry);
   
    addPlayer.appendChild(addPlayer01);
  }
})



let numbertag=document.querySelectorAll('button');
let number=0;
let display;
let equation='';
numbertag.forEach((button) => {
button.addEventListener('click', ()=>{
 number=button.innerHTML;
  console.log(number);
  if(number != '=' && number != 'ac')
  {
  equation += number;
  document.querySelector('#calc-input').value= equation;
}
else if(number === 'ac')
{
  document.querySelector('#calc-input').value="";
  equation="";
}
  else{
    console.log('shaaistha')
    document.querySelector('#calc-input').value="";
    document.querySelector('#calc-input').value= eval((equation));
    equation="";
    
  }
});
});

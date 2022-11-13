var tarix = new Date();
console.log(tarix);
var s = tarix.getHours();
var body=document.getElementById('bodyId')
if(s>=0 && s<=4){
body.style.backgroundColor= 'green';
    alert('Good night');
}
else if (s>=5 && s<=11){
    body.style.backgroundColor= 'red';
    alert( 'Good morning')

}
else if (s>=12 && s<=17){
    body.style.backgroundColor= 'blue';
   alert( 'Good afternoon')

}
else if (s>=18){
    body.style.backgroundColor= 'grey';
    alert( 'Good night')

}
console.log(body);


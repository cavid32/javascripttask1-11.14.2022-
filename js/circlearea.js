function calculateRadius(){
    var radiusInput=document.getElementById('radius-input')
    var radius =radiusInput.value;
    var area = Math.round(2*Math.PI*radius*100) / 100

 alert('Dairenin sahesi ' + area )
}
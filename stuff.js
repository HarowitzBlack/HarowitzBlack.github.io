

function blink() {
   var counter = 0;
   var f = document.getElementById('greettext');
   setInterval(function() {
       if(counter < 10){
           f.style.display = (f.style.display == 'none' ? '' : 'none');
       }
       counter += 1;
   }, 1000);
}


function toggleModal(){

    var modalBox = document.getElementById('box-modal');
    var toggleModalBtn = document.getElementById('toggle-modal');
    console.log(toggleModalBtn);
    console.log(modalBox);

    toggleModalBtn.onclick = function(){
        modalBox.style.display = "block";
    }

    window.onclick = function(event) {
    if (event.target == modalBox) {
        modalBox.style.display = "none";
    }
}

}

toggleModal();

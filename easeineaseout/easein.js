//function myMove(){
//    let id = null;
//    const elem = document.getElementById("animate");
//
//
//    let pos = 0;
//    clearInterval(id);
//    id = setInterval(frame, 5);
//    function frame(){
//        if(pos==350){
//            clearInterval(id);
//
//        }else{
//            pos++;
//            elem.style.top = pos + 'px';
//            elem.style.left = pos + 'px';
//        }
//    }
//
//
//}


var currentPos = 0;
var incrementer = .01;
const elem = document.getElementById("animate");


    function moveThing(){

        incrementer += 1;
        currentPos += Math.pow(1.05, incrementer);
        elem.style.left = currentPos + 'px';

        if(Math.abs(currentPos) >= 500){
            currentPos = 0;
            incrementer =.01;
        }

        requestAnimationFrame(moveThing);
    }





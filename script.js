function display(val){
    document.getElementById("result").value += val;  //7+8
}

function equate(){
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value =y;
}

function clear(){
    
    document.getElementById("result").value =" ";
}

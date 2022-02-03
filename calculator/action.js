const screen = document.getElementById("display");
function del(){
    screen.value = screen.value.slice(0,-1);
}
function display(character){
    screen.value += character;
}
function calculate(){
    try{
    screen.value = eval(screen.value); }
    catch(err){
        alert("INVALID");
    }
}
function clear(){
    screen.value = "";
}
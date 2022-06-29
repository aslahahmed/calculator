function displayNum(num){
    input.value+=num
}
function clearBox(){
    input.value=""
}
function evaluateExpr(){
    // expr=input.value
    // output=expr()
    input.value=eval(input.value)
}
// backspace
function removeItem(){
    curExpr=input.value
    input.value=curExpr.slice(0,-1)

}
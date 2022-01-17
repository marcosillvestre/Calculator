function insertValues (num) {
    const input = document.getElementById('input-value').value
    document.getElementById('input-value').value = input + num;

}
function clearInput(){
    document.getElementById('input-value').value = ""
}
function showResult(){
    const input = document.getElementById('input-value').value
    document.getElementById('input-value').value = eval(input)
}
function moreMinus(){
    showResult()
    const input = document.getElementById('input-value').value
    document.getElementById('input-value').value = input * -1
}
function porcent() {
    showResult()
    
    const input = document.getElementById('input-value').value
    document.getElementById('input-value').value = input / 10

}
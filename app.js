//Task 1

function linkAlert(){
    alert('This is the Link Alert Box');
}

//Task 2 

function imageAlert(){
    alert('This is an image alert for Dark Souls.');
}

//Task 3

function deleteRow() {
    var td = event.target.parentNode; 
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}

//Task 5

var num = 0;
document.getElementById("count").innerText = num;

function increment() {
    num = num + 1;
    document.getElementById("count").innerText = num;
}

function decrement() {
    num = num - 1;
    document.getElementById("count").innerText = num;
}
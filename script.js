window.onload = function () {
    var myArray = document.getElementById('new');
    inititArray(myArray);
};
var array = new Array(10);

function inititArray(elem) {
    for (var i = 0; i < array.length; i++) {
        array[i] = Math.floor((Math.random() * 10) + 1);
        elem.innerHTML  = elem.innerHTML+array[i]+"</br>";
    }
}

function addItem(number,indexEl,elem){
	array.splice(indexEl,0,number);
	document.getElementById("number").value = "";
	document.getElementById("index").value ="";
	elem.innerHTML ='';
	for (var i = 0; i < array.length; i++) {
	    elem.innerHTML  = elem.innerHTML+array[i]+"</br>";
	}
	console.log("number "+number+" index "+indexEl);
}

function popMethod() {
    var lastElem = array.pop();
    alert("Последний е-т:"+lastElem);
}

function shiftMethod() {
    var firstElem = array.shift();
    alert("Первый е-т: "+firstElem);
}

function pushMethodModern(elem){
	var numberVal = document.getElementById("number").value;
	var indexElem = document.getElementById("index").value;
    array.splice(indexElem, 0, numberVal);
    document.getElementById("number").value = "";
    document.getElementById("index").value ="";
     elem.innerHTML ='';
     for (var i = 0; i < array.length; i++) {
        elem.innerHTML  = elem.innerHTML+array[i]+"</br>";
    }
    indexElem  = document.getElementById("index").value;
    console.log("numberVal",array);
    alert(array);
}
function pushMethod(elem){
    var numberVal = document.getElementById("number").value;
    array.push(numberVal);
    elem.innerHTML ='';
    document.getElementById("number").value = "";
    for (var i = 0; i < array.length; i++) {
        elem.innerHTML  = elem.innerHTML+array[i]+"</br>";
    }
}

function unshiftMethod(elem) {
    var numberVal = document.getElementById("number").value;
    array.unshift(numberVal);
    elem.innerHTML ='';
    document.getElementById("number").value = "";
    for (var i = 0; i < array.length; i++) {
        elem.innerHTML  = elem.innerHTML+array[i]+"</br>";
    }
}


/*
function deleteMethod(elem){
	var numberVal = document.getElementById("number").value;
	var indexElem = document.getElementById("index").value;
    //array.push(parseInt(numberVal));
    array.splice(indexElem, 1, numberVal);
    document.getElementById("number").value = "";
    document.getElementById("index").value ="";
    elem.innerHTML ='';
    for (var i = 0; i < array.length; i++) {
        elem.innerHTML  = elem.innerHTML+array[i]+"</br>";
    }
    indexElem  = document.getElementById("index").value;
    console.log("numberVal",array);
    alert(array);
}
*/


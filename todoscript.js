// Create a close button and appending it to eack list item
var myNodelist = document.getElementsByTagName("li");

for (var i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    myNodelist[i].appendChild(span);

}

// Click on close button to hide the current list item
var close = document.getElementsByClassName("close");

for (var index = 0; index < close.length; index++) {
    close[index].onclick = function() {
        var div = this.parentNode;
        div.style.display = "none";
    }  
}

// Add a visual change for checked list items

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    console.log(ev.target.tagName);
    if( ev.target.tagName === 'LI') {
        ev.target.classList.toggle('done');
    }
}, false);


// Add capability to add new task list

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === '') {
        alert("you must write something!");
    } else {
        document.getElementById("tasklist").appendChild(li);
    }
    document.getElementById("myInput").value = "";


    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);

    for(i = 0; i < close.length; i++) { 
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
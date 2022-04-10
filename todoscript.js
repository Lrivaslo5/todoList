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

// Adding visual change for checked list items

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    console.log(ev.target.tagName);
    if( ev.target.tagName === 'LI') {
        ev.target.classList.toggle('done');
    }
}, false);
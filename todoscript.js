// Create a close button and appending it to eack list item

var myNodelist = document.getElementsByTagName("LI");
var i;

for (i = 0; i < myNodelist.length; i++){
    var span = document.createElement("SPAN");
    var text = document.createTextNode('u00D7');
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on close button to hide the current list item
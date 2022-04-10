// Create a close button and appending it to eack list item
var myNodelist = document.getElementsByTagName("li");

for (var i = 0; i < myNodelist.length; i++) {
    console.log(myNodelist);
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    myNodelist[i].appendChild(span);
    console.log('poop');

}

// Click on close button to hide the current list item
var close = document.getElementsByName("close");
var index;
for (let index = 0; index < close.length; index++) {
    close[index].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";

    }  
}
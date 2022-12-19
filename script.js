var districtClicked = function() {
    var id = this.getAttribute("id");
    if(!id) id = this.parentElement.getAttribute("id");
    console.log(id);
};

var elements = document.getElementsByClassName("district-outline");

for (var i = 0; i < elements.length; i++) {
    var id = elements[i].getAttribute("id");

    if(!id)
    {
        var parent = elements[i].parentElement;
        id = parent.getAttribute("id");
    }
    console.log(id);
    elements[i].addEventListener('click', districtClicked, false);
}
 
 var bw = document.getElementById("BW");

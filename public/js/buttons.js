let hiddenDiv = document.querySelector('.content')
let divId = document.getElementsByTagName("sa", "ab")

function showDiv(divId) {

    // Hide all div elements
    var divs = document.getElementsByTagName("sa", "ab");
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "block";
    }

    // Show the selected div
    let show = document.getElementById(divId)
    /* let show = document.getElementById(divId).style.display = "block"; */
    show.classList.toggle("show")

    // Update the current div id
    /* currentDivId = divId; */

}


/* const tabEl = document.querySelector('button[data-bs-toggle="tab"]')
tabEl.addEventListener('shown.bs.tab', event => {
    event.target // newly activated tab
    event.relatedTarget // previous active tab
}) */
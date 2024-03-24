document.getElementById('datepicker').valueAsDate = new Date();

let currentSelection;

function booking(id){
    const elementId = id;
    if(currentSelection)
        document.getElementById(currentSelection).classList.remove("selected");
    currentSelection = id;
    document.getElementById(elementId).classList.add("selected");
    let selected = checkType(id);
    document.getElementById("selected").value = selected;
}

function checkType(id){
    let type = "";
    let output = "";
    if (id>26){
        type = "Meeting room "
        id=id-26;
    }
    else if(id>20){
        type = "Private office ";
        id=id-20;
    }
    else
        type = "Open space, Seat "

    output=type+id;
    return output;
}
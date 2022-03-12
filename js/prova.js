let slider2 = document.getElementById("dim")
let slider = document.getElementById("week");
let slider1 = document.getElementById("tipe");
let image = document.getElementById("graph");

function choice() {
    let tipe = slider1.value;
    let week = slider.value;
    let dim = slider2.value;
    let path = "\\img\\" + "tip" + tipe + "\\" + week + "\\img" + dim + ".png";
    image.src = path;

}

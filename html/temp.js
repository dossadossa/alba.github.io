let dim = document.getElementById("dim");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let graph1 = document.getElementById("graph1");
let graph2 = document.getElementById("graph2");
let graph3 = document.getElementById("graph3");
let graph4 = document.getElementById("graph4");

// let day = 1;
// let month = 1;
// let year = 2022;

//let dat = new Date();
//year = dat.getFullYear();

//let path = "_grafici\\";
let path = "";

function choice(type) {
    let dimV = dim.value;
    let dayV = day.value;
    let monthV = month.value;
    let yearV = year.value;

    // alert("val="+dimV);
    if(dimV=="monthly"){
        let element = document.getElementById("element").style.display="none";
    }
    else{
        let element = document.getElementById("element").style.display="block";
    }
    if (dayV.length == 1)
        dayV = "0" + dayV;
    else if (dayV.length == 3)
        dayV = dayV.substring(1);

    if (monthV.length == 1)
        monthV = "0" + monthV;
    else if (monthV.length == 3)
        monthV = monthV.substring(1);

    if (((monthV==3 || monthV==6 || monthV==9 || monthV==11) && dayV>30) || (monthV==2 && dayV>28)){
        alert("Non valid date");
        dayV=dayV-1;
    }
    else{
        if ((year%4==1 || year%100==1 || year%400==1) && day>28){
            alert("Non valid date");
            dayV=dayV-1;
        }
    }
    
    let tipes = type;

    
    path = "_grafici\\" + dimV + "\\" + tipes + "\\" + dayV + monthV + yearV + ".png";
    //console.log(path);
    //`\\${dim}\\${tipes}\\${day}${month}${year}.png`;
    graph1.src = path;
    graph2.src = path;
    graph3.src = path;
    graph4.src = path;
}

function format(id) {
    let element = document.getElementById(id);

    //console.log(element.value);

    if(Number(element.value) < 10 && element.value != "0" && element.value != "") {
        element.value = "0" + element.value;
    } else if (element.value.length > 2) {
        element.value = element.value.substring(1);
    }
}



///graf/sett1
//_grafici/weekly/water/


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// let element = document.getElementById("element").style.display="none";
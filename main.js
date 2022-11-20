let prevScrollPos = window.pageYOffset;
  window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    prevScrollPos < currentScrollPos
      ? document.querySelector("nav").classList.add("hide")
      : document.querySelector("nav").classList.remove("hide");
    prevScrollPos = currentScrollPos;
  };



  var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

function myFunction(x) {
  if (x.matches) { // If media query matches
   document.getElementById("dd").className = "drop_down ";
   document.getElementById("ddc").className = "drop_down_content";
   document.getElementById("ddb").className = "drop_btn";
   document.getElementById("iconlabel").className = "icon_label";
  } else {
    document.getElementById("dd").className = "dropup";
    document.getElementById("ddc").className = "dropup-content";
    document.getElementById("ddb").className = "dropbtn";
    document.getElementById("iconlabel").className = "iconlabel";
  }
}
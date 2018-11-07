
//
// let slideChange=0;
// slideshow ();
//
// function slideshow (){
//   let hold= getElementsByClassName('mySlides');
//   for (let slideChange= 0; slideChange<hold.length; slideChange++) {
//     hold[slideChange].style.display = "none";
//   }
//   slideChange++;
//     if (slideChange> hold.length) {slideChange = 1}
//     hold[slideChange-1].style.display = "block";
//     setTimeout(slideshow, 2000);
// }



// Scroll lo lo lo
window.onscroll = function() {scroll()};

function scroll() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      document.getElementsByClassName("pleaseScroll").className = "pleaseScroll";
}

// End scroll function



// moving gallery
let myIndex = 0;

carousel();

function carousel() {
    let i;
    let x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000);

    carousel ();

// now, for the button
document.getElementById("clickhere").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("clickhere").innerHTML = "YOU CLICKED ME!";

}

    }

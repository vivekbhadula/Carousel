function goPrev() {
  //   document.getElementsByClassName("card")[0].style.marginLeft = "-33%";
}

function goNext() {
  let x = document.getElementsByClassName("card");
  let z = document.querySelectorAll(".card.active");
  let x1 = x.length;
  let z1 = z.length;
  console.log(z1);
  if (z) {
    if (x[x1 - 1].classList.contains("active")) {
      return;
    } else {
      let i = 0;
      z[0].style.display = "none";
      z[0].classList.remove("active");
      z[2].nextElementSibling.style.display = "flex";
      z[2].nextElementSibling.classList.add("active");
    }
  }
}

/* do with the display none approach 
    give the first 3 elems display flex
    and then when clicked on next or prev, 
    increase show by 1 and reduce the other accordingly

    x1 x1 x1 x1 x1
       z  z  z
*/

function Fungsi() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('Input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("IniUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
}

// function Fungsion() {
//     // Declare variables
//     var inputo, filter, div1, div2, span, Nama, p, pre, i, txtValue;
//     Inputo = document.getElementById('Inputo');
//     filter = Inputo.value.toUpperCase();
//     div1 = document.getElementById("div2");
//     div2 = div1.getElementById("div3");
//     p = div2.getElementsByTagName("p");
//     pre = p.getElementsByTagName('pre');
//     span = pre.getElementsByTagName('span');
  
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//       Nama = span[i].getElementsById("Nama")[0];
//       txtValue = Nama.textContent || Nama.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         div3[i].style.display = "";
//       } else {
//         div3[i].style.display = "none";
//       }
//     }
// }

function Fungsion() {
    var input, filter, cards, cardContainer, title, i;
    input = document.getElementById("Inputo");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementsByClassName("CardMemberBox")[0];
    cards = cardContainer.getElementsByClassName("CardMember");
    for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".CardProfile");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  }
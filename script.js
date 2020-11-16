
function Footer() {
    var footer = document.querySelector("footer");
    let count = 0;

    footer.addEventListener("click", () => {
      count++
      console.log(`clic ${count}`);
    })
  }
  
  Footer();
  

  function Hamburger() {
    var nav = document.querySelector("#navbarHeader");
    var btn = document.querySelector("button.navbar-toggler");
    btn.addEventListener("click", () => {

      nav.classList.toggle("collapse");

    });
  }
 
  Hamburger();

  function CardEdit() {
    const card = document.querySelector(".album").querySelector(".row").children[0];
    const editBtn = card.querySelector(".btn-outline-secondary");
    const cardText = card.querySelector("p.card-text");

    editBtn.addEventListener("click", () => {

      cardText.style.color = "red";

    });
  }
  
  CardEdit();
  
  function CardEditGreen() {
    const card = document.querySelector(".album").querySelector(".row").children[1];
    const editBtn = card.querySelector(".btn-outline-secondary");
    const cardText = card.querySelector("p.card-text");

    let status = false;
    editBtn.addEventListener("click", () => {

      if (status == false) {
        cardText.style.color = "green";
        status = true;

      } else if (status == true) {
        cardText.style.color = "black";
        status = false;
      }

    });
  }
  
  CardEditGreen();
 
  function nuclearWeapon() {
    const nav = document.querySelector("header");
    const cdnLink = document.querySelector("head").querySelector("link");
    const url = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";

    let status = false;

    nav.addEventListener("dblclick", () => {
      if (status == false) {
        cdnLink.setAttribute("href", "");
        status = true;
        
      } else if (status == true) {
        cdnLink.setAttribute("href", url);
        status = false;
      }
      
    });
  }
  
  nuclearWeapon();
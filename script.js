function filterDestinations() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(input) ? "block" : "none";
  });
}

function validateForm() {
    let name = document.forms["contactForm"]["name"].value;

    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
}

function filterDestinations() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();

        if (text.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function bookNow() {
    alert("Your booking is received! We will call you soon for confirmation.");
}
function bookNow() {
    alert("Aapka booking request mil gaya hai. Confirmation ke liye hamari taraf se aapko call aayega.");
}

function bookNow() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}


function revealCards() {
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let windowHeight = window.innerHeight;
        let cardTop = card.getBoundingClientRect().top;

        if (cardTop < windowHeight - 100) {
            card.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealCards);


function revealCards() {
    let cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        let windowHeight = window.innerHeight;
        let cardTop = card.getBoundingClientRect().top;

        if (cardTop < windowHeight - 100) {
            setTimeout(() => {
                card.classList.add("show");
            }, index * 100); 
        }
    });
}


function revealOnScroll() {
    let elements = document.querySelectorAll(".reveal");

    elements.forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

function validateForm() {
    let name = document.forms["contactForm"]["name"].value.trim();
    let email = document.forms["contactForm"]["email"].value.trim();
    let message = document.forms["contactForm"]["message"].value.trim();

  
    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
        return false;
    }


    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email!");
        return false;
    }

    let msg = document.getElementById("successMsg");
    msg.style.display = "block";

    setTimeout(() => {
        msg.classList.add("show");
    }, 100);

   
    document.forms["contactForm"].reset();

    return false;
}
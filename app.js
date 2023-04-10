// Select The Elements
var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });
  
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();
///////////////////////////////////////////////////////////////////////////////////

  // Notification message on log in page created by javascript amd cs;javascript code  starts here//

        // Create the pop up notification
        var popup = document.createElement("div");
        popup.classList.add("popup");
        
        // Add the notification message to the pop up
        var message = document.createTextNode("🧑‍⚕️Latest info:End term I Examinations will start next week Tuesday April 11, 2023..Clossing day will be on Thursday April 20, 2023.For more infor check out on circular section");
        popup.appendChild(message);
        
        // Add the pop up to the page
        document.body.appendChild(popup);
        
        // Use CSS transitions to create a smooth fade in effect
        popup.style.transition = "opacity 3.5s ease-in-out";
        popup.style.opacity = 0;
        
        
        // Show the pop up after a short delay
        setTimeout(function() {
          popup.style.opacity = 1;
        }, 500);
        
        // Hide the pop up after a few seconds
        setTimeout(function() {
          popup.style.opacity = 0;
        }, 19000);
      
        // Notification message creted by javascript amd cs;javascript code  ends here//
        

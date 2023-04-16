let nums=document.querySelectorAll(".counter h2");
let section=document.querySelector(".prices")
let started=false;


window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
      if (!started) {
        nums.forEach((num) => startCount(num));
      }
      started = true;
    }
  };

  function startCount(el) {
    let goal = el.dataset.val;
    let count = setInterval(() => {
      el.textContent++;
      if (el.textContent == goal) {
        clearInterval(count);
      }
    }, 2000 / goal);
  }





(()=>{"use strict";const e='<div class="modal-overlay"></div> <div id="submit-modal" class="modal"> <div class="modal-content"> <div class="close-btn" id="donate-close-btn"></div> <div class="modal-title"> <h2>Your subscribe was successful!</h2> <p> We deeply appreciate your contributions to make the world a better place. </p> </div> </div> </div> ';document.querySelectorAll(".donate-link").forEach((t=>{t.addEventListener("click",(t=>{const{frequency:o}=t.currentTarget.dataset;!function(t){const o='<div class="modal-overlay"></div> <div id="donate-modal" class="modal"> <div class="modal-content"> <div class="close-btn" id="donate-close-btn"></div> <div class="modal-title"> <h2>Donate Your Heart ${frequency}</h2> <p> Your generosity fuels our mission to make a difference. <br/>Thank you for your heart. <br/>We\'ll send you an email shortly to help you set up your donation. </p> </div> <form class="modal-form"> <div class="modal-container"> <label for="name">Full Name:</label> <input type="text" id="name" name="name" placeholder="John Doe" minlength="1" required/> <label for="email">Email:</label> <input type="email" id="email" placeholder="example@example.com" required/> <label for="phone">Phone Number (Include Country Code):</label> <input type="tel" id="phone" name="phone" placeholder="1-234-567-8900" min="10" max="20" required/> <button class="cmn-btn" id="submit-btn" type="submit">SUBMIT</button> </div> </form> </div> </div> '.replace("${frequency}",t);document.body.insertAdjacentHTML("beforeend",o),(()=>{const e=document.getElementById("donate-modal"),t=document.querySelector(".modal-overlay");e.style.display="flex",e.style.position="fixed",t.style.display="block"})(),document.getElementById("donate-close-btn").addEventListener("click",(()=>{(()=>{const e=document.getElementById("donate-modal"),t=document.querySelector(".modal-overlay");e.remove(),t.remove()})()})),document.querySelector(".modal-form").addEventListener("submit",(function(t){t.preventDefault();const o=document.getElementById("donate-modal"),l=document.querySelector(".modal-overlay");o.remove(),l.remove(),document.body.insertAdjacentHTML("beforeend",e),(()=>{const e=document.getElementById("submit-modal"),t=document.querySelector(".modal-overlay");e.style.display="flex",e.style.position="fixed",t.style.display="block"})(),document.getElementById("donate-close-btn").addEventListener("click",(()=>{const e=document.getElementById("submit-modal"),t=document.querySelector(".modal-overlay");e.remove(),t.remove()}))}))}(o)}))})),document.querySelectorAll(".hamburger-nav-link").forEach((e=>{e.addEventListener("click",(()=>{document.getElementById("close-btn-hamburger").click()}))})),document.addEventListener("DOMContentLoaded",(function(){const t=document.querySelector(".subscribe-form"),o=document.getElementById("subscribe-input"),l=()=>{const e=document.getElementById("submit-modal"),t=document.querySelector(".modal-overlay");e.remove(),t.remove()};t.addEventListener("submit",(t=>{t.preventDefault(),(()=>{document.body.insertAdjacentHTML("beforeend",e);const t=document.getElementById("submit-modal"),l=document.querySelector(".modal-overlay");t.style.display="flex",t.style.position="fixed",l.style.display="block",o.value=""})(),document.getElementById("donate-close-btn").addEventListener("click",l)}))}))})();
//# sourceMappingURL=main.js.map
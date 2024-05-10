import subscribeHtml from "../templates/subscribe.html";

function domEvents() {
  document.addEventListener("DOMContentLoaded", function () {
    const subscribeForm = document.querySelector(".subscribe-form");
    const emailInput = document.getElementById("subscribe-input");

    const showModal = () => {
      document.body.insertAdjacentHTML("beforeend", subscribeHtml);

      const modal = document.getElementById("submit-modal");
      const modalOverlay = document.querySelector(".modal-overlay");

      modal.style.display = "flex";
      modal.style.position = "fixed";
      modalOverlay.style.display = "block";

      emailInput.value = ""; // Clear the email input field
    };

    const hideModal = () => {
      const modal = document.getElementById("submit-modal");
      const modalOverlay = document.querySelector(".modal-overlay");

      modal.remove();
      modalOverlay.remove();
    };

    subscribeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showModal();

      document
        .getElementById("donate-close-btn")
        .addEventListener("click", hideModal);
    });
  });
}

export default domEvents;

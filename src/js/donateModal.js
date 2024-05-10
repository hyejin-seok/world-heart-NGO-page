import subscribeTemplate from "../templates/subscribe.html";
import donateModalTemplate from "../templates/donateModal.html";

function createDonateModal(frequency) {
  const donateModalHtml = donateModalTemplate.replace(
    "${frequency}",
    frequency
  );

  document.body.insertAdjacentHTML("beforeend", donateModalHtml);

  const showModal = () => {
    const modal = document.getElementById("donate-modal");
    const modalOverlay = document.querySelector(".modal-overlay");

    modal.style.display = "flex";
    modal.style.position = "fixed";
    modalOverlay.style.display = "block";
  };

  showModal();

  const hideModal = () => {
    const modal = document.getElementById("donate-modal");
    const modalOverlay = document.querySelector(".modal-overlay");

    modal.remove();
    modalOverlay.remove();
  };

  document.getElementById("donate-close-btn").addEventListener("click", () => {
    hideModal();
  });

  function submitModal(e) {
    e.preventDefault();

    const modal = document.getElementById("donate-modal");
    const modalOverlay = document.querySelector(".modal-overlay");

    modal.remove();
    modalOverlay.remove();

    document.body.insertAdjacentHTML("beforeend", subscribeTemplate);

    const showModal = () => {
      const modal = document.getElementById("submit-modal");
      const modalOverlay = document.querySelector(".modal-overlay");

      modal.style.display = "flex";
      modal.style.position = "fixed";
      modalOverlay.style.display = "block";
    };

    showModal();

    const hideModal = () => {
      const modal = document.getElementById("submit-modal");
      const modalOverlay = document.querySelector(".modal-overlay");

      modal.remove();
      modalOverlay.remove();
    };

    document
      .getElementById("donate-close-btn")
      .addEventListener("click", hideModal);
  }

  document.querySelector(".modal-form").addEventListener("submit", submitModal);
}

function donateBtnClickHandler() {
  document.querySelectorAll(".donate-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const { frequency } = e.currentTarget.dataset;
      createDonateModal(frequency);
    });
  });
}

export default donateBtnClickHandler;

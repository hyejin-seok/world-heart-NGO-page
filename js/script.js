// Donate Modal
function createModal(frequency) {
  const modalHTML = `<div class="modal-overlay"></div>
  <div id="donate-modal" class="modal">
  <div class="modal-content">
    <div class="close-btn" id="donate-close-btn"></div>
    <div class="modal-title">
      <h2>Donate Your Heart ${frequency}</h2>
      <p>
        Your generosity fuels our mission to make a difference. <br />Thank
        you for your heart. <br />We'll send you an email shortly to help
        you set up your donation.
      </p>
    </div>
    <form class="modal-form">
      <div class="modal-container">
        <label for="name">Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
          minlength="1"
          required
        />
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="example@example.com"
          required
        />
        <label for="phone">Phone Number (Include Country Code):</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="1-234-567-8900"
          min="10"
          max="20"
          required
        />
        <button class="cmn-btn" id="submit-btn" type="submit">SUBMIT</button>
      </div>
    </form>
  </div>
</div>`;

  document.body.insertAdjacentHTML("beforeend", modalHTML);

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

  document
    .getElementById("donate-close-btn")
    .addEventListener("click", hideModal);

  function submitModal(event) {
    event.preventDefault();
    history.pushState({}, document.title, window.location.pathname); // Hide data in the URL after a user submits

    const modal = document.getElementById("donate-modal");
    const modalOverlay = document.querySelector(".modal-overlay");

    modal.remove();
    modalOverlay.remove();

    const modalHTML = `
    <div class="modal-overlay"></div>
    <div id="submit-modal" class="modal">
      <div class="modal-content">
        <div class="close-btn" id="donate-close-btn"></div>
        <div class="modal-title">
          <h2>Your submission was successful!</h2>
          <p>We deeply appreciate your contributions to make the world a better place.</p>
        </div>
      </div>
    </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);

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

// Subsribe Modal
document.addEventListener("DOMContentLoaded", function () {
  const subscribeForm = document.querySelector(".subscribe-form");
  const emailInput = document.getElementById("subscribe-input");

  function subscribeModal(event) {
    event.preventDefault();
    history.pushState({}, document.title, window.location.pathname);

    const modalHTML = `
      <div class="modal-overlay"></div>
      <div id="submit-modal" class="modal">
        <div class="modal-content">
          <div class="close-btn" id="donate-close-btn"></div>
          <div class="modal-title">
            <h2>Your subscribe was successful!</h2>
            <p>We deeply appreciate your contributions to make the world a better place.</p>
          </div>
        </div>
      </div>
      `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);

    const showModal = () => {
      const modal = document.getElementById("submit-modal");
      const modalOverlay = document.querySelector(".modal-overlay");

      modal.style.display = "flex";
      modal.style.position = "fixed";
      modalOverlay.style.display = "block";

      emailInput.value = "";
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

  subscribeForm.addEventListener("submit", subscribeModal);
});

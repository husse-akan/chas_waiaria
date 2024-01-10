function openModal() {
  var modal = document.getElementById("accessibleModal");
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  document.getElementById("closeModalBtn").focus();
}

function closeModal() {
  var modal = document.getElementById("accessibleModal");
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  document.getElementById("openModalBtn").focus();
}

function openDialog() {
  var dialog = document.getElementById("accessibleDialog");
  dialog.showModal();
  dialog.setAttribute("aria-hidden", "false");
  document.getElementById("closeDialogBtn").focus();
}

function closeDialog() {
  var dialog = document.getElementById("accessibleDialog");
  dialog.close();
  dialog.setAttribute("aria-hidden", "true");
  document.getElementById("openDialogBtn").focus();
}

document.addEventListener("keydown", function (event) {
  var modal = document.getElementById("accessibleModal");
  var dialog = document.getElementById("accessibleDialog");

  if (event.key === "Escape" && modal.style.display === "block") {
    closeModal();
  }

  if (event.key === "Escape" && dialog.hasAttribute("open")) {
    closeDialog();
  }
});

var menuButton = document.getElementById("menuButton");
var menuContent = document.getElementById("menuContent");

menuButton.addEventListener("click", function () {
  if (menuContent.style.display === "block") {
    menuContent.style.display = "none";
  } else {
    menuContent.style.display = "block";
  }
});

document.addEventListener("click", function (event) {
  if (
    !menuButton.contains(event.target) &&
    !menuContent.contains(event.target)
  ) {
    menuContent.style.display = "none";
  }
});

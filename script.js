let userName = "";

function createProject() {}

// copyright
function todayDate() {
  let date = new Date().getFullYear();
  return date;
}

function renderBoard() {
  let dateCopyright = todayDate();
  document.querySelector(
    ".copyright"
  ).innerHTML = `Copyright &copy; ${dateCopyright} LivenLab`;

  if (
    localStorage.getItem("userName") == "" ||
    localStorage.getItem("userName") == null
  ) {
    userName = prompt("Enter your name: ");
    document.querySelector("#user-name-welcome").textContent = ` ${userName}`;
    localStorage.setItem("userName", userName);
  } else {
    userName = localStorage.getItem("userName");
    document.querySelector("#user-name-welcome").textContent = ` ${userName}`;
  }

  console.log("user name ", userName);
}

// On the page loading
(function () {
  renderBoard();
})();

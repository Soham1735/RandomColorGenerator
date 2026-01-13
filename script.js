const getColor = async () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16).padStart(6, "0");

  document.body.style.backgroundColor = randomCode;
  document.getElementById("color-code").textContent = randomCode;

  try {
    await navigator.clipboard.writeText(randomCode);
    console.log("Copied:", randomCode);
  } catch (err) {
    console.log("Clipboard failed:", err);
  }
};

document.getElementById("btn").addEventListener("click", getColor);

getColor();

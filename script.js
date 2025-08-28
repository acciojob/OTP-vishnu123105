const inputs = document.querySelectorAll(".code");
inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;

    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value !== "") {
        // If current field has a value, just clear it
        input.value = "";
      } else if (index > 0) {
        // If empty, move back and clear previous
        inputs[index - 1].focus();
        inputs[index - 1].value = "";
      }
      e.preventDefault(); // stop default cursor move
    }
  });
});
const inputs = document.querySelectorAll(".code");

    // ✅ Ensure first input is focused immediately when page loads
    window.addEventListener("DOMContentLoaded", () => {
      inputs[0].focus();
    });

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
            // Clear current value first
            input.value = "";
          } else if (index > 0) {
            // Move back and clear previous input
            inputs[index - 1].focus();
            inputs[index - 1].value = "";
          }
          e.preventDefault();
        }
      });
    });
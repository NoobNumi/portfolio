document.getElementById("copyButton").addEventListener("click", function () {
  const emailInput = document.getElementById("emailInput");
  const copyIcon = document.getElementById("copyIcon");
  const copyButton = document.getElementById("copyButton");

  // Copy the email to clipboard
  navigator.clipboard
    .writeText(emailInput.value)
    .then(() => {
      // Change the SVG icon to a checkmark
      copyIcon.innerHTML = `
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        `;

      // Update tooltip text to "Copied"
      const tooltipInstance = bootstrap.Tooltip.getInstance(copyButton);
      if (tooltipInstance) {
        tooltipInstance.setContent({ ".tooltip-inner": "Copied" });
        tooltipInstance.show(); // Show the updated tooltip

        // Hide the tooltip after 2 seconds
        setTimeout(() => {
          tooltipInstance.hide();
          // Reset tooltip text and SVG icon
          copyIcon.innerHTML = `
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
            `;
          tooltipInstance.setContent({ ".tooltip-inner": "Copy email" });
        }, 2000);
      }
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
});

// Initialize tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

function adjustInputWidth(input) {
  // Create a temporary span element to measure text width
  const tempSpan = document.createElement("span");
  tempSpan.style.visibility = "hidden";
  tempSpan.style.position = "absolute";
  tempSpan.style.whiteSpace = "nowrap";
  tempSpan.style.fontSize = window.getComputedStyle(input).fontSize;
  tempSpan.style.fontFamily = window.getComputedStyle(input).fontFamily;
  tempSpan.textContent = input.value;

  // Append span to body, measure its width, then remove it
  document.body.appendChild(tempSpan);
  const textWidth = tempSpan.offsetWidth + 35; // Add padding
  document.body.removeChild(tempSpan);

  // Set the input width
  input.style.width = `${textWidth}px`;
}

const emailInput = document.getElementById("emailInput");
adjustInputWidth(emailInput);

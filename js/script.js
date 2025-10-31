document.addEventListener("DOMContentLoaded", function () {
      const button = document.getElementById("clickEffect");
      const paragraph = document.getElementById("parasJs");

      if (button && paragraph) {
        button.addEventListener("click", function () {
          paragraph.textContent = "Thanks for viewing my portfolio!.";
          paragraph.style.color = "#1d1d1dff";
          paragraph.style.fontWeight = "bold";
        });
      }
    });
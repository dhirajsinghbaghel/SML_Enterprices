const texts = [
  "Instant Loan",
  "Insurance",
  "Vehicle Loan",
  "Finance Service",
  "Home Loan",
  "Business Loan",
  "Credit Card",
  "Mutual Funds",
  "KYC Verification",
  "Digital Wallet"
];
    let index = 0;
    let charIndex = 0;
    const typingSpeed = 120;
    const eraseSpeed = 70;
    const delayBetween = 1200;
    const typingElement = document.getElementById("typing-text");

    function type() {
      if (charIndex < texts[index].length) {
        typingElement.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(erase, delayBetween);
      }
    }

    function erase() {
      if (charIndex > 0) {
        typingElement.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, eraseSpeed);
      } else {
        index = (index + 1) % texts.length;
        setTimeout(type, typingSpeed);
      }
    }

    // Start the typing effect
    type();

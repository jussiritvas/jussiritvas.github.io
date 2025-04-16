<script>
    export let constantText = '';
    export let tailStrings = [];
    export let typingSpeed = 100; // ms per character
    export let eraseSpeed = 50; // ms per character
    export let delayBetween = 1000; // ms pause before erasing/typing next
  
    let currentText = '';
    let currentTailIndex = 0;
    let isTyping = true;
    let showCursor = true;
  
    // Blinking cursor animation
    setInterval(() => {
      showCursor = !showCursor;
    }, 500);
  
    // Typing and erasing logic
    async function typeWriter() {
      if (constantText && currentText.length < constantText.length) {
        // Type constant text first
        currentText += constantText[currentText.length];
        setTimeout(typeWriter, typingSpeed);
        return;
      }
  
      if (tailStrings.length === 0) return;
  
      const currentTail = tailStrings[currentTailIndex];
      const baseText = constantText;
  
      if (isTyping) {
        // Typing phase
        if (currentText.length < baseText.length + currentTail.length) {
          currentText += currentTail[currentText.length - baseText.length];
          setTimeout(typeWriter, typingSpeed);
        } else {
          // Pause before erasing
          isTyping = false;
          setTimeout(typeWriter, delayBetween);
        }
      } else {
        // Erasing phase
        if (currentText.length > baseText.length) {
          currentText = currentText.slice(0, -1);
          setTimeout(typeWriter, eraseSpeed);
        } else {
          // Move to next tail string
          currentTailIndex = (currentTailIndex + 1) % tailStrings.length;
          isTyping = true;
          setTimeout(typeWriter, typingSpeed);
        }
      }
    }
  
    // Start the animation when component mounts
    onMount(() => {
      typeWriter();
      return () => {}; // Cleanup if needed
    });
  
    import { onMount } from 'svelte';
  </script>
  
  <div class="typist">
    <span>{currentText}</span>
    <span class="cursor" class:blink={showCursor}>|</span>
  </div>
  
  <style>
    .typist {
      display: inline-flex;
      align-items: center;
      font-family: monospace;
      font-size: 1.2rem;
    }
  
    .cursor {
      color: #333;
      margin-left: 2px;
    }
  
    .cursor.blink {
      opacity: 0;
    }
  </style>
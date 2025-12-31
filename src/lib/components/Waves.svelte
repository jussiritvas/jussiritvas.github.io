<script>
  import { onMount } from 'svelte';

  let canvas;
  let ctx;
  let width = 0;
  let height = 0;

function getWaveY(x, wave, time, index) {
  return (
    height / 2 +
    wave.amplitude *
      Math.sin(x * wave.frequency + time * wave.speed * 0.4 + index) +
    index * 20
  );
}


  // Wave properties
  const waves = [
    { amplitude: 30, frequency: 0.01, speed: 0.003, color: 'rgba(0, 0, 0, 0.15)' },
    { amplitude: 20, frequency: 0.015, speed: 0.0015, color: 'rgba(0, 180, 80, 0.15)' },
    { amplitude: 45, frequency: 0.008, speed: 0.0015, color: 'rgba(0, 0, 100, 0.15)' },
  ];

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }

  function drawShadow() {
    // Create a linear gradient for the shadow at the bottom
    const gradient = ctx.createLinearGradient(0, height * 0.7, 2, height);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)'); // Transparent at the top
    gradient.addColorStop(1, 'rgba(244, 244, 244, 0.4)'); // Shadowy at the bottom

    ctx.fillStyle = gradient;
    ctx.fillRect(0, height * 0.7, width, height * 0.6);
  }

  function drawAngledLines() {
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)'; // Dark lines
    ctx.lineWidth = 1;

    const numLines = 40;
    const angle = (20 * Math.PI) / 180; // 20 degrees in radians
    const spacing = height / (numLines + 1); // Even spacing across canvas width
    const width_spacing = width / (numLines + 1)
    for (let i = 0; i < numLines; i++) {
      ctx.beginPath();
      const xStart = (i + 1) * width_spacing;
      const yStart = height - (i + 1) * spacing ; // Start lines near bottom
      const length = 200; // Length of each line
      const xEnd = xStart + length * Math.cos(angle);
      const yEnd = yStart + length * Math.sin(angle);
      

      ctx.moveTo(width, yStart);
      ctx.lineTo(xEnd, height);
      ctx.stroke();
    }
  }

  function animate(time = 0) {
    ctx.clearRect(0, 0, width, height);
    
    ctx.strokeStyle = 'rgba(244, 244, 244, 0.4)';
    drawShadow();
    drawAngledLines(); // Draw lines after shadow and waves

    // Draw the waves
    waves.forEach((wave, index) => {
      ctx.beginPath();
      ctx.strokeStyle = wave.color;
      ctx.lineWidth = 2;

      for (let x = 0; x < width; x++) {
        const y = 
          height / 2 +
          wave.amplitude * 
          Math.sin(x * wave.frequency + time * wave.speed * 0.4 + index) +
          (index * 20); // Slight vertical offset for each wave

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
    });
    requestAnimationFrame(animate);
  }

  onMount(() => {
    ctx = canvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  });
</script>

<style>
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
</style>

<canvas bind:this={canvas}></canvas>
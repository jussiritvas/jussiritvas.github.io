<script>
  import { onMount } from 'svelte';

  let canvas;
  let ctx;
  let width = 0;
  let height = 0;

  let skateX = -100; // configurable skateboarder X position
  let jumpStartTime = null;
  let jumpDuration = 1000; // ms
  let jumpInterval = 3000; // ms between jumps
  let lastJumpTime = 0;

function getWaveY(x, wave, time, index) {
  return (
    height / 2 +
    wave.amplitude *
      Math.sin(x * wave.frequency + time * wave.speed * 0.4 + index) +
    index * 20
  );
}

function drawStickman(x, y, rotation = 0, verticalOffset = 0) {
    ctx.save();
    ctx.translate(x, y + verticalOffset);
    ctx.rotate(rotation);

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;

    // Head
    ctx.beginPath();
    ctx.arc(0, -20, 5, 0, 2 * Math.PI);
    ctx.stroke();

    // Body
    ctx.beginPath();
    ctx.moveTo(0, -15);
    ctx.lineTo(0, 5);
    ctx.stroke();

    // Arms
    ctx.beginPath();
    ctx.moveTo(-8, -5);
    ctx.lineTo(8, -5);
    ctx.stroke();

    // Legs
    ctx.beginPath();
    ctx.moveTo(0, 5);
    ctx.lineTo(-6, 15);
    ctx.moveTo(0, 5);
    ctx.lineTo(6, 15);
    ctx.stroke();

    // Skateboard
    ctx.beginPath();
    ctx.moveTo(-10, 18);
    ctx.lineTo(10, 18);
    ctx.stroke();

    // Wheels
    ctx.beginPath();
    ctx.arc(-8, 20, 2, 0, 2 * Math.PI);
    ctx.arc(8, 20, 2, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.restore();
  }



  // Wave properties
  const waves = [
    { amplitude: 30, frequency: 0.01, speed: 0.005, color: 'rgba(0, 0, 0, 0.2)' },
    { amplitude: 20, frequency: 0.015, speed: 0.003, color: 'rgba(0, 80, 80, 0.3)' },
    { amplitude: 25, frequency: 0.008, speed: 0.004, color: 'rgba(0, 120, 0, 0.4)' },
    { amplitude: 45, frequency: 0.008, speed: 0.002, color: 'rgba(0, 0, 100, 0.3)' },
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
    /*
    const skateY = getWaveY(skateX, waves[0], time, 0);
    let verticalOffset = 0;
    let rotation = 0;

    // Time since last jump
    const elapsed = time - lastJumpTime;

    if (elapsed > jumpInterval) {
      jumpStartTime = time;
      lastJumpTime = time;
    }

    if (jumpStartTime !== null) {
      const jumpElapsed = time - jumpStartTime;
      if (jumpElapsed < jumpDuration) {
        const progress = jumpElapsed / jumpDuration;
        verticalOffset = -50 * Math.sin(Math.PI * progress); // up then down
        rotation = (Math.PI / 4) * Math.sin(Math.PI * progress); // rotate mid-air
      } else {
        jumpStartTime = null; // end the jump
      }
    }
    drawStickman(skateX, skateY - 20, rotation, verticalOffset);
    

    skateX += 1
    if (skateX > width) {
      skateX = -5000
    } */
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
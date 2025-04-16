<!-- GraphCV.svelte -->
<script>
    import { onMount } from 'svelte';
    import {graphCV} from '$lib/data/graph-cv'
  
    let canvas;
    let ctx;
    let nodes = [];
    let lines = [];
    let selectedNode = null;
    let infoBox = null;
    let animationFrameId;
  
    // Canvas dimensions
    let width = 800;
    let height = 600;
    let nodeRadius = 60;
    // Node class
    class Node {
      constructor(x, y, radius, name, level, children = null, parent = null) {
        this.x = x;
        this.y = y;
        this.targetX = x;
        this.targetY = y;
        this.radius = radius;
        this.name = name;
        this.level = level;
        this.children = children;
        this.parent = parent;
        this.isAnimating = false;
      }
  
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.level === 0 ? '#fff' : '#fff';
        ctx.fill();
        ctx.strokeStyle = '#000';
        ctx.stroke();
  
        ctx.fillStyle = '#000';
        
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.name, this.x, this.y);
      }
  
      update() {
        if (this.isAnimating) {
          const dx = this.targetX - this.x;
          const dy = this.targetY - this.y;
          this.x += dx * 0.05;
          this.y += dy * 0.05;
          if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
            this.x = this.targetX;
            this.y = this.targetY;
            this.isAnimating = false;
          }
        }
      }
    }
  
    // Line class
    class Line {
      constructor(startNode, endNode) {
        this.startNode = startNode;
        this.endNode = endNode;
        this.progress = 0;
        this.isAnimating = false;
      }
  
      draw() {
        ctx.beginPath();
        ctx.moveTo(this.startNode.x, this.startNode.y);
        const endX = this.startNode.x + (this.endNode.x - this.startNode.x) * this.progress;
        const endY = this.startNode.y + (this.endNode.y - this.startNode.y) * this.progress;
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = '#000';
        ctx.stroke();
      }
  
      update() {
        if (this.isAnimating && this.progress < 1) {
          this.progress += 0.02;
          if (this.progress >= 1) {
            this.progress = 1;
            this.isAnimating = false;
          }
        }
      }
    }
  
    // Initialize canvas
    onMount(() => {
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext('2d');
  
      // Create root node
      const rootNode = new Node(width / 2, height / 2, nodeRadius, 'My graph CV', 0, graphCV);
      nodes.push(rootNode);
  
      // Handle clicks
      canvas.addEventListener('click', handleClick);
  
      // Start animation
      animate();
  
      // Handle window resize
      const handleResize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        // Reposition root node
        rootNode.x = width / 2;
        rootNode.y = height / 2;
        rootNode.targetX = width / 2;
        rootNode.targetY = height / 2;
      };
      window.addEventListener('resize', handleResize);
  
      return () => {
        cancelAnimationFrame(animationFrameId);
        canvas.removeEventListener('click', handleClick);
        window.removeEventListener('resize', handleResize);
      };
    });
  
    // Create child nodes
    function createChildNodes(parentNode) {
      if (!parentNode.children) return;
  
      const keys = Object.keys(parentNode.children);
      const radius = 100 * (parentNode.level + 1);
      keys.forEach((key, index) => {
        const angle = (index / keys.length) * Math.PI * 2;
        const targetX = parentNode.x + Math.cos(angle) * radius;
        const targetY = parentNode.y + Math.sin(angle) * radius;
  
        const node = new Node(
          parentNode.x,
          parentNode.y,
          nodeRadius,
          key,
          parentNode.level + 1,
          parentNode.children[key],
          parentNode
        );
        node.targetX = targetX;
        node.targetY = targetY;
        node.isAnimating = true;
        nodes.push(node);
  
        const line = new Line(parentNode, node);
        line.isAnimating = true;
        lines.push(line);
      });
    }
  
    // Display leaf node info
    function showLeafInfo(node) {
      const data = node.children;
      let info = `${node.name}:\n`;
      for (const [key, value] of Object.entries(data)) {
        info += `${key}: ${value}\n`;
      }
      infoBox = {
        x: node.x + node.radius + 10,
        y: node.y - 50,
        width: 150,
        height: 100,
        text: info,
      };
    }
  
    // Handle canvas clicks
    function handleClick(event) {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
  
      let clickedNode = null;
      for (const node of nodes) {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        if (Math.sqrt(dx * dx + dy * dy) < node.radius) {
          clickedNode = node;
          break;
        }
      }
  
      infoBox = null; // Clear previous info box
      if (clickedNode && clickedNode !== selectedNode) {
        selectedNode = clickedNode;
        console.log(clickedNode.children )
        if (clickedNode.children && typeof clickedNode.children === 'object' && !clickedNode.children.leaf) {
            console.log("Hello")
          createChildNodes(clickedNode);
        } else {
          showLeafInfo(clickedNode);
        }
      } else {
        selectedNode = null;
      }
    }
  
    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, width, height);
  
      // Update and draw lines
      lines.forEach((line) => {
        line.update();
        line.draw();
      });
  
      // Update and draw nodes
      nodes.forEach((node) => {
        node.update();
        node.draw();
      });
  
      // Draw info box if present
      if (infoBox) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(infoBox.x, infoBox.y, infoBox.width, infoBox.height);
        ctx.fillStyle = '#fff';
        ctx.font = '12px Arial';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        const lines = infoBox.text.split('\n');
        lines.forEach((line, i) => {
          ctx.fillText(line, infoBox.x + 5, infoBox.y + 5 + i * 15);
        });
      }
  
      animationFrameId = requestAnimationFrame(animate);
    }
  </script>
  
  <canvas bind:this={canvas} style="display: block;"></canvas>
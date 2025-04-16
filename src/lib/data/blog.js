export const blogPosts = [
    {
      slug: "getting-started-with-svelte",
      title: "Getting Started with Svelte",
      date: "2025-04-05",
      excerpt: "Learn the basics of Svelte and why it's becoming so popular among developers.",
      content: `
  # Getting Started with Svelte
  
  Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.
  
  ## Why Svelte?
  
  * No Virtual DOM
  * True reactivity
  * Less code to write
  * No complex state management libraries needed
  * Better performance
  
  ## Basic Example
  
  \`\`\`svelte
  <script>
    let count = 0;
    
    function increment() {
      count += 1;
    }
  </script>
  
  <button on:click={increment}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
  </button>
  \`\`\`
  
  Stay tuned for more Svelte tutorials!
  `
    },
    {
      slug: "creating-a-portfolio-website",
      title: "How to Create a Portfolio Website",
      date: "2025-03-28",
      excerpt: "Tips and tricks for creating an impressive portfolio website that stands out.",
      content: `
  # How to Create a Portfolio Website
  
  Your portfolio website is often the first impression potential employers or clients have of you. Here's how to make it count.
  
  ## Key Elements
  
  1. Clean design
  2. Easy navigation
  3. Showcase your best work
  4. Include testimonials
  5. Make contact information accessible
  
  ## Technical Considerations
  
  * Responsive design is non-negotiable
  * Page load speed matters
  * SEO optimization helps you get found
  * Accessibility should be a priority
  
  Remember, your portfolio isn't just showing your work—it IS your work. Make every pixel count!
  `
    }
  ];
export const blogPosts = [
]
const test = [ 
{
      slug: "road-from-software-engineer-to-quantum-software-engineer-part-1",
      title: "From Software Engineer to Quantum Software Engineer: Part 1",
      date: "2025-04-16",
      excerpt: "In this series I will introduce quantum software engineering from the perspective of a software engineer. I will be starting with the basics and going in to more advanced stuff later",
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
      slug: "how-to-blog",
      title: "How to Blog",
      date: "2025-04-16",
      excerpt: "Writings on the motive of writing a blog.",
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
    }
  ];
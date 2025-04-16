<script>
    import { blogPosts } from '$lib/data/blog';
    import { cvData } from '$lib/data/cv';
    
    // Sort by date, newest first
    const sortedPosts = [...blogPosts]
  </script>
  
  <svelte:head>
    <title>Blog | {cvData.name}</title>
  </svelte:head>
  
  <main class="container mx-auto px-4 py-8 max-w-4xl">
    <h1 class="text-3xl font-bold mb-8 text-center">Blog</h1>
    
    <div class="grid grid-cols-1 gap-8">
      {#each sortedPosts as post}
        <article class="bg-white shadow-md rounded-lg overflow-hidden">
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-2 hover:text-blue-600">
              <a href="/blog/{post.slug}">{post.title}</a>
            </h2>
            <p class="text-gray-500 text-sm mb-4">{post.date}</p>
            <p class="text-gray-700 mb-4">{post.excerpt}</p>
            <a href="/blog/{post.slug}" class="text-blue-600 hover:underline inline-flex items-center">
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </article>
      {/each}
    </div>
    
    <div class="text-center mt-8">
      <a href="/" class="text-blue-600 hover:underline">← Back to Home</a>
    </div>
  </main>
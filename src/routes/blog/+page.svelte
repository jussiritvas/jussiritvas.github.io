<script>
    import { blogPosts } from '$lib/data/blog';
    import { cvData } from '$lib/data/cv';
    import SineWaveBackground from '$lib/components/Waves.svelte';
    import { abstractBlogPage } from '$lib/data/abstract';

    // Sort by date, newest first
    const sortedPosts = [...blogPosts]
  </script>
  
  <svelte:head>
    <title>Blog | {cvData.name}</title>
  </svelte:head>
  
  <main class="container mx-auto px-4 py-8 max-w-4xl min-h-screen">
    <section class="container mx-auto my-8">
      <p class="cutive-mono-bold md:mx-4 preserve-breaks">{abstractBlogPage}</p>

    </section>
    <SineWaveBackground />
    <div class="grid grid-cols-3 gap-8">
      {#each sortedPosts as post}
        <article class="bg-white shadow-lg rounded-lg overflow-hidden border">
          <div class="p-6">
            <h2 class="text-xl font-bold mb-2 hover:text-green-600">
              <a href="/blog/{post.slug}">{post.title}</a>
            </h2>
            <p class="text-gray-500 text-sm mb-4">{post.date}</p>
            <p class="text-sm mb-4">{post.excerpt}</p>
            <a href="/blog/{post.slug}" class="text-green-600 hover:underline inline-flex items-center">
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
      <a href="/" class="text-green-600 hover:underline">← Back to Home</a>
    </div>

  </main>
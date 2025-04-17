<script>
    import { page } from '$app/stores';
    import { blogPosts } from '$lib/data/blog';
    import { cvData } from '$lib/data/cv';
    import { onMount } from 'svelte';
    import SineWaveBackground from '$lib/components/Waves.svelte';
    
    // Get the post based on slug from the URL
    $: slug = $page.params.slug;
    $: post = blogPosts.find(p => p.slug === slug);
    
    // For markdown rendering
    let postContent;
    
    onMount(async () => {
      // Import marked.js for markdown rendering
      const marked = await import('marked');
      if (post) {
        postContent = marked.parse(post.content);
      }
    });
  </script>
  
  <svelte:head>
    <title>{post ? post.title : 'Post Not Found'} | {cvData.name}</title>
  </svelte:head>
  
  <main class="container mx-auto px-4 py-8 max-w-4xl min-h-screen">
    <SineWaveBackground />
    {#if post}
      <article class="bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="p-8">
          <h1 class="text-3xl font-bold mb-4">{post.title}</h1>
          <p class="text-gray-500 mb-8">{post.date}</p>
          {#if postContent}
            <div class="max-w-none test">
              {@html postContent}
            </div>
          {:else}
            <p>Loading content...</p>
          {/if}
        </div>
      </article>
    {:else}
      <div class="text-center py-16">
        <h1 class="text-3xl font-bold mb-4">Post Not Found</h1>
        <p class="mb-8">The blog post you're looking for doesn't exist.</p>
        <a href="/blog" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Back to Blog
        </a>
      </div>
    {/if}
    
    <div class="text-center mt-8">
      <a href="/blog" class="text-blue-600 hover:underline">← All Articles</a>
    </div>
</main>

<style>
  .test > h1 {
    color: red;
  }
</style>
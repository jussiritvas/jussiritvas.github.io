<script>
    import { cvData } from '$lib/data/cv';
    import { blogPosts } from '$lib/data/blog';
    import SineWaveBackground from '$lib/components/Waves.svelte';
    import Typist from '$lib/components/Typist.svelte';

    import GraphCV from  '$lib/components/GraphCV.svelte';
    // Get the latest 2 blog posts
    const latestPosts = [...blogPosts]

    let myConstant = 'I am interested in ';
    let myTails = ['fullstack development.', 'quantum computing.', 'quantum error correction.', 'blogging.'];
  </script>
  
  <svelte:head>
    <title>{cvData.name} - Personal Website</title>
  </svelte:head>
  
  <main class="container mx-auto px-8 py-12">
    <section class="hero my-16 h-120">
      <SineWaveBackground/>
      <h1 class="text-4xl font-bold mb-2 cutive-mono-regular">Hello friend! <br> My name is {cvData.name}</h1>
      <Typist constantText={myConstant} tailStrings={myTails} />

    </section>
    <section class="graph-cv my-4">
      <h2 class="text-2xl font-bold mb-6 text-center cutive-mono-regular">My Graph CV</h2>
      <GraphCV />

    </section>
    
    <section class="latest-blogs my-16">
      <h2 class="text-2xl font-bold mb-6 text-center">Latest Articles</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each latestPosts as post}
          <div class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
            <div class="p-6">
              <p class="text-sm text-gray-500 mb-2">{post.date}</p>
              <h3 class="text-xl font-semibold mb-2">{post.title}</h3>
              <p class="text-gray-600 mb-4">{post.excerpt}</p>
              <a href="/blog/{post.slug}" class="text-blue-600 hover:underline">
                Read more →
              </a>
            </div>
          </div>
        {/each}
      </div>
      <div class="text-center mt-8">
        <a href="/blog" class="text-blue-600 hover:underline">View all articles →</a>
      </div>
    </section>

</main>
<script>
    import { cvData } from '$lib/data/cv';
    import Experience from '$lib/components/CV/Experience.svelte';
    import Education from '$lib/components/CV/Education.svelte';
    import Skills from '$lib/components/CV/Skills.svelte';
    import SineWaveBackground from '$lib/components/Waves.svelte';

  </script>
  
  <svelte:head>
    <title>CV | {cvData.name}</title>
  </svelte:head>
  
  <main class="container mx-auto px-4 py-8 max-w-4xl">
    <SineWaveBackground />
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <!-- Header Section -->
      <div class="bg-gray-200 text-black p-8">
        <h1 class="text-3xl font-bold">{cvData.name}</h1>
        <h2 class="text-xl mt-2">{cvData.title}</h2>
        
        <div class="mt-4 flex flex-wrap gap-4">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>{cvData.contact.email}</span>
          </div>
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <a href="https://{cvData.contact.linkedin}" target="_blank" rel="noopener noreferrer" class="hover:underline">
              {cvData.contact.linkedin}
            </a>
          </div>
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <a href="https://{cvData.contact.github}" target="_blank" rel="noopener noreferrer" class="hover:underline">
              {cvData.contact.github}
            </a>
          </div>
        </div>
      </div>
      
      <!-- Main Content -->
      <div class="p-8">
        <!-- Summary -->
        <section class="mb-10">
          <h2 class="text-2xl font-bold mb-4 border-b pb-2">Professional Summary</h2>
          <p>{cvData.summary}</p>
        </section>
        
        <!-- Experience -->
        <section class="mb-10">
          <h2 class="text-2xl font-bold mb-4 border-b pb-2">Experience</h2>
          {#each cvData.experience as job}
            <Experience {job} />
          {/each}
        </section>
        
        <!-- Education -->
        <section class="mb-10">
          <h2 class="text-2xl font-bold mb-4 border-b pb-2">Education</h2>
          {#each cvData.education as edu}
            <Education {edu} />
          {/each}
        </section>
        
        <!-- Skills -->
        <section class="mb-10">
          <h2 class="text-2xl font-bold mb-4 border-b pb-2">Skills</h2>
          <Skills skills={cvData.skills} />
        </section>
        
        <!-- Languages -->
        <section class="mb-10">
          <h2 class="text-2xl font-bold mb-4 border-b pb-2">Languages</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            {#each cvData.languages as language}
              <div class="flex justify-between items-center">
                <span class="font-medium">{language.name}</span>
                <span class="bg-gray-200 px-3 py-1 rounded-full text-sm">{language.level}</span>
              </div>
            {/each}
          </div>
        </section>
        
      </div>
    </div>
    
    <div class="text-center mt-8">
      <a href="/" class="text-blue-600 hover:underline">← Back to Home</a>
    </div>
  </main>
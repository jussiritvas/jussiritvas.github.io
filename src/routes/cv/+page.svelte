<script>
    import { cvData } from '$lib/data/cv';
    import Experience from '$lib/components/CV/Experience.svelte';
    import Education from '$lib/components/CV/Education.svelte';
    import Skills from '$lib/components/CV/Skills.svelte';
  </script>
  
  <svelte:head>
    <title>CV | {cvData.name}</title>
  </svelte:head>
  
  <main class="container mx-auto px-4 py-8 max-w-4xl">
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <!-- Header Section -->
      <div class="bg-blue-600 text-white p-8">
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
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{cvData.contact.phone}</span>
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
        
        <!-- Certifications -->
        <section>
          <h2 class="text-2xl font-bold mb-4 border-b pb-2">Certifications</h2>  
          <ul class="list-disc list-inside">
            {#each cvData.certifications as cert}
              <li class="mb-2">
                <span class="font-medium">{cert.name}</span> - {cert.issuer}, {cert.date}
              </li>
            {/each}
          </ul>
        </section>
      </div>
    </div>
    
    <div class="text-center mt-8">
      <a href="/" class="text-blue-600 hover:underline">← Back to Home</a>
    </div>
  </main>
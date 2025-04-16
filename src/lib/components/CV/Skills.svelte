<script>
    export let skills;
  </script>
  
  <div>
    <h3 class="text-lg font-semibold mb-2">Technical Skills</h3>
    <div class="flex flex-wrap gap-2 mb-4">
      {#each skills.technical as skill}
        <span class="bg-gray-200 px-3 py-1 rounded-full text-sm">{skill}</span>
      {/each}
    </div>
    
    <h3 class="text-lg font-semibold mb-2">Soft Skills</h3>
    <div class="flex flex-wrap gap-2">
      {#each skills.soft as skill}
        <span class="bg-gray-100 px-3 py-1 rounded-full text-sm">{skill}</span>
      {/each}
    </div>
  </div>
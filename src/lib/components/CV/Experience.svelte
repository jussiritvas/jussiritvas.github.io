<script>
    export let job;
  </script>
  
  <div class="mb-6">
    <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
      <div>
        <h3 class="text-xl font-semibold">{job.title}</h3>
        <p class="text-gray-700">{job.company}, {job.location}</p>
      </div>
      <p class="text-gray-500 mt-1 md:mt-0">{job.period}</p>
    </div>
    
    <p class="mb-2">{job.description}</p>
    
    <ul class="list-disc list-inside pl-4">
      {#each job.achievements as achievement}
        <li class="text-gray-700">{achievement}</li>
      {/each}
    </ul>
  </div>
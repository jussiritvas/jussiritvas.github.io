<script>
    export let edu;
  </script>
  
  <div class="mb-4">
    <div class="flex flex-col md:flex-row md:justify-between md:items-start">
      <div>
        <h3 class="text-lg font-semibold">{edu.degree}</h3>
        <p class="text-gray-700">{edu.institution}, {edu.location}</p>
      </div>
      <p class="text-gray-500 mt-1 md:mt-0">{edu.period}</p>
    </div>
  </div>
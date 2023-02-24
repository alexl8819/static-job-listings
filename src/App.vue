<script setup>
  import jobs from './assets/data.json';
  
  import FilterBoard from './components/FilterBoard.vue';
  import JobsList from './components/JobsList.vue';
  
  import { ref, computed } from 'vue';
  // Ref
  const selectedFilter = ref(new Set());
  // Computed
  const availableJobs = computed(() => jobs.map((job) => Object.assign({}, job, {
    logo: job.logo.replace(/.\/images\//g, ''), // we don't want the relative path used
    selectable: [job.role, job.level].concat(job.languages, job.tools.reverse()) // job.tools.reverse().concat(job.role, job.level, job.languages)
  })));
  // Events
  const addToFilter = (filter) => selectedFilter.value.add(filter);
  const removeFromFilter = (filter) => selectedFilter.value.delete(filter);
  const removeAll = () => selectedFilter.value.clear();
</script>

<template>
  <header class="flex flex-col items-center h-32 pt-20 lg:pt-24 mb-20 lg:mb-12 bg-desaturated-dark-cyan bg-mobile-header lg:bg-desktop-header font-league-spartan">
    <div class="max-w-xs lg:max-w-7xl">
      <FilterBoard :selectedFilter="selectedFilter" @remove-filter="removeFromFilter" @remove-all="removeAll" />
    </div>
  </header>
  <div class="flex flex-col justify-start items-center min-h-screen font-league-spartan">
    <div class="max-w-xs lg:max-w-7xl">
      <JobsList :jobs="availableJobs" :selectedFilter="selectedFilter" @add-filter="addToFilter" />
    </div>
  </div>
</template>

<script setup>
  import jobs from './assets/data.json';
  
  import FilterBoard from './components/FilterBoard.vue';
  import JobsList from './components/JobsList.vue';
  
  import { ref, computed } from 'vue';
  // Ref
  const selectedFilter = ref(new Set());
  // Computed
  const availableJobs = computed(() => jobs.map((job) => Object.assign({}, job, {
    logo: job.logo.replace(/.\/images\//g, ''),
    selectable: job.tools.concat(job.languages, job.level, job.role).reverse()
  })));
  // Events
  const addToFilter = (filter) => selectedFilter.value.add(filter);
  const removeFromFilter = (filter) => selectedFilter.value.delete(filter);
  const removeAll = () => selectedFilter.value.clear();
</script>

<template>
  <header class="flex flex-col items-center h-32 pt-20 lg:pt-24 mb-24 lg:mb-10 bg-desaturated-dark-cyan bg-mobile-header lg:bg-desktop-header font-league-spartan">
    <div class="max-w-xs lg:max-w-5xl">
      <FilterBoard :selectedFilter="selectedFilter" @remove-filter="removeFromFilter" @remove-all="removeAll" />
    </div>
  </header>
  <div class="flex flex-col justify-start items-center min-h-screen font-league-spartan">
    <div class="max-w-xs lg:max-w-5xl">
      <JobsList :jobs="availableJobs" :selectedFilter="selectedFilter" @add-filter="addToFilter" />
    </div>
  </div>
</template>

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
    selectable: [job.role, job.level].concat(job.languages, job.tools.reverse())
  })));
  const isFilterVisible = computed(() => selectedFilter.value.size > 0 ? 'block' : 'hidden');
  // Methods
  const mutateUrl = () => window.history.pushState(null, '', window.location.origin + (selectedFilter.value.size > 0 ? '#?filters=' + Array.from(selectedFilter.value).join(',') : '#'))
  const isValidFilter = (filter) => new Set(availableJobs.value.reduce((acc, job) => acc.concat(job.selectable), [])).has(filter);
  const addToFilter = (filter) => isValidFilter(filter) ? selectedFilter.value.add(filter) && mutateUrl() : false;
  const removeFromFilter = (filter) => selectedFilter.value.delete(filter) && mutateUrl();
  const removeAll = () => selectedFilter.value.forEach((filter) => removeFromFilter(filter)) && mutateUrl();
  // Add filters used through URL query
  const includedFilters = window.location.hash.split('=');
  if (includedFilters.length > 1) {
    includedFilters[1].split(',').forEach((filter) => addToFilter(filter));
  }
</script>

<template>
  <header class="h-36 bg-desaturated-dark-cyan bg-mobile-header lg:bg-desktop-header"></header>
  <div class="flex flex-col items-center h-auto -mt-10 mb-8 lg:-mb-8" :class="isFilterVisible">
    <FilterBoard :selectedFilter="selectedFilter" @remove-filter="removeFromFilter" @remove-all="removeAll" />
  </div>
  <div class="flex flex-col justify-start items-center min-h-screen">
    <div class="max-w-xs lg:max-w-7xl">
      <JobsList :jobs="availableJobs" :selectedFilter="selectedFilter" @add-filter="addToFilter" />
    </div>
  </div>
</template>

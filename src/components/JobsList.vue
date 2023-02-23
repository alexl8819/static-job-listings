<script setup>
import { computed } from 'vue';

const props = defineProps({
  jobs: Array,
  selectedFilter: Set
});

// Computed
const filteredJobs = computed(() => !props.selectedFilter.size ? props.jobs : props.jobs.filter((job) => Array.from(props.selectedFilter).every((v) => job.selectable.includes(v))));
// Method
const isFeaturedNew = (job) => job.new || job.featured ? 'border-l-4 border-l-desaturated-dark-cyan' : '';
</script>

<template>
  <div class="space-y-6 py-2">
    <template v-for="job in filteredJobs" :key="job.id">
      <article class="flex flex-col lg:flex-row justify-between lg:items-center py-6 lg:py-4 px-6 rounded-md shadow-lg bg-white" :class="isFeaturedNew(job)">
        <div class="flex flex-col lg:flex-row lg:items-center">
          <div class="lg:w-20">
            <img :src='"./src/assets/images/" + job.logo' class="h-10 lg:h-16 w-10 lg:w-16 -mt-10 lg:-mt-0 lg:mr-2" alt="company logo" />
          </div>
          <div class="lg:w-64 border-b lg:border-none border-b-dark-greyish-cyan mb-2">
            <div class="flex flex-row items-center my-3">
              <h1 class="text-sm text-desaturated-dark-cyan">{{ job.company }}</h1>
              <div class="flex flex-row ml-6 space-x-3">
                <span class="px-2 py-1 uppercase rounded-full bg-desaturated-dark-cyan text-xs text-white" v-if="job.new">new!</span>
                <span class="px-2 py-1 uppercase rounded-full bg-black text-xs text-white" v-if="job.featured">featured</span>
              </div>
            </div>
            <p class="font-bold cursor-pointer text-very-dark-greyish-cyan hover:text-desaturated-dark-cyan">{{ job.position }}</p>
            <ul class="list-disc my-3 space-x-4 flex flex-row items-center">
              <li class="first:list-none text-xs text-dark-greyish-cyan">{{ job.postedAt }}</li>
              <li class="text-xs text-dark-greyish-cyan">{{ job.contract }}</li>
              <li class="text-xs text-dark-greyish-cyan">{{ job.location }}</li>
            </ul>
          </div>
        </div>
        <div class="mt-6 lg:mt-0">
          <button class="inline-block mr-2 mb-6 py-2 px-4 rounded-lg bg-light-greyish-cyan-2 hover:bg-desaturated-dark-cyan text-desaturated-dark-cyan hover:text-white lg:text-xs cursor-pointer" @click="$emit('addFilter', tablet)" v-for="tablet in job.selectable">
            {{ tablet }}
          </button>
        </div>
      </article>
    </template>
  </div>
</template>
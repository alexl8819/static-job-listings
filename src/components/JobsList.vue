<script setup>
  import { computed } from 'vue';
  
  // import DynamicLogo from './DynamicLogo.vue';
  const props = defineProps({
    jobs: Array,
    selectedFilter: Set
  });
  defineEmits(['addFilter']);
  // Computed
  const filteredJobs = computed(() => !props.selectedFilter.size ? props.jobs : props.jobs.filter((job) => Array.from(props.selectedFilter).every((v) => job.selectable.includes(v))));
  // Methods
  const isFeaturedNew = (job) => job.new && job.featured ? 'border-l-4 border-l-desaturated-dark-cyan' : '';
  const isActive = (tablet) => props.selectedFilter.has(tablet);
  const createLogo = (logo) => new URL(`../assets/images/${logo}`, import.meta.url).href;
</script>

<template>
  <div class="my-6 space-y-6 lg:my-16">
    <template v-for="job in filteredJobs" :key="job.id">
      <article class="my-4 flex flex-col justify-between rounded-md bg-white px-6 py-4 shadow-lg lg:flex-row lg:items-center lg:py-2" :class="isFeaturedNew(job)">
        <div class="flex flex-col lg:w-[32rem] lg:flex-row lg:items-center">
          <div class="w-16 lg:w-20">
            <img :src="createLogo(job.logo)" class="-mt-8 h-12 w-12 items-center lg:-mt-0 lg:h-16 lg:w-16" alt="company logo" />
          </div>
          <div class="mb-2 border-b border-b-dark-greyish-cyan lg:mb-0 lg:border-none">
            <div class="my-3 flex flex-row items-center lg:my-1">
              <h1 class="text-base font-bold text-desaturated-dark-cyan">{{ job.company }}</h1>
              <div class="ml-6 flex flex-row space-x-2.5 lg:ml-4">
                <span class="rounded-full bg-desaturated-dark-cyan px-2 py-1 text-xs uppercase text-white font-bold" v-if="job.new">new!</span>
                <span class="rounded-full bg-black px-2 py-1 text-xs uppercase text-white font-bold" v-if="job.featured">featured</span>
              </div>
            </div>
            <p class="cursor-pointer font-bold text-very-dark-greyish-cyan hover:text-desaturated-dark-cyan">{{ job.position }}</p>
            <ul class="mb-4 mt-1 flex list-disc flex-row items-center">
              <li class="mr-6 text-base lg:text-xs text-dark-greyish-cyan first:list-none">{{ job.postedAt }}</li>
              <li class="mr-6 pl-2 text-base lg:text-xs text-dark-greyish-cyan">{{ job.contract }}</li>
              <li class="pl-2 text-base lg:text-xs text-dark-greyish-cyan">{{ job.location }}</li>
            </ul>
          </div>
        </div>
        <div class="mt-3 lg:mt-0 lg:h-12 lg:py-2">
          <template v-for="tablet in job.selectable" :key="tablet">
            <button type="button" class="mb-6 mr-2 inline-block cursor-not-allowed rounded-lg bg-desaturated-dark-cyan px-2.5 lg:px-4 py-1 lg:py-2 text-white lg:text-xs font-bold" v-if="isActive(tablet)">
            {{ tablet }}
            </button>
            <button type="button" class="mb-6 mr-2 inline-block cursor-pointer rounded-lg bg-light-greyish-cyan-2 px-2.5 lg:px-4 py-1 lg:py-2 text-desaturated-dark-cyan hover:bg-desaturated-dark-cyan hover:text-white lg:text-xs font-bold" @click.prevent="$emit('addFilter', tablet)" v-else>
            {{ tablet }}
            </button>
          </template>
        </div>
      </article>
    </template>
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    selectedFilter: Set,
  });
  defineEmits(['removeFilter', 'removeAll']);
  // Computed
  const currentFilters = computed(() => Array.from(props.selectedFilter));
</script>

<template>
  <div class="flex w-80 items-center justify-between rounded-lg bg-white p-4 shadow-lg lg:w-[64rem] lg:py-4">
    <div class="cursor-pointer py-2">
      <template v-for="filter in currentFilters" :key="filter">
        <button class="mb-2 mr-2 inline-block lg:mb-0" @click.prevent="$emit('removeFilter', filter)">
          <div class="flex flex-row items-center justify-center">
            <span class="ml-2 rounded-l-md bg-light-greyish-cyan-2 px-2.5 py-1 text-desaturated-dark-cyan">{{ filter }}</span>
            <div type="button" class="rounded-r-md bg-desaturated-dark-cyan p-2 hover:bg-black">
              <img src="../assets/images/icon-remove.svg" class="h-3.5 w-3.5" alt="remove" />
            </div>
          </div>
        </button>
      </template>
    </div>
    <button id="clear-all" type="button" class="text-dark-greyish-cyan hover:text-desaturated-dark-cyan hover:underline hover:underline-offset-2" @click.prevent="$emit('removeAll')">Clear</button>
  </div>
</template>

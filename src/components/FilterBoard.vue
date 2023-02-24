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
  <div class="flex justify-between items-center w-80 lg:w-[59rem] py-6 lg:py-4 px-4 bg-white rounded-lg shadow-lg">
    <div>
      <template v-for="filter in currentFilters">
        <div class="inline-block mr-2 mb-2 lg:mb-0 cursor-pointer">
          <div class="flex flex-row justify-center items-center">
            <span class="ml-2 px-2.5 py-1 bg-light-greyish-cyan-2 text-desaturated-dark-cyan rounded-l-md">{{ filter }}</span>
            <button type="button" class="bg-desaturated-dark-cyan hover:bg-black p-2 rounded-r-md" @click="$emit('removeFilter', filter)">
              <img src="../assets/images/icon-remove.svg" class="w-3.5 h-3.5" alt="remove" />
            </button>
          </div>
        </div>
      </template>
    </div>
    <button type="button" class="text-dark-greyish-cyan hover:text-desaturated-dark-cyan hover:underline hover:underline-offset-2" @click="$emit('removeAll')" @prevent.default>Clear</button>
  </div>
</template>

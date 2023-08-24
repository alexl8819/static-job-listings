<script setup>
  import { 
    defineAsyncComponent, 
    ref, 
    computed, 
    onMounted, 
    onUnmounted 
  } from 'vue';
  const props = defineProps({
    name: String
  });
  let isMobile = ref(false);
  // Computed
  const computedHeight = computed(() => isMobile.value ? 60 : 80);
  const computedWidth = computed(() => isMobile.value ? 60 : 80);
  // Methods
  const Logo = defineAsyncComponent(() => import(/* @vite-ignore */`../assets/images/${props.name}`));
  const resizeHandler = () => {
    isMobile.value = window.innerWidth <= 767;
  };
  // Hooks
  onMounted(() => window.addEventListener('resize', resizeHandler));
  onUnmounted(() => window.removeEventListener('resize', resizeHandler));
</script>

<template>
  <div class="-mt-10 flex h-16 w-16 items-center lg:mt-0 lg:h-auto lg:w-auto" data-test="logo-container">
    <Logo :width="computedWidth" :height="computedHeight" viewBox="0 0 100 100" />
  </div>
</template>

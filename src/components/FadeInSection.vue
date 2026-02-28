<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  delay: {
    type: Number,
    default: 0,
  },
})

const sectionRef = ref(null)
const isVisible = ref(false)
let observer

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 },
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <section
    ref="sectionRef"
    class="transition-all duration-700"
    :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'"
    :style="{ transitionDelay: `${props.delay}ms` }"
  >
    <slot />
  </section>
</template>

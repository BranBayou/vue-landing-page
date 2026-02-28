<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  centered: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div :class="[centered ? 'mx-auto text-center' : 'text-left', 'max-w-3xl']">
    <p
      v-if="eyebrow"
      class="mb-3 inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 dark:bg-brand-500/20 dark:text-brand-100"
    >
      {{ eyebrow }}
    </p>
    <h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl dark:text-white">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
      {{ description }}
    </p>
  </div>
</template>

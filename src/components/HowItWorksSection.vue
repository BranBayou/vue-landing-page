<script setup>
import FadeInSection from './FadeInSection.vue'
import SectionHeading from './SectionHeading.vue'

const steps = [
  {
    title: 'Set Up Your Store',
    description: 'Import products, configure taxes, and add cashier accounts in minutes.',
  },
  {
    title: 'Manage Sales & Inventory',
    description: 'Process transactions fast while stock updates automatically across branches.',
  },
  {
    title: 'Track Growth with Reports',
    description: 'Use real-time dashboards to improve margins and forecast demand.',
  },
]
</script>

<template>
  <FadeInSection class="py-16 sm:py-20">
    <div class="section-container">
      <SectionHeading
        eyebrow="How It Works"
        title="Go Live Fast in Three Simple Steps"
        description="Designed for busy retail teams that need speed, clarity, and control."
      />

      <div class="mt-12 grid gap-5 lg:grid-cols-3">
        <article
          v-for="(step, index) in steps"
          :key="step.title"
          class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
        >
          <p class="text-sm font-semibold text-brand-600 dark:text-brand-200">Step {{ index + 1 }}</p>
          <h3 class="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{{ step.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{{ step.description }}</p>
        </article>
      </div>
    </div>
  </FadeInSection>
</template>

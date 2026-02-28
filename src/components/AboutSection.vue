<script setup>
import FadeInSection from './FadeInSection.vue'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <FadeInSection id="about" class="bg-white py-16 sm:py-20 dark:bg-slate-900/50">
    <div class="section-container">
      <SectionHeading
        eyebrow="About ERP POS Cloud"
        title="Purpose-Built for Retail Operations That Move Fast"
        description="We help store owners and operations teams make better decisions with reliable data, fast checkout workflows, and branch-wide visibility."
      />

      <div class="mt-10 grid gap-5 md:grid-cols-3">
        <div class="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
          <p class="text-3xl font-bold text-brand-600 dark:text-brand-200">10k+</p>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">Daily transactions handled across customer stores.</p>
        </div>
        <div class="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
          <p class="text-3xl font-bold text-brand-600 dark:text-brand-200">120+</p>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">Retail and pharmacy businesses powered by the platform.</p>
        </div>
        <div class="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
          <p class="text-3xl font-bold text-brand-600 dark:text-brand-200">24/7</p>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">Monitoring and support for mission-critical checkout systems.</p>
        </div>
      </div>
    </div>
  </FadeInSection>
</template>

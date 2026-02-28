<script setup>
import FadeInSection from './FadeInSection.vue'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <FadeInSection id="contact" class="py-16 sm:py-20">
    <div class="section-container">
      <SectionHeading
        eyebrow="Request a Demo"
        title="See How ERP POS Cloud Fits Your Workflow"
        description="Tell us about your business type and branch count. Our team will walk you through setup, migration, and onboarding."
      />

      <div class="mx-auto mt-10 max-w-3xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-700 dark:bg-slate-900">
        <form class="grid gap-4 sm:grid-cols-2">
          <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
            Full Name
            <input
              type="text"
              class="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-brand-200 transition focus:ring-2 dark:border-slate-600 dark:bg-slate-950"
              placeholder="e.g. Alex Smith"
            />
          </label>
          <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
            Business Email
            <input
              type="email"
              class="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-brand-200 transition focus:ring-2 dark:border-slate-600 dark:bg-slate-950"
              placeholder="you@company.com"
            />
          </label>
          <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
            Business Type
            <select
              class="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-brand-200 transition focus:ring-2 dark:border-slate-600 dark:bg-slate-950"
            >
              <option>Retail Store</option>
              <option>Supermarket</option>
              <option>Pharmacy</option>
              <option>Multi-Branch Business</option>
            </select>
          </label>
          <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
            Number of Branches
            <input
              type="number"
              min="1"
              class="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-brand-200 transition focus:ring-2 dark:border-slate-600 dark:bg-slate-950"
              placeholder="1"
            />
          </label>
          <label class="sm:col-span-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Message
            <textarea
              rows="4"
              class="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-brand-200 transition focus:ring-2 dark:border-slate-600 dark:bg-slate-950"
              placeholder="Share your current POS and reporting challenges..."
            />
          </label>
          <button
            type="button"
            class="sm:col-span-2 mt-1 rounded-xl bg-accent-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  </FadeInSection>
</template>

<script setup>
import FadeInSection from './FadeInSection.vue'
import SectionHeading from './SectionHeading.vue'

const testimonials = [
  {
    name: 'Nadia Rahman',
    business: 'Pharmacy Owner',
    quote:
      'We reduced stock expiry losses by 32% in three months. The real-time inventory alerts alone paid for the system.',
  },
  {
    name: 'Carlos Mendes',
    business: 'Supermarket Operations Lead',
    quote:
      'Branch-level reporting helps us fix pricing and staffing decisions quickly. Checkout speed improved and customer queues got shorter.',
  },
  {
    name: 'Aisha Bello',
    business: 'Multi-Store Retail Director',
    quote:
      'Training our teams was easy, and role permissions gave us better control. We finally have one dashboard for all stores.',
  },
]
</script>

<template>
  <FadeInSection class="py-16 sm:py-20">
    <div class="section-container">
      <SectionHeading
        eyebrow="Testimonials"
        title="Trusted by Retail Teams That Need Reliable Results"
        description="From pharmacies to supermarkets, growing businesses use ERP POS Cloud to stay efficient and profitable."
      />

      <div class="mt-10 grid gap-5 lg:grid-cols-3">
        <article
          v-for="item in testimonials"
          :key="item.name"
          class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
        >
          <p class="text-sm leading-relaxed text-slate-700 dark:text-slate-200">“{{ item.quote }}”</p>
          <div class="mt-6 border-t border-slate-200 pt-4 dark:border-slate-700">
            <p class="text-sm font-semibold text-slate-900 dark:text-white">{{ item.name }}</p>
            <p class="text-xs text-slate-500 dark:text-slate-400">{{ item.business }}</p>
          </div>
        </article>
      </div>
    </div>
  </FadeInSection>
</template>

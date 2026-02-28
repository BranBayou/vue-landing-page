<script setup>
import FadeInSection from './FadeInSection.vue'
import SectionHeading from './SectionHeading.vue'

const features = [
  {
    title: 'Smart Inventory Management',
    description: 'Track stock in real time, receive low-stock alerts, and automate reorder points to avoid lost sales.',
    icon: 'M4 6h16M4 12h16M4 18h10',
  },
  {
    title: 'Real-Time Sales Analytics',
    description: 'View live sales trends by cashier, product, and location so you can act quickly during peak hours.',
    icon: 'M4 17l5-5 4 4 7-8',
  },
  {
    title: 'Multi-Branch Control',
    description: 'Manage pricing, inventory transfers, and branch performance from a centralized cloud control panel.',
    icon: 'M4 20h16M6 20V9h4v11M14 20V4h4v16',
  },
  {
    title: 'Advanced Reporting',
    description: 'Generate VAT, margin, and best-seller reports with export options for accounting and operations teams.',
    icon: 'M5 19h14M7 15h2M11 11h2M15 7h2',
  },
  {
    title: 'Secure Role Management',
    description: 'Control access for admins, managers, and cashiers with role-based permissions and action audit trails.',
    icon: 'M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4Z',
  },
  {
    title: 'Offline Mode',
    description: 'Keep selling during internet outages with local transaction storage and automatic cloud sync on reconnect.',
    icon: 'M3 12h4l2 3 4-6 2 3h4',
  },
]
</script>

<template>
  <FadeInSection id="features" class="bg-white py-16 sm:py-20 dark:bg-slate-900/50">
    <div class="section-container">
      <SectionHeading
        eyebrow="Features"
        title="Everything You Need to Run a High-Performing Store"
        description="ERP POS Cloud unifies sales, inventory, reporting, and team management into one easy-to-use platform."
      />

      <div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="feature in features"
          :key="feature.title"
          class="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-slate-700 dark:bg-slate-900"
        >
          <div class="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-accent-500/20 dark:text-emerald-200">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path :d="feature.icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" />
            </svg>
          </div>
          <h3 class="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{{ feature.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{{ feature.description }}</p>
        </article>
      </div>
    </div>
  </FadeInSection>
</template>

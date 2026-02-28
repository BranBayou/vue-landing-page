<script setup>
import FadeInSection from './FadeInSection.vue'
import SectionHeading from './SectionHeading.vue'

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'For single-store businesses getting started with digital POS.',
    features: ['1 Branch', 'Basic Reporting', 'Inventory Tracking', 'Email Support'],
    cta: 'Start Starter Plan',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$79',
    description: 'For growing retailers with multiple counters and active inventory needs.',
    features: ['Up to 5 Branches', 'Advanced Reports', 'Role Permissions', 'Priority Chat Support'],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For complex multi-branch operations requiring advanced controls.',
    features: ['Unlimited Branches', 'Custom Integrations', 'Dedicated Manager', 'SLA & Training'],
    cta: 'Contact Sales',
    popular: false,
  },
]
</script>

<template>
  <FadeInSection id="pricing" class="bg-white py-16 sm:py-20 dark:bg-slate-900/50">
    <div class="section-container">
      <SectionHeading
        eyebrow="Pricing"
        title="Flexible Plans for Every Stage of Growth"
        description="Choose the plan that matches your store size and upgrade anytime as your business expands."
      />

      <div class="mt-10 grid gap-6 lg:grid-cols-3">
        <article
          v-for="plan in plans"
          :key="plan.name"
          :class="[
            'rounded-xl border p-6 shadow-sm transition hover:-translate-y-1',
            plan.popular
              ? 'border-accent-500 bg-emerald-50 shadow-soft dark:border-accent-500 dark:bg-accent-500/10'
              : 'border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900',
          ]"
        >
          <p
            v-if="plan.popular"
            class="mb-3 inline-flex rounded-full bg-zinc-800 px-3 py-1 text-xs font-semibold text-white"
          >
            Most Popular
          </p>
          <h3 class="text-xl font-semibold text-slate-900 dark:text-white">{{ plan.name }}</h3>
          <p class="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            {{ plan.price }}
            <span v-if="plan.price !== 'Custom'" class="text-sm font-medium text-slate-500 dark:text-slate-300">/month</span>
          </p>
          <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">{{ plan.description }}</p>

          <ul class="mt-6 space-y-2">
            <li
              v-for="item in plan.features"
              :key="item"
              class="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-200"
            >
              <span class="mt-1 h-2 w-2 rounded-full bg-accent-500" />
              {{ item }}
            </li>
          </ul>

          <a
            href="#contact"
            :class="[
              'mt-7 inline-block w-full rounded-xl px-4 py-2.5 text-center text-sm font-semibold transition',
              plan.popular
                ? 'bg-accent-500 text-white hover:bg-accent-600'
                : 'border border-slate-300 text-slate-700 hover:border-accent-500 hover:text-accent-600 dark:border-slate-600 dark:text-slate-100 dark:hover:border-accent-500 dark:hover:text-accent-500',
            ]"
          >
            {{ plan.cta }}
          </a>
        </article>
      </div>
    </div>
  </FadeInSection>
</template>

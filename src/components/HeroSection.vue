<template>
  <section id="home" class="section-container pt-14 pb-16 sm:pt-20 sm:pb-20">
    <div class="grid items-center gap-10 lg:grid-cols-2">
      <div class="animate-fade-up">
        <p class="mb-4 inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:bg-accent-500/20 dark:text-emerald-200">
          Built for retail, pharmacy, and supermarket teams
        </p>
        <h1 class="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          Smart ERP POS for Modern Retail Businesses
        </h1>
        <p class="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
          Run sales, inventory, customers, and branch operations from one cloud dashboard. Reduce stockouts, speed checkout, and make better decisions with real-time insights.
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#pricing"
            class="rounded-xl bg-accent-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-soft transition hover:bg-accent-600"
          >
            Start Free Trial
          </a>
          <a
            href="#contact"
            class="rounded-xl border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-accent-500 hover:text-accent-600 dark:border-slate-700 dark:text-slate-100 dark:hover:border-accent-500 dark:hover:text-accent-500"
          >
            Request Demo
          </a>
        </div>
        <div class="mt-8 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
          <span class="inline-flex items-center gap-1">
            <span class="h-2 w-2 rounded-full bg-accent-500" />
            99.9% Uptime
          </span>
          <span class="inline-flex items-center gap-1">
            <span class="h-2 w-2 rounded-full bg-accent-500" />
            Offline Sales Sync
          </span>
          <span class="inline-flex items-center gap-1">
            <span class="h-2 w-2 rounded-full bg-accent-500" />
            Fast Onboarding
          </span>
        </div>
      </div>

      <div class="animate-fade-in rounded-2xl border border-slate-200 bg-white p-4 shadow-soft dark:border-slate-700 dark:bg-slate-900">
        <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
          <div class="mb-4 flex items-center justify-between">
            <p class="text-sm font-semibold text-slate-900 dark:text-white">Dashboard Overview</p>
            <span class="rounded-full bg-accent-500/15 px-2 py-1 text-xs font-semibold text-accent-600 dark:text-accent-400">Live</span>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div class="rounded-xl bg-white p-3 dark:bg-slate-900">
              <p class="text-xs text-slate-500 dark:text-slate-400">Today Sales</p>
              <p class="mt-1 text-lg font-bold text-slate-900 dark:text-white">$12,840</p>
            </div>
            <div class="rounded-xl bg-white p-3 dark:bg-slate-900">
              <p class="text-xs text-slate-500 dark:text-slate-400">Orders</p>
              <p class="mt-1 text-lg font-bold text-slate-900 dark:text-white">317</p>
            </div>
            <div class="col-span-2 rounded-xl bg-white p-3 dark:bg-slate-900">
              <p class="text-xs text-slate-500 dark:text-slate-400">Low Stock Alerts</p>
              <div class="mt-2 space-y-2">
                <div class="flex items-center justify-between text-xs">
                  <span class="text-slate-700 dark:text-slate-200">Pain Relief Capsules</span>
                  <span class="font-semibold text-amber-500">12 left</span>
                </div>
                <div class="flex items-center justify-between text-xs">
                  <span class="text-slate-700 dark:text-slate-200">Organic Milk 1L</span>
                  <span class="font-semibold text-rose-500">6 left</span>
                </div>
              </div>
            </div>
            <div class="col-span-2 rounded-xl bg-white p-3 dark:bg-slate-900">
              <p class="text-xs text-slate-500 dark:text-slate-400">Branches Performance</p>
              <div class="mt-3 space-y-2">
                <div class="flex items-center gap-2">
                  <span class="w-16 text-xs text-slate-600 dark:text-slate-300">Central</span>
                  <div class="h-2 flex-1 rounded-full bg-slate-200 dark:bg-slate-700">
                    <div class="h-2 w-5/6 rounded-full bg-zinc-700" />
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-16 text-xs text-slate-600 dark:text-slate-300">North</span>
                  <div class="h-2 flex-1 rounded-full bg-slate-200 dark:bg-slate-700">
                    <div class="h-2 w-2/3 rounded-full bg-accent-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

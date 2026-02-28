<script setup>
import { ref } from 'vue'

defineProps({
  isDark: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle-theme'])

const isMenuOpen = ref(false)

const links = [
  { id: 'features', label: 'Features' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-lg dark:border-slate-700/60 dark:bg-slate-900/90">
    <nav class="section-container flex h-16 items-center justify-between">
      <a href="#home" class="flex items-center gap-2">
        <span class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white">
          EP
        </span>
        <span class="text-sm font-semibold text-slate-900 sm:text-base dark:text-white">ERP POS Cloud</span>
      </a>

      <div class="hidden items-center gap-7 md:flex">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          class="text-sm font-medium text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-100"
        >
          {{ link.label }}
        </a>
      </div>

      <div class="hidden items-center gap-3 md:flex">
        <button
          class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:border-accent-500 hover:text-accent-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-accent-500 dark:hover:text-accent-500"
          aria-label="Toggle dark mode"
          @click="$emit('toggle-theme')"
        >
          <svg v-if="isDark" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M12 3v2.5M12 18.5V21M4.22 4.22l1.77 1.77M18.01 18.01l1.77 1.77M1 12h2.5M20.5 12H23M4.22 19.78l1.77-1.77M18.01 5.99l1.77-1.77M15.5 12A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5Z" />
          </svg>
          <svg v-else class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M21 12.9A9 9 0 1 1 11.1 3a7.1 7.1 0 0 0 9.9 9.9Z" />
          </svg>
        </button>
        <a
          href="#pricing"
          class="rounded-xl bg-accent-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-accent-600"
        >
          Start Free Trial
        </a>
      </div>

      <button
        class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 dark:border-slate-700 dark:text-slate-200 md:hidden"
        aria-label="Toggle menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>
    </nav>

    <div v-if="isMenuOpen" class="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-700 dark:bg-slate-900 md:hidden">
      <div class="flex flex-col gap-3">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          class="text-sm font-medium text-slate-700 dark:text-slate-200"
          @click="isMenuOpen = false"
        >
          {{ link.label }}
        </a>
        <button
          class="mt-2 rounded-xl border border-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-700 dark:border-slate-600 dark:text-slate-100"
          @click="$emit('toggle-theme')"
        >
          {{ isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}
        </button>
        <a
          href="#pricing"
          class="rounded-xl bg-accent-500 px-4 py-2 text-center text-sm font-semibold text-white"
          @click="isMenuOpen = false"
        >
          Start Free Trial
        </a>
      </div>
    </div>
  </header>
</template>

<template>
  <footer class="border-t border-slate-200 bg-white py-10 dark:border-slate-700 dark:bg-slate-900">
    <div class="section-container grid gap-8 md:grid-cols-3">
      <div>
        <div class="flex items-center gap-2">
          <span class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white">
            EP
          </span>
          <span class="text-sm font-semibold text-slate-900 dark:text-white">ERP POS Cloud</span>
        </div>
        <p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          Cloud-based ERP POS system for retail stores, supermarkets, pharmacies, and multi-branch businesses.
        </p>
      </div>

      <div class="md:justify-self-center">
        <p class="text-sm font-semibold text-slate-900 dark:text-white">Quick Links</p>
        <div class="mt-3 flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
          <a href="#features" class="hover:text-brand-600 dark:hover:text-brand-200">Features</a>
          <a href="#pricing" class="hover:text-brand-600 dark:hover:text-brand-200">Pricing</a>
          <a href="#about" class="hover:text-brand-600 dark:hover:text-brand-200">About</a>
          <a href="#contact" class="hover:text-brand-600 dark:hover:text-brand-200">Contact</a>
        </div>
      </div>

      <div class="md:justify-self-end">
        <p class="text-sm font-semibold text-slate-900 dark:text-white">Follow Us</p>
        <div class="mt-3 flex items-center gap-3">
          <a href="#" class="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-300 text-slate-600 hover:border-brand-400 hover:text-brand-600 dark:border-slate-600 dark:text-slate-300">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8a8.9 8.9 0 0 1-2.6.7 4.5 4.5 0 0 0 2-2.5 9 9 0 0 1-2.9 1.1 4.5 4.5 0 0 0-7.7 4.1A12.8 12.8 0 0 1 1.7 4.6a4.5 4.5 0 0 0 1.4 6 4.4 4.4 0 0 1-2-.5v.1a4.5 4.5 0 0 0 3.6 4.4 4.6 4.6 0 0 1-2 .1 4.5 4.5 0 0 0 4.2 3.1A9 9 0 0 1 1 19.5 12.8 12.8 0 0 0 8 21.5c8.4 0 13-7 13-13v-.6A9.2 9.2 0 0 0 22 5.8Z"/></svg>
          </a>
          <a href="#" class="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-300 text-slate-600 hover:border-brand-400 hover:text-brand-600 dark:border-slate-600 dark:text-slate-300">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M7.5 2A5.5 5.5 0 0 0 2 7.5v9A5.5 5.5 0 0 0 7.5 22h9a5.5 5.5 0 0 0 5.5-5.5v-9A5.5 5.5 0 0 0 16.5 2h-9Zm0 1.8h9a3.7 3.7 0 0 1 3.7 3.7v9a3.7 3.7 0 0 1-3.7 3.7h-9a3.7 3.7 0 0 1-3.7-3.7v-9a3.7 3.7 0 0 1 3.7-3.7Zm9.8 1.3a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.8a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4Z"/></svg>
          </a>
          <a href="#" class="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-300 text-slate-600 hover:border-brand-400 hover:text-brand-600 dark:border-slate-600 dark:text-slate-300">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.7H9.1V9h3.5v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6v6.1ZM5 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM6.8 20.4H3.2V9h3.6v11.4ZM22 1H2C1.4 1 1 1.4 1 2v20c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1Z"/></svg>
          </a>
        </div>
      </div>
    </div>

    <div class="section-container mt-8 border-t border-slate-200 pt-6 text-center text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400">
      © {{ new Date().getFullYear() }} ERP POS Cloud. All rights reserved.
    </div>
  </footer>
</template>

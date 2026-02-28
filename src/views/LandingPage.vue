<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import AboutSection from '../components/AboutSection.vue'
import ContactSection from '../components/ContactSection.vue'
import CtaSection from '../components/CtaSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import FooterSection from '../components/FooterSection.vue'
import HeroSection from '../components/HeroSection.vue'
import HowItWorksSection from '../components/HowItWorksSection.vue'
import Navbar from '../components/Navbar.vue'
import PricingSection from '../components/PricingSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'

const isDark = ref(false)

const syncTheme = () => {
  document.documentElement.classList.toggle('dark', isDark.value)
}

const toggleTheme = () => {
  isDark.value = !isDark.value
}

onMounted(() => {
  const saved = localStorage.getItem('erp-pos-theme')
  if (saved) {
    isDark.value = saved === 'dark'
  } else {
    isDark.value = false
  }
  syncTheme()
})

watch(isDark, (value) => {
  localStorage.setItem('erp-pos-theme', value ? 'dark' : 'light')
  syncTheme()
})

const pageClass = computed(() => (isDark.value ? 'dark' : ''))
</script>

<template>
  <div :class="pageClass">
    <Navbar :is-dark="isDark" @toggle-theme="toggleTheme" />
    <main>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <CtaSection />
    </main>
    <FooterSection />
  </div>
</template>

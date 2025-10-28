<template>
  <section id="about" class="py-16 md:py-32 bg-gradient-to-b from-white via-sand-50 to-white relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-ocean-100 opacity-20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-coral-100 opacity-20 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
      <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <!-- Image side -->
        <div
          ref="imageContainer"
          class="relative opacity-0 transition-all duration-1000 mb-8 md:mb-0"
          :class="{ 'opacity-100 translate-x-0': imageVisible }"
          style="transform: translateX(0)"
        >
          <div class="relative h-80 md:h-[450px] lg:h-[550px] xl:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 w-full group">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"
              alt="Luxury Resort Pool"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-br from-ocean-900/30 to-transparent group-hover:from-ocean-900/20 transition-colors duration-500"></div>
          </div>
          <!-- Floating cards -->
          <div
            class="absolute bottom-3 right-3 md:bottom-4 md:right-4 lg:-bottom-6 lg:-right-6 bg-white p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:-rotate-2 transition-all duration-300 border-t-4 border-coral-400 cursor-pointer"
          >
            <div class="text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-700 font-serif mb-1">15+</div>
            <div class="text-xs md:text-sm lg:text-base text-gray-600 font-medium">Years of Excellence</div>
          </div>
          <div
            class="absolute top-3 left-3 md:top-4 md:left-4 lg:-top-6 lg:-left-6 bg-gradient-to-br from-coral-400 to-coral-500 p-3 md:p-5 lg:p-6 rounded-xl md:rounded-2xl shadow-2xl hover:shadow-3xl text-white transform hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-pointer"
          >
            <div class="text-2xl md:text-2xl lg:text-3xl font-bold font-serif mb-1">★ 5.0</div>
            <div class="text-xs md:text-xs lg:text-sm font-medium opacity-90">Guest Rating</div>
          </div>
        </div>

        <!-- Content side -->
        <div
          ref="contentContainer"
          class="opacity-0 transition-all duration-1000"
          :class="{ 'opacity-100 translate-x-0': contentVisible }"
          style="transform: translateX(0)"
        >
          <div class="inline-block mb-3 md:mb-4">
            <span class="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-ocean-600 font-semibold">About Us</span>
          </div>
          <h2 class="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Welcome to<br />
            <span class="text-ocean-600">Paradise</span>
          </h2>
          <div class="w-20 md:w-24 h-1 bg-gradient-to-r from-coral-400 to-ocean-500 mb-6 md:mb-8 rounded-full"></div>
          <p class="text-gray-600 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
            Nestled along pristine shores, Casa Del Mar Haven offers an unparalleled escape where
            luxury seamlessly blends with nature's tranquility. Our resort is a sanctuary designed
            for those who seek the perfect balance of relaxation and sophistication.
          </p>
          <p class="text-gray-600 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
            Every detail has been carefully crafted to provide you with an unforgettable experience,
            from our elegantly appointed suites to our world-class amenities and personalized service.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="group flex items-start space-x-2 opacity-0 animate-fade-in-up p-4 rounded-xl hover:bg-ocean-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              :style="{ animationDelay: `${0.2 + index * 0.1}s` }"
            >
              <div class="bg-gradient-to-br from-ocean-100 to-ocean-200 p-2.5 rounded-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <svg class="w-4 h-4 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-sm text-gray-800 group-hover:text-ocean-700 transition-colors duration-300">{{ feature.title }}</h3>
                <p class="text-xs text-gray-600">{{ feature.description }}</p>
              </div>
            </div>
          </div>

          <a
            href="#rooms"
            class="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-ocean-600 to-ocean-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-base font-semibold hover:from-ocean-700 hover:to-ocean-800 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(8,145,178,0.4)] hover:-translate-y-1 w-full sm:w-auto relative overflow-hidden"
          >
            <span class="relative z-10">Discover Our Rooms</span>
            <svg class="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div class="absolute inset-0 bg-gradient-to-r from-coral-400 to-coral-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const imageContainer = ref<HTMLElement | null>(null)
const contentContainer = ref<HTMLElement | null>(null)
const imageVisible = ref(false)
const contentVisible = ref(false)

const features = [
  {
    title: 'Beachfront Access',
    description: 'Private beach with crystal-clear waters'
  },
  {
    title: 'Fine Dining',
    description: 'Award-winning restaurants'
  },
  {
    title: 'Luxury Spa',
    description: 'Full-service wellness center'
  },
  {
    title: 'Concierge',
    description: '24/7 personalized service'
  }
]

const handleScroll = () => {
  if (imageContainer.value) {
    const rect = imageContainer.value.getBoundingClientRect()
    const windowHeight = window.innerHeight
    if (rect.top < windowHeight * 0.75) {
      imageVisible.value = true
    }
  }

  if (contentContainer.value) {
    const rect = contentContainer.value.getBoundingClientRect()
    const windowHeight = window.innerHeight
    if (rect.top < windowHeight * 0.75) {
      contentVisible.value = true
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

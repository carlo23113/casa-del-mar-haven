<template>
  <section id="contact" class="py-16 md:py-32 bg-gradient-to-b from-white to-ocean-50 relative overflow-hidden">
    <!-- Background image -->
    <div class="absolute inset-0 opacity-5">
      <img
        src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1920&q=80"
        alt="Beach background"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12 md:mb-20">
        <div class="inline-block mb-3 md:mb-4">
          <span class="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-ocean-600 font-semibold">Contact Us</span>
        </div>
        <h2
          ref="titleRef"
          class="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 opacity-0 transition-all duration-1000 leading-tight"
          :class="{ 'opacity-100 translate-y-0': titleVisible }"
          style="transform: translateY(30px)"
        >
          Get In <span class="text-ocean-600">Touch</span>
        </h2>
        <div class="w-20 md:w-24 h-1 bg-gradient-to-r from-coral-400 to-ocean-500 mx-auto mb-6 md:mb-8 rounded-full"></div>
        <p class="text-gray-600 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
          Ready to experience paradise? Contact us to book your dream getaway or ask any questions.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
        <!-- Contact Form -->
        <div
          ref="formRef"
          class="bg-white p-5 md:p-8 rounded-xl md:rounded-2xl shadow-xl opacity-0 transition-all duration-1000"
          :class="{ 'opacity-100 translate-x-0': formVisible }"
          style="transform: translateX(0)"
        >
          <h3 class="font-serif text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Send Us a Message</h3>

          <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
            <div class="grid md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label class="block text-xs md:text-sm font-semibold text-gray-700 mb-2">First Name</label>
                <input
                  v-model="form.firstName"
                  type="text"
                  required
                  class="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-300"
                  placeholder="John"
                />
              </div>
              <div>
                <label class="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                <input
                  v-model="form.lastName"
                  type="text"
                  required
                  class="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-300"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label class="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-300"
                placeholder="john.doe@example.com"
              />
            </div>

            <div>
              <label class="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Phone</label>
              <input
                v-model="form.phone"
                type="tel"
                class="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-300"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div class="grid md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label class="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Check-in Date</label>
                <input
                  v-model="form.checkIn"
                  type="date"
                  class="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <label class="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Check-out Date</label>
                <input
                  v-model="form.checkOut"
                  type="date"
                  class="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <label class="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea
                v-model="form.message"
                rows="4"
                required
                class="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-ocean-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold hover:bg-ocean-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Send Message
            </button>
          </form>

          <!-- Success message -->
          <div
            v-if="showSuccess"
            class="mt-6 p-4 bg-emerald-100 border border-emerald-400 text-emerald-700 rounded-lg animate-fade-in-up"
          >
            Thank you! We'll get back to you soon.
          </div>
        </div>

        <!-- Contact Information -->
        <div
          ref="infoRef"
          class="space-y-4 md:space-y-6 opacity-0 transition-all duration-1000"
          :class="{ 'opacity-100 translate-x-0': infoVisible }"
          style="transform: translateX(0)"
        >
          <!-- Quick Response Card -->
          <div class="bg-gradient-to-br from-ocean-600 to-ocean-700 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl text-white">
            <div class="text-center">
              <div class="text-4xl md:text-5xl mb-3 md:mb-4">💬</div>
              <h3 class="font-serif text-2xl md:text-3xl font-bold mb-2 md:mb-3">Quick Response</h3>
              <p class="text-sm md:text-base lg:text-lg opacity-90 mb-4 md:mb-6">
                Our team typically responds within 2 hours during business hours
              </p>
              <div class="flex items-center justify-center gap-2 text-sand-200">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm font-medium">24/7 Customer Support</span>
              </div>
            </div>
          </div>

          <!-- Contact Cards -->
          <div class="grid gap-6">
            <div
              v-for="(contact, index) in contactInfo"
              :key="index"
              class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div class="flex items-start gap-4">
                <div :class="contact.bgColor" class="p-4 rounded-xl">
                  <svg :class="contact.iconColor" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="contact.iconPath" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="font-semibold text-gray-900 mb-2 text-lg">{{ contact.title }}</h4>
                  <a v-if="contact.link" :href="contact.link" class="text-gray-600 hover:text-ocean-600 transition-colors duration-300 block mb-1">
                    {{ contact.content }}
                  </a>
                  <p v-else class="text-gray-600 mb-1">{{ contact.content }}</p>
                  <p v-if="contact.subcontent" class="text-sm text-gray-500">{{ contact.subcontent }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Location Link Card -->
          <a href="#location" class="block bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-ocean-200 hover:border-ocean-400 group">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <div class="bg-coral-100 p-4 rounded-xl group-hover:bg-coral-200 transition-colors duration-300">
                  <svg class="w-6 h-6 text-coral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1 text-lg">View Location & Map</h4>
                  <p class="text-sm text-gray-600">Get directions and transportation info</p>
                </div>
              </div>
              <svg class="w-6 h-6 text-ocean-600 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>

          <!-- Social Media -->
          <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h4 class="font-serif text-xl font-bold text-gray-900 mb-4">Follow Our Journey</h4>
            <div class="flex gap-3">
              <a
                v-for="(social, index) in socialMedia"
                :key="index"
                :href="social.link"
                target="_blank"
                :class="social.color"
                class="flex-1 h-12 rounded-xl flex items-center justify-center text-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path :d="social.iconPath" />
                </svg>
              </a>
            </div>
            <p class="text-sm text-gray-500 mt-4 text-center">Share your experience with #CasaDelMarHaven</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const titleRef = ref<HTMLElement | null>(null)
const formRef = ref<HTMLElement | null>(null)
const infoRef = ref<HTMLElement | null>(null)
const titleVisible = ref(false)
const formVisible = ref(false)
const infoVisible = ref(false)
const showSuccess = ref(false)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  checkIn: '',
  checkOut: '',
  message: ''
})

const contactInfo = [
  {
    title: 'Phone',
    content: '+63 32 123 4567',
    subcontent: 'Available 24/7',
    link: 'tel:+63321234567',
    bgColor: 'bg-ocean-100',
    iconColor: 'text-ocean-600',
    iconPath: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
  },
  {
    title: 'Email',
    content: 'info@casadelmarhaven.com',
    subcontent: 'reservations@casadelmarhaven.com',
    link: 'mailto:info@casadelmarhaven.com',
    bgColor: 'bg-coral-100',
    iconColor: 'text-coral-600',
    iconPath: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    title: 'Check-in & Check-out',
    content: 'Check-in: 3:00 PM',
    subcontent: 'Check-out: 11:00 AM',
    bgColor: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
  }
]

const socialMedia = [
  {
    platform: 'Facebook',
    link: 'https://facebook.com',
    color: 'bg-blue-600 hover:bg-blue-700',
    iconPath: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
  },
  {
    platform: 'Instagram',
    link: 'https://instagram.com',
    color: 'bg-pink-600 hover:bg-pink-700',
    iconPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
  },
  {
    platform: 'Twitter',
    link: 'https://twitter.com',
    color: 'bg-sky-500 hover:bg-sky-600',
    iconPath: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
  },
  {
    platform: 'TripAdvisor',
    link: 'https://tripadvisor.com',
    color: 'bg-green-600 hover:bg-green-700',
    iconPath: 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm3.5-9c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-7 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z'
  }
]

const handleSubmit = () => {
  // Simulate form submission
  showSuccess.value = true
  setTimeout(() => {
    showSuccess.value = false
    // Reset form
    Object.keys(form).forEach(key => {
      form[key as keyof typeof form] = ''
    })
  }, 5000)
}

const handleScroll = () => {
  if (titleRef.value) {
    const rect = titleRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight
    if (rect.top < windowHeight * 0.75) {
      titleVisible.value = true
    }
  }

  if (formRef.value) {
    const rect = formRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight
    if (rect.top < windowHeight * 0.75) {
      formVisible.value = true
    }
  }

  if (infoRef.value) {
    const rect = infoRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight
    if (rect.top < windowHeight * 0.75) {
      infoVisible.value = true
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

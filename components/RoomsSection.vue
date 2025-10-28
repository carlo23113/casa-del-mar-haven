<template>
  <section id="rooms" class="py-16 md:py-32 bg-gradient-to-b from-white to-sand-50 relative overflow-hidden">
    <!-- Decorative background -->
    <div class="absolute inset-0 opacity-5" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, #0891b2 35px, #0891b2 36px);"></div>

    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12 md:mb-20">
        <div class="inline-block mb-3 md:mb-4">
          <span class="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-ocean-600 font-semibold">Accommodations</span>
        </div>
        <h2
          ref="titleRef"
          class="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 opacity-0 transition-all duration-1000 leading-tight"
          :class="{ 'opacity-100 translate-y-0': titleVisible }"
          style="transform: translateY(30px)"
        >
          Luxurious <span class="text-ocean-600">Suites</span><br class="hidden sm:block" /> & Rooms
        </h2>
        <div class="w-20 md:w-24 h-1 bg-gradient-to-r from-coral-400 to-ocean-500 mx-auto mb-6 md:mb-8 rounded-full"></div>
        <p class="text-gray-600 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
          Choose from our carefully curated selection of rooms and suites, each designed to provide
          the ultimate comfort and elegance for an unforgettable stay.
        </p>
      </div>

      <!-- Rooms Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="(room, index) in rooms"
          :key="index"
          ref="roomRefs"
          class="group cursor-pointer opacity-0 transition-all duration-1000"
          :class="{ 'opacity-100 translate-y-0': roomsVisible[index] }"
          style="transform: translateY(30px)"
        >
          <!-- Room Card -->
          <div class="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl hover:shadow-[0_25px_70px_rgba(0,0,0,0.2)] transition-all duration-500 bg-white border border-gray-100 hover:border-ocean-300 hover:-translate-y-3">
            <!-- Image -->
            <div class="relative h-56 md:h-64 lg:h-72 overflow-hidden">
              <img
                :src="room.image"
                :alt="room.name"
                class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              <!-- Overlay on hover -->
              <div class="absolute inset-0 bg-gradient-to-t from-ocean-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <!-- View Details Button (appears on hover) -->
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100">
                <button class="bg-white text-ocean-700 px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold shadow-2xl hover:bg-sand-100 hover:scale-110 transition-all duration-300 relative overflow-hidden">
                  <span class="relative z-10">View Details</span>
                  <div class="absolute inset-0 bg-gradient-to-r from-sand-100 to-coral-200 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>

              <!-- Price tag -->
              <div class="absolute top-3 right-3 md:top-4 md:right-4 bg-gradient-to-br from-white to-sand-50 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 border border-ocean-100">
                <span class="text-ocean-700 font-bold text-base md:text-lg">{{ room.price }}</span>
                <span class="text-gray-600 text-xs">/night</span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-5 md:p-8 bg-white">
              <h3 class="font-serif text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{{ room.name }}</h3>
              <p class="text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">{{ room.description }}</p>

              <!-- Features -->
              <div class="flex flex-wrap gap-2 mb-4 md:mb-6">
                <span
                  v-for="(feature, fIndex) in room.features"
                  :key="fIndex"
                  class="text-xs font-medium bg-gradient-to-r from-sand-100 to-sand-200 text-sand-800 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-sand-300 hover:from-ocean-100 hover:to-ocean-200 hover:text-ocean-800 hover:border-ocean-300 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  {{ feature }}
                </span>
              </div>

              <!-- CTA -->
              <div class="pt-4 md:pt-6 border-t border-gray-100">
                <a
                  href="#contact"
                  class="group flex items-center justify-center gap-2 w-full bg-gradient-to-r from-ocean-600 to-ocean-700 text-white px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold hover:from-ocean-700 hover:to-ocean-800 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(8,145,178,0.4)] hover:scale-105 hover:-translate-y-0.5 relative overflow-hidden"
                >
                  <span class="relative z-10">Book Now</span>
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div class="absolute inset-0 bg-gradient-to-r from-coral-500 to-coral-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const titleRef = ref<HTMLElement | null>(null)
const roomRefs = ref<HTMLElement[]>([])
const titleVisible = ref(false)
const roomsVisible = ref<boolean[]>([])

const rooms = [
  {
    name: 'Ocean View Suite',
    description: 'Breathtaking panoramic views of the endless ocean from your private balcony.',
    features: ['King Bed', 'Ocean View', 'Balcony', 'Mini Bar'],
    price: '$299',
    gradient: 'from-ocean-400 to-ocean-600',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80'
  },
  {
    name: 'Beachfront Villa',
    description: 'Direct beach access with spacious living areas and exclusive amenities.',
    features: ['2 Bedrooms', 'Beach Access', 'Private Pool', 'Kitchen'],
    price: '$599',
    gradient: 'from-primary-400 to-primary-600',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600&q=80'
  },
  {
    name: 'Garden Paradise',
    description: 'Serene garden views with a private terrace surrounded by tropical flora.',
    features: ['Queen Bed', 'Garden View', 'Terrace', 'Spa Bath'],
    price: '$249',
    gradient: 'from-emerald-400 to-emerald-600',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80'
  },
  {
    name: 'Sunset Penthouse',
    description: 'Ultimate luxury with panoramic sunset views and premium amenities.',
    features: ['2 King Beds', '360° View', 'Jacuzzi', 'Butler Service'],
    price: '$899',
    gradient: 'from-amber-400 to-orange-600',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=600&q=80'
  },
  {
    name: 'Deluxe Comfort',
    description: 'Perfect blend of comfort and elegance with modern amenities.',
    features: ['King Bed', 'City View', 'Work Desk', 'Rain Shower'],
    price: '$199',
    gradient: 'from-slate-400 to-slate-600',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80'
  },
  {
    name: 'Family Haven',
    description: 'Spacious accommodations perfect for families with connecting rooms.',
    features: ['3 Bedrooms', 'Living Room', 'Kitchenette', 'Game Room'],
    price: '$699',
    gradient: 'from-rose-400 to-rose-600',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80'
  }
]

roomsVisible.value = new Array(rooms.length).fill(false)

const handleScroll = () => {
  if (titleRef.value) {
    const rect = titleRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight
    if (rect.top < windowHeight * 0.75) {
      titleVisible.value = true
    }
  }

  roomRefs.value.forEach((room, index) => {
    if (room) {
      const rect = room.getBoundingClientRect()
      const windowHeight = window.innerHeight
      if (rect.top < windowHeight * 0.75) {
        roomsVisible.value[index] = true
      }
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

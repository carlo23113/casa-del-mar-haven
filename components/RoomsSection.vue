<template>
  <section id="rooms" class="py-32 bg-gradient-to-b from-white to-sand-50 relative overflow-hidden">
    <!-- Decorative background -->
    <div class="absolute inset-0 opacity-5" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, #0891b2 35px, #0891b2 36px);"></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="inline-block mb-4">
          <span class="text-sm tracking-[0.3em] uppercase text-ocean-600 font-semibold">Accommodations</span>
        </div>
        <h2
          ref="titleRef"
          class="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 opacity-0 transition-all duration-1000 leading-tight"
          :class="{ 'opacity-100 translate-y-0': titleVisible }"
          style="transform: translateY(30px)"
        >
          Luxurious <span class="text-ocean-600">Suites</span><br class="hidden sm:block" /> & Rooms
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-coral-400 to-ocean-500 mx-auto mb-8 rounded-full"></div>
        <p class="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Choose from our carefully curated selection of rooms and suites, each designed to provide
          the ultimate comfort and elegance for an unforgettable stay.
        </p>
      </div>

      <!-- Rooms Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(room, index) in rooms"
          :key="index"
          ref="roomRefs"
          class="group cursor-pointer opacity-0 transition-all duration-1000"
          :class="{ 'opacity-100 translate-y-0': roomsVisible[index] }"
          style="transform: translateY(30px)"
        >
          <!-- Room Card -->
          <div class="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
            <!-- Image -->
            <div class="relative h-72 overflow-hidden">
              <img
                :src="room.image"
                :alt="room.name"
                class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              <!-- Overlay on hover -->
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

              <!-- View Details Button (appears on hover) -->
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100">
                <button class="bg-white text-ocean-700 px-8 py-3 rounded-full font-semibold shadow-xl hover:bg-sand-100 transition-colors duration-300">
                  View Details
                </button>
              </div>

              <!-- Price tag -->
              <div class="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <span class="text-ocean-700 font-bold text-lg">{{ room.price }}</span>
                <span class="text-gray-600 text-xs">/night</span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-8 bg-white">
              <h3 class="font-serif text-2xl font-bold text-gray-900 mb-3">{{ room.name }}</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ room.description }}</p>

              <!-- Features -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span
                  v-for="(feature, fIndex) in room.features"
                  :key="fIndex"
                  class="text-xs font-medium bg-gradient-to-r from-sand-100 to-sand-200 text-sand-800 px-4 py-2 rounded-full border border-sand-300"
                >
                  {{ feature }}
                </span>
              </div>

              <!-- CTA -->
              <div class="pt-6 border-t border-gray-100">
                <a
                  href="#contact"
                  class="group flex items-center justify-center gap-2 w-full bg-gradient-to-r from-ocean-600 to-ocean-700 text-white px-6 py-3 rounded-full font-semibold hover:from-ocean-700 hover:to-ocean-800 transition-all duration-300 hover:shadow-lg"
                >
                  <span>Book Now</span>
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
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

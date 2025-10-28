<template>
  <section id="gallery" class="py-16 md:py-32 bg-gradient-to-b from-sand-50 to-white">
    <div class="container mx-auto px-4 md:px-6">
      <!-- Section Header -->
      <div class="text-center mb-12 md:mb-20">
        <div class="inline-block mb-3 md:mb-4">
          <span class="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-ocean-600 font-semibold">Gallery</span>
        </div>
        <h2
          ref="titleRef"
          class="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 opacity-0 transition-all duration-1000 leading-tight"
          :class="{ 'opacity-100 translate-y-0': titleVisible }"
          style="transform: translateY(30px)"
        >
          Visual <span class="text-ocean-600">Journey</span>
        </h2>
        <div class="w-20 md:w-24 h-1 bg-gradient-to-r from-coral-400 to-ocean-500 mx-auto mb-6 md:mb-8 rounded-full"></div>
        <p class="text-gray-600 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
          Discover the beauty and elegance that awaits you at Casa Del Mar Haven.
        </p>
      </div>

      <!-- Masonry Gallery Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        <div
          v-for="(image, index) in images"
          :key="index"
          ref="imageRefs"
          class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group opacity-0 transition-all duration-1000"
          :class="[
            image.size,
            { 'opacity-100 scale-100': imagesVisible[index] }
          ]"
          style="transform: scale(0.9)"
          :style="{ transitionDelay: `${index * 50}ms` }"
          @click="openLightbox(index)"
        >
          <div class="relative h-full overflow-hidden">
            <img
              :src="image.image"
              :alt="image.title"
              class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            <!-- Title overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
              <h3 class="font-serif font-bold text-sm md:text-base lg:text-lg">{{ image.title }}</h3>
            </div>

            <!-- Hover overlay -->
            <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

            <!-- Zoom icon on hover -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="bg-white p-2 md:p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                <svg class="w-5 h-5 md:w-6 md:h-6 text-ocean-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Lightbox Modal -->
      <Teleport to="body">
        <div
          v-if="lightboxOpen"
          class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fade-in"
          @click="closeLightbox"
        >
          <button
            class="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-gray-300 transition-colors z-10"
            @click="closeLightbox"
          >
            <svg class="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Navigation arrows -->
          <button
            v-if="currentImageIndex > 0"
            class="absolute left-2 md:left-6 text-white hover:text-gray-300 transition-colors"
            @click.stop="previousImage"
          >
            <svg class="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            v-if="currentImageIndex < images.length - 1"
            class="absolute right-2 md:right-6 text-white hover:text-gray-300 transition-colors"
            @click.stop="nextImage"
          >
            <svg class="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Image -->
          <div class="max-w-6xl max-h-full animate-scale-in px-2 md:px-0" @click.stop>
            <div class="relative w-full rounded-lg md:rounded-2xl overflow-hidden shadow-2xl">
              <img
                :src="images[currentImageIndex].image"
                :alt="images[currentImageIndex].title"
                class="w-full h-auto max-h-[70vh] md:max-h-[80vh] object-contain"
              />
            </div>
            <div class="text-white text-center mt-4 md:mt-6 px-4">
              <h3 class="text-lg md:text-xl lg:text-2xl font-serif font-bold mb-1 md:mb-2">{{ images[currentImageIndex].title }}</h3>
              <p class="text-sm md:text-base lg:text-lg opacity-90">{{ images[currentImageIndex].description }}</p>
            </div>
          </div>
        </div>
      </Teleport>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const titleRef = ref<HTMLElement | null>(null)
const imageRefs = ref<HTMLElement[]>([])
const titleVisible = ref(false)
const imagesVisible = ref<boolean[]>([])
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

const images = [
  {
    title: 'Ocean View Suite',
    description: 'Wake up to breathtaking ocean vistas',
    gradient: 'from-ocean-400 to-ocean-600',
    size: 'h-64',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80'
  },
  {
    title: 'Infinity Pool',
    description: 'Relax in our stunning infinity pool',
    gradient: 'from-sky-400 to-sky-600',
    size: 'h-80 row-span-2',
    image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=400&q=80'
  },
  {
    title: 'Luxury Spa',
    description: 'Indulge in rejuvenating treatments',
    gradient: 'from-emerald-400 to-emerald-600',
    size: 'h-64',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=80'
  },
  {
    title: 'Fine Dining',
    description: 'Savor exquisite culinary creations',
    gradient: 'from-amber-400 to-orange-600',
    size: 'h-64',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80'
  },
  {
    title: 'Beach Paradise',
    description: 'Private access to pristine beaches',
    gradient: 'from-cyan-400 to-cyan-600',
    size: 'h-64',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80'
  },
  {
    title: 'Sunset Views',
    description: 'Witness spectacular sunsets',
    gradient: 'from-rose-400 to-rose-600',
    size: 'h-80 row-span-2',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&q=80'
  },
  {
    title: 'Garden Terrace',
    description: 'Peaceful tropical gardens',
    gradient: 'from-green-400 to-green-600',
    size: 'h-64',
    image: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=400&q=80'
  },
  {
    title: 'Beachfront Villa',
    description: 'Your private sanctuary by the sea',
    gradient: 'from-indigo-400 to-indigo-600',
    size: 'h-64',
    image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=400&q=80'
  }
]

imagesVisible.value = new Array(images.length).fill(false)

const openLightbox = (index: number) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = 'auto'
}

const nextImage = () => {
  if (currentImageIndex.value < images.length - 1) {
    currentImageIndex.value++
  }
}

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  }
}

const handleScroll = () => {
  if (titleRef.value) {
    const rect = titleRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight
    if (rect.top < windowHeight * 0.75) {
      titleVisible.value = true
    }
  }

  imageRefs.value.forEach((image, index) => {
    if (image) {
      const rect = image.getBoundingClientRect()
      const windowHeight = window.innerHeight
      if (rect.top < windowHeight * 0.75) {
        imagesVisible.value[index] = true
      }
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()

  // Keyboard navigation for lightbox
  const handleKeydown = (e: KeyboardEvent) => {
    if (lightboxOpen.value) {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') previousImage()
    }
  }
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = 'auto'
})
</script>

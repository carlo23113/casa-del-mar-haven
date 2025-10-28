<template>
  <section
    id="amenities"
    class="py-16 md:py-32 bg-gradient-to-b from-white via-ocean-50 to-white relative overflow-hidden"
  >
    <!-- Decorative elements -->
    <div
      class="absolute top-20 left-10 w-72 h-72 bg-coral-200 opacity-20 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-20 right-10 w-96 h-96 bg-ocean-200 opacity-20 rounded-full blur-3xl"
    ></div>

    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12 md:mb-20">
        <div class="inline-block mb-3 md:mb-4">
          <span
            class="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-ocean-600 font-semibold"
            >Facilities</span
          >
        </div>
        <h2
          ref="titleRef"
          class="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 opacity-0 transition-all duration-1000 leading-tight"
          :class="{ 'opacity-100 translate-y-0': titleVisible }"
          style="transform: translateY(30px)"
        >
          World-Class<br />
          <span class="text-ocean-600">Amenities</span>
        </h2>
        <div
          class="w-20 md:w-24 h-1 bg-gradient-to-r from-coral-400 to-ocean-500 mx-auto mb-6 md:mb-8 rounded-full"
        ></div>
        <p
          class="text-gray-600 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4"
        >
          Indulge in our exclusive facilities designed to elevate your stay to
          extraordinary heights.
        </p>
      </div>

      <!-- Amenities Grid -->
      <div
        class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16"
      >
        <div
          v-for="(amenity, index) in amenities"
          :key="index"
          ref="amenityRefs"
          class="text-center opacity-0 transition-all duration-1000"
          :class="{ 'opacity-100 translate-y-0': amenitiesVisible[index] }"
          style="transform: translateY(30px)"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div
            class="group cursor-pointer bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-3 hover:scale-105 border border-gray-100 hover:border-ocean-300 relative overflow-hidden"
          >
            <!-- Animated background gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-ocean-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <!-- Icon Container -->
            <div class="mb-4 md:mb-6 flex justify-center relative z-10">
              <div
                class="w-20 h-20 md:w-28 md:h-28 rounded-xl md:rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-md group-hover:shadow-xl relative"
                :class="amenity.bgColor"
              >
                <!-- Shine effect -->
                <div class="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-tr from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div
                  class="text-4xl md:text-5xl transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6 relative z-10"
                  v-html="amenity.icon"
                ></div>
              </div>
            </div>

            <!-- Content -->
            <h3
              class="font-serif text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-ocean-700 transition-colors duration-300 relative z-10"
              >{{ amenity.title }}</h3
            >
            <p class="text-sm md:text-base text-gray-600 leading-relaxed relative z-10">{{
              amenity.description
            }}</p>
          </div>
        </div>
      </div>

      <!-- Featured Amenity Banner -->
      <div
        ref="bannerRef"
        class="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl opacity-0 transition-all duration-1000"
        :class="{ 'opacity-100 scale-100': bannerVisible }"
        style="transform: scale(0.95)"
      >
        <div
          class="relative h-96 md:h-[400px] lg:h-[450px] xl:h-[500px] bg-gradient-to-br from-ocean-500 via-ocean-600 to-ocean-700"
        >
          <div class="absolute inset-0 bg-black opacity-10"></div>
          <!-- Pattern overlay -->
          <div
            class="absolute inset-0 opacity-10"
            style="
              background-image: radial-gradient(
                circle,
                white 1px,
                transparent 1px
              );
              background-size: 30px 30px;
            "
          ></div>

          <!-- Decorative circles -->
          <div
            class="absolute -top-20 -right-20 w-96 h-96 bg-coral-400 opacity-20 rounded-full blur-3xl"
          ></div>
          <div
            class="absolute -bottom-20 -left-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"
          ></div>

          <!-- Content -->
          <div
            class="relative h-full flex items-center justify-center text-white px-4 py-8 md:px-6 md:py-10"
          >
            <div class="text-center max-w-4xl">
              <div class="text-5xl md:text-6xl mb-4 md:mb-6">🧘‍♀️</div>
              <h3
                class="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 animate-fade-in-up leading-tight"
              >
                Experience Pure<br />
                <span class="text-sand-200">Bliss</span>
              </h3>
              <p
                class="text-base md:text-lg lg:text-xl xl:text-2xl mb-6 md:mb-10 animate-fade-in-up animation-delay-200 font-light leading-relaxed px-2"
              >
                Our award-winning spa offers rejuvenating treatments inspired by
                ancient wellness traditions
              </p>
              <a
                href="#contact"
                class="group inline-flex items-center justify-center gap-2 bg-white text-ocean-700 px-8 md:px-10 py-4 md:py-5 rounded-full text-sm md:text-base font-semibold hover:bg-sand-100 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] hover:-translate-y-1 animate-fade-in-up animation-delay-400 w-full sm:w-auto max-w-xs sm:max-w-none relative overflow-hidden"
              >
                <span class="relative z-10">Book a Spa Session</span>
                <svg
                  class="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                <div class="absolute inset-0 bg-gradient-to-r from-coral-300 to-sand-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const titleRef = ref<HTMLElement | null>(null);
const bannerRef = ref<HTMLElement | null>(null);
const amenityRefs = ref<HTMLElement[]>([]);
const titleVisible = ref(false);
const bannerVisible = ref(false);
const amenitiesVisible = ref<boolean[]>([]);

const amenities = [
  {
    title: "Infinity Pool",
    description: "Stunning ocean-view pool with poolside bar service",
    icon: "🏊",
    bgColor: "bg-ocean-100"
  },
  {
    title: "Spa & Wellness",
    description: "Full-service spa with massage and beauty treatments",
    icon: "💆",
    bgColor: "bg-emerald-100"
  },
  {
    title: "Fine Dining",
    description: "Multiple restaurants featuring international cuisine",
    icon: "🍽️",
    bgColor: "bg-amber-100"
  },
  {
    title: "Fitness Center",
    description: "State-of-the-art gym equipment and personal trainers",
    icon: "💪",
    bgColor: "bg-rose-100"
  },
  {
    title: "Water Sports",
    description: "Kayaking, paddle boarding, and snorkeling activities",
    icon: "🏄",
    bgColor: "bg-sky-100"
  },
  {
    title: "Yoga Sessions",
    description: "Daily yoga and meditation classes by the beach",
    icon: "🧘",
    bgColor: "bg-purple-100"
  },
  {
    title: "Kids Club",
    description: "Supervised activities and entertainment for children",
    icon: "🎨",
    bgColor: "bg-pink-100"
  },
  {
    title: "Conference Hall",
    description: "Modern facilities for meetings and events",
    icon: "🎯",
    bgColor: "bg-indigo-100"
  }
];

amenitiesVisible.value = new Array(amenities.length).fill(false);

const handleScroll = () => {
  if (titleRef.value) {
    const rect = titleRef.value.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top < windowHeight * 0.75) {
      titleVisible.value = true;
    }
  }

  if (bannerRef.value) {
    const rect = bannerRef.value.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top < windowHeight * 0.75) {
      bannerVisible.value = true;
    }
  }

  amenityRefs.value.forEach((amenity, index) => {
    if (amenity) {
      const rect = amenity.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight * 0.75) {
        amenitiesVisible.value[index] = true;
      }
    }
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

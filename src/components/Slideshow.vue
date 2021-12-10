<template>
  <div class="slideshow">
    <div class="slideshow__content">
      <div class="slideshow__buttons">
        <button @click="previousImage" class="slideshow__button">
          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.75 32.7894L2 18.5L26.75 4.21058L26.75 32.7894Z"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </button>
        <button @click="nextImage" class="slideshow__button">
          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.25 4.21058L35 18.5L10.25 32.7894L10.25 4.21058Z"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>

      <div class="slideshow__slides">
        <figure class="slideshow__slide">
          <img
            class="slideshow__img"
            :src="currentSlide.file"
            :alt="currentSlide.title"
          />
        </figure>
      </div>

      <div class="slideshow__dots">
        <button
          class="slideshow__dot"
          @click="goToIndex(index)"
          v-for="(slide, index) in slides"
          :aria-label="`Go to image ${index + 1}`"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "../components/TodoItem.vue";

export default {
  components: {
    TodoItem,
  },

  data() {
    return {
      index: 0,
      slides: [
        {
          title: "Interior",
          caption: "Interior",
          file: "/images/interior.jpg",
        },
        { title: "Bike", caption: "Bike", file: "/images/bike.jpg" },
        {
          title: "Carlo",
          caption: "Carlo",
          file: "/images/carlo.jpg",
        },
        { title: "Street", caption: "Street", file: "/images/street.jpg" },
      ],
    };
  },
  computed: {
    currentSlide() {
      return this.slides[this.index];
    },
  },

  methods: {
    previousImage() {
      this.index = this.index === 0 ? this.slides.length - 1 : this.index - 1;
    },

    nextImage() {
      this.index = this.index === this.slides.length - 1 ? 0 : this.index + 1;
    },

    goToIndex(index) {
      this.index = index;
    },
  },
};
</script>

<style>
.slideshow {
  position: relative;
  width: 30vw;
  height: 60vh;
  padding: 1em;
}

.slideshow__content {
  position: relative;
  height: 40vh;
  width: 28vw;
}

.slideshow__slides {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slideshow_slide {
  position: absolute;
  width: 100%;
  height: 100%;
}

.slideshow__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slideshow__buttons {
  position: absolute;
  transform: translateY(100%);
  width: 100%;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
}

.slideshow__button {
  padding: 0.3em;
  font-weight: 600;
  font-size: 1.5em;
  color: rgb(255, 255, 255);
  border: none;
  background: transparent;
}

.slideshow__button svg {
  height: 25px;
}

.slideshow__dots {
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding: 0.5em;
  width: 100%;
}

.slideshow__dot {
  display: block;
  min-width: 1em;
  min-height: 1em;
  font-size: 0.7em;
  margin: 10px;
  border-radius: 100%;
  border: 1px solid white;
  background-color: white;
}
</style>
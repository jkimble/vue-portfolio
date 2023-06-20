import { defineComponent } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
export default defineComponent({
    name: 'Breakpoints',
    components: {
      Carousel,
      Slide,
      Navigation,
    },
    data: () => ({
      settings: {
        itemsToShow: 2,
        itemsToScroll: 2,
      },
      breakpoints: {
        1024: {
          itemsToShow: 1,
          itemsToScroll: 1,
        },
      },
    }),
  })
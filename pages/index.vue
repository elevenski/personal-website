<template>
  <div>
    <About />
    <ImageWp />
  </div>
</template>

<script>
import About from "~/components/About.vue"
import ImageWp from "~/components/ImageWp.vue"
  export default{
    components: {
        About,
        ImageWp
    }
  }
</script>
<template>
  <div>
    <Navbar />
    <About />
    <ImageWp />
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue"
import About from "~/components/About.vue"
import ImageWp from "~/components/ImageWp.vue"
import Footer from "~/components/Footer.vue"
  export default{
    components: {
        Navbar,
        About,
        ImageWp,
        Footer
    }
  }
</script>
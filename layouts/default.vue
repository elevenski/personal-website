<template>
  <div>
    <Navbar />
    <About />
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue"
import About from "~/components/About.vue"
import Footer from "~/components/Footer.vue"
  export default{
    components: {
        Navbar,
        About,
        Footer
    }
  }
</script>
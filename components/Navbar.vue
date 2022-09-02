<template>
<div class="navbar padding mt-9">
<p class="navbarBtn thinText display-inline-block"><a href="/">Home</a></p>
</div>
</template>

<script>
  export default{
    mounted() {
      console.log(process.env.TOKEN)
    }
  }
</script>
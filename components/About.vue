<template>
<div>
<span class="text-yellow-500">about</span>
</div>
</template>

<script>
  export default{
    mounted() {
      console.log(process.env.TOKEN)
    }
  }
</script>
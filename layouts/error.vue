<template>
<div class="social padding section">
<p class="boldText" v-if="error.statusCode === 404"><b>404</b><br>This is page not found.</p>
<p class="boldText" v-else><b>500</b><br>An error occurred.</p>
</div>
</div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error'
  }
</script>
<template>
  <div class="app-container">
    <slot name="searchCriteria" />
    <slot name="tableBody" />
  </div>
</template>

<script>

export default {
  name: 'Tablecomponent'
  // data() {
  //   return {

  //   }
  // }
}
</script>

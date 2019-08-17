<template>
  <button class="v-button" style="color: color;">
    <slot></slot>
  </button>
</template>

<style scoped>
.v-button {
  background-color: #f5f5f5;
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  will-change: box-shadow;
  font-size: 0.875rem;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  flex: 0 0 auto;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
  justify-content: center;
  max-width: 100%;
  outline: 0;
  position: relative;
  text-decoration: none;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}
</style>

<script>
export default {
  mounted() {
    console.log(this.color);
  },
  props: {
    color: String
  }
}
</script>

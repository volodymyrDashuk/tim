<template>
  <div class="burger">
    <a
        href="#"
        class="burger-icon"
        @click.prevent="$emit('click')"
    />
  </div>
</template>

<script src="./model.js"/>
<style lang="scss" src="./styles.scss" />

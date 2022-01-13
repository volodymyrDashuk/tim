<template>
  <transition name="popup">
    <div class="modal-mask" v-if="isModalShow">
      <div class="modal-wrapper" @click="onCloseModal">
        <slot name="pop-up-form" />
      </div>
    </div>
  </transition>
</template>

<script src="./model.js"/>
<style lang="scss" src="./styles.scss" />
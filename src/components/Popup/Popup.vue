<template>
  <transition name="popup">
    <div class="modal-mask" v-if="showModal">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            default header
          </div>

          <div class="modal-body">
            default body
          </div>

          <div class="modal-footer">
            default footer
            <button class="modal-default-button" @click="closeModal">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script src="./model.js"/>
<style lang="scss" src="./styles.scss" />
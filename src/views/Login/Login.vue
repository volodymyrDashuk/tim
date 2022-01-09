<template>
  <form>
    <div class="title">
      <h2>Welcome to Time</h2>
    </div>
    <div class="inp">
      <label class="email" for="email"> Email </label>
      <input
          class="email-margin"
          type="text"
          id="email"
          placeholder="emailgmail.com"
      />
      <label class="pass" for="pass"> Password </label>
      <input type="text" id="pass" placeholder="6+ strong character" />
    </div>
    <div class="button">
      <button class="btn" type="submit">Enter to account</button>
    </div>
    <div class="line">
      <span> Or sign up with</span>
    </div>
    <div class="icon-wrapper">
      <div class="google">google"</div>
      <div class="facebook">facebook</div>
    </div>
    <div class="down">
      <span> Have an account? </span>
      <a href="#"> Sign in </a>
    </div>
  </form>
</template>

<script src="./model.js"/>
<style lang="scss" src="./styles.scss" />
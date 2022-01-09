<template>
  <div class="auth">
    <div class="auth-content">
      <h1>Time</h1>
      <h3>Most useful time management app</h3>
      <div class="action-toolbar">
        <a href="#" class="button-primary">Read More</a>
      </div>
    </div>
    <div class="auth-form">
      <form autocomplete="off" @submit.prevent="submitHandler">
        <div class="title">
          <h2>Hello!</h2>
          <h3>Sign Up to Get Started</h3>
        </div>
        <div class="form-group">
          <input
              type="text"
              placeholder="Name"
              autocomplete="nope"
              v-model.trim="name"
              :class="{invalid: v$.name.$error}"
          >
          <small
              class="helper-text error"
              v-for="(error, index) of v$.name.$errors"
              :key="index"
          >
            {{ error.$message }}
          </small>
        </div>
        <div class="form-group">
          <input
              type="text"
              placeholder="Email Address"
              autocomplete="nope"
              v-model.trim="email"
              :class="{invalid: v$.email.$error}"
          >
          <small
              class="helper-text error"
              v-for="(error, index) of v$.email.$errors"
              :key="index"
          >
            {{ error.$message }}
          </small>
        </div>
        <div class="form-group">
          <input
              type="password"
              placeholder="Password"
              autocomplete="nope"
              v-model.trim="password"
              :class="{invalid: v$.password.$error}"
          >
          <small
              class="helper-text error"
              v-for="(error, index) of v$.password.$errors"
              :key="index"
          >
            {{ error.$message }}
          </small>
        </div>
        <div class="action-toolbar">
          <button type="submit" class="button-primary">Register</button>
        </div>
        <div class="action-toolbar">
          <span>Have an account? Just</span>
          <router-link to="/login" > sign in</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script src="./model.js"/>
<style lang="scss" src="./styles.scss" />
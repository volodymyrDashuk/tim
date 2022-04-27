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
                    <h2>Forgot password?</h2>
                    <h3>
                        Dont worry. We can help.
                        <br>
                        Enter the email associated with your account and we`ll send an email with instruction to reset your password.
                    </h3>
                </div>
                <div class="form-group">
                    <input
                        type="text"
                        placeholder="Email Address"
                        autocomplete="off"
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
                <div class="action-toolbar">
                    <button
                        type="submit"
                        class="button-primary"
                        :disabled='!isComplete'
                    >Send email</button>
                </div>
                <div class="action-toolbar">
                    <p>Remember your password?</p>
                    <router-link to="/login">Back to login</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script src="./module.js"/>
<style lang="scss" src="./style.scss"/>
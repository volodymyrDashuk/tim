<template>
    <div class="auth">
        <div class="auth-content">
            <p>A couple of tips from us</p>
            <ul>
                <li>Do not reveal your password to anybody</li>
                <li>Do not reuse passwords</li>
                <li>Use Alphanumeric passwords</li>
            </ul>
        </div>
        <div class="auth-form">
            <form autocomplete="off" @submit.prevent="submitHandler">
                <div class="title">
                    <h2>Reset password</h2>
                    <h3>Choose your new password.</h3>
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
                <div class="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        autocomplete="off"
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
                <div class="form-group">
                    <input
                        type="password"
                        placeholder="Confirm your password"
                        autocomplete="off"
                        v-model.trim="confirmPassword"
                        :class="{invalid: v$.confirmPassword.$error}"
                    >
                    <small
                        class="helper-text error"
                        v-for="(error, index) of v$.confirmPassword.$errors"
                        :key="index"
                    >
                        {{ error.$message }}
                    </small>
                </div>
                <div class="action-toolbar">
                    <button type="submit" class="button-primary">Reset password</button>
                </div>
                <div class="action-toolbar">
                    <p>Remember your password?</p>
                    <router-link to="/login">Back to login</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

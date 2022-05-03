<template>
    <div>
        <input
            @change="toggleTheme"
            id="checkbox"
            type="checkbox"
            class="switch-checkbox"
        />
        <label for="checkbox" class="switch-label">
            <span>&#127768;</span>
            <span>&#9728;️</span>
            <div
                class="switch-toggle"
                :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
            ></div>
        </label>
    </div>
</template>

<script src="./model.js"/>
<style lang="scss" src="./styles.scss"/>
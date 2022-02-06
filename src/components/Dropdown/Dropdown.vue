<template>
    <div class="main-dropdown" @click="toggleDropdown">
        <span class="selected-option">{{ placeholder }}</span>
        <div class="dropdown-options-container" v-show="showDropdown">
            <div class="dropdown-options" v-for="option in options">
                <div class="dropdown-options--cell" @click="selectOption(option)">
                    <span class="option-text">
                        {{ option.name }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./model.js"/>
<style lang="scss" src="./styles.scss"/>
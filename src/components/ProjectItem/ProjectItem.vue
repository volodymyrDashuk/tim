<template>
    <div class="card">
        <span>{{ projectItem.name }}</span>
        <button
            class="button-close"
            @click="removeCard"
        />
    </div>
</template>

<script src="./model.js"/>
<style lang="scss" src="./styles.scss"/>
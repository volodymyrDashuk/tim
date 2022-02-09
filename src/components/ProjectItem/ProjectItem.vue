<template>
    <div class="card" :title="projectItem.name">
        <span>{{ projectItem.name }}</span>
        <button
            class="button-close"
            @click="removeCard"
            title="Close"
        />
    </div>
</template>

<script src="./model.js"/>
<style lang="scss" src="./styles.scss"/>
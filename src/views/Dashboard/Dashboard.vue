<template>
    <div class="main-banner">
        <h2>Welcome back to your</h2>
        <h3>Time assistant</h3>
    </div>
    <time-report-list />
    <div class="productivity-report">
        <h4 class="productivity-title">Productivity report</h4>
        <div class="productivity-content">
            <div class="productivity-card">
                <span class="title">Yesterday</span>
                <span class="total">12 Task</span>
            </div>
            <div class="productivity-card">
                <span class="title">This week</span>
                <span class="total">32 Task</span>
            </div>
            <div class="productivity-card">
                <span class="title">This month</span>
                <span class="total">44 Task</span>
            </div>
        </div>
    </div>
</template>

<script src="./model.js"/>
<style lang="scss" src="./styles.scss"/>
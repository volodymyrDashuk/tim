<template>
    <div class="main-banner">
        <h2>Welcome back to your</h2>
        <h3>Time assistant</h3>
    </div>
    <div class="time-report">
        <h4 class="time-title">Time report</h4>
        <div class="time-content">
            <div class="time-card">
                <span class="month">January</span>
                <span class="total">40 h</span>
                <span class="up-icon"></span>
            </div>
            <div class="time-card">
                <span class="month">February</span>
                <span class="total">41 h</span>
                <span class="down-icon"></span>
            </div>
            <div class="time-card">
                <span class="month">March</span>
                <span class="total">38.45 h</span>
                <span class="up-icon"></span>
            </div>
            <div class="time-card">
                <span class="month">April</span>
                <span class="total">12.45 h</span>
                <span class="down-icon"></span>
            </div>
        </div>
    </div>
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
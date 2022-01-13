<template>
    <div class="dashboard">
        <div class="filter">
            <div class="filter-toolbar">
                <button class="button button-prev"></button>
                <button class="button button-next"></button>
            </div>
            <div class="filter-content">
                <span class="date">January 2021</span>
            </div>
            <div class="filter-toolbar toggle">
                <input type="checkbox" id="switch" class="switch"/>
                <label for="switch" class="label-day">Day</label>
                <label for="switch" class="label-month">Month</label>
            </div>
        </div>
        <TimesheetTable/>
    </div>
</template>

<script src="./model.js"/>
<style lang="scss" src="./styles.scss"/>

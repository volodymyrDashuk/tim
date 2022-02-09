<template>
    <div class="dashboard">
        <div class="filter">
            <div class="filter-toolbar">
                <button class="button button-prev"></button>
                <button class="button button-next"></button>
            </div>
            <div class="filter-content">
                <Datepicker
                    cancelText="Close"
                    v-model="date"
                    :enableTimePicker="false"
                    monthNameFormat="long"
                    @update:modelValue="setDate"
                />
            </div>
        </div>
        <TimesheetTable/>
    </div>
</template>

<script src="./model.js"/>
<style lang="scss" src="./styles.scss"/>

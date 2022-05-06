<template>
    <div class="dashboard">
        <div class="filter">
            <div class="filter-content">
                <div class="filter-toolbar">
                    <button
                        class="button button-prev"
                        @click="prevDay"
                    />
                </div>
                <Datepicker
                    cancelText="Close"
                    v-model="date"
                    :enableTimePicker="false"
                    monthNameFormat="long"
                    @update:modelValue="setDate"
                />
                <div class="filter-toolbar">
                    <button
                        class="button button-next"
                        @click="nextDay"
                    />
                </div>
            </div>
        </div>
        <TimesheetTable :week="week" :active="active" @isActive3="isActive4"/>
    </div>
</template>

<script src="./model.js"/>

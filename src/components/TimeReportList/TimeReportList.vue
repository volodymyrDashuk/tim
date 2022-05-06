<template>
    <div class="time-report">
        <h4 class="time-title">Time report</h4>
        <div class="time-content">
            <time-report-item
                v-for="timeReportItem in getTimeReport"
                :timeReportItem="timeReportItem"
            />
        </div>
    </div>
</template>

<script src="./model.js"/>
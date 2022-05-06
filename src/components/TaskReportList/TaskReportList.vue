<template>
    <div class="productivity-report">
        <h4 class="productivity-title">Productivity report</h4>
        <div class="productivity-content">
            <task-report-item
                v-for="taskReportItem in getTaskReport"
                :taskReportItem="taskReportItem"
            />
        </div>
    </div>
</template>

<script src="./model.js"/>
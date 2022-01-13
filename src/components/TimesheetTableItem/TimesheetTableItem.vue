<template>
    <div class="table-item">
        <div class="duration">
            <span>{{ timesheetItem.duration }}</span>
        </div>
        <div class="info">
            <span class="notes">{{ timesheetItem.name }}</span>
            <span class="time">
        <span class="start-time">{{ timesheetItem.start_time }} </span>
        <span class="separator"/>
        <span class="end-time">{{ timesheetItem.end_time }}</span>
      </span>
            <span class="project">{{ timesheetItem.project }}</span>
        </div>
    </div>
</template>

<script src="./model.js"/>
<style lang="scss" src="./styles.scss"/>
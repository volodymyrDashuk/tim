<template>
  <div class="timesheet">
    <timesheet-table-days-filter />
    <div class="timesheet-table">
      <timesheet-table-item v-for="timesheetItem of timesheetItems" :timesheetItem="timesheetItem"/>
    </div>
    <div class="timesheet-footer">
      <div class="total">
        <span class="total-title">Total</span>
        <span class="total-time">07:30</span>
      </div>
      <div class="action-toolbar">
        <button class="button-primary" @click="showModal">Add new entry</button>
      </div>
    </div>
  </div>
  <Popup ref="popup" :refreshData="refreshData"/>
</template>

<script src="./model.js"/>
<style lang="scss" src="./styles.scss" />
<template>
  <div class="timesheet">
    <timesheet-table-days-filter />
    <div class="timesheet-table">
      <timesheet-table-item />
      <timesheet-table-item />
      <timesheet-table-item />
      <timesheet-table-item />
    </div>
    <div class="timesheet-footer">
      <div class="total">
        <span>Total</span>
        <span class="total-time">07:30</span>
      </div>
      <div class="action-toolbar">
        <button class="add-entry" @click="showModal">Add new entry</button>
      </div>
    </div>
  </div>
  <Popup ref="popup"/>
</template>

<script src="./model.js"/>
<style lang="scss" src="./styles.scss" />
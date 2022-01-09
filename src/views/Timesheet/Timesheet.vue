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
        <input id="toggle-on" class="toggle toggle-left" name="toggle" value="false" type="radio" checked>
        <label for="toggle-on" class="label label-left"><span>Week</span></label>
        <input id="toggle-off" class="toggle toggle-right" name="toggle" value="true" type="radio">
        <label for="toggle-off" class="label label-right"><span>Month</span></label>
      </div>
    </div>
    <TimesheetTable />
  </div>
</template>

<script src="./model.js"/>
<style lang="scss" src="./styles.scss" />

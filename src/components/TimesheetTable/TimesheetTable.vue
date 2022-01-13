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
  <Popup
      :isModalShow="isModalShow"
      :refreshData="refreshData"
      @onCloseModal="closeModal"
  >
    <template #pop-up-form>
      <form
          class="modal-container"
          autocomplete="off"
          @submit.prevent="submitHandler"
          @click.stop
      >
        <div class="modal-header">
          <h2>New Time Entry</h2>
          <div class="action-toolbar">
            <button class="modal-close-button" @click="closeModal" />
          </div>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <input
                type="text"
                placeholder="Project"
                autocomplete="nope"
                v-model.trim="project"
                :class="{invalid: v$.project.$error}"
            >
            <small
                class="helper-text error"
                v-for="(error, index) of v$.project.$errors"
                :key="index"
            >
              {{ error.$message }}
            </small>
          </div>
          <div class="form-group">
            <input
                type="text"
                placeholder="Note"
                autocomplete="nope"
                v-model.trim="note"
                :class="{invalid: v$.note.$error}"
            >
            <small
                class="helper-text error"
                v-for="(error, index) of v$.note.$errors"
                :key="index"
            >
              {{ error.$message }}
            </small>
          </div>
          <div class="form-group">
            <input
                type="text"
                placeholder="Start time"
                autocomplete="nope"
                v-model.trim="startTime"
                :class="{invalid: v$.startTime.$error}"
            >
            <small
                class="helper-text error"
                v-for="(error, index) of v$.startTime.$errors"
                :key="index"
            >
              {{ error.$message }}
            </small>
          </div>
          <div class="form-group">
            <input
                type="text"
                placeholder="End Time"
                autocomplete="nope"
                v-model.trim="endTime"
                :class="{invalid: v$.endTime.$error}"
            >
            <small
                class="helper-text error"
                v-for="(error, index) of v$.endTime.$errors"
                :key="index"
            >
              {{ error.$message }}
            </small>
          </div>
        </div>
        <div class="modal-footer">
          <div class="action-toolbar">
            <button type="submit" class="button-primary modal-default-button">
              Add
            </button>
          </div>
        </div>
      </form>
    </template>
  </Popup>
</template>

<script src="./model.js"/>
<style lang="scss" src="./styles.scss" />
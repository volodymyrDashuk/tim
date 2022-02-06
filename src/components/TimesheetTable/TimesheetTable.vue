<template>
    <div class="timesheet">
        <timesheet-table-days-filter/>
        <div class="timesheet-table">
            <timesheet-table-item
                v-for="timesheetItem of getTimesheet"
                :timesheetItem="timesheetItem"
                @editItem="editModal"
            />
        </div>
        <div class="timesheet-footer">
            <div class="total">
                <span class="total-title">Total</span>
                <span class="total-time">{{getTotalDuration}}</span>
            </div>
            <div class="action-toolbar">
                <button class="button-primary" @click="showModal">Add new entry</button>
            </div>
        </div>
    </div>
    <Popup
        :isModalShow="isModalShow"
        @onCloseModal="closeModal"
    >
        <template #pop-up-form>
            <form
                class="modal-container"
                autocomplete="off"
                @submit.prevent="formSubmit"
                @click.stop
            >
                <div class="modal-header">
                    <h2>{{edit ? 'Update': 'New'}} Time Entry</h2>
                    <div class="action-toolbar">
                        <button type="button" class="modal-close-button" @click="closeModal"/>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <!--<dropdown v-model="project"  />-->
                        <div class="select-dropdown">
                            <select
                                type="text"
                                placeholder="Project"
                                autocomplete="nope"
                                v-model.trim="project"
                                :class="{invalid: v$.project.$error}"
                            >
                                <option v-for="item in getProjects" :value="item.name">{{item.name}}</option>
                            </select>
                        </div>

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
                            type="time"
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
                            type="time"
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
                        <button
                            type="submit"
                            class="button-primary modal-default-button"
                        >
                            {{edit ? 'Update' : 'Add'}}
                        </button>
                    </div>
                </div>
            </form>
        </template>
    </Popup>
</template>

<script src="./model.js"/>
<style lang="scss" src="./styles.scss"/>
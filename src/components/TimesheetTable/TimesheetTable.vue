<template>
    <div class="timesheet">
        <timesheet-table-days-filter/>
        <div class="timesheet-table">
            <timesheet-table-item
                v-for="timesheetItem of getTimesheet"
                :key="timesheetItem.id"
                :timesheetItem="timesheetItem"
                @editItem="editModal"
                v-if="getTimesheet.length !== 0"
            />
            <div v-if="getTimesheet.length === 0" class="no-entries">
                There are no notes.
            </div>

        </div>
        <div class="timesheet-footer">
            <div class="total">
                <span class="total-title">Total</span>
                <span class="total-time">{{getTotalDuration}}</span>
            </div>
            <div class="action-toolbar">
                <button
                    class="button-primary"
                    @click="showModal"
                    title="Add new entry"
                >
                    Add new entry
                </button>
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
                        <button
                            type="button"
                            class="modal-close-button"
                            @click="closeModal"
                            title="Close"
                        />
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
                                v-model="project"
                                :class="{invalid: v$.project.$error}"
                                title="Project"
                            >
                                <option
                                    v-for="item in getProjects"
                                    :value="item.id"
                                    :title="item.name"
                                    :key="item.name"
                                >
                                    {{item.name}}
                                </option>
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
                            title="Note"
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
                            title="Start time"
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
                            title="End Time"
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
                            :disabled='!isComplete'
                            :title="edit ? 'Update' : 'Add'"
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
<template>
    <div class="table-item">
        <div class="duration">
            <span>{{ timesheetItem.duration }}</span>
        </div>
        <div class="info">
            <span
                class="notes"
                :title="timesheetItem.name"
            >
                {{ timesheetItem.name }}
            </span>
            <span class="time">
                <span class="start-time">{{ timesheetItem.start_time }} </span>
                <span class="separator"/>
                <span class="end-time">{{ timesheetItem.end_time }}</span>
              </span>
            <span class="project">{{ timesheetItem?.project?.name }}</span>
        </div>
        <div class="action-toolbar">
            <button
                class="edit"
                @click="editItem"
                title="Edit"
            />
            <button
                class="delete"
                @click="removeItem"
                title="Remove"
            />
        </div>
    </div>
</template>

<script src="./model.js"/>
<style lang="scss" src="./styles.scss"/>
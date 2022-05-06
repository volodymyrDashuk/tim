<template>
    <div class="timesheet-head">
        <div class="col" v-for="(item, index) in week">
            <button
                class="day"
                :class="[index === active ? 'active' : '']"
                @click="isActive(index, item)"
            >
                <div>{{getFormatedDayOfWeek(item)}}</div>
                <div>{{getFormatedDate(item)}}</div>
            </button>
        </div>
    </div>
</template>

<script src="./model.js"/>
<template>
    <div class="card-list">
        <projectItem v-for="projectItem in projectItems" :projectItem="projectItem"/>
    </div>
    <div class="action-toolbar">
        <button class="button-primary" @click="showModal">Add project</button>
    </div>
    <Popup
        :isModalShow="isModalShow"
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
                    <h2>New project</h2>
                    <div class="action-toolbar">
                        <button class="modal-close-button" @click="closeModal"/>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <input
                            type="text"
                            placeholder="Project name"
                            autocomplete="nope"
                            v-model.trim="projectName"
                            :class="{invalid: v$.projectName.$error}"
                        >
                        <small
                            class="helper-text error"
                            v-for="(error, index) of v$.projectName.$errors"
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
<style lang="scss" src="./styles.scss"/>
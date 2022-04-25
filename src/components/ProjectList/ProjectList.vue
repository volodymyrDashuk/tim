<template>
    <div class="card-list">
        <projectItem
            v-for="projectItem in getProjects"
            :projectItem="projectItem"
            :key="projectItem.id"
            @editItem="editModal"
            v-if="getProjects.length !== 0"
        />
        <div v-if="getProjects.length === 0" class="no-project">
            Add your first project &#128526;
        </div>
    </div>
    <div class="action-toolbar">
        <button
            class="button-primary"
            @click="showModal"
            title="Add project"
        >
            Add project
        </button>
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
                    <h2 title="New project">{{ edit ? 'Update project' : 'New project'}}</h2>
                    <div class="action-toolbar">
                        <button
                            class="modal-close-button"
                            @click="closeModal"
                            title="Close"
                            type="button"
                        />
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
                            title="Project name"
                        >
                        <small
                            class="helper-text error"
                            v-for="(error, index) of v$.projectName.$errors"
                            :key="index"
                        >
                            {{ error.$message }}
                        </small>
                    </div>
                    <div class="form-group form-group-color">
                        <span>Chose project color</span>
                        <input
                            type="color"
                            placeholder="Project name"
                            autocomplete="nope"
                            v-model.trim="projectColor"
                            :class="['color', {invalid: v$.projectColor.$error}]"
                            title="Project color"
                        >
                        <small
                            class="helper-text error"
                            v-for="(error, index) of v$.projectColor.$errors"
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
                            title="Add"
                        >
                            {{ edit ? 'Update' : 'Add'}}
                        </button>
                    </div>
                </div>
            </form>
        </template>
    </Popup>
</template>

<script src="./model.js"/>
<style lang="scss" src="./styles.scss"/>
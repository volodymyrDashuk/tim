<template>
    <div class="card" :title="projectItem.name">
        <div class="card-logo"
             :style="{'background-color': projectItem.color}"
        >
            <span>{{projectItem.name.charAt(0)}}</span>
        </div>
        <span>{{ projectItem.name }}</span>
        <button
            class="button-icon button-close"
            @click="removeCard"
            title="Close"
        />
      <button
          class="button-icon button-edit"
          title="Edit"
          @click="editItem" />
    </div>
</template>

<script src="./model.js"/>
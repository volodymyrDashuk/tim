<template>
    <div class="dropdown">
        <button class="dropdown-button"
                v-on:click.prevent="showDropDown=!showDropDown"
        >
            <span>Aloha</span>
            <span>{{getUserName}}</span>
            <!--   ToDo: change src for img   -->
            <img src="https://www.iconpacks.net/icons/2/free-icon-user-4249.png" alt="user">
        </button>
        <transition name="slide-fade">
            <div class="dropdown-content"
                 v-if="showDropDown"
            >
                <ul class="dropdown-list">
                    <li class="dropdown-item">
                        <router-link
                            to="/"
                            class="dropdown-list-link logout"
                            @click="logout"
                            title="Log out"
                        >
                            Log out
                        </router-link>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script src="./model.js"/>
<style lang="scss" src="./styles.scss"/>
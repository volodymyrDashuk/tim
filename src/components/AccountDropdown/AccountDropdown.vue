<template>
    <div class="dropdown">
        <div class="dropdown-button"
                v-on:click.prevent="showDropDown=!showDropDown"
        >
            <span>Aloha</span>
            <span>{{getUserName}}</span>
            <!--   ToDo: change src for img   -->
            <img src="https://www.iconpacks.net/icons/2/free-icon-user-4249.png" alt="user">
        </div>
<!--        <transition name="slide-fade">-->
<!--            <div class="dropdown-content"-->
<!--                 v-if="showDropDown"-->
<!--            >-->
<!--                <ul class="dropdown-list">-->
<!--                    <li class="dropdown-item">-->
<!---->
<!--                    </li>-->
<!--                </ul>-->
<!--            </div>-->
<!--        </transition>-->
    </div>
</template>

<script src="./model.js"/>
<style lang="scss" src="./styles.scss"/>
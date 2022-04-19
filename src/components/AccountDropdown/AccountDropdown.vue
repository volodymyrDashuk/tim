<template>
    <div class="dropdown">
        <div class="dropdown-button"
                v-on:click.prevent="showDropDown=!showDropDown"
        >
            <span>Hey</span>
            <span>{{getUserName}}</span>
            <span class="dropdown-icon">&#128572;</span>
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
<template>
    <aside class="sidebar" :class="{active: isOpen}">
        <div class="sidebar-logo">
            <div class="logo">
                <span class="logo-letter">T</span>
                <div class="logo-ico"></div>
                <span class="logo-letter">M</span>
            </div>
        </div>
        <div class="sidebar-content">
            <ul class="navigation-list">
                <li
                    v-for="link in links"
                    class="navigation-item"
                    :key="link.url"
                >
                    <router-link
                        key="link.url"
                        tag="li"
                        class="navigation-link"
                        active-class="active"
                        :to="link.url"
                        :exact="link.exact"
                        :title="link.title"
                        @click="closeNavigation"
                    >
                        <span :class=link.class></span>
                        {{ link.title }}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="sidebar-footer">
            <router-link
                to="/"
                class="logout-link"
                @click="accountLogout"
                title="Log out"
            >
                <span class="logout-icon"></span>
                Log out
            </router-link>
        </div>
    </aside>
</template>

<script src="./model.js"/>
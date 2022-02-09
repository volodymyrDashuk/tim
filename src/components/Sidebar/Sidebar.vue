<template>
    <aside class="sidebar" :class="{active: isOpen}">
        <div class="sidebar-logo">
            <span class="logo"/>
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
                    >
                        <span :class=link.class></span>
                        {{ link.title }}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="sidebar-footer" />
    </aside>
</template>

<script src="./model.js"/>
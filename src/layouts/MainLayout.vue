<template>
    <div class="inner">
        <burger v-on:click="isOpen = !isOpen"/>
        <sidebar :isOpen="isOpen"/>
        <main class="main-content" v-on:click="isOpen = false">
            <account-dropdown/>
            <router-view/>
        </main>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Burger from "@/components/Burger/Burger.vue";
import AccountDropdown from "@/components/AccountDropdown/AccountDropdown.vue";

export default {
    components: {
        AccountDropdown,
        Sidebar,
        Burger
    },
    data: () => ({
        isOpen: false
    })
}
</script>
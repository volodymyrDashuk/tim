/**
* @author Volodymyr Dashuk
* @copyright Copyright (c) 2021 Volodymyr Dashuk
*/

<template>
    <component :is="layout">
        <router-view/>
    </component>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";

export default {
    computed: {
        layout() {
            return (this.$route.meta.layout || 'Auth') + '-layout'
        }
    },
    components: {
        AuthLayout, MainLayout
    }
}
</script>

<style lang="scss" src="./styles/app.scss"/>

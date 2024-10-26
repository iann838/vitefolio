<template>
    <Layout>
        <template #sidebar-nav-before>
            <VFProfile :profile="profile"></VFProfile>
        </template>
    </Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress';
import { Profile } from './types';
import VFProfile from './VFProfile.vue'

const { Layout } = DefaultTheme
const { site } = useData()

const profile = site.value.themeConfig.profile as Profile
</script>

<style lang="css">
.title {
    font-size: 18px !important;
    font-weight: 600;
}
</style>

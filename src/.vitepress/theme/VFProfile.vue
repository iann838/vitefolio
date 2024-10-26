<template>
    <div class="profile-avatar-container">
        <div class="profile-avatar-bg"></div>
        <img class="profile-avatar" :src="profile.avatar" alt="">
    </div>
    <div class="title" v-if="profile.title">
        {{ profile.title }}
    </div>
    <p class="mt-16px">
        {{ profile.bio }}
    </p>
    <div class="mt-16px profile-links">
        <div v-for="link in profile.links" style="">
            <VPSocialLink :icon="link.icon" :link="link.link"/>
            <a :href="link.link"><small>{{ link.link.split("/").reverse()[0] }}</small></a>
        </div>
    </div>
</template>

<script setup lang="ts">
import VPSocialLink from 'vitepress/dist/client/theme-default/components/VPSocialLink.vue';
import { Profile } from './types';

defineProps<{
    profile: Profile
}>()
</script>

<style>
.profile-avatar-container {
    position: relative;
    width: 100%;
    padding-top: 50%;
    padding-bottom: 50%;
}

.profile-avatar {
    border-radius: 50%;
    padding: 0 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
}

.profile-avatar-bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    height: 35%;
    width: 35%;
    background-image: var(--vp-home-hero-image-background-image);
    filter: var(--vp-home-hero-image-filter);
}

.mt-16px {
    margin-top: 16px;
}

.profile-links {
    margin-left: -8px;
}

.profile-links div {
    display: flex;
    align-items: center;
}
.profile-links div a {
  color: var(--vp-c-text-2);
  transition: color 0.5s;
}

.profile-links div a:hover {
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}
</style>

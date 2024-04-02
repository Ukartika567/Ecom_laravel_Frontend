<template lang="html">
<header class="header--mobile">
    <div class="header__left">
        <button class="ps-drawer-toggle" @click.prevent="handleOpenMenuDrawer">
            <i class="icon icon-menu"></i>
        </button>
    </div>
    <div class="header__center">
        <router-link class="ps-logo" to="#">
            <img :src="src" alt="" />
        </router-link>
    </div>
    <div class="header__right">
        <router-link class="header__site-link" to="#">
            <i class="icon-exit-right"></i>
        </router-link>
    </div>
</header>
</template>

<script>
export default {
    name: "HeaderMobile",
    data() {
        return {
            src: require('@/assets/img/ecom-logo.png')
        }
    },
    methods: {
        handleOpenMenuDrawer() {
            this.$store.commit("app/toggleDrawer", !this.isDrawer);
        }
    },
};
</script>

<style lang="scss" scoped></style>

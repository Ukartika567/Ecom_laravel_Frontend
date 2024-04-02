<template lang="html">
<v-navigation-drawer v-model="drawer" width="100%" absolute temporary>
    <div class="ps-panel--menu-sidebar">
        <div class="ps-panel__header">
            <router-link to="#" class="ps-drawer__close" @click="handleCloseDrawer">
                <i class="feather icon icon-x"></i>
            </router-link>
        </div>
        <div class="ps-panel__content">
            <ul class="menu">
                <li v-for="(item, index) in menuItems" :key="index">
                    <router-link :to="item.url">
                        <i class="item.icon"></i>
                        {{ item.text }}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="ps-panel__footer"></div>
    </div>
</v-navigation-drawer>
</template>

<script>
export default {
    name: "DrawerMenu",
    components: {},
    data() {
        return {
            menuItems: [{
                    text: "Dashboard",
                    url: "/",
                    icon: "icon-home"
                },
                {
                    text: "Products",
                    url: "/products",
                    icon: "icon-database"
                },
                {
                    text: "Orders",
                    url: "/orders",
                    icon: "icon-bag2"
                },
                {
                    text: "Customers",
                    url: "/customers",
                    icon: "icon-users2"
                },
                {
                    text: "Categories",
                    url: "/categories",
                    icon: "icon-users2"
                },
                {
                    text: "Settings",
                    url: "/settings",
                    icon: "icon-cog"
                }
            ]
        };
    },
    methods: {}
};
</script>

<style lang="scss" scoped></style>

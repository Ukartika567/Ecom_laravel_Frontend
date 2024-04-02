<template>
<v-layout id="__layout" class="">
    <main class="ps-main mainAdminpanel" style="overflow: hidden;">
        <!-- <header-mobile v-if="show" /> -->
        <!-- <drawer-menu /> -->
        <!-- <router-link to="#" @click.prevent="handleOpenMenuDrawer" class="d-none drawer-menu-icon" style="margin-left:50px">
            <i class="icon icon-menu"></i>
        </router-link> -->
        <div class="ps-main__sidebar sidebarMenu">
            <div class="ps-sidebar">
                <div class="ps-sidebar__top">
                    <widget-user-welcome />
                </div>
                <div class="ps-sidebar__content">
                    <div class="ps-sidebar__center" :class="{'vendorsidebar': this.usertype == 'Supplier'}">
                        <menu-sidebar />
                    </div>
                </div>
                <div class="ps-sidebar__footer logo">
                    <div class="footertextDiv">
                        <span>
                            xyz@xyz.com <br />
                            E-commerce © 2023
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-12 header_top">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="ps-block adminHead" v-if="this.usertype=='Admin'">
                        <h2>Admin Panel</h2>
                    </div>
                    <div class="ps-block adminHead" v-if="this.usertype == 'Supplier'">
                        <h2>Vendor Panel</h2>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="ps-block--user-wellcome float-right">
                        <div class="ps-block__right userheadsection">
                            <p v-if="this.usertype == 'Admin'">
                                Hello,<router-link to="/admin/personal-info">{{this.username}}</router-link>
                            </p>
                            <p v-if="this.usertype == 'Supplier'">
                                Hello,<router-link to="/vendor/personal-info">{{ this.username}}</router-link>
                            </p>
                        </div>
                        <div class="ps-block__action exitIcon">
                            <router-link to="#">
                                <i class="icon-exit-left"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-12 ps-main__wrapper mainContainer mt-8">
            <router-view />
        </div>
    </main>
</v-layout>
</template>

<script>
import WidgetUserWelcome from "@/components/menu/WidgetUserWelcome.vue";
import MenuSidebar from "@/components/menu/MenuSidebar.vue"
// import HeaderMobile from "@/components/menu/HeaderMobile.vue";
// import DrawerMenu from "@/components/menu/DrawerMenu.vue";
export default {
    name: "AdminDashboard",
    components: {
        // DrawerMenu,
        MenuSidebar,
        WidgetUserWelcome
    },
    data() {
        return {
            show: false,
            src: require("@/assets/img/admin/admin.jpg"),
            vendorsrc: require("@/assets/img/vendor_img/yungbusinesswomen.jpg"),
            usertype: '',
            username: '',
            loader:true,
        }
    },
    mounted() {
        this.usertype = localStorage.getItem('userType');
        this.username = localStorage.getItem('name');
    }
}
</script>

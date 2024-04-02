<template lang="html">
<section class="ps-page--my-account dashboardHead">
    <div class="container userDashboard">
        <div class="layout-content  dashboardContainer">
            <UserOrders  v-if="this.$route.path.includes('/buyer/order')"/>
            <UserDashboard  v-else/>
        </div>
    </div>
</section>
</template>

<script>
import UserOrders from '@/components/UserOrders.vue';
import UserDashboard from '@/components/UserDashboard.vue';
export default {
    name: 'BauyerPageModule',
    components: {
        UserOrders,
        UserDashboard
    },
    transition: 'zoom',
    data: () => {
        return {};
    }
};
</script>

<style lang="scss" scoped></style>

<template lang="html">
<div class="ps-card mt-10">
    <div class="ps-card__header salesHeader">
        <h4>Recent Orders</h4>
    </div>
    <div class="ps-card__content recentOrderTable">
        <table-order-summary />
    </div>
</div>
</template>

<script>
import TableOrderSummary from '@/components/tables/TableOrderSummary.vue';
export default {
    name: 'CardRecentOrders',
    components: {
        TableOrderSummary
    }
};
</script>

<style lang="scss" scoped></style>

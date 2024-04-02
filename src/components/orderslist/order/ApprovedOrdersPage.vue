<template>
<div class="ps-card">
    <div class="ps-card__content">
        <order-approved-table />
    </div>
</div>
</template>

<script>
import OrderApprovedTable from '@/components/tables/OrderApprovedTable.vue';
export default {
    name: 'ApprovedOrdersPage',
    components: {
        OrderApprovedTable
    }
}
</script>

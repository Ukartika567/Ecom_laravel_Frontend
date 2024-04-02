<template>
<div class="ps-card">
    <div class="ps-card__content">
        <CustomerListTable v-if="this.$route.path.includes('/admin/customer-list')" />
        <SupplierListTable v-if="this.$route.path.includes('/admin/supplier-list')" />
    </div>
</div>
</template>

    
<script>
import CustomerListTable from '@/components/tables/CustomerListTable.vue';
import SupplierListTable from '@/components/tables/SupplierListTable.vue';
export default {
    name: 'UserListComponentPage',
    components: {
        CustomerListTable,
        SupplierListTable
    },
    data() {
        return {
            usertype: '',
        }
    },
    mounted() {
        this.usertype = localStorage.getItem('userType');
    }
}
</script>

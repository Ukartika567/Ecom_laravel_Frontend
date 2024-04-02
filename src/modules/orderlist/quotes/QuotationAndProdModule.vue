<template lang="html">
<div class="ps-card" v-if="this.usertype == 'Admin' || this.usertype == 'Supplier'">
    <div class="row">
        <div class="col-12 col-sm-12 ">
            <div class="ps-card__header custNameHeader">
                <h4 v-if="this.$route.path.includes('/vendor/product-information')">Product Information</h4>
                <h4 v-if="this.$route.path.includes('/vendor/quotation-details')">Quotation Details</h4>
            </div>
        </div>
    </div>
    <div class="ps-card__content mt-0">
        <QuatationAndProd />
    </div>
</div>
</template>

    
<script>
import QuatationAndProd from '@/components/quotationandprodinfo/QuatationAndProdInfo.vue';
export default {
    name: 'QuotationAndProd',
    components: {
        QuatationAndProd
    },
    transition: 'zoom',
    data: () => {
        return {
            usertype: ''
        }
    },
    methods: {},
    mounted() {
        this.usertype = localStorage.getItem('userType');
    },
};
</script>
    
<style lang="scss" scoped></style>

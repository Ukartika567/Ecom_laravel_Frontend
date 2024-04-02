<template lang="html">
<div class="container reqQuoteContainer">
    <div class="page-header">
        <h1 class="text-black newquote" v-if="this.$route.path.includes('/buyer/supp-resp')">Supplier Responses</h1>
        <h1 class="text-black newquote" v-if="this.$route.path.includes('/buyer/approve-supp-resp') || 
        this.$route.path.includes('/buyer/cancel-supp-resp')">
            Supplier Response</h1>
        <h1 class="text-black newquote" v-if="this.$route.path.includes('/buyer/estimated-invoice') || 
        this.$route.path.includes('/buyer/invoice-table')">Invoice</h1>
        <h1 class="text-black newquote" v-if="this.$route.path.includes('/buyer/payment')">Payment</h1>
    </div>
    <div class="widget widget-white custwidget">
        <div class="widget-body">
            <BuyerNegotiationPage v-if="this.$route.path.includes('/buyer/supp-resp')"/>
            <BuyerApprovedCancelOrder v-if="this.$route.path.includes('/buyer/approve-supp-resp') || 
            this.$route.path.includes('/buyer/cancel-supp-resp')
            " />
            <PaymentComponent v-if="this.$route.path.includes('/buyer/payment')" />
            <InvoiceComponent v-if="this.$route.path.includes('/buyer/estimated-invoice') || 
            this.$route.path.includes('/buyer/invoice-table')" />
        </div>
    </div>
    <div class="line"></div>
    <div class="line"></div>
</div>
<CancelQuotequesModal :visible="cancelQueModal" @close="this.cancelQueModal=false" />
</template>

<script>
import BuyerNegotiationPage from '@/components/BuyerNegotiationPage.vue';
import BuyerApprovedCancelOrder from '@/components/BuyerApprovedCancelOrder.vue';
import PaymentComponent from '@/components/PaymentComponent.vue';
import InvoiceComponent from '@/components/InvoiceComponent'
import CancelQuotequesModal from '@/components/ModalsComponent/CancelQuotequesModal.vue';
export default {
    name: 'BuyerQuoteDetailsPage',
    components: {
        CancelQuotequesModal,
        BuyerNegotiationPage,
        BuyerApprovedCancelOrder,
        PaymentComponent,
        InvoiceComponent
    },
    data() {
        return {}
    },
    methods: {},
    mounted() {},
};
</script>

<style lang="scss" scoped></style>

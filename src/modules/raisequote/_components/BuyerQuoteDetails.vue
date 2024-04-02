<template lang="html">
<section class="ps-page--my-account">
    <div class="layout-content">
        <BuyerQuoteDetails v-if="this.$route.path.includes('/buyer/supp-resp') || 
        this.$route.path.includes('/buyer/cancel-supp-resp')||
        this.$route.path.includes('/buyer/approve-supp-resp') || 
         this.$route.path.includes('/buyer/estimated-invoice') || 
         this.$route.path.includes('/buyer/invoice-table') || 
         this.$route.path.includes('/buyer/payment')" />
        <RaiseQuotePage v-else />
    </div>
</section>
</template>

<script>
import BuyerQuoteDetails from '@/components/BuyerQuoteDetails.vue';
import RaiseQuotePage from '@/components/RequestNewQuote.vue';
export default {
    components: {
        RaiseQuotePage,
        BuyerQuoteDetails
    },
    transition: 'zoom',
    data: () => {
        return {};
    }
};
</script>

<style lang="scss" scoped></style>

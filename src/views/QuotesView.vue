<template>
<QuotationAndProdModule v-if="this.$route.path.includes('vendor/quotation-details')||
this.$route.path.includes('vendor/product-information')
" />
<QuotesDetailModule v-else />
</template>

<script>
import QuotationAndProdModule from '@/modules/orderlist/quotes/QuotationAndProdModule.vue';
import QuotesDetailModule from '@/modules/orderlist/quotes/QuotesModule.vue';
export default {
    name: 'QuoteView',
    components: {
        QuotesDetailModule,
        QuotationAndProdModule
    }
}
</script>

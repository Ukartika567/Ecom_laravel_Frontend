<template lang="html">
<QuotesListPage v-if="this.$route.path.includes('/vendor/req-quotes-list') || 
    this.$route.path.includes('/admin/quotes-list')" />
<div class="ps-card" v-else>
    <div class="ps-card__content">
        <QuoteDetailsPage />
    </div>
</div>
</template>

<script>
import QuotesListPage from '@/components/tables/QuotesListTable.vue';
import QuoteDetailsPage from '@/components/orderslist/quotes/QuoteDetailsPage.vue';
export default {
    name: 'QuoteDetailsModule',
    components: {
        QuotesListPage,
        QuoteDetailsPage,
    },
    transition: 'zoom',
    data: () => {
        return {};
    },
    methods: {},
    mounted() {},
};
</script>

<style lang="scss" scoped></style>

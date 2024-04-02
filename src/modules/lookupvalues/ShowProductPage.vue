<template lang="html">
<div class="ps-card">
    <div class="ps-card__header custNameHeader">
        <h4>Products</h4>
    </div>
    <div class="ps-card__content">
        <ShowProductDetails />
    </div>
</div>
</template>

<script>
import ShowProductDetails from '@/components/lookupvalues/ShowProductDetails.vue';
export default {
    components: {
        ShowProductDetails
    },
    data: () => {
        return {};
    }
};
</script>

<style lang="scss" scoped></style>

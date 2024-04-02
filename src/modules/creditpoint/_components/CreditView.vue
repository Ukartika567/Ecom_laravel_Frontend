<template lang="html">
<!-- <section class="ps-page--my-account purchaseCreditSection">
    <div class="layout-content">
        <div class="m-auto">
            <div class="page-header creditheader" :class="{ 'acctHeader': this.usertype == 'Supplier' }" :ref="`creditPackHead`">
                <h1 class="mb-0">Buy Credits</h1>
            </div>
            <PurchaseCreditsComponent />
        </div>
    </div>
</section> -->
<div class="ps-card">
    <div class="row">
        <div class="col-12 col-sm-12 ">
            <div class="ps-card__header custNameHeader">
                <h4>Buy Credits</h4>
            </div>
        </div>
    </div>
    <div class="ps-card__content mt-0">
        <PurchaseCreditsComponent />
    </div>
</div>
</template>

<script>
import PurchaseCreditsComponent from '@/components/PurchaseCredits.vue';
export default {
    name: 'PurchaseCreditsModule',
    components: {
        PurchaseCreditsComponent
    },
    transition: 'zoom',
    data: () => {
        return {
            usertype: ''
        };
    },
    mounted() {
        this.usertype = localStorage.getItem('userType');
    },
};
</script>

<style lang="scss" scoped></style>

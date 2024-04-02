<template lang="html">
<div class="werehouseContainer">
    <div class="form col-sm-12 col-12">
        <section class="QuoteProdWidget">
            <div class="widget-body QuoteProdwidgetBody">
                <div class="form-rows pt-0">
                    <div class="row">
                        <div class="col-md-12 mt-0">
                            <div class="form">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="col-md-12 p-0 bg-white" style="border-top-left-radius: 25px;">
                                                <div class="row mt-2 fieldsContainer">
                                                    <div class="col-md-12 fieldDiv">
                                                        <ProductInformation v-if="this.$route.path.includes('/vendor/product-information')" />
                                                        <QuotationDetails v-if="this.$route.path.includes('/vendor/quotation-details')" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
</template>

<script>
import ProductInformation from './ProductInformation.vue';
import QuotationDetails from '@/components/orderslist/quotes/QuotationDetails.vue';
export default {
    name: 'QuotationProdInfo',
    components: {
        ProductInformation,
        QuotationDetails,
    },
    setup() {
        return {}
    },
    computed: {},
    data() {
        return {}
    },
    methods: {},
    mounted() {}
};
</script>

<style lang="scss" scoped>
body {
    font-family: 'Quicksand', sans-serif;
}
</style>

<template>
<div class="ps-card">
    <div class="ps-card__content">
        <CategorySubcategoryTable />
    </div>
</div>
</template>

<script>
import CategorySubcategoryTable from '@/components/tables/CategorySubcategoryTable.vue';
export default {
    name: 'CategorySubCategoryPage',
    components: {
        CategorySubcategoryTable
    },
    data() {
        return {}
    },
    methods: {},
    mounted() {},
}
</script>

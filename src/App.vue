<template>
<AdminDashboard v-if="this.$route.path.includes('admin') || this.$route.path.includes('vendor')" />
<StandardLayout v-else-if="this.$route.path.includes('buyer')" />
<StandardLayout v-else />
</template>

<script>
import StandardLayout from '@/layouts/StandardLayout.vue'
import AdminDashboard from '@/layouts/AdminDashboard.vue'
export default {
    name: 'App',
    components: {
        StandardLayout,
        AdminDashboard
    },
    data() {
        return {}
    },
    computed: {},
    mounted() {}

}
</script>

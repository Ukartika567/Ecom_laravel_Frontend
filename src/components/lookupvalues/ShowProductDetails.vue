<template>
<div class="werehouseContainer">
    <div class="form">
        <section class="widget widget-white accountdWidget">
            <div class="werehousetitleDiv">
                <h3>Products for respected subcategory</h3>
            </div>
            <div class="widget-body" style="padding: 30px;">
                <div class="form-rows p-t-no">
                    <form>
                        <div class="row mb-0">
                            <div class="col-md-6 mb-5 mt-5">
                                <input name="category" v-model="this.category" id="category" class="input-control circularfield" disabled />
                                <label for="category" class="form-label">Category</label>
                            </div>
                            <div class="col-md-6  mb-5 mt-5">
                                <div class="select select-sm dropdownDiv circularfield">
                                    <select name="subCatDropdown" id="subCatDropdown" class="subcategory" v-model="this.subcategoryget" style="width:100%;" @change="subCatChange($event)">
                                        <option :value="subcat.id" v-for="subcat in subcategoryoptions" :key="subcat">{{ subcat.name }}</option>
                                    </select>
                                    <label for="subCatDropdown">Select SubCategory</label>
                                    <div class="select__arrow dropdownIcom"></div>
                                </div>
                            </div>
                        </div>
                        <div class="productCard" v-if="this.productdetails.length>0">
                            <v-card :loading="loading" class="mx-auto my-12" min-width="140" max-width="140" v-for="prod in this.productdetails" :key="prod">
                                <v-img cover height="120" 
                                 :src="this.srcimage + 'productImages/' + prod.productImage"></v-img>
                                <v-card-item>
                                    <v-card-title>{{ prod.name }}</v-card-title>
                                </v-card-item>
                                <v-card-text>
                                    <div class="my-4 text-subtitle-1">
                                       {{ '$'+prod.whole_price_per_unit+'.00' }}
                                    </div>
                                </v-card-text>
                            </v-card>  
                        </div>
                        <div class="row productRow" v-else>
                            <span>No Product available for this subcategory</span>
                        </div>
                    </form>
                </div>
                <router-link to="/admin/add-category">
                    <span class="icon-arrow-left backarrow ml-0 mt-2"> Back</span>
                </router-link>
            </div>
        </section>
    </div>
</div>
</template>

<script>
export default {
    name: 'ShowProdDetail',
    components: {
    },
    data() {
        return {
            src: require('@/assets/img/acer.png'),
            category: '',
            subcategoryget: '',
            subcategoryoptions: [],
            productdetails: [],
            srcimage: process.env.VUE_APP_SET_PATH,
            loading: false,
            selection: 1,
        }
    },
    methods: {
        async fetchData() {
            var catid = this.$route.query.catid;
            var array = [];
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.axios.get(
                    process.env.VUE_APP_API_ENDPOINT + `/singleCatlist/${catid}`, {
                        headers
                    })
                .then(response => {
                    this.category = response.data.data[0].name;
                    this.subcategoryoptions = response.data.data[0].subcatedetails;
                    this.subcategoryget = this.subcategoryoptions[0].id;
                    this.productdetails = this.subcategoryoptions[0].product_details;
                })
                .catch(err => {});
        },
        subCatChange(e) {
            let subcatid = e.target.value;
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/productdetails/${subcatid}`, {
                    headers
                })
                .then(response => {
                    this.productdetails = response.data.data;
                })
                .catch(err => {
                });
        },
        backtoparent(){
            this.$router.back();
        }
    },
    mounted() {
        this.fetchData();
    },
}
</script>

<style lang="scss" scoped>
.productRow {
    padding: 0px 15px !important;
}

.productRow .v-card {
    margin: 5px 5px !important
}
.productCard .v-card-title{
    background-color: transparent !important;
    font-size: 15px;
    color: #000 !important;
    font-weight: 600;
}
.productCard .v-card-text>.text-subtitle-1{
    font-size: 15px !important;
}
.productCard{
   display: flex; 
   gap: 2rem;
    flex-wrap: wrap;
}
.productCard .v-card{
    min-width: 130px;
    /* padding: 0 !important; */
    margin: 0 !important;
}
</style>

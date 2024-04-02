<template>
<LoaderComponent v-if="this.loader" />
<div class="werehouseContainer">
    <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
            <div class="ps-card__header catsubHeader">
                <h4>Category And SubCategory</h4>
            </div>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
            <div class="categorybtnDiv mt-1">
                <div class="ps-section__actions mr-2">
                    <router-link to="#" class="ps-btn success addcategory" @click.prevent="showDailog('Category')">
                        <i class="icon icon-plus mr-2" />
                        Add Category
                    </router-link>
                </div>
                <div class="ps-section__actions mr-2">
                    <router-link to="#" class=" ps-btn success addsubcategory" id=" createQuotebtn" @click.prevent="showDailog('SubCategory')">
                        <i class="icon icon-plus mr-2" />
                        Add SubCategory
                    </router-link>
                </div>
                <div class="ps-section__actions">
                    <router-link to="#" class=" ps-btn success addsubcategory" id=" createQuotebtn" @click.prevent="showDailog('Product')">
                        <i class="icon icon-plus mr-2" />
                        Add Product
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="form col-12 col-sm-12">
        <section class="werehouseWidget">
            <div class="widget-body bodyContainer">
                <div class="row">
                    <div class="col-xl-12 col-12 p-0">
                        <div class="categorySearchBox">
                            <div class="row">
                                <div class="col" style="margin-left: -4px;">
                                    <div class="ps-section__actions col-md-6 mb-4" style="float: left;left: 3px;">
                                        <label for="catDropdown" class="form-label customlabel" style="top: 12px !important;">
                                            Select Category</label>
                                        <SingleChipsDropdown v-model="searchform.category" :options="this.categoryoptions" @click.stop optionLabel="title" filter class="select select-sm proinpfield w-full md:w-20rem 
                                            groupmultiselect singleSelectdropdown" optionValue="value" id="catDropdown" style="margin: 1px !important;" @change="catChange($event)" />
                                        <div class="select__arrow dropdownIcom"></div>
                                        <div v-if="this.showerror">
                                            <div class="validator error" v-for="error of v$.searchform.category.$errors" :key="error.$uid">
                                                {{ error.$message }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ps-section__actions col-md-6 mb-2" style="float: left;left: 3px;">
                                        <label for="subcatDropdown" class="form-label customlabel" style="top: 12px !important;">
                                            Select SubCategory</label>
                                        <SingleChipsDropdown v-model="searchform.subcategory" :options="this.subcatoptions" @click.stop optionLabel="title" filter class="select select-sm proinpfield w-full md:w-20rem 
                                            groupmultiselect singleSelectdropdown" optionValue="value" id="subcatDropdown" style="margin: 1px !important;" />
                                        <div class="select__arrow dropdownIcom"></div>
                                        <div v-if="this.showerror">
                                            <div class="validator error ml-5" style="margin-left: 0px !important;" v-for="error of v$.searchform.subcategory.$errors" :key="error.$uid">
                                                {{ error.$message }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ps-section__actions searchBtnDiv" style="float: right; margin-right:8px; 
                                    margin-bottom:8px;">
                                        <router-link to="#" class="ps-btn" style="margin-top: -12px;
                                         background-color: #222 !important; color:#fff;font-size: 12px;" @click.prevent="resetclick">
                                            Reset
                                        </router-link>
                                    </div>
                                    <div class="ps-section__actions searchBtnDiv" style="float: right; margin-right:8px;">
                                        <router-link to="#" class="ps-btn customsearchbtn" style="margin-top: -12px;" @click.prevent="searchSubcat">
                                            Search
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-12 p-0">
                        <div class="tableRefresher" @click.prevent="refreshData">
                            <font-awesome-icon :icon="['fas', 'rotate-right']" />
                        </div>
                        <div class="table-responsive ps-table mt-0 catSubCategoryTable">
                            <DataTable :value="catSubcatAndProd" showGridlines rowGroupMode="rowspan" :groupRowsBy="['name']" :sortField="['subcategory']" tableStyle="min-width: 10rem;" paginator :rows="100" :rowsPerPageOptions="[100,150,200]" paginatorTemplate="RowsPerPageDropdown FirstPageLink 
                                PrevPageLink CurrentPageReport NextPageLink LastPageLink" currentPageReportTemplate="{first} to {last} of {totalRecords}">
                                <Column field="name" header="Category" style="min-width: 200px;">
                                    <template #body="slotProps">
                                        <div class="flex align-items-center gap-2">
                                            <span>{{ slotProps.data.name }}</span>
                                        </div>
                                    </template>
                                </Column>
                                <Column field="subcategory" header="Subcategory" style="min-width: 200px">
                                    <template #body="slotProps">
                                        <div class="subcategory-wrapper">
                                            <span v-if=" slotProps.data.subcategory == ''"></span>
                                            <button v-else @click="showDailog2('SubCategory', slotProps.data.subcat_id, 
                                            slotProps.data.subcategory, slotProps.data.id)">
                                                {{ slotProps.data.subcategory}}</button> <br>
                                        </div>
                                    </template>
                                </Column>
                                <Column field="product" header="Product" style="min-width: 150px">
                                    <template #body="slotProps">
                                        <div class="subcategory-wrapper">
                                            <button v-for="i in  slotProps.data.product" :key="i" @click="showDailog2('Product', slotProps.data.subcat_id, 
                                            i.name, slotProps.data.id, i.id)">{{ i.name }}</button><br>
                                        </div>
                                    </template>
                                </Column>
                                <Column header="Actions" field="actions">
                                    <template #body="item">
                                        <div class="operation-wrapper text-center">
                                            <div class="actionDiv">
                                                <v-menu>
                                                    <template v-slot:activator="{ props }">
                                                        <span :id="item" v-bind="props" class="optionsaction">...</span>
                                                    </template>
                                                    <v-list>
                                                        <div v-for="(item2, i) in itemsdata" :key="i">
                                                            <v-list-item class="action-list-item" v-if="item2.title == 'Edit Category'" @click="showDailog2('Category', item.data.id,item.data.name,'')">
                                                                <v-list-item-title>
                                                                    <router-link to="#">
                                                                        <span id="sublist">{{ item2.title }}</span>
                                                                    </router-link>
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                            <v-list-item v-else-if="item2.title == 'View Details'" class="action-list-item">
                                                                <v-list-item-title>
                                                                    <router-link :to="{ path: item2.url, query: { 'catid': item.data.id} }">
                                                                        <span>{{ item2.title }}</span>
                                                                    </router-link>
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                            <v-list-item v-else-if="item2.title == 'Delete Category'" @click="deletecategory('Category',item.data.id)" class="action-list-item">
                                                                <v-list-item-title>
                                                                    <router-link to="#"> <span>{{ item2.title }}</span></router-link>
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                            <v-list-item v-else-if="item2.title == 'Delete SubCategory'" @click="deletecategory('SubCategory', item.data.subcat_id)" class="action-list-item">
                                                                <v-list-item-title>
                                                                    <router-link to="#"> <span>{{ item2.title }}</span></router-link>
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                        </div>
                                                    </v-list>
                                                </v-menu>
                                            </div>
                                        </div>
                                    </template>
                                </Column>
                                <template #empty v-if="this.testflag == ''">
                                    <div class="loadingDiv">
                                    </div>
                                </template>
                                <template #empty v-else>
                                    <div class="loadingDiv">
                                        <span>No Data Found</span>
                                    </div>
                                </template>
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
<CatSubCategoryModal v-if="this.showModal" :visible="showModal" :selectedSubmenu="this.selectedsubmenu" :items="this.items" :mode="this.mode" @close="calloff" />
<CatSubCategoryEditModal :visible="showEditModal" v-if="this.showEditModal" :selectedSubmenu="this.selectedsubmenu" :mode="this.mode2" :catid="this.catid" :subid="this.subid" :prodid="this.prodid" :catval="this.catval" v-on:close="calloff" @close="showEditModal = false" :prop="fetchData" />
</template>

<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
import CatSubCategoryModal from '@/components/ModalsComponent/CatSubCategoryModal.vue'
import CatSubCategoryEditModal from '@/components/ModalsComponent/CatSubCategoryEditModal.vue'
export default {
    name: 'CategorySubCategoryTable',
    components: {
        CatSubCategoryEditModal,
        CatSubCategoryModal,
        LoaderComponent
    },
    data() {
        return {
            categoryoptions: [],
            subcatoptions: [],
            loader: false,
            itemsdata: [{
                    title: 'Edit Category',
                    url: ''
                }, {
                    title: 'Delete Category',
                    url: ''
                },
                {
                    title: 'Delete SubCategory',
                    url: ''
                },
                {
                    title: 'View Details',
                    url: '/admin/show-product-detail'
                }
            ],
            catSubcatAndProd: [],
            dataList: [],
            categoryval: '',
            subcategoryval: '',
            showModal: false,
            showEditModal: false,
            selectedsubmenu: '',
            mode: 'Add',
            testflag: '',
            catid: '',
            catval: '',
            subcatid: '',
            subcatval: '',
            subid: '',
            mode2: 'Edit',
            headers: [{
                    text: "Category",
                    value: "categoryname",
                    sortable: true
                },
                {
                    text: "SubCategory",
                    value: "subcategory",
                    sortable: true
                },
                {
                    text: "Product",
                    value: "product",
                    sortable: true
                },

                {
                    text: "Operation",
                    value: "operation"
                },
            ],
            items: [],
            searchform: {
                category: '',
                subcategory: ''
            }
        }
    },
    methods: {
        showDailog(e) {
            this.showModal = true;
            this.selectedsubmenu = e;
        },
        calloff() {
            this.fetchData();
            this.showModal = false;
        },
        showDailog2(e, id, val, cate, prodid) {
            this.showEditModal = true;
            this.selectedsubmenu = e;
            this.catid = id;
            this.catval = val;
            this.mode2 = 'Edit';
            if (e == "Category") {
                this.catid = id;
                this.catval = val;
                this.mode2 = 'Edit';
            } else if (e == "Product") {
                this.catid = cate;
                this.prodid = prodid;
                this.subid = id;
                this.prodval = val;
                this.mode2 = 'Edit';
            } else {
                this.catid = cate;
                this.subid = id;
                this.subcatval = val;
                this.mode2 = 'Edit';
            }
        },
        async fetchData() {
            let token = localStorage.getItem("token");
            const headers = {
                'Authorization': 'Bearer ' + token,
            };
            this.loader = true;
            this.axios.get(
                    process.env.VUE_APP_API_ENDPOINT + '/allCatlist', {
                        headers
                    })
                .then(response => {
                    if (response.status == 200) {
                        if (response.data) {
                            this.testflag = 'Data Found';
                            this.loader = false;
                        }
                        var d = response.data.data;
                        var arr = [];
                        for (var i = 0; i < d.length; i++) {
                            if (d[i].subcate_details.length > 0) {
                                var subArray = [];
                                for (var j = 0; j < d[i].subcate_details.length; j++) {
                                    var prodArry = [];
                                    if (d[i].subcate_details.length > 0) {
                                        for (var k = 0; k < d[i].subcate_details[j].product_details.length; k++) {
                                            if (d[i].subcate_details[j].product_details.length > 0) {
                                                prodArry.push({
                                                    'id': d[i].subcate_details[j].product_details[k].id,
                                                    'name': d[i].subcate_details[j].product_details[k].name
                                                });
                                            }
                                        }
                                    }
                                    arr.push({
                                        'id': d[i].id,
                                        'name': d[i].name,
                                        'subcategory': d[i].subcate_details[j].name ? d[i].subcate_details[j].name : '',
                                        'subcat_id': d[i].subcate_details[j].id ? d[i].subcate_details[j].id : '',
                                        'product': prodArry
                                    });
                                }
                            } else {
                                arr.push({
                                    'id': d[i].id,
                                    'name': d[i].name,
                                    'subcategory': '',
                                    'subcat_id': '',
                                    'product': []
                                });
                            }
                        }
                        this.catSubcatAndProd = arr;
                    }
                })
                .catch(error => {
                    if (error.response) {
                        if (error.response.status == 401 || error.response.status == 404 || error.response.status == 400) {
                            localStorage.clear();
                            if (this.$route.name != 'home') {
                                this.$router.push({
                                    name: 'home'
                                });
                            }
                        }
                    } else {
                        if (error.message == "Network Error") {
                            localStorage.clear();
                            if (this.$route.name != 'home') {
                                this.$router.push({
                                    name: 'home'
                                });
                            }
                        }
                    }
                });
        },
        deletecategory(text, id) {
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.$swal({
                title: 'Are you sure you want to delete this ' + text + '?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes Delete it!',
                cancelButtonText: 'No, Keep it!',
                showCloseButton: true,
                showLoaderOnConfirm: true,
                customClass: 'warningswal'
            }).then((result) => {
                if (result.value) {
                    if (text == 'Category') {
                        this.axios
                            .delete(
                                process.env.VUE_APP_API_ENDPOINT + `/category/${id}`, {
                                    headers
                                })
                            .then(response => {
                                this.$swal('Deleted', 'Category deleted successfully', 'success')
                                this.fetchData();
                            });
                    } else if (text == 'SubCategory') {
                        this.axios
                            .delete(
                                process.env.VUE_APP_API_ENDPOINT + `/subcategory/${id}`, {
                                    headers
                                })
                            .then(response => {
                                this.$swal('Deleted', 'SubCategory deleted successfully', 'success')
                                this.fetchData();
                            });
                    }
                } else {
                    this.$swal('Cancelled', 'Your data still intact', 'info')
                }
            });
        },
        async searchSubcat() {
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            let formData = new FormData();
            formData.append('category', this.searchform.category);
            formData.append("subcategory", this.searchform.subcategory);
            this.loader = true;
            this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + '/searchSubcat', formData, {
                        headers
                    })
                .then(response => {
                    this.loader = false;
                    let d = response.data.data;
                    var arr = [];
                    for (var i = 0; i < d.length; i++) {
                        if (d[i].subcategory.length > 0) {
                            var subArray = [];
                            for (var j = 0; j < d[i].subcategory.length; j++) {
                                var prodArry = [];
                                if (d[i].subcategory.length > 0) {
                                    for (var k = 0; k < d[i].subcategory[j].product_details.length; k++) {
                                        if (d[i].subcategory[j].product_details.length > 0) {
                                            prodArry.push({
                                                'id': d[i].subcategory[j].product_details[k].id,
                                                'name': d[i].subcategory[j].product_details[k].name
                                            });
                                        }
                                    }
                                }
                                arr.push({
                                    'id': d[i].id,
                                    'name': d[i].name,
                                    'subcategory': d[i].subcategory[j].name ? d[i].subcategory[j].name : '',
                                    'subcat_id': d[i].subcategory[j].id ? d[i].subcategory[j].id : '',
                                    'product': prodArry
                                });
                            }
                        } else {
                            arr.push({
                                'id': d[i].id,
                                'name': d[i].name,
                                'subcategory': '',
                                'subcat_id': '',
                                'product': []
                            });
                        }
                    }
                    this.catSubcatAndProd = [];
                    this.catSubcatAndProd = arr;
                })
                .catch(error => {});
        },
        async resetclick() {
            this.searchform.category = '';
            this.searchform.subcategory = '';
            this.fetchData();
        },
        viewDetails(e, id, val, cate) {
            this.showEditModal = true;
            this.selectedsubmenu = e;
            if (e == "Category") {
                this.catid = id;
                this.catval = val;
            } else {
                this.subcatid = cate;
                this.subid = id;
                this.subcatval = val;
                this.mode2 = 'Show';
            }
        },
        async allcategory() {
            var array = [];
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.loader = true;
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + '/category', {
                    headers
                })
                .then(response => {
                    if (response.status == 200) {
                        this.loader = false;
                        Object.values(response.data.data).forEach(value => {
                            array.push({
                                'value': value.id,
                                "title": value.name
                            });
                        });
                        this.categoryoptions = array;
                    }
                })
                .catch(error => {
                    if (error.response) {
                        if (error.response.status == 401 || error.response.status == 404 || error.response.status == 400) {
                            localStorage.clear();
                            if (this.$route.name != 'home') {
                                this.$router.push({
                                    name: 'home'
                                });
                            }
                        }
                    } else {
                        if (error.message == "Network Error") {
                            localStorage.clear();
                            if (this.$route.name != 'home') {
                                this.$router.push({
                                    name: 'home'
                                });
                            }
                        }
                    }
                });
        },
        catChange(e) {
            var array = [];
            let catid = e.value;
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/catsubdetails/${catid}`, {
                    headers
                })
                .then(response => {
                    Object.values(response.data.data).forEach(value => {
                        array.push({
                            'value': value.id,
                            "title": value.name
                        });
                    });
                    this.subcatoptions = [];
                    this.subcatoptions = array;
                    this.searchform.subcategory = '';
                })
                .catch(err => {});
        },
        refreshData() {
            this.fetchData();
        }
    },
    mounted() {
        this.allcategory();
        this.fetchData();
        this.usertype = localStorage.getItem("usertype");
    }
};
</script>

<style lang="scss" scoped>
#sublist:hover .sublistDiv {
    display: block;
}

.separateDiv {
    border-bottom: 1px solid #bfbfbf;
}

.dropdownIcom {
    top: 35px !important;
}

.select__arrow {
    right: 30px !important;
}
</style>

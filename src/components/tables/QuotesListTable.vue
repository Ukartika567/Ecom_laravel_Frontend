<template>
<LoaderComponent v-if="this.loader" />
<div class="ps-card">
    <div class="ps-card__content">
        <div class="werehouseContainer">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="ps-card__header quotesHeader">
                        <h4>Requested Quotes</h4>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="quotebtnDiv mt-1" v-if="this.usertype=='Admin'">
                        <div class="ps-section__actions" style="margin-right: 1px;">
                            <router-link to="/admin/create-quote" class="ps-btn success addquote">
                                <i class="icon icon-plus mr-2" />
                                Request New Quote
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form col-12 colsm-12">
                <section class="werehouseWidget">
                    <div class="widget-body bodyContainer">
                        <div class="row">
                            <div class="col-xl-12 col-12 p-0">
                                <div class="searchBoxContainer" :class="{'quoteSearchBox': this.usertype == 'Supplier' }">
                                    <div class="row">
                                        <div class="col mt-3 ml-0">
                                            <div class="ps-section__actions col-md-3 mb-0" style="float: left;">
                                                <input class="form-control rounded Searchbox " v-model="this.quoteno" type="search" id="example-search-input">
                                                <label class="label_form">Req. Id</label>
                                            </div>
                                            <div class="ps-section__actions col-md-3 mb-0" style="float: left;">
                                                <div class="dropdownDiv">
                                                    <SingleChipsDropdown v-model="this.category" :options="this.categoryoptions" @click.stop optionLabel="title" filter class="select select-sm proinpfield w-full md:w-20rem 
                                                    groupmultiselect singleSelectdropdown" style="margin: 1px !important;" />
                                                    <div class="select__arrow dropdownIcom"></div>
                                                    <label for="productDropdown" class="label_form">
                                                        Category</label>
                                                </div>
                                            </div>
                                            <div class="ps-section__actions col-md-3 mb-0" style="float: left;">
                                                <div class="dropdownDiv">
                                                    <SingleChipsDropdown v-model="this.product" :options="this.productoptions" @click.stop optionLabel="title" filter class="select select-sm proinpfield w-full md:w-20rem 
                                                    groupmultiselect singleSelectdropdown" style="margin: 1px !important;" />
                                                    <div class="select__arrow dropdownIcom"></div>
                                                    <label for="productDropdown" class="label_form">Product Name</label>
                                                </div>
                                            </div>
                                            <div class="ps-section__actions col-md-3 mb-0" style="float: left;">
                                                <Datepicker v-model="this.customerreqdate" :locale="locale" :upperLimit="to" :lowerLimit="from" :clearable="true" id="datepick" class="inputField circularfield" />
                                                <label class="label_form">Req. Date</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col ml-0 mb-0 mr-3 mt-3" style="">
                                            <div class="ps-section__actions" style="float: right;">
                                                <router-link to="#" class="ps-btn mt-0" style="background-color: #222 !important;
                                         color:#fff;font-size: 12px;" @click="resetSearchField">
                                                    Reset
                                                </router-link>
                                            </div>
                                            <div class="ps-section__actions mr-3" style="float: right;">
                                                <router-link to="#" class="ps-btn customsearchbtn mt-0" @click="fetchQuoteList('search')">
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
                                <div class="table-responsive ps-table mt-0 quotesListTable">
                                    <DataTable :value="items" showGridlines paginator :rows="5" :rowsPerPageOptions="[5, 10, 50, 100, 1000]" tableStyle="min-width: 50rem" paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport 
                                        NextPageLink LastPageLink" currentPageReportTemplate="{first} to {last} of {totalRecords}">
                                        <Column field="reqid" header="Requested ID" sortable style="width: 25%"></Column>
                                        <Column field="reqdate" header="ReqDate" sortable style="width: 25%"></Column>
                                        <Column field="expecteddate" header="ExpectedDate" sortable style="width: 25%"></Column>
                                        <Column field="category" header="Category&SubCategory" sortable style="width: 25%"></Column>
                                        <Column field="product" header="Product" sortable style="width: 25%"></Column>
                                        <Column field="quantity" header="Quantity" sortable style="width: 25%"></Column>
                                        <Column field="status" header="Status" style="width: 25%">
                                            <template #body="value">
                                                <div class="statuscolorDiv">
                                                    <span :style="`color:${getColor(value.data)}`" class="badgeDiv text-center">
                                                        {{ value.data.status }}
                                                    </span>
                                                </div>
                                            </template>
                                        </Column>
                                        <Column header="Actions" field="actions">
                                            <template #body="item">
                                                <div class="operation-wrapper text-center">
                                                    <div class="actionDiv">
                                                        <v-menu>
                                                            <template v-slot:activator="{ props }">
                                                                <span :id="item.data.id" v-bind="props" class="optionsaction">...</span>
                                                            </template>
                                                            <v-list>
                                                                <div v-if="item.data.status=='In Process'">
                                                                    <div v-for="(itemdata, i) in itemsdata" :key="i">
                                                                        <v-list-item class="action-list-item" v-if="this.usertype == itemdata.user && itemdata.title == 'View Details'">
                                                                            <v-list-item-title>
                                                                                <router-link :to="{path:itemdata.url, query:{'quoteno': item.data.quoteno}}">
                                                                                    <span>{{itemdata.title }}</span>
                                                                                </router-link>
                                                                            </v-list-item-title>
                                                                        </v-list-item>
                                                                        <v-list-item v-else-if="this.usertype == itemdata.user && itemdata.title == 'Delete'" @click="deleteuser(item.data.id)" class="action-list-item">
                                                                            <v-list-item-title>
                                                                                <router-link to="#"> <span>{{ itemdata.title }}</span></router-link>
                                                                            </v-list-item-title>
                                                                        </v-list-item>
                                                                    </div>
                                                                </div>
                                                                <div v-else>
                                                                    <div v-for="(item2, i) in itemseditated" :key="i">
                                                                        <v-list-item class="action-list-item" v-if="this.usertype == item2.user && item2.title == 'View Details'">
                                                                            <v-list-item-title>
                                                                                <router-link :to="{path:item2.url, query:{'reqid':item.data.reqid, 'prodid':item.data.prodid, 'custid':this.custid}}">
                                                                                    <span>{{ item2.title }}</span>
                                                                                </router-link>
                                                                            </v-list-item-title>
                                                                        </v-list-item>
                                                                        <v-list-item v-else-if="item2.user == 'Admin' && this.usertype == item2.user && item2.title == 'Delete'" @click.prevent="deleteuser(item.data.id)" class="action-list-item">
                                                                            <v-list-item-title>
                                                                                <router-link to="#"> <span>{{ item2.title }}</span></router-link>
                                                                            </v-list-item-title>
                                                                        </v-list-item>
                                                                        <v-list-item v-else-if="item2.user == 'Supplier' && this.usertype == item2.user && item2.title == 'Delete'" @click.prevent="cancelquote(item.data.id)" class="action-list-item">
                                                                            <v-list-item-title>
                                                                                <router-link to="#"> <span>Delete</span></router-link>
                                                                            </v-list-item-title>
                                                                        </v-list-item>
                                                                    </div>
                                                                </div>
                                                            </v-list>
                                                        </v-menu>
                                                    </div>
                                                </div>
                                            </template>
                                        </Column>
                                        <template #empty v-if="this.testflag == ''">
                                        </template>
                                        <template #empty v-else>
                                            <div class="messagediv mt-8">
                                                <h3>No Data Found</h3>
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
    </div>
</div>
</template>

<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
import {
    Header,
    Item,
    ClickRowArgument
} from "vue3-easy-data-table";
export default {
    name: 'QuotesListTable',
    components: {
        LoaderComponent
    },
    data() {
        return {
            itemsdata: [{
                    user: 'Admin',
                    title: 'View Details',
                    url: '/admin/resp-details'
                },
                {
                    user: 'Admin',
                    title: 'Delete',
                    url: '#'
                },
                {
                    user: 'Supplier',
                    title: 'View Details',
                    url: '/vendor/resp-details'
                },
                {
                    user: 'Supplier',
                    title: 'Delete',
                    url: '#'
                },
            ],
            itemseditated: [{
                    user: 'Admin',
                    title: 'View Details',
                    url: '/admin/quote-details'
                },
                {
                    user: 'Admin',
                    title: 'Delete',
                    url: '#'
                },
                {
                    user: 'Supplier',
                    title: 'View Details',
                    url: '/vendor/quote-details'
                },
                {
                    user: 'Supplier',
                    title: 'Delete',
                    url: '#'
                },
            ],
            src: require('@/assets/img/loading.gif'),
            showaddModal: false,
            usertype: '',
            items: [],
            headers: [{
                    text: "Requested ID",
                    value: "reqid",
                    sortable: true
                },
                {
                    text: "ReqDate",
                    value: "reqdate",
                    sortable: true
                },
                {
                    text: "ExpectedDate",
                    value: "expecteddate",
                    sortable: true
                },
                {
                    text: "Category&SubCategory",
                    value: "category",
                    sortable: true
                },
                {
                    text: "Product",
                    value: "product",
                    sortable: true,
                },
                {
                    text: "Quantity",
                    value: "quantity",
                    sortable: true
                },
                {
                    text: "Status",
                    value: "status",
                    sortable: true
                },
                {
                    text: "Action",
                    value: "action",
                    sortable: true
                }
            ],
            customerreqdate: '',
            quoteno: '',
            category: '',
            product: '',
            testflag: '',
            custid: '',
            loader: false,
            productoptions: [],
            categoryoptions: [],
            cancelquotelist: [],
            quoteListData: []
        }
    },
    methods: {
        getColor(data) {
            if (data.status === 'Pending') {
                return "#f00"
            } else if (data.status === 'New') {
                return "#00f"
            } else if (data.status === 'Approved') {
                return "teal"
            } else if (data.status === 'Delivered') {
                return "rgb(7 197 7)"
            } else if (data.status === 'InProgress') {
                return "Orange"
            } else if (data.status === 'InShipping') {
                return "rgb(187 107 5)"
            } else if (data.status === 'Cancelled') {
                return "crimson"
            } else {
                return "rgb(1, 185, 1)"
            }
        },

        async fetchQuoteList(status) {
            var loginid = localStorage.getItem('loginid');
            var date = document.getElementById('datepick').value;
            let formData = new FormData();
            formData.append('search_by_quote_id', this.quoteno);
            formData.append('categoryname', this.category.id != undefined ? this.category.id : '');
            formData.append('product', this.product.value != undefined ? this.product.value : '');
            formData.append('reqdate', date);
            formData.append('user_id', loginid);
            if (this.usertype == 'Admin') {
                formData.append('usertype', 'Admin');
            } else {
                formData.append('usertype', 'Supplier');
            }
            var token = localStorage.getItem("token");
            const headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            };
            this.loader = true;
            this.testflag = '';
            await this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + '/get-reqquote', formData, {
                        headers
                    })
                .then(response => {
                    if (response.status == 200) {
                        if (response.data) {
                            this.testflag = 'Data Found';
                        }
                        this.quoteListData = response.data.data;
                        if (this.usertype == 'Admin') {
                            this.items = response.data.data;
                            this.loader = false;
                            this.items = this.items.map((el) => {
                                this.custid = el.customerid;
                                return {
                                    id: el.id,
                                    prodid: el.product,
                                    reqid: el.id,
                                    reqdate: el.created_at.split('T')[0],
                                    expecteddate:el.requiredtime.split(' ')[0],
                                    category: el.quoteproductname[0].quotesubcategoryname[0].categoryname[0].name + ' / ' +
                                        el.quoteproductname[0].quotesubcategoryname[0].name,
                                    product: el.quoteproductname[0].name,
                                    quantity: el.qty + ' ' + (el.unit_of_measurement).split('-')[1],
                                    status: el.status
                                }
                            });
                        }
                        if (status == 'search') {
                            this.getCancelQuote();
                        }
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
        async getCancelQuote() {
            var array = [];
            var user_id = localStorage.getItem('loginid');
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.loader = true;
            await this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/get-cancelquote/${user_id}`, {
                    headers
                })
                .then(response => {
                    if (response.status == 200) {
                        this.loader = false;
                        this.cancelquotelist = response.data.data;
                        var reqData = [];
                        if (this.usertype == 'Supplier') {
                            const resultData = this.quoteListData.filter(item2 =>
                                !this.cancelquotelist.some(
                                    item1 =>
                                    item1.quote_id === item2.id &&
                                    item1.status === "Cancelled"
                                )
                            );
                            this.items = resultData.map((el) => {
                                console.log
                                ('getquote--el- ' , el);
                                this.custid = el.customerid;
                                return {
                                    id: el.id,
                                    reqid: el.id,
                                    reqdate: el.created_at.split('T')[0],
                                    expecteddate:el.requiredtime.split(' ')[0],
                                    category: el.quoteproductname[0].quotesubcategoryname[0].categoryname[0].name + ' / ' +
                                        el.quoteproductname[0].quotesubcategoryname[0].name,
                                    product: el.quoteproductname[0].name,
                                    quantity: el.qty + ' ' + (el.unit_of_measurement).split('-')[1],
                                    status: el.status
                                }
                            });
                        }
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
        async suppcatlist() {
            var catArray = [];
            var subcatArray = [];
            var prodArray = [];
            var token = localStorage.getItem("token");
            let supplier_id = localStorage.getItem('loginid');
            let formData = new FormData();
            formData.append('supplier_id', supplier_id);
            await this.axios.post(process.env.VUE_APP_API_ENDPOINT + '/suppcatlist',
                    formData, {
                        headers: {
                            'Authorization': 'Bearer ' + token,
                            'Content-Type': 'multipart/form-data',
                        }
                    })
                .then(response => {
                    var data = response.data.data;
                    Object.values(data).forEach(value => {
                        const foundCategory = catArray.some(el => el.title === value.product_details[0].subcategoryname[0].categoryname[0].name);
                        prodArray.push({
                            'value': value.product_details[0].id,
                            "title": value.product_details[0].name
                        });
                        if (!foundCategory) {
                            catArray.push({
                                'id': value.product_details[0].subcategoryname[0].categoryname[0].id,
                                "title": value.product_details[0].subcategoryname[0].categoryname[0].name
                            });
                        } else {
                            return;
                        }
                    });
                    this.categoryoptions = catArray;
                    this.productoptions = prodArray;
                })
                .catch(err => {});
        },
        deleteuser(id) {
            let token = localStorage.getItem("token");
            const headers = {
                'Authorization': 'Bearer ' + token,
            };
            this.$swal({
                title: 'Do you want to delete this request?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes Delete it!',
                cancelButtonText: 'No, Keep it!',
                showCloseButton: true,
                showLoaderOnConfirm: true,
                customClass: 'swal-wide warningswal'
            }).then((result) => {
                if (result.value) {
                    this.axios
                        .delete(
                            process.env.VUE_APP_API_ENDPOINT + `/delete-reqquote/${id}`, {
                                headers
                            })
                        .then(response => {
                            this.fetchQuoteList();
                        })
                        .catch((error) => {
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
                        })
                } else {}
            });
        },
        cancelquote(id) {
            var userid = localStorage.getItem('loginid');
            var quoteid = id;
            let formData = new FormData();
            formData.append('quoteid', quoteid);
            formData.append('userid', userid);
            this.$swal({
                title: 'Do you want to delete this request?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes Delete it!',
                cancelButtonText: 'No, Keep it!',
                showCloseButton: true,
                showLoaderOnConfirm: true,
                customClass: 'swal-wide warningswal'
            }).then((result) => {
                if (result.value) {
                    this.axios.post(process.env.VUE_APP_API_ENDPOINT + '/cancelquote', formData, {
                            headers: {
                                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        .then((response) => {
                            this.fetchQuoteList();
                            this.getCancelQuote();
                        })
                        .catch((error) => {
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
                        })
                } else {}
            });
        },
        resetSearchField() {
            this.quoteno = "";
            this.category = "";
            this.product = "";
            document.getElementById('datepick').value = "";
            this.fetchQuoteList();
            this.getCancelQuote();
        },
        refreshData() {
            this.fetchQuoteList();
            this.getCancelQuote();
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
                                'id': value.id,
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
        async allproducts() {
            var array = [];
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + '/allProduct', {
                    headers
                })
                .then(response => {
                    if (response.status == 200) {
                        Object.values(response.data.data).forEach(value => {
                            array.push({
                                'value': value.id,
                                "title": value.name
                            });
                        });
                        this.productoptions = array;
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
    },
    mounted() {
        this.usertype = localStorage.getItem('userType');
        this.fetchQuoteList();
        if (this.usertype == 'Supplier') {
            this.getCancelQuote();
            this.suppcatlist();
        }
        if (this.usertype == 'Admin') {
            this.allcategory();
            this.allproducts();
        }
    }
};
</script>

<style lang="scss" scoped>
.dropdownDiv {
    padding: 0px 0px 0px 0px !important;
}

#productDropdown {
    color: #7b7575 !important;
}

.dropdownIcom {
    right: 25px !important;
}
</style>

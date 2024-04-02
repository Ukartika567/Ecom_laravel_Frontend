<template>
<LoaderComponent v-if="this.loader" />
<div class="container userDashboard">
    <div class="row">
        <div class="col-nd-7 col-sd-12 col-md-12 dashboardDiv1">
            <div class="headContainerdiv mb-0">
                <div class="row">
                    <div class="col-md-12">
                        <div class="ps-block__left imgmaindiv headText">
                            Dashboard
                            <div class="tableRefresher" @click.prevent="refreshData">
                                <font-awesome-icon :icon="['fas', 'rotate-right']" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sls custdashboardDiv">
                <div id="sl_434986" class="sl">
                    <div class="sl-content orderContentDiv">
                        <div id="sn_h_tabs" class="m-t-25 ui-tabs-scroll ui-tabs ui-corner-all 
                            ui-widget ui-widget-content">
                            <TabsDiv class="OrdersTab">
                                <TabDiv name="Request List">
                                    <div class="sl-content tabContentDiv">
                                        <article class="ps-post ps-post--small-thumbnail">
                                            <div class="ps-post__content">
                                                <div class="table-responsive ps-table mt-0 custquotesListTable">
                                                    <DataTable class="customize-table" :value="quoteslist" paginator :rows="5"   
                                                        :rowsPerPageOptions="[5, 10, 50, 100, 1000]" tableStyle="min-width: 50rem"
                                                        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport 
                                                            NextPageLink LastPageLink" currentPageReportTemplate="{first} to {last} of {totalRecords}"
                                                            >
                                                            <Column field="quoteno" header="Requested ID" sortable  style="width: 25%"></Column>
                                                            <Column field="category" header="Category / SubCategory" sortable  style="width: 25%"></Column>
                                                            <Column field="product" header="Product" sortable  style="width: 25%"></Column>
                                                            <Column field="quantity" header="Quantity" sortable  style="width: 25%"></Column>
                                                            <Column field="deliverytime" header="Req.Date" sortable  style="width: 25%"></Column>
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
                                                                    <div class="operation-wrapper showDetail">
                                                                        <div class="actionDiv">
                                                                            <v-menu>
                                                                                <template v-slot:activator="{ props }">
                                                                                    <span :id="item.data.id" v-bind="props" class="optionsaction">...</span>
                                                                                </template>
                                                                                <v-list>
                                                                                    <div v-for="(item2, i) in itemsdata" :key="i">
                                                                                        <v-list-item class="action-list-item" v-if="item2.title === 'View Details'" 
                                                                                        @click.prevent="showDailog(item.data.quoteno, 
                                                                                        item.data.category,
                                                                                        item.data.product, item.data.quantity, 
                                                                                        item.data.expected_date, item.data.status,
                                                                                        'Expected')">
                                                                                            <v-list-item-title>
                                                                                                <router-link to="#">
                                                                                                    <span>{{ item2.title }}</span>
                                                                                                </router-link>
                                                                                            </v-list-item-title>
                                                                                        </v-list-item>
                                                                                        <v-list-item v-else @click="deletequotes(item.data.id)" class="action-list-item">
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
                                                                <img :src="src" style="width: 70px; height: 70px;" />
                                                            </template>
                                                            <template #empty v-else>
                                                                <div class="messagediv mt-8">
                                                                    <h3>No Data Found</h3>
                                                                </div>
                                                            </template>
                                                    </DataTable>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </TabDiv>
                                <TabDiv name="Response List">
                                    <div class="sl-content tabContentDiv">
                                        <article class="ps-post ps-post--small-thumbnail">
                                            <div class="ps-post__content">
                                                <div class="table-responsive ps-table mt-0 custquotesListTable">
                                                    <DataTable class="customize-table" :value="respquotelist" paginator :rows="5"   
                                                    :rowsPerPageOptions="[5, 10, 50, 100, 1000]" tableStyle="min-width: 50rem"
                                                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport 
                                                        NextPageLink LastPageLink" currentPageReportTemplate="{first} to {last} of {totalRecords}"
                                                        >
                                                        <Column field="reqid" header="Requested Id" sortable  style="width: 25%"></Column>
                                                        <Column field="category" header="Category / SubCategory" sortable  style="width: 25%"></Column>
                                                        <Column field="product" header="Product" sortable  style="width: 25%"></Column>
                                                        <Column field="quantity" header="Quantity" sortable  style="width: 25%"></Column>
                                                        <Column field="response" header="Supplier Response" sortable  style="width: 25%">
                                                            <template #body="item">
                                                                <router-link :to="{path:'/buyer/supp-resp', query:{'reqid':item.data.reqid,'quoteid':item.data.quoteid,'cancelorder':(item.data.status=='Cancelled'?'cancelorder':'')}}" class="respoptionText mt-0 mb-0" :id="item.data.id">
                                                                    Responses
                                                                </router-link>
                                                            </template>
                                                        </Column>
                                                        <Column field="deliverytime" header="Resp.Date" sortable  style="width: 25%"></Column>
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
                                                                <div class="operation-wrapper showDetail">
                                                                <div class="actionDiv">
                                                                    <v-menu>
                                                                        <template v-slot:activator="{ props }">
                                                                            <span :id="item.data.quoteid" v-bind="props" class="optionsaction">...</span>
                                                                        </template>
                                                                        <v-list>
                                                                            <div v-for="(item2, i) in itemsdata" :key="i">
                                                                                <v-list-item class="action-list-item" v-if="item2.title === 'View Details'" @click.prevent="showDailog(item.data.quoteno, item.data.category, item.data.product, item.data.quantity, item.data.expected_date, item.data.status, 'Response') ">
                                                                                    <v-list-item-title>
                                                                                        <router-link to="#">
                                                                                            <span>{{ item2.title }}</span>
                                                                                        </router-link>
                                                                                    </v-list-item-title>
                                                                                </v-list-item>
                                                                                <v-list-item v-else @click="deletequotes(item.data.quoteid)" class="action-list-item">
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
                                                            <img :src="src" style="width: 70px; height: 70px;" />
                                                        </template>
                                                        <template #empty v-else>
                                                            <div class="messagediv mt-8">
                                                                <h3>No Data Found</h3>
                                                            </div>
                                                        </template>
                                                    </DataTable>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </TabDiv>
                                <TabDiv name="Orders List">
                                    <div class="sl-content tabContentDiv">
                                        <article class="ps-post ps-post--small-thumbnail">
                                            <div class="ps-post__content">
                                                <div class="table-responsive ps-table mt-0 custquotesListTable">
                                                    <DataTable class="customize-table" :value="approveditems" paginator :rows="5"   
                                                    :rowsPerPageOptions="[5, 10, 50, 100, 1000]" tableStyle="min-width: 50rem"
                                                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport 
                                                        NextPageLink LastPageLink" currentPageReportTemplate="{first} to {last} of {totalRecords}"
                                                        >
                                                        <Column field="orderid" header="Order Id" sortable  style="width: 25%"></Column>
                                                        <Column field="quoteid" header="Quote Id" sortable  style="width: 25%"></Column>
                                                        <Column field="category" header="Category / SubCategory" sortable  style="width: 25%"></Column>
                                                        <Column field="product" header="Product" sortable  style="width: 25%"></Column>
                                                        <Column field="quantity" header="Quantity" sortable  style="width: 25%"></Column>
                                                        <Column field="invoice" header="Invoice" sortable  style="width: 25%">
                                                            <template #body="item">
                                                                <router-link
                                                                    :to="{path:'/buyer/approve-supp-resp', 
                                                                    query:{'reqid':item.data.reqid, 'quoteid':item.data.quoteid}}"
                                                                    v-if="item.data.status=='Approved'" class="respoptionText mt-0 mb-0" :id="item.data.reqid">
                                                                        Responses
                                                                </router-link>
                                                                <router-link :to="{path:'/buyer/estimated-invoice', 
                                                                query:{'reqid':item.data.reqid,'quoteid':item.data.quoteid,'orderid': item.data.orderid}}" v-if="item.data.status=='InShipping'" class="respoptionText mt-0 mb-0" :id="item.data.reqid">
                                                                    Invoice
                                                                </router-link>
                                                                <router-link :to="{path:'/buyer/invoice-table', 
                                                                query:{'reqid':item.data.reqid,'quoteid':item.data.quoteid, 'orderid': item.data.orderid}}" v-if="item.data.status=='Delivered'" class="respoptionText mt-0 mb-0" :id="item.data.reqid">
                                                                    Invoice
                                                                </router-link>
                                                            </template>
                                                        </Column>
                                                        <Column field="status" header="Status" style="width: 25%">
                                                            <template #body="value">
                                                                <div class="statuscolorDiv">
                                                                    <span :style="`color:${getColor(value.data)}`" class="badgeDiv text-center">
                                                                        {{ value.data.status }}
                                                                    </span>
                                                                </div>
                                                            </template>
                                                        </Column>
                                                        <Column field="deliverytime" header="Order Date" sortable  style="width: 25%"></Column>
                                                        <Column header="Actions" field="actions">
                                                            <template #body="item">
                                                                <div class="operation-wrapper showDetail">
                                                                    <div class="actionDiv">
                                                                        <v-menu>
                                                                            <template v-slot:activator="{ props }">
                                                                                <span :id="item.data.reqid" v-bind="props" class="optionsaction">...</span>
                                                                            </template>
                                                                            <v-list>
                                                                                <div v-for="(item2, i) in itemsdata" :key="i">
                                                                                    <v-list-item class="action-list-item" v-if="item2.title === 'View Details'" @click.prevent="showDailog(item.data.quoteno, item.data.category, item.data.product, item.data.quantity, item.data.expected_date, item.data.status, 'Approved') ">
                                                                                        <v-list-item-title>
                                                                                            <router-link to="#">
                                                                                                <span>{{ item2.title }}</span>
                                                                                            </router-link>
                                                                                        </v-list-item-title>
                                                                                    </v-list-item>
                                                                                    <v-list-item v-else-if="item.data.status == 'Delivered'" @click="deletequotes(item.data.reqid)" class="action-list-item">
                                                                                        <v-list-item-title>
                                                                                            <router-link to="#"><span>{{ item2.title }}</span></router-link>
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
                                                            <img :src="src" style="width: 70px; height: 70px;" />
                                                        </template>
                                                        <template #empty v-else>
                                                            <div class="messagediv mt-8">
                                                                <h3>No Data Found</h3>
                                                            </div>
                                                        </template>
                                                    </DataTable>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </TabDiv>
                            </TabsDiv>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<QuotesDetailModal :visible="showModal" :quoteno="this.quoteno" :category="this.category" :product="this.product" :quantity="this.quantity" 
:date="this.date" :status="this.status" :ordertype="this.ordertype" @close="showModal = false" />
</template>

<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
import QuotesDetailModal from '@/components/ModalsComponent/QutoesDetailsModal.vue'
export default {
    name: 'userDashboard',
    components: {
        QuotesDetailModal,
        LoaderComponent
    },
    data() {
        return {
            itemsdata: [{
                title: 'View Details',
            }, {
                title: 'Delete'
            }],
            showModal: false,
            usertype: '',
            quoteno: '',
            category: '',
            product: '',
            quantity: '',
            desc: '',
            date: '',
            status: '',
            ordertype: '',
            testflag: '',
            src: require('@/assets/img/loading.gif'),
            quoteslist: [],
            quoteheaders: [{
                    text: "Requested Id",
                    value: "quoteno",
                    sortable: true
                },
                {
                    text: "Category / SubCategory",
                    value: "category",
                    sortable: true
                },
                {
                    text: "Product",
                    value: "product",
                    sortable: true
                },
                {
                    text: "Quantity",
                    value: "quantity",
                    sortable: true
                },
                {
                    text: "Expected Date",
                    value: "deliverytime",
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
            respquotelist: [],
            respheaders: [{
                    text: "Requested Id",
                    value: "reqid",
                    sortable: true
                },
                {
                    text: "Category / SubCategory",
                    value: "category",
                    sortable: true
                },
                {
                    text: "Product",
                    value: "product",
                    sortable: true
                },
                {
                    text: "Quantity",
                    value: "quantity",
                    sortable: true
                },
                {
                    text: "Supplier Responses",
                    value: "response",
                    sortable: true
                },
                {
                    text: "Status",
                    value: "status",
                    sortable: true
                },
                {
                    text: "Response Date",
                    value: "deliverytime",
                    sortable: true
                },
                {
                    text: "Action",
                    value: "action",
                    sortable: true
                }
            ],
            approveditems: [],
            approvedheaders: [{
                    text: "Requested Id",
                    value: "reqid",
                    sortable: true
                },
                {
                    text: "Quotation Id",
                    value: "quoteid",
                    sortable: true
                },
                {
                    text: "Category / SubCategory",
                    value: "category",
                    sortable: true
                },
                {
                    text: "Product",
                    value: "product",
                    sortable: true
                },
                {
                    text: "Quantity",
                    value: "quantity",
                    sortable: true
                },
                {
                    text: "Estimated Invoice",
                    value: "invoice",
                    sortable: true
                },
                {
                    text: "Status",
                    value: "status",
                    sortable: true
                },
                {
                    text: "Approved date",
                    value: "deliverytime",
                    sortable: true
                },

                {
                    text: "Action",
                    value: "action",
                    sortable: true
                }
            ],
            orderid: '',
            loader:false
        };
    },
    methods: {
        showDailog(quoteno, category, product, quantity, date, status, ordertype) {
            this.showModal = true;
            this.quoteno = quoteno;
            this.category = category;
            this.product = product;
            this.quantity = quantity;
            this.date = date;
            this.status = status;
            this.ordertype = ordertype;
        },
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
        async fetchQuoteList() {
            var loginid = localStorage.getItem('loginid');
            let formData = new FormData();
            formData.append('search_by_quote_id','');
            formData.append('categoryname', '');
            formData.append('product', '');
            formData.append('reqdate', '');
            formData.append('user_id', loginid);
            formData.append('usertype','Customer');
            var token = localStorage.getItem("token");
            const headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            };
            this.loader = true;
            this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + '/get-reqquote', formData, {
                        headers
                    })
                .then(response => {
                    if(response.status == 200){
                        this.loader = false;
                        this.testflag = true;
                        this.quoteslist = response.data.data;
                        this.quoteslist = this.quoteslist.map((el) => {
                            return {
                                id: el.id,
                                quoteno: el.id,
                                deliverytime: el.created_at.split('T')[0],
                                category: el.quoteproductname[0].quotesubcategoryname[0].categoryname[0].name + ' / ' + el.quoteproductname[0].quotesubcategoryname[0].name,
                                product: el.quoteproductname[0].name,
                                quantity: el.qty +' '+ (el.unit_of_measurement).split('-')[1],
                                status: el.status,
                                expected_date: el.requiredtime.split(' ')[0]
                            }
                        });
                    }
                })
                .catch(error => {
                    if (error.response) {
                        if (error.response.status == 401 || error.response.status == 404  || error.response.status == 400) {
                            localStorage.clear();
                            if (this.$route.name != 'home') {
                                    this.$router.push({
                                    name: 'home'
                                });
                            } 
                        }
                    }
                    else{
                        if(error.message == "Network Error"){
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
        deletequotes(id) {
            var token = localStorage.getItem('token');
            const headers = {
                'Authorization': 'Bearer' + token
            }
            this.$swal({
                title: 'Do you want to delete this request?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes Delete it!',
                cancelButtonText: 'No, Keep it!',
                showCloseButton: true,
                showLoaderOnConfirm: true,
                customClass:'warningswal'
            }).then((result) => {
                if (result.value) {
                    this.axios
                        .delete(
                            process.env.VUE_APP_API_ENDPOINT + `/delete-reqquote/${id}`, {
                                headers
                            })
                        .then(response => {
                            if(response.status == 200){
                                this.fetchQuoteList();
                            }
                        })
                        .catch((error)=>{
                            if (error.response) {
                                if (error.response.status == 401 || error.response.status == 404  || error.response.status == 400) {
                                    localStorage.clear();
                                    if (this.$route.name != 'home') {
                                            this.$router.push({
                                            name: 'home'
                                        });
                                    } 
                                }
                            }
                            else{
                                if(error.message == "Network Error"){
                                    localStorage.clear();
                                    if (this.$route.name != 'home') {
                                            this.$router.push({
                                            name: 'home'
                                        });
                                    } 
                                }
                            }
                        });
                } else {
                }
            });
        },
        async fetchQuoteRespList() {
            let formData = new FormData();
            var token = localStorage.getItem("token");
            var loginid = localStorage.getItem("loginid");
            formData.append('search_by_quote_id', '');
            formData.append('productname', '');
            formData.append('user_id', loginid);
            formData.append('flag','noapproveddata');
            const headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            };
            this.loader = true;
            this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + '/searchreqresp', formData, {
                        headers
                    })
                .then(response => {
                    this.loader = false;
                    this.testflag = true;
                    this.respquotelist = response.data.data;
                    this.respquotelist = this.respquotelist.map((el) => {
                        return {
                            reqid: el.request_quote_id,
                            quoteid: el.id,
                            deliverytime: el.created_at.split(' ')[0],
                            category: el.category + ' / ' + el.subcategory,
                            product: el.productname,
                            quantity: el.min_order_qty +' '+ (el.unit_of_measurement).split('-')[1],
                            status: el.status,
                            expected_date: el.estimated_delivery_time.split(' ')[0]
                        }
                    });
                })
                .catch(err => {});
        },
        async fetchOrder() {
            let formData = new FormData();
            var token = localStorage.getItem("token");
            var user_id = localStorage.getItem('loginid');
            formData.append('categoryname', '');
            formData.append('order_id', '');
            formData.append('order_date', '');
            formData.append('user_id', user_id);
            const headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            };
            this.loader = true;
            this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + '/searchorder', formData, {
                        headers
                    })
                .then((response) => {
                    this.loader = false;
                    this.testflag = true;
                    var data = response.data.data;
                    this.approveditems = response.data.data;
                    this.approveditems = this.approveditems.map((el) => {
                        this.orderid = el.id;
                        return {
                            orderid:el.id,
                            reqid: el.request_id,
                            quoteid: el.response_id,
                            deliverytime: el.created_at.split('T')[0],
                            category: el.req_response[0].productname[0].subcategoryname[0].categoryname[0].name + ' / ' +
                                el.req_response[0].productname[0].subcategoryname[0].name,
                            product: el.req_response[0].productname[0].name,
                            quantity: el.quantity +' '+ (el.req_response[0].unit_of_measurement).split('-')[1],
                            status: el.status,
                            expected_date: el.req_response[0].estimated_delivery_time.split(' ')[0]
                        }
                    });
                })
                .catch(err => {});
        },
        refreshData(){
            this.fetchQuoteList();
            this.fetchQuoteRespList();
            this.fetchOrder();
        }
    },
    mounted() {
        this.usertype = localStorage.getItem('userType');
        this.fetchQuoteList();
        this.fetchQuoteRespList();
        this.fetchOrder();
    }
};
</script>

<style scoped>
.custdashboardDiv{
}
</style>

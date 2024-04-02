<template>
<LoaderComponent v-if="this.loader" />
<div class="ps-card">
    <div class="ps-card__content">
        <div class="werehouseContainer">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="ps-card__header respQuotesHeader">
                        <h4>Response Quotes</h4>
                    </div>
                </div>
            </div>
        <div class="form col-12 col-sm-12">
            <section class="werehouseWidget">
                <div class="widget-body bodyContainer">
                    <div class="row">
                        <div class="col-xl-12 col-12 p-0">
                            <div class="searchBoxContainer quoteSearchBox">
                                <div class="row">
                                    <div class="col mt-3 ml-0">
                                        <div class="ps-section__actions col-md-3 mb-0" style="float: left;">
                                            <input class="form-control rounded Searchbox " v-model="this.quoteno" type="search" id="example-search-input">
                                            <label class="label_form">Req. Id</label>
                                        </div>
                                        <div class="ps-section__actions col-md-3 mb-0" style="float: left;">
                                            <div class="dropdownDiv">
                                                <SingleChipsDropdown v-model="this.category" 
                                                :options="this.categoryoptions"
                                                @click.stop 
                                                optionLabel="title" filter   
                                                class="select select-sm proinpfield w-full md:w-20rem 
                                                groupmultiselect singleSelectdropdown" 
                                                style="margin: 1px !important;" />
                                                <div class="select__arrow dropdownIcom"></div>
                                                <label for="productDropdown" class="label_form">
                                                Category</label>
                                            </div>
                                        </div>
                                        <div class="ps-section__actions col-md-3 mb-0" style="float: left;">
                                            <div class="dropdownDiv">
                                                <SingleChipsDropdown v-model="this.product" 
                                                :options="this.productoptions"
                                                @click.stop 
                                                optionLabel="title" filter   
                                                class="select select-sm proinpfield w-full md:w-20rem 
                                                groupmultiselect singleSelectdropdown" 
                                                style="margin: 1px !important;" />
                                                <div class="select__arrow dropdownIcom"></div>
                                                <label for="productDropdown" class="label_form">Product Name</label>
                                            </div>
                                        </div>
                                        <div class="ps-section__actions col-md-3 mb-0" style="float: left;">
                                            <Datepicker v-model="this.respdate" :locale="locale" :upperLimit="to" 
                                            :lowerLimit="from"
                                            :clearable="true" id="datepick" class="inputField circularfield" />
                                            <label class="label_form">Resp. Date</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col ml-0 mb-3 mr-3 mt-3" style="">
                                        <div class="ps-section__actions" style="float: right;">
                                            <router-link to="#" class="ps-btn mt-0" 
                                            style="background-color: #222 !important;
                                            color:#fff;font-size: 12px;"  @click="resetSearchField">
                                                Reset
                                            </router-link>
                                        </div>
                                        <div class="ps-section__actions mr-3" style="float: right;">
                                            <router-link to="#" class="ps-btn customsearchbtn mt-0" 
                                            @click="fetchQuoteRespList">
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
                            <div class="table-responsive ps-table mt-0 resquotesTable">
                                <DataTable :value="items" showGridlines paginator :rows="5" 
                                        :rowsPerPageOptions="[5, 10, 50, 100,1000]" tableStyle="min-width: 50rem"
                                        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport 
                                            NextPageLink LastPageLink" currentPageReportTemplate="{first} to {last} of {totalRecords}"
                                            >
                                            <Column field="reqid" header="Requested ID" sortable  style="width: 25%"></Column>
                                            <Column field="respdate" header="RespDate" sortable  style="width: 25%"></Column>
                                            <Column field="category" header="Category&SubCategory" sortable  style="width: 25%"></Column>
                                            <Column field="product" header="Product" sortable  style="width: 25%"></Column>
                                            <Column field="quantity" header="Quantity" sortable  style="width: 25%"></Column>
                                            <Column field="status" header="Status" style="width: 25%">
                                                <template #body="value">
                                                    <div class="statuscolorDiv">
                                                        <span :style="`color:${getColor(value.data)}`" class="badgeDiv">
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
                                                        <div v-if="item.data.status!='Approved'">
                                                            <div v-for="(itemdata, i) in itemsdata" :key="i">
                                                                <v-list-item class="action-list-item" v-if="this.usertype == itemdata.user && itemdata.title == 'View Details'">
                                                                    <v-list-item-title>
                                                                        <router-link :to="{path:itemdata.url, query:{'quoteid': item.data.quoteid, 'reqid':item.data.reqid, 'cancelorder':(item.data.status=='Cancelled'?'cancelorder':'')}}">
                                                                            <span>{{itemdata.title }}</span>
                                                                        </router-link>
                                                                    </v-list-item-title>
                                                                </v-list-item>
                                                                <v-list-item v-else-if="this.usertype == itemdata.user && itemdata.title == 'Cancel'" @click="deleteuser(item.data.id)" class="action-list-item">
                                                                    <v-list-item-title>
                                                                        <router-link to="#"> <span>{{ itemdata.title }}</span></router-link>
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
export default {
    name: 'ResponseQuotesTable',
    components: {LoaderComponent},
    data() {
        return {
            itemsdata: [{
                    user: 'Admin',
                    title: 'View Details',
                    url: '/admin/quote-resp-details'
                },
                {
                    user: 'Admin',
                    title: 'Cancel',
                    url: '#'
                },
                {
                    user: 'Supplier',
                    title: 'View Details',
                    url: '/vendor/quote-resp-details'
                },
                {
                    user: 'Supplier',
                    title: 'Cancel',
                    url: '#'
                },
            ],
            src: require('@/assets/img/loading.gif'),
            supplier: '',
            usertype: '',
            items: [
            ],
            headers: [
               {
                text: "Requested ID",
                value: "reqid",
                sortable: true
                },
                {
                    text: "RespDate",
                    value: "respdate",
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
            quoteno:null,
            customername: '',
            suppliername: '',
            respdate:null,
            category:'',
            product:'',
            testflag:'',
            status:'',
            loader:false,
            productoptions:[],
            categoryoptions:[]
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
                return "yellow"
            } else if (data.status === 'Cancelled') {
                return "crimson"
            } else {
                return "rgb(1, 185, 1)"
            }
        },
        async fetchQuoteRespList() {
            let formData = new FormData();
            var token = localStorage.getItem("token");
            var loginid = localStorage.getItem('loginid');
            var respdate = document.getElementById('datepick').value;
            formData.append('search_by_quote_id', this.quoteno != undefined?this.quoteno:'');
            formData.append('productname', this.product.value != undefined?this.product.value:'');   //It is a  category field
            formData.append('user_id', loginid);
            formData.append('categoryname', this.category.id != undefined?this.category.id:'');
            formData.append('flag','noapproveddata');
            formData.append('response_date', respdate);
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
                    if(response.status == 200){
                        this.testflag = true;
                        this.loader = false;
                        this.items = response.data.data;
                        this.items = this.items.map((el) => {
                            var total = '$'+Number(el.whole_price_per_unit) * Number(el.min_order_qty)+'.00';
                            return {
                                reqid:el.request_quote_id,
                                quoteid: el.id,
                                respdate: el.created_at.split(' ')[0],
                                category: el.category + ' / ' + el.subcategory,
                                product:  el.productname,
                                quantity: el.min_order_qty +' '+ (el.unit_of_measurement).split('-')[1],
                                price:total,
                                status: el.status
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
        deleteuser(id) {
            let token = localStorage.getItem("token");
            const headers = {
                'Authorization': 'Bearer ' + token,
            };
            this.$swal({
                title: 'Are you sure?',
                text: 'You can\'t revert your action',
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
                            process.env.VUE_APP_API_ENDPOINT + `/delete-quote-response-detail/${id}`, {
                                headers
                            })
                        .then(response => {
                            this.$swal('Deleted', 'You successfully deleted', 'success');
                            this.fetchQuoteRespList();
                        });
                } else {
                    this.$swal('Cancelled', 'Your data still intact', 'info')
                }
            })
        },
        resetSearchField(){
            this.quoteno = null;
            this.category ="";
            this.product = "";
            this.respdate = "";
            this.fetchQuoteRespList();
        },
        async fetchOrder() {
            let formData = new FormData();
            let quoteid = '';
            if (this.$route.query.quoteid) {
                quoteid = this.$route.query.quoteid;
            }
            if(this.usertype == 'Supplier'){
               var loginid = localStorage.getItem('loginid');
            }
            formData.append('response_id',quoteid);
            formData.append('order_id', '');
            formData.append('order_date', '');
            var token = localStorage.getItem("token");
            const headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            };
            this.loader = true;
            this.axios.post(
                process.env.VUE_APP_API_ENDPOINT + `/getorder`, formData, {
                headers
            })
                .then(response => {
                    this.testflag = true;
                    this.loader = false;
                    var data = response.data.data[0];
                    for(var i=0; i<this.items.length; i++){
                        if( this.items[i].reqid ==  data.request_id){
                            this.items[i].status = 'Cancelled';
                            return;
                        }
                    }
                })
                .catch(err => { });
        },
        refreshData(){
            this.fetchQuoteRespList();
            this.fetchOrder();
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
                .catch(err => {
                });
        }
    },
    mounted() {
        this.usertype = localStorage.getItem('userType');
        this.fetchQuoteRespList();
        this.fetchOrder();
        this.suppcatlist();
    }
};
</script>

<style lang="scss" scoped>

.dropdownDiv{
    padding: 0px 0px 0px 0px !important;
}
#productDropdown{
    color: #7b7575 !important;
}
.dropdownIcom{
    right: 25px !important;
}

</style>

<template>
    <LoaderComponent v-if="this.loader" />
    <div class="tableRefresher" @click.prevent="refreshData">
        <font-awesome-icon :icon="['fas', 'rotate-right']" />
    </div>
    <div class="table-responsive ps-table  recentOrdersTable quotesListTable">
        <DataTable :value="items" showGridlines paginator :rows="5"   
                                    :rowsPerPageOptions="[5, 10, 50, 100, 1000]" tableStyle="min-width: 50rem"
                                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport 
                                        NextPageLink LastPageLink" currentPageReportTemplate="{first} to {last} of {totalRecords}"
                                     
                                        >
                                        <Column field="reqid" header="Requested ID" sortable  style="width: 25%"></Column>
                                        <Column field="reqdate" header="ReqDate" sortable  style="width: 25%"></Column>
                                        <Column field="category" header="Category&SubCategory" sortable  style="width: 25%"></Column>
                                        <Column field="product" header="Product" sortable  style="width: 25%"></Column>
                                        <Column field="quantity" header="Quantity" sortable  style="width: 25%"></Column>
                                       
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
                                                                                <router-link :to="{path:item2.url, query:{'reqid':item.data.reqid, 'custid':this.custid}}">
                                                                                    <span>{{ item2.title }}</span>
                                                                                </router-link>
                                                                            </v-list-item-title>
                                                                        </v-list-item>
                                                                        <v-list-item v-else-if="this.usertype == item2.user && item2.title == 'Delete'" @click="deleteuser(item.data.id)" class="action-list-item">
                                                                            <v-list-item-title>
                                                                                <router-link to="#"> <span>{{ item2.title }}</span></router-link>
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
</template>

<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
export default {
    name: 'TableOrdersSummary',
    components: {LoaderComponent},
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
            testflag: '',
            loader:false
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
            } else if (data.status === 'InProcess') {
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
            formData.append('search_by_quote_id', '');
            formData.append('categoryname', '');
            formData.append('product', '');
            formData.append('reqdate', '');
            formData.append('user_id', loginid);
            if(this.usertype == 'Admin'){
                formData.append('usertype','Admin');
            }
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
                        if (response.data) {
                            this.testflag = 'Data Found';
                            this.loader = false;
                        }
                        this.items = response.data.data;
                        this.items = this.items.map((el) => {
                            this.custid = el.customerid;
                            return {
                                id: el.id,
                                reqid: el.id,
                                reqdate: el.created_at.split('T')[0],
                                category: el.quoteproductname[0].quotesubcategoryname[0].categoryname[0].name + ' / ' +
                                    el.quoteproductname[0].quotesubcategoryname[0].name,
                                product: el.quoteproductname[0].name,
                                quantity: el.qty+' '+ (el.unit_of_measurement).split('-')[1],
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
        refreshData(){
            this.fetchQuoteList();
        }
    },
    mounted() {
        this.usertype = localStorage.getItem('userType');
        this.fetchQuoteList();
    }
};
</script>

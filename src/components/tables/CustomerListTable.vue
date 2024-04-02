<template>
<LoaderComponent v-if="this.loader" />
<div class="werehouseContainer">
    <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
            <div class="ps-card__header custNameHeader">
                <h4>Customer List</h4>
            </div>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
            <div class="userbtnDiv float-right mt-1">
                <div class="ps-section__actions" style="margin-right: 1px;">
                    <router-link :to="{path:'add-customer',query:{'user':'Customer'}}" class="ps-btn success addcategory">
                        <i class="icon icon-plus mr-2" />
                        Add Customer
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
                        <div class="userSearchBox">
                            <div class="row">
                                <div class="col" style="margin-top: 10px;margin-left: -4px;">
                                    <div class="ps-section__actions col-md-4 mb-4" style="float: left;left: 3px;">
                                        <input class="form-control rounded Searchbox " type="search" v-model="customerName" id="example-search-input" placeholder="Please type atleast three character">
                                        <label class="label_form">First Name</label>
                                    </div>
                                    <div class="ps-section__actions col-md-4 mb-4" style="float: left;left: 3px;">
                                        <input class="form-control rounded  Searchbox" type="search" id="example-search-input" v-model="customerEmail" placeholder="Please type atleast three character">
                                        <label class="label_form">Email</label>
                                    </div>
                                    <div class="ps-section__actions col-md-4 mb-4" style="float: left;left: 3px;">
                                        <input class="form-control rounded Searchbox" type="number" id="example-search-input" v-model="customerPhone" placeholder="Please type atleast three character">
                                        <label class="label_form">Phone No</label>
                                    </div>
                                    <div class="ps-section__actions" style="float: right; margin-right:8px; 
                                    margin-bottom:8px;">
                                        <router-link to="#" class="ps-btn" style="margin-top: -12px;
                                         background-color: #222 !important; color:#fff;font-size: 12px;" @click.prevent="resetdata">
                                            Reset
                                        </router-link>
                                    </div>
                                    <div class="ps-section__actions" style="float: right; margin-right:8px;">
                                        <router-link to="#" class="ps-btn customsearchbtn" style="margin-top: -12px;" @click.prevent="fetchCustomerData">
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
                        <div class="table-responsive ps-table mt-0 customerTable">
                            <DataTable :value="items" showGridlines paginator :rows="5" :rowsPerPageOptions="[5, 10, 50, 100, 1000]" tableStyle="min-width: 50rem" paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport 
                                NextPageLink LastPageLink" currentPageReportTemplate="{first} to {last} of {totalRecords}">
                                <Column field="customerName" header="Name" sortable style="width: 25%"></Column>
                                <Column field="userName" header="Username" sortable style="width: 25%"></Column>
                                <Column field="email" header="Email" sortable style="width: 25%"></Column>
                                <Column field="phoneNo" header="PhoneNo" sortable style="width: 25%"></Column>
                                <Column field="approval" header="Approval" sortable style="width: 25%">
                                    <template #body="item">
                                        <div class="divContent d-flex" :id="item.data.id">
                                            <div class="approvedDiv" v-if="item.data.approval == 'Approved'" @click.prevent="approvalDailog(item.data,item.data.id, 'disapproved')">
                                                <span class="approved_text mr-1" :id="'approvedText'+item.data.id" style="font-size: 11px !important;">Approved</span>
                                                <img :src="approvedimg" width="17" height="17" class="" :id="'approvedImg'+item.data.id" />
                                            </div>
                                            <div v-else class="d-flex approvalDiv" @click.prevent="approvalDailog(item.data,item.data.id,'approved')">
                                                <span class="notapprovedText mr-1" :id="'approvedText'+item.data.id" style="font-size: 11px !important;">
                                                    {{ this.approvedtext }}</span>
                                                <img :src="donotapproved" width="12" height="12" class="notApproved" :id="'notapprovedImg'+item.data.id" />
                                            </div>
                                        </div>
                                    </template>
                                </Column>
                                <Column field="regData" header="Reg.Date" sortable style="width: 25%"></Column>
                                <Column header="Actions" field="actions">
                                    <template #body="item">
                                        <div class="operation-wrapper text-center">
                                            <div class="actionDiv">
                                                <v-menu>
                                                    <template v-slot:activator="{ props }">
                                                        <span :id="item.data.id" v-bind="props" class="optionsaction">...</span>
                                                    </template>
                                                    <v-list>
                                                        <div v-for="(item2, i) in itemsdata" :key="i">
                                                            <v-list-item class="action-list-item" v-if="item2.title == 'Edit'">
                                                                <router-link :to="{path:item2.url, query:{'id':item.data.id, 'user':'Customer'}}">
                                                                    <v-list-item-title>
                                                                        <span>{{ item2.title }}</span>
                                                                    </v-list-item-title>
                                                                </router-link>
                                                            </v-list-item>
                                                            <v-list-item class="action-list-item" v-else-if="item2.title == 'View Details'">
                                                                <router-link :to="{path:item2.url, query:{'id':item.data.id,'roleid':item.data.userroleid}}">
                                                                    <v-list-item-title>
                                                                        <span>{{ item2.title }}</span>
                                                                    </v-list-item-title>
                                                                </router-link>
                                                            </v-list-item>
                                                            <v-list-item v-else @click="deleteuser(item.data.id)" class="action-list-item">
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
</template>

<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
export default {
    name: 'CustomerListTable',
    components: {
        LoaderComponent
    },
    data() {
        return {
            donotapproved: require('@/assets/img/do-not-enter.png'),
            approvedimg: require('@/assets/img/approve.png'),
            approvedtext: 'Disapproved',
            src: require('@/assets/img/loading.gif'),
            loader: false,
            itemsdata: [{
                    title: 'Edit',
                    url: '/admin/edit-customer'
                },
                {
                    title: 'Delete',
                    url: '#'
                },
                {
                    title: 'View Details',
                    url: '/admin/view-user-details'
                },
            ],
            testflag: false,
            customerPhone: '',
            customerName: '',
            customerEmail: '',
            items: [],
            headers: [{
                    text: "Name",
                    value: "customerName",
                    sortable: true
                },
                {
                    text: "Username",
                    value: "userName",
                    sortable: true
                },
                {
                    text: "Email",
                    value: "email",
                    sortable: true
                },
                {
                    text: "PhoneNo.",
                    value: "phoneNo",
                    sortable: true
                },
                {
                    text: "Approval",
                    value: "approval",
                    sortable: true
                },
                {
                    text: "Reg. Date",
                    value: "regData",
                    sortable: true
                },
                {
                    text: "Action",
                    value: "action",
                    sortable: true
                }
            ]
        }
    },
    methods: {
        EditUser() {
            this.$router.push({
                name: 'admineditcustomer',
            })
        },
        approvalDailog(item, id, approval_status) {
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            let formData = new FormData();
            formData.append('usertype', localStorage.getItem('userType'));
            this.$swal({
                type: 'warning',
                title: 'Do you want to '+ approval_status+ ' this supplier?',
                showCancelButton: true,
                confirmButtontext: 'Yes',
                cancelButtonText: 'No',
                showCloseButton: true,
                showLoaderOnConfirm: true,
                confirmButtonColor: 'rgb(2,145,2)',
                cancleButtonColor: 'red',
                customClass: 'swal-wide warningswal'
            }).then((result) => {
                if (result['isConfirmed']) {
                    this.loader = true;
                    this.axios.post(
                            process.env.VUE_APP_API_ENDPOINT + `/suppapproval/${id}`, formData, {
                                headers
                            })
                        .then(response => {
                            this.fetchCustomerData();
                        })
                        .catch((error) => {})
                } else {}
            });
        },
        async fetchCustomerData() {
            let formData = new FormData();
            if (this.customerName != '') {
                if (this.customerName.length < 3) {
                    this.$swal('', 'Please enter atleast three character', 'info');
                    return;
                }
            }
            if (this.customerEmail != '') {
                if (this.customerEmail.length < 3) {
                    this.$swal('', 'Please enter atleast three character', 'info');
                    return;
                }
            }
            if (this.customerPhone != '') {
                if (this.customerPhone.length < 3) {
                    this.$swal('', 'Please enter atleast three character', 'info');
                    return;
                }
            }
            formData.append('customername', this.customerName);
            formData.append('customeremail', this.customerEmail);
            formData.append('phoneNo', this.customerPhone);
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.loader = true;
            this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + '/CustomerList', formData, {
                        headers
                    })
                .then(response => {
                    if (response.status == 200) {
                        this.testflag = true;
                        this.loader = false;
                        this.items = response.data.data;
                        this.items = this.items.map((el) => {
                            console.log('el.customerlist[0]- ', el.customerlist.created_at);
                            return {
                                id: el.customerlist.id,
                                'userroleid': el.customerlist.role_id,
                                customerName: el.customerlist.name,
                                email: el.customerlist.email,
                                phoneNo: el.mobile,
                                approval: el.approval_status,
                                userName: el.customerlist.username,
                                regData: (el.customerlist.created_at).split('T')[0]
                            }
                        });
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
        deleteuser(id) {
            let token = localStorage.getItem("token");
            const headers = {
                'Authorization': 'Bearer ' + token,
            };
            this.$swal({
                title: 'Do you want to delete this customer?',
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
                            process.env.VUE_APP_API_ENDPOINT + `/deleteCustomer/${id}`, {
                                headers
                            })
                        .then(response => {
                            this.fetchCustomerData();
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
            })
        },
        resetdata() {
            this.customerPhone = '';
            this.customerName = '';
            this.customerEmail = '';
            this.fetchCustomerData();
        },
        refreshData() {
            this.fetchCustomerData();
        }
    },
    mounted() {
        this.fetchCustomerData();
    }
};
</script>

<style lang="scss" scoped>
.notapprovedText {
    color: crimson;
    margin-top: -2px;
}

.approved_text {
    color: rgb(1 114 1) !important;
}

.approvalDiv {
    padding: 0.4rem;
    background: #f7cedb;
    box-shadow: 0 6px 12px rgb(0 0 0 / 10%);
    cursor: pointer;
    border-radius: 5rem;
}

.approvedDiv {
    font-size: 12px;
    background: #ffffff;
    background: #b8f9bd;
    box-shadow: 0 6px 12px rgba(0 0 0 / 10%);
    border-radius: 5rem;
    padding-left: 1rem;
}
</style>

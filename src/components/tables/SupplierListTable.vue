<template>
<LoaderComponent v-if="this.loader" />
<div class="werehouseContainer">
    <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
            <div class="ps-card__header suppNameHeader">
                <h4>Supplier List</h4>
            </div>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
            <div class="userbtnDiv  float-right mt-1">
                <div class="ps-section__actions" style="margin-right: 1px;">
                    <router-link :to="{path:'add-supplier',query:{'user':'Supplier'}}" class="ps-btn success addcategory">
                        <i class="icon icon-plus mr-2" />
                        Add Supplier
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
                                        <input class="form-control rounded Searchbox " type="search" v-model="supplierName" id="example-search-input" placeholder="Please type atleast three character">
                                        <label class="label_form">First Name</label>
                                    </div>
                                    <div class="ps-section__actions col-md-4 mb-4" style="float: left;left: 3px;">
                                        <input class="form-control rounded  Searchbox" type="search" v-model="supplierEmail" id="example-search-input" placeholder="Please type atleast three character">
                                        <label class="label_form">Email</label>
                                    </div>
                                    <div class="ps-section__actions col-md-4 mb-4" style="float: left;left: 3px;">
                                        <input class="form-control rounded Searchbox" type="search" id="example-search-input" v-model="supplierPhone" placeholder="Please type atleast three character">
                                        <label class="label_form">Phone No.</label>
                                    </div>
                                    <div class="ps-section__actions" style="float: right; margin-right:8px; margin-bottom:8px;">
                                        <router-link to="#" class="ps-btn success" style="margin-top: -12px; background-color: #222 !important; 
                                        color:#fff;font-size: 12px;" @click.prevent="resetdata">
                                            Reset
                                        </router-link>
                                    </div>
                                    <div class="ps-section__actions" style="float: right; margin-right:8px;">
                                        <router-link to="#" class="ps-btn success supplsearchbtn" style="margin-top: -12px;" @click.prevent="fetchSupplierData">
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
                        <div class="table-responsive ps-table mt-0 supplierTable">
                            <DataTable :value="items" showGridlines paginator :rows="5" :rowsPerPageOptions="[5, 10, 50, 100, 1000]" tableStyle="min-width: 50rem" paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport 
                                        NextPageLink LastPageLink" currentPageReportTemplate="{first} to {last} of {totalRecords}">
                                <Column field="supplierName" header="Name" sortable style="width: 25%"></Column>
                                <Column field="userName" header="Username" sortable style="width: 25%"></Column>
                                <Column field="email" header="Email" sortable style="width: 25%"></Column>
                                <Column field="phoneNo" header="PhoneNo" sortable style="width: 25%"></Column>
                                <Column field="creditPoint" header="CreditPoints" sortable style="width: 25%"></Column>
                                <Column field="approval" header="Approval" sortable style="width: 25%">
                                    <template #body="dataitem">
                                        <div class="divContent d-flex" :id="dataitem.data.id">
                                            <div class="approvedDiv" v-if="dataitem.data.approval == 'Approved'" @click.prevent="approvalDailog(dataitem.data,dataitem.data.id, 'disapproved')">
                                                <span class="approved_text mr-1" :id="'approvedText'+dataitem.data.id" style="font-size: 11px !important;">Approved</span>
                                                <img :src="approvedimg" width="17" height="17" class="" :id="'approvedImg'+dataitem.data.id" />
                                            </div>
                                            <div v-else class="d-flex approvalDiv" @click.prevent="approvalDailog(dataitem.data,dataitem.data.id,'approved')">
                                                <span class="notapprovedText mr-1" :id="'approvedText'+dataitem.data.id" style="font-size: 11px !important;">
                                                    {{ this.approvedtext }}</span>
                                                <img :src="donotapproved" width="12" height="12" class="notApproved" :id="'notapprovedImg'+dataitem.data.id" />
                                            </div>
                                        </div>
                                    </template>
                                </Column>
                                <Column field="regData" header="Reg.Date" sortable style="width: 25%"></Column>
                                <Column header="Actions" field="actions">
                                    <template #body="dataitem">
                                        <div class="operation-wrapper text-center">
                                            <div class="actionDiv">
                                                <v-menu>
                                                    <template v-slot:activator="{ props }">
                                                        <span :id="dataitem.data.id" v-bind="props" class="optionsaction">...</span>
                                                    </template>
                                                    <v-list>
                                                        <div v-for="(item2, i) in itemsdata" :key="i">
                                                            <v-list-item class="action-list-item" v-if="item2.title == 'Edit'">
                                                                <router-link :to="{path:item2.url, query:{'id':dataitem.data.id, 'user':'Supplier'}}">
                                                                    <v-list-item-title>
                                                                        <span>{{ item2.title }}</span>
                                                                    </v-list-item-title>
                                                                </router-link>
                                                            </v-list-item>
                                                            <v-list-item class="action-list-item" v-else-if="item2.title == 'View Details'">
                                                                <v-list-item-title>
                                                                    <router-link :to="{path:item2.url, query:{'id':dataitem.data.id, 'roleid':dataitem.data.userroleid}}">
                                                                        <span>{{ item2.title }}</span>
                                                                    </router-link>
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                            <v-list-item v-else class="action-list-item" @click="deleteuser(dataitem.data.id)">
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
    name: 'SupplierListTable',
    components: {
        LoaderComponent
    },
    data() {
        return {
            donotapproved: require('@/assets/img/do-not-enter.png'),
            approvedimg: require('@/assets/img/approve.png'),
            approvedtext: 'Disapproved',
            loader: false,
            itemsdata: [{
                    title: 'Edit',
                    url: '/admin/edit-supplier'
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
            name: '',
            email: '',
            phoneNo: '',
            items: [],
            headers: [{
                    text: "Name",
                    value: "supplierName",
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
                    text: "Phone No.",
                    value: "phoneNo",
                    sortable: true
                },
                {
                    text: "Credit Points",
                    value: "creditPoint",
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
            ],
            approved: false,
            testflag: '',
            supplierName: '',
            supplierEmail: '',
            supplierPhone: ''
        }
    },
    methods: {
        editSupplier() {
            this.$router.push({
                name: 'admineditsupplier',
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
                            this.fetchSupplierData();
                        })
                        .catch((error) => {})
                } else {}
            });
        },
        async fetchSupplierData() {
            let formData = new FormData();
            if (this.supplierName != '') {
                if (this.supplierName.length < 3) {
                    this.$swal('', 'Please enter atleast three character', 'info');
                    return;
                }
            }
            if (this.supplierEmail != '') {
                if (this.supplierEmail.length < 3) {
                    this.$swal('', 'Please enter atleast three character', 'info');
                    return;
                }
            }
            if (this.supplierPhone != '') {
                if (this.supplierPhone.length < 3) {
                    this.$swal('', 'Please enter atleast three character', 'info');
                    return;
                }
            }
            formData.append('suppliername', (this.supplierName).trim());
            formData.append('supplieremail', (this.supplierEmail).trim());
            formData.append('phoneno', (this.supplierPhone).trim())
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'multipart/form-data'
            };
            this.loader = true;
            this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + '/SupplierList', formData, {
                        headers
                    })
                .then(response => {
                    if (response.status == 200) {
                        if (response.data) {
                            this.testflag = 'Data Found';
                            this.loader = false;
                        }
                        this.items = response.data.data;
                        this.items = this.items.map((el) => {
                            return {
                                id: el.supplierlist[0].id,
                                userroleid: el.supplierlist[0].role_id,
                                supplierName: el.supplierlist[0].name,
                                email: el.supplierlist[0].email,
                                phoneNo: el.mobile,
                                userName: el.supplierlist[0].username,
                                approval: el.approval_status,
                                creditPoint: el.credit_points,
                                regData: (el.supplierlist[0].created_at).split('T')[0]
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
                title: 'Do you want to delete this supplier?',
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
                            this.fetchSupplierData();
                        });
                } else {}
            })
        },
        resetdata() {
            this.supplierName = '';
            this.supplierPhone = '';
            this.supplierEmail = '';
            this.fetchSupplierData();
        },
        refreshData() {
            this.fetchSupplierData();
        }
    },
    mounted() {
        this.fetchSupplierData();
    },
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

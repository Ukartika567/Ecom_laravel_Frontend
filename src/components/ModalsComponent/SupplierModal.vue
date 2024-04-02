<template>
<v-row justify="center">
    <v-dialog persistent v-model="showSuppModal" class="modalShowContainer" :class="{'suppmodalDiv':this.$route.path.includes('/admin/quote-details'), 
        'supprespmodalDiv':this.$route.path.includes('/vendor/quote-details')}">
        <v-card>
            <v-card-title>
                <span class="text-h5 supplmodalHead" v-if="this.$route.path.includes('/admin/quote-details')">
                    <h4>Suppliers</h4>
                </span>
                <span class="text-h5 supplmodalHead" v-if="this.$route.path.includes('/vendor/quote-details')">
                    <h4>Response for Quote</h4>
                </span>
                <font-awesome-icon :icon="['fasl', 'xmark']" class="modalCloseIcon" @click="closemodal" />
            </v-card-title>
            <v-card-text>
                <v-container>
                    <form class="row" v-if="this.$route.path.includes('/admin/quote-details')">
                        <v-row>
                            <div class="">
                                <div class="row">
                                    <div class="col mt-3 ml-0">
                                        <div class="ps-section__actions col-md-4 mb-0" style="float: left;">
                                            <input class="form-control rounded Searchbox " type="search" id="example-search-input" placeholder="Supplier" v-model="supplierName">
                                        </div>
                                        <div class="ps-section__actions col-md-4 mb-0" style="float: left;">
                                            <input class="form-control rounded  Searchbox" type="search" id="example-search-input" placeholder="Credit Points">
                                        </div>
                                        <div class="ps-section__actions col-md-4 mb-0" style="float: left;">
                                            <input class="form-control rounded Searchbox" type="search" id="example-search-input" placeholder="Location">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col ml-0 mb-3 mr-3 mt-3" style="">
                                        <div class="ps-section__actions" style="float: right;">
                                            <button class="ps-btn mt-0" type="button" style="background-color: #222 
                                            !important; color:#fff;font-size: 12px;" @click.prevent="resetData">
                                                Reset
                                            </button>
                                        </div>
                                        <div class="ps-section__actions mr-3" style="float: right;">
                                            <button type="button" class="ps-btn customsearchbtn mt-0" @click.prevent="fetchSupplierData">
                                                Search
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col suppDiv" v-if="this.$route.path.includes('/admin/quote-details')">
                                <div class="table-responsive ps-table mt-0 quotesListTable">
                                    <DataTable :value="supplerList" @click.stop showGridlines paginator :rows="5" :rowsPerPageOptions="[5, 10, 50, 100, 1000]" tableStyle="min-width: 50rem" paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport 
                                        NextPageLink LastPageLink" currentPageReportTemplate="{first} to {last} of {totalRecords}">
                                        <Column field="name" header="Name" sortable style="width: 25%"></Column>
                                        <Column field="creditPoints" header="Credit Points" sortable style="width: 25%"></Column>
                                        <Column field="location" header="Location" sortable style="width: 25%"></Column>
                                        <Column header="Actions" field="actions">
                                            <template #body="item">
                                                <div class="operation-wrapper text-center supplierCheck">
                                                    <input type="checkbox" :id="'supp1'+ item.data.id" class="suppCheckbox checkbox style-2" :checked="item.data.action" :disabled="item.data.action" required />
                                                    <p id="sudo" style="color:green;font-size:20px;"></p>
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
                        </v-row>
                    </form>
                    <form class="row" v-if="this.$route.path.includes('/vendor/quote-details')">
                        <router-link class="btn btn-default pull-left addrowbtn" to="#" @click="addprod(item)">
                            <i class="icon icon-plus plusicon mr-1" />
                            Add
                        </router-link>
                        <div class="table-responsive ps-table mt-0 resptable">
                            <table class="table table-bordered resptable">
                                <thead>
                                    <tr>
                                        <th scope="col">Category</th>
                                        <th scope="col">Subcategory</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price/unit</th>
                                        <th scope="col">Discount</th>
                                        <th scope="col">Tax</th>
                                        <th scope="col">ShipCharges</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="key in count" :key="key">
                                        <td>
                                            <input type="text" class="form-control inputField invoiceinpfield" :id="'catfield'+key" v-model="items[key-1].category" required>
                                            <span :class="'catfield'+key" class="d-none">{{ editedItem[key-1].category }}</span>
                                        </td>
                                        <td>
                                            <input type="text" class="form-control inputField invoiceinpfield" :id="'subcatfield'+key" v-model=items[key-1].subcategory required>
                                            <span :class="'subcatfield'+key" class="d-none">{{ editedItem[key-1].subcategory }}</span>
                                        </td>
                                        <td>
                                            <input type="text" class="form-control inputField invoiceinpfield" :id="'prod'+key" v-model=items[key-1].prod required>
                                            <span :class="'prod'+key" class="d-none">{{ editedItem[key-1].prod }}</span>
                                        </td>
                                        <td>
                                            <input type="number" class="form-control inputField invoiceinpfield" :id="'quantity'+key" v-model=items[key-1].quantity required>
                                            <span :class="'quantity'+key" class="d-none">{{ editedItem[key-1].quantity }}</span>
                                        </td>
                                        <td>
                                            <input type="number" class="form-control inputField 
                                                        invoiceinpfield" :id="'unitprice'+key" v-model=items[key-1].unitprice required>
                                            <span :class="'unitprice'+key" class="d-none">{{ editedItem[key-1].unitprice }}</span>
                                        </td>
                                        <td>
                                            <input type="number" class="form-control inputField invoiceinpfield" :id="'discount'+key" v-model=items[key-1].discount required>
                                            <span :class="'discount'+key" class="d-none">{{ editedItem[key-1].discount }}</span>
                                        </td>
                                        <td>
                                            <input type="number" class="form-control inputField invoiceinpfield" :id="'tax'+key" v-model=items[key-1].tax required>
                                            <span :class="'tax'+key" class="d-none">{{ editedItem[key-1].tax }}</span>
                                        </td>
                                        <td>
                                            <input type="number" class="form-control inputField invoiceinpfield" :id="'shipcharge'+key" v-model=items[key-1].shipcharge required>
                                            <span :class="'shipcharge'+key" class="d-none">{{ editedItem[key-1].shipcharge }}</span>
                                        </td>
                                        <td>
                                            <span :id="'total'+key" class="d-none"><i>$</i>{{ items[key-1].total + '.00' }}</span>
                                            <span :class="'total'+key" class="d-none"><i>$</i>{{ editedItem[key-1].total + '.00' }}</span>
                                        </td>
                                        <td>
                                            <div class="operation-wrapper" :id="'wrapperdiv'+key">
                                                <div :id="'editoptiondiv'+key" class="d-none">
                                                    <v-icon color="blue" class="mr-0" @click="editItem(key)">
                                                        mdi-pencil
                                                    </v-icon>
                                                    <v-icon color="red" @click="deleteItem">
                                                        mdi-delete
                                                    </v-icon>
                                                </div>
                                                <div :id="'saveoptiondiv'+key">
                                                    <v-icon color="green" @click="save(key)">
                                                        mdi-content-save
                                                    </v-icon>
                                                    <v-icon color="red" @click="deleteItem">
                                                        mdi-delete
                                                    </v-icon>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="row" style="float: right;">
                                <div>
                                    <span style="color:#4d4b4b;font-weight:600">Net Amount:</span>
                                    <span class="nettotal" v-if="this.nettotal == null">$0.00</span>
                                    <span class="nettotal" v-else><i>$</i>{{ this.nettotal+ '.00'}}</span>
                                </div>
                            </div>
                        </div>
                    </form>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <div class="ps-form__submit text-center col-12 controlBtnDiv">
                    <button class="ps-btn ps-btn--gray mr-3" style="font-size:12px" @click="closemodal">Cancel</button>
                    <button class="ps-btn success sendbtn" @click="send" id="sendbtn">Send</button>
                </div>
            </v-card-actions>
        </v-card>
    </v-dialog>
</v-row>
</template>

<script>
import {
    useVuelidate
} from '@vuelidate/core'
import {
    required,
    helpers,
    integer,
} from '@vuelidate/validators'
export default {
    name: 'ProductInfoModalPage',
    props: {
        suppliernew: {
            type: Array
        },
        visibles: {
            type: String
        },
        prodRaiseid: {
            type: String
        }
    },
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    data: () => ({
        sendsupplier: [],
        supplierName: '',
        src: require('@/assets/img/loading.gif'),
        selectedlang: '',
        testflag: '',
        FORM_REQUIRED_FIELD: 'This field is required',
        suppliers: [],
        supplerList: [],
        supphead: [{
                text: 'Supplier',
                value: 'name',
                sortable: true
            },
            {
                text: 'Credit Points',
                value: 'creditPoints',
                sortable: true
            },
            {
                text: 'Location',
                value: 'location',
                sortable: true
            },
            {
                text: 'Action',
                value: 'action',
                sortable: true
            }
        ],
        headers: [],
        items: [{
            id: 0,
            category: '',
            subcategory: '',
            prod: '',
            quantity: null,
            unitprice: null,
            discount: null,
            tax: null,
            shipcharge: null,
            total: null
        }],
        count: 1,
        editedItem: [{
            id: 0,
            category: '',
            subcategory: '',
            prod: '',
            quantity: null,
            unitprice: null,
            discount: null,
            tax: null,
            shipcharge: null,
            total: null
        }],
        defaultItem: {
            id: 0,
            category: '',
            subcategory: '',
            prod: '',
            quantity: null,
            unitprice: null,
            discount: null,
            tax: null,
            shipcharge: null,
            total: null
        },
        editedIndex: -1,
        nettotal: null,
        reqid: '',
        product: '',
        qty: '',
        requiredtime: '',
        category: '',
        subcategory: '',
        status: '',
        supplierEmail: '',
        supplierPhone: ''
    }),
    validations() {
        return {
            items: [{
                category: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                subcategory: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                prod: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                quantity: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer,
                },
                unitprice: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer,
                },
                discount: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer,
                },
                tax: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer,
                },
                shipcharge: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer,
                }

            }],
        }
    },
    computed: {
        showSuppModal: {
            get() {
                return this.visibles;
            },
            set(value) {
                if (!value) {
                    this.$emit('close')
                }
            },
        },
    },
    methods: {
        editItem(index) {
            document.querySelector('#editoptiondiv' + index).classList.add('d-none');
            document.querySelector('#saveoptiondiv' + index).classList.remove('d-none');
            Object.assign(this.items[index - 1], this.editedItem[index - 1]);
            document.querySelector('.catfield' + index).classList.add('d-none');
            document.querySelector('#catfield' + index).classList.remove('d-none');

            document.querySelector('#subcatfield' + index).classList.remove('d-none');
            document.querySelector('.subcatfield' + index).classList.add('d-none');

            document.querySelector('#prod' + index).classList.remove('d-none');
            document.querySelector('.prod' + index).classList.add('d-none');

            document.querySelector('#quantity' + index).classList.remove('d-none');
            document.querySelector('.quantity' + index).classList.add('d-none');

            document.querySelector('#unitprice' + index).classList.remove('d-none');
            document.querySelector('.unitprice' + index).classList.add('d-none');

            document.querySelector('#discount' + index).classList.remove('d-none');
            document.querySelector('.discount' + index).classList.add('d-none');

            document.querySelector('#tax' + index).classList.remove('d-none');
            document.querySelector('.tax' + index).classList.add('d-none');

            document.querySelector('#shipcharge' + index).classList.remove('d-none');
            document.querySelector('.shipcharge' + index).classList.add('d-none');

            document.querySelector('#total' + index).classList.remove('d-none');
            document.querySelector('.total' + index).classList.add('d-none');
        },
        async save(index) {
            if ((this.items[index - 1].category == '')) {
                alert('Please choose category.');
                return
            } else if ((this.items[index - 1].subcategory == '')) {
                alert('Please choose subcategory.');
                return
            } else if ((this.items[index - 1].prod == '')) {
                alert('Please enter product name.');
                return
            } else if ((this.items[index - 1].quantity == null)) {
                alert('Please enter quantity of product.');
                return
            } else if ((this.items[index - 1].unitprice == null)) {
                alert('Please enter unit price.');
                return
            } else if ((this.items[index - 1].discount == null)) {
                if (confirm('Are you sure there is no discount for this item ?')) {
                    if ((this.items[index - 1].tax == null)) {
                        if (confirm('Are you sure there is no tax for this item?')) {
                            if ((this.items[index - 1].shipcharge == null)) {
                                if (confirm('Are you sure this item is  in free delivery ?')) {} else {
                                    return
                                }
                            }
                        } else {
                            return
                        }
                    }
                } else {
                    return
                }
            } else if ((((this.items[index - 1].discount != null || this.items[index - 1].discount == null) && this.items[index - 1].tax == null) &&
                    ((this.items[index - 1].shipcharge != null || this.items[index - 1].shipcharge == null) && this.items[index - 1].tax == null)
                )) {
                if (confirm('Are you sure there is no tax for this item?')) {
                    if ((this.items[index - 1].shipcharge == null)) {
                        if (confirm('Are you sure this item is  in free delivery ?')) {} else {
                            return
                        }
                    }
                } else {
                    return
                }
            } else if (((this.items[index - 1].discount != null || this.items[index - 1].discount == null) && this.items[index - 1].shipcharge == null) &&
                ((this.items[index - 1].tax == null || this.items[index - 1].tax != null) && this.items[index - 1].shipcharge == null)) {
                if (confirm('Are you sure this item is  in free delivery ?')) {} else {
                    return
                }
            }
            document.querySelector('#editoptiondiv' + index).classList.remove('d-none');
            document.querySelector('#saveoptiondiv' + index).classList.add('d-none');
            this.editedItem[index - 1].category = document.querySelector('#catfield' + index).value;
            this.editedItem[index - 1].subcategory = document.querySelector('#subcatfield' + index).value;
            this.editedItem[index - 1].prod = document.querySelector('#prod' + index).value;
            this.editedItem[index - 1].quantity = document.querySelector('#quantity' + index).value;
            this.editedItem[index - 1].unitprice = document.querySelector('#unitprice' + index).value;
            this.editedItem[index - 1].discount = document.querySelector('#discount' + index).value;
            this.editedItem[index - 1].tax = document.querySelector('#tax' + index).value;
            this.editedItem[index - 1].shipcharge = document.querySelector('#shipcharge' + index).value;
            document.querySelector('#total' + index).innerText = (this.editedItem[index - 1].quantity * this.editedItem[index - 1].unitprice) +
                (Number(this.editedItem[index - 1].discount) + Number(this.editedItem[index - 1].tax) + Number(this.editedItem[index - 1].shipcharge));
            this.editedItem[index - 1].total = document.querySelector('#total' + index).innerText;
            var sumtotal = 0
            for (var i = 0; i < this.editedItem.length; i++) {
                if (this.editedItem[i].total == null) {
                    this.editedItem[i].total = 0
                }
                var subtotal = Number(this.editedItem[i].total);
                sumtotal = sumtotal + subtotal;
            }
            this.nettotal = sumtotal;
            document.querySelector('#catfield' + index).classList.add('d-none');
            document.querySelector('.catfield' + index).classList.remove('d-none');

            document.querySelector('#subcatfield' + index).classList.add('d-none');
            document.querySelector('.subcatfield' + index).classList.remove('d-none');

            document.querySelector('#prod' + index).classList.add('d-none');
            document.querySelector('.prod' + index).classList.remove('d-none');

            document.querySelector('#quantity' + index).classList.add('d-none');
            document.querySelector('.quantity' + index).classList.remove('d-none');

            document.querySelector('#unitprice' + index).classList.add('d-none');
            document.querySelector('.unitprice' + index).classList.remove('d-none');

            document.querySelector('#discount' + index).classList.add('d-none');
            document.querySelector('.discount' + index).classList.remove('d-none');

            document.querySelector('#tax' + index).classList.add('d-none');
            document.querySelector('.tax' + index).classList.remove('d-none');

            document.querySelector('#shipcharge' + index).classList.add('d-none');
            document.querySelector('.shipcharge' + index).classList.remove('d-none');

            document.querySelector('#total' + index).classList.add('d-none');
            document.querySelector('.total' + index).classList.remove('d-none');
        },
        closemodal() {
            this.$emit('close');
            this.count = 1;
        },
        addprod() {
            this.items[this.count] = Object.assign({}, this.defaultItem);
            this.editedItem[this.count] = Object.assign({}, this.defaultItem);
            this.count++;
        },
        deleteItem() {
            confirm('Are you sure you want to delete this item?') && this.count--;
        },
        getcheckedsupp() {
            var token = localStorage.getItem();
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + '/getcheckedsupp', {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
                .then((resp) => {})
                .catch((error) => {});
        },
        async getReqMail() {
            this.reqid = this.$route.query.reqid;
            let formData = new FormData();
            formData.append('requestid', this.reqid);
            var token = localStorage.getItem("token");
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + '/getreqmail', formData, {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((resp) => {
                    this.suppliers = resp.data.message;
                    this.suppliers = this.suppliers.map((el) => {
                        return {
                            supplier: el.userdata[0].user_id,
                            credit: el.userdata[0].product_id,
                            loc: el.userdata[0].address,
                        }
                    })
                })
                .catch((error) => {});
        },
        async fetchQuoteList() {
            if (this.$route.query.reqid) {
                this.reqid = this.$route.query.reqid;
            }
            let formData = new FormData();
            formData.append('search_by_quote_id', this.reqid);
            formData.append('categoryname', '');
            formData.append('product', '');
            formData.append('reqdate', '');

            var token = localStorage.getItem("token");
            const headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            };
            await this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + '/get-reqquote', formData, {
                        headers
                    })
                .then(response => {
                    response.data.data = response.data.data.map((el) => {
                        this.custid = el.customerid;
                        this.product = el.product;
                        this.qty = el.qty;
                        this.requiredtime = el.created_at.split('T')[0];
                        this.category = el.category;
                        this.subcategory = el.subcategory;
                        this.status = el.status;
                    });
                })
                .catch((error) => {});
        },
        send() {
            let token = localStorage.getItem('token');
            let formData = new FormData();
            formData.append('product', this.product);
            formData.append('qty', this.qty);
            formData.append('customerid', this.custid);
            formData.append('requiredtime', this.requiredtime);
            formData.append('category', this.category);
            formData.append('subcategory', this.subcategory);
            formData.append('companyname', 'Wholesale Express');
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/reqquote`, formData, {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'multipart/form-data',
                    }
                })
                .then((response) => {
                    this.$swal.fire({
                        icon: 'success',
                        title: 'Successfully send requested quote and  mail to your account and supplier!',
                        showConfirmButton: true,
                        timer: 5000
                    }).then(() => {
                        this.$router.push({
                            name: 'quotelist'
                        });
                    });
                }).catch((error) => {});
        },
        async searchSupplier() {
            let token = localStorage.getItem('token');
            let formData = new FormData();
            var prod_id;

            if (this.$route.query.prodid) {
                prod_id = this.$route.query.prodid;
            }

            formData.append('prod_id', prod_id);
            this.loader = true;
            await this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/listSupplier`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                })
                .then((response) => {
                    this.loader = false;
                    var data = response.data.data;
                    var data = data.map((ele) => {
                        this.supplerList = ele.map((el) => {
                            return {
                                'id': el.usersdata[0].id,
                                'name': el.usersdata[0].name,
                                'creditPoints': el.usersdata[0].userprofile.credit_points,
                                'location': el.usersdata[0].userprofile.address
                            }
                        });
                    });
                }).catch((error) => {});
        },
        resetData() {
            this.supplierName = '';
            this.fetchSupplierData();
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
            var prod_id;
            if (this.$route.query.prodid) {
                prod_id = this.$route.query.prodid;
            }
            formData.append('prod_id', prod_id);
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
                        this.supplerList = response.data.data;
                        this.supplerList = this.supplerList.map((el) => {
                            return {
                                id: el.supplierlist[0].id,
                                name: el.supplierlist[0].name,
                                creditPoint: el.credit_points,
                                location: el.address
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
    },
    mounted() {
        this.fetchQuoteList();
        this.searchSupplier();
    }
}
</script>

<style scoped>
.p-dropdown-panel {
    z-index: 99999 !important;
}
</style>

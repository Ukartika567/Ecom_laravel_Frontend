<template lang="html">
<LoaderComponent v-if="this.loader" />
<div class="container reqQuoteContainer">
    <div class="page-header">
        <h1 class="text-black newquote">Request New Quote</h1>
    </div>
    <div class="widget widget-white custwidget">
        <div class="widget-body">
            <div class="form rows p-t-no">
                <form>
                    <div class="row mb-0">
                        <div class="col-md-6  mb-5">
                            <SingleChipsDropdown v-model="form.categoryget" :options="this.categoryoptions" @click.stop optionLabel="title" filter class="select select-sm proinpfield w-full md:w-20rem 
                                groupmultiselect singleSelectdropdown" optionValue="value" id="catDropdown" style="margin: 1px !important;" @change="catChange($event)" />
                            <label for="catDropdown">Select Category</label>
                            <div class="validator error" v-for="error of v$.form.categoryget.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </div>
                            <div class="select__arrow dropdownIcom unitdropdownIcon"></div>
                        </div>
                        <div class="col-md-6 mb-5 mt-0" id="subCatDiv">
                            <SingleChipsDropdown v-model="form.subcategoryget" :options="this.subcategoryoptions" @click.stop optionLabel="title" filter class="select select-sm proinpfield w-full md:w-20rem 
                                groupmultiselect singleSelectdropdown" optionValue="value" id="subCatDropdown" style="margin: 1px !important;" @change="subChange($event)" />
                            <label for="subCatDropdown">Select SubCategory</label>
                            <div class="validator error" v-for="error of v$.form.subcategoryget.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </div>
                            <div class="select__arrow dropdownIcom unitdropdownIcon"></div>
                        </div>
                    </div>
                    <div class="row mb-0 mt-0">
                        <div class="col-md-6 mb-5 mt-2">
                            <SingleChipsDropdown v-model="form.product" :options="this.productoptions" @click.stop optionLabel="title" filter class="select select-sm proinpfield w-full md:w-20rem 
                                groupmultiselect singleSelectdropdown" optionValue="value" id="productDropdown" style="margin: 1px !important;" @change="prodChange($event)" />
                            <div class="select__arrow dropdownIcom unitdropdownIcon"></div>
                            <label for="productDropdown">Product Name</label>
                            <div class="validator error" v-for="error of v$.form.product.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </div>
                        </div>
                        <div class="col-md-6 mb-5 mt-2">
                            <div class="col-md-12 d-flex flex-row" style="margin-left: -27px;">
                                <div class="col-md-3">
                                    <div class="select select-sm dropdownDiv circularfield">
                                        <select name="qtyDropdown" id="qtyDropdown" class="quantity" v-model="form.val" style="width:100%;">
                                            <option :value="qty" v-for="qty in quantityoptions" :key="qty">{{ qty }}</option>
                                        </select>
                                        <label for="qtyDropdown">Select val</label>
                                        <div class="validator error" v-for="error of v$.form.val.$errors" :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <div class="select__arrow dropdownIcom"></div>
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <span>X</span>
                                </div>
                                <div class="col-md-3">
                                    <input name="quantity" v-model="form.quantity" id="quantity" class="input-control circularfield" />
                                    <label for="quantity" class="form-label">Quantity</label>
                                    <div class="validator error" v-for="error of v$.form.quantity.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <span style="font-size:15px">=</span>
                                </div>
                                <div class="col-md-3">
                                    <input name="quantity" :value="`${this.form.val * this.form.quantity}`" id="totalquantity" class="input-control circularfield" />
                                    <label for="totalquantity" class="form-label">Total</label>
                                </div>
                                <div class="col-md-3">
                                    <SingleChipsDropdown v-model="form.unit" :options="this.unitsoptions" @click.stop optionLabel="attr" filter class="select select-sm proinpfield w-full
                                    md:w-20rem groupmultiselect singleSelectdropdown" style="margin: 1px !important;" optionValue="value" />
                                    <div class="select__arrow dropdownIcom unitdropdownIcon"></div>
                                    <label for="productDropdown">Unit</label>
                                    <div class="validator error" v-for="error of v$.form.unit.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-0 mt-0">
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-6 mb-0 datepickerDiv mt-2 ml-0">
                            <Datepicker v-model="form.picked" :locale="locale" :upperLimit="to" :lowerLimit="from" :clearable="true" id="datepick" class="inputField circularfield" />
                            <label for="datepick" class="form-label">Expected Date</label>
                            <div class="validator error" v-for="error of v$.form.picked.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </div>
                        </div>
                        <div class="col-md-3">
                        </div>
                    </div>
                </form>
                <div class="ps-form__submit text-center mb-0 mt-8 col-12 controlBtnDiv">
                    <router-link to="/buyer/dashboard">
                        <span class="icon-arrow-left backarrow ml-5 mt-2"> Back</span>
                    </router-link>
                    <button class="ps-btn ps-btn--gray mr-3" @click.prevent="resetData" style="font-size:12px">Reset</button>
                    <button class="ps-btn success submitbtn" @click.prevent="SubmitQuotes" v-on:click="calloff">Submit</button>
                    <button class="ps-btn success addsubcategory ml-2" id="searchsupp" :disabled="this.searchbtn?false:true" @click.prevent="searchSupplier">Search Supplier</button>
                </div>
            </div>
        </div>
    </div>
    <div class="container" v-if="this.supplerList.length>0">
        <div class="snpt-row-top snpt-row-bottom-hc">
            <div class="text-center">
                <div class="layout-cols sls m-t-0 layout-cols-md-block">
                    <div class="layout-col-left">
                        <h2 style="text-align: justify;font-size: 20px;">Top {{this.supplerList.length}} results for product {{ this.productName}}</h2>
                        <div class="m-b-0"></div>
                      
                        <div class="supplierCardDiv sl">
                            <div class="sl-content" v-if="this.supplerList.length>0">
                                <div class="content-media sd-hide" style="text-wrap: nowrap;">
                                    <div class="row">
                                        <div class="col-md-6 col-12 col-lg-6 col-sm-6 suppcardDiv" v-for="supplier in this.supplerList" :key="supplier.refid">
                                            <v-card :loading="loading" class="mx-auto my-2" >
                                                <v-card-item>
                                                    <v-card-title>
                                                        <div class="flex justify-content-center">
                                                            <div class="row">
                                                                <div class="col-md-6 float-left"><span>Supplier ID - {{ supplier.refid }}</span></div>
                                                                <div class="col-md-6 float-right"> <input type="checkbox" name="checksupp" id="checksupp" :value="supplier.refid" class="suppcheck" @change="checkSupp($event)"></div>
                                                            </div>
                                                        </div>
                                                    </v-card-title>
                                                </v-card-item>
                                                <v-card-text>
                                                    <div class="my-2 text-subtitle-1 cardText">
                                                    <span>Supplier Rating - {{ supplier.rating}}</span><br/>
                                                    <span>Minimum Order Quantity - {{ supplier.min_order}}</span><br/>
                                                    <span>Maximum Order Quantity - {{ supplier.max_order}}</span><br/>
                                                    </div>
                                                </v-card-text>
                                            </v-card>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                  

                        <!-- <div id="sl_441468" class="sl" v-for="supplier in this.supplerList" :key="supplier.refid">
                            <div class="sl-content">
                                <div class="sl-media sd-hide" style="text-wrap: nowrap;">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <p>Supplier ID - {{ supplier.refid }}</p>
                                        </div>
                                        <div class="col-md-6"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <p>Supplier Rating - {{ supplier.rating}}</p>
                                        </div>
                                        <div class="col-md-6"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <p>Minimum Order Quantity - {{ supplier.min_order}}</p>
                                        </div>
                                        <div class="col-md-6"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <p>Maximum Order Quantity - {{ supplier.max_order}}</p>
                                        </div>
                                        <div class="col-md-6"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="sl-bottom">
                                <div class="sl-review text-muted text-small">
                                    <div class="sl-review-info clearfix">
                                    </div>
                                </div>
                                <div class="sl-request-quote">
                                    <button type="button" @click.prevent="showQuoteDialog('Supplier',this.form.categoryget, 
                                    this.form.subcategoryget, this.form.product, supplier.refid )" class="lnkBEE btn btn-default-outline btn-sm block" style="font-size:15px;">
                                        Request a Quote</button>
                                </div>
                            </div>
                            <div class="sl-info" data-address="Constantine, Pietersen street, <br/>Hospital Hill, Johannesburg"></div>
                        </div> -->
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="line"></div>
    <div class="line"></div>
</div>
<RequestQuoteModal v-if="this.showModal" :visible="showModal" :selectedSubmenu="this.selectedsubmenu" :catid="this.catid" :subcatid="this.subcatid" :prodid="this.prodid" :supplierid="this.supplierid" :mode="this.mode" @close="this.showModal = false" />
</template>

<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
import RequestQuoteModal from '@/components/ModalsComponent/RequestQuoteModal.vue';
import useVuelidate from '@vuelidate/core';
import {
    helpers,
    required,
    minLength,
    maxLength,
    integer,
    email,
    sameAs
} from '@vuelidate/validators';
import { ref } from "vue";
export default {
    name: 'RequestNewQuotePage',
    components: {
        LoaderComponent,
        RequestQuoteModal
    },
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    data() {
        return {
            checked:ref(false),
            loading: false,
            unitsoptions: [],
            showModal: false,
            catid: '',
            subcatid: '',
            prodid: '',
            mode: '',
            supplierid: '',
            selectedsubmenu: '',
            loader: false,
            categoryoptions: [],
            subcategoryoptions: [],
            productoptions: [],
            quantityoptions: [25, 50, 100, 1000, 10000],
            form: {
                categoryget: '',
                subcategoryget: '',
                quantity: null,
                val: null,
                product: '',
                picked: new Date(),
                unit: []
            },
            usertype: '',
            FORM_REQUIRED_FIELD: 'This field is required',
            supplerList: [],
            searchbtn: true,
            supplierList:[]
        };
    },
    validations() {
        return {
            form: {
                categoryget: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                subcategoryget: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                val: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                quantity: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer
                },
                product: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                picked: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                unit: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                }
            }
        }
    },
    methods: {
        checkSupp(e){
            // console.log('supp-', e, e.target.value)
            this.supplierList.push( e.target.value)
        },
        showQuoteDialog(e, catid, subcatid, prodid, supplierid) {
            this.showModal = true;
            this.selectedsubmenu = e;
            this.catid = catid;
            this.subcatid = subcatid;
            this.prodid = prodid;
            this.supplierid = supplierid;
            this.mode = 'Send request to';
        },
        async SubmitQuotes() {
            const result = await this.v$.form.$validate();
            if (result == false) {
                return
            }
            var supp_id=[]
            this.searchbtn = true;
            var loginId = localStorage.getItem('loginid');
            let token = localStorage.getItem('token');
            var date = document.getElementById('datepick').value;
            var quantity = document.getElementById('totalquantity').value;
            let formData = new FormData();
            formData.append('unit_of_measurement[]', this.form.unit);
            formData.append('product', this.form.product);
            formData.append('qty', quantity);
            formData.append('customerid', loginId);
            if(this.supplierList.length>0){
                Object.values(this.supplierList).forEach(e=>{
                    supp_id.push(e);
                });
                formData.append('supplierid',"["+supp_id+"]");
            }
            formData.append('requiredtime', date);
            formData.append('category', this.form.categoryget);
            formData.append('subcategory', this.form.subcategoryget);
            formData.append('companyname', 'Wholesale Express');
            this.loader = true;
            this.$swal({
                title: 'Do you want to submit request?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                showCloseButton: true,
                showLoaderOnConfirm: true,
                customClass: 'warningswal'
            }).then((result) => {
                if (result.value) {
                    this.loader = true;
                    this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/reqquote`, formData, {
                            headers: {
                                'Authorization': 'Bearer' + token,
                                'Content-Type': 'multipart/form-data',
                            }
                        })
                        .then((response) => {
                            if (response.status == 200) {
                                this.loader = false;
                                this.$swal.fire({
                                    icon: 'success',
                                    title: 'Request submitted! Check your email for confirmation details.',
                                    showConfirmButton: true,
                                    timer: 50000
                                }).then(() => {
                                    if (localStorage.getItem('requestQuoteArray') != '') {
                                        localStorage.removeItem('requestQuoteArray');
                                    }
                                    this.$router.push({
                                        name: 'buyerdashboard'
                                    });
                                });
                            }
                        }).catch((error) => {
                            this.loader = false;
                            var dataArry = [];
                            if (error.response) {
                                if (error.response.data.status === 'Unauthorized') {
                                    dataArry.push({
                                        catid: this.form.categoryget,
                                        subcatid: this.form.subcategoryget,
                                        prodid: this.form.product,
                                        val: this.form.val,
                                        quantity: this.form.quantity,
                                        total: quantity,
                                        unittags: this.form.unit,
                                        date: date
                                    });
                                    localStorage.setItem('requestQuoteArray', JSON.stringify(dataArry));
                                    this.$router.push({
                                        'path': '/login',
                                        query: {
                                            flag: 'requestquote-by-home'
                                        }
                                    });
                                }
                                if (error.response.data.status === 'Token is Expired' && (error.response.status == 401 || error.response.status == 404)) {
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
                } else {
                    this.loader = false;
                }
            });
        },
        async searchSupplier() {
            let token = localStorage.getItem('token');
            let formData = new FormData();
            if (this.form.categoryget == '') {
                this.$swal('', 'Please select category', 'info');
                return;
            } else if (this.form.subcategoryget == '') {
                this.$swal('', 'Please select sub category', 'info');
                return;
            } else if (this.form.product == '') {
                this.$swal('', 'Please select product', 'info');
                return;
            }
            Object.values(this.productoptions).forEach((val) => {
                if (val.value == this.form.product) {
                    this.productName = val.title;
                }
            });
            formData.append('prod_id', this.form.product);
            this.loader = true;
            await this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/SearchSupplierlist`,
                    formData, {
                        headers: {
                            'Authorization': 'Bearer' + token,
                            'Content-Type': 'multipart/form-data',
                        }
                    })
                .then((response) => {
                    if (response.status == 200) {
                        this.loader = false;
                        var data = response.data.data;
                        console.log
                        ('serachedsuppp--', data);
                        this.supplerList = [];
                        data = data.map((el) => {
                            // ele.map((el) => {
                                var totalrat;
                                if (el.usersdata[0].orderrating.length > 0) {
                                    el.usersdata[0].orderrating.map((val) => {
                                        totalrat = Math.round(((Number(val.price_rating) +
                                            Number(val.quality_rating) + Number(val.time_rating)) / 3).toFixed());
                                    })
                                    if (el.usersdata[0].orderrating.length >= 2) {
                                        totalrat = Number(((totalrat / (el.usersdata[0].orderrating.length))).toFixed())
                                    }
                                    if (el.product_info.length > 0) {
                                        this.supplerList.push({
                                            'refid': el.supplier_id,
                                            'rating': el.usersdata[0].userprofile.profile_rating + totalrat,
                                            'min_order': el.product_info[0].min_order_qty,
                                            'max_order': el.product_info[0].max_order_qty,
                                        });
                                    } else {
                                        this.supplerList.push({
                                            'refid': el.supplier_id,
                                            'rating': el.usersdata[0].userprofile.profile_rating + totalrat,
                                            'min_order': 0,
                                            'max_order': 0
                                        });
                                    }
                                } else {
                                    if (el.product_info.length > 0) {
                                        this.supplerList.push({
                                            'refid': el.supplier_id,
                                            'rating': 0,
                                            'min_order': el.product_info[0].min_order_qty,
                                            'max_order': el.product_info[0].max_order_qty
                                        })
                                    } else {
                                        this.supplerList.push({
                                            'refid': el.supplier_id,
                                            'rating': 0,
                                            'min_order': 0,
                                            'max_order': 0
                                        })
                                    }
                                }
                            // });
                        });
                    }
                }).catch((error) => {
                    if (error.response) {
                        if (error.response.status == 400 || error.response.status == 404 || error.response.status == 401) {
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
        resetData() {
            this.form.categoryget = '';
            this.form.subcategoryget = '';
            this.form.quantity = '';
            this.form.val = '';
            this.form.product = '';
            this.form.picked = '';
        },
        async allcategory() {
            var array = [];
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            await this.axios.get(process.env.VUE_APP_API_ENDPOINT + '/categorylist', {})
                .then(response => {
                    Object.values(response.data.data).forEach(value => {
                        if (this.$route.query.catid) {
                            if (this.$route.query.catid == value.id) {
                                this.form.categoryget = value.id;
                            }
                        }
                        array.push({
                            'value': value.id,
                            "title": value.name
                        });
                    });
                    this.categoryoptions = array;
                })
                .catch(err => {});
        },
        async allsubcategory() {
            var array = [];
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + '/subcategorylist', {})
                .then(response => {
                    Object.values(response.data.data).forEach(value => {
                        if (this.$route.query.catid) {
                            if (this.$route.query.catid == value.category_id) {
                                array.push({
                                    'value': value.id,
                                    "title": value.name
                                });
                            }
                        } else {
                            array.push({
                                'value': value.id,
                                "title": value.name
                            });
                        }
                    });
                    this.subcategoryoptions = array;
                    Object.values(this.subcategoryoptions).forEach(value => {
                        if (this.$route.query.subcatid) {
                            if (this.$route.query.subcatid == value.value) {
                                this.form.subcategoryget = value.value;
                            }
                        }
                    });
                })
                .catch(err => {});
        },
        async allproducts() {
            var array = [];
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + '/allproductlist', {})
                .then(response => {
                    Object.values(response.data.data).forEach(value => {
                        if (this.$route.query.subcatid) {
                            if (this.$route.query.subcatid == value.subcategory_id) {
                                array.push({
                                    'value': value.id,
                                    "title": value.name
                                });
                            }
                        } else {
                            array.push({
                                'value': value.id,
                                "title": value.name
                            });
                        }
                    });
                    this.productoptions = array;
                    Object.values(this.productoptions).forEach(value => {
                        if (this.$route.query.prodid) {
                            if (this.$route.query.prodid == value.value) {
                                this.form.product = value.value;
                            }
                        }
                    });
                })
                .catch(err => {});
        },
        catChange(e) {
            var array = [];
            let catid = e.value;
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/categorysubdetails/${catid}`, {})
                .then(response => {
                    Object.values(response.data.data).forEach(value => {
                        array.push({
                            'value': value.id,
                            "title": value.name
                        });
                    });
                    this.subcategoryoptions = [];
                    this.subcategoryoptions = array;
                })
                .catch(error => {});
        },
        subChange(e) {
            var array = [];
            let subcatid = e.value;
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/productlist/${subcatid}`, {})
                .then(response => {
                    Object.values(response.data.data).forEach(value => {
                        array.push({
                            'value': value.id,
                            "title": value.name
                        });
                    });
                    this.productoptions = [];
                    this.productoptions = array;
                })
                .catch(err => {});
        },
        prodChange(e) {
            var array = [];
            let prodid = e.value;
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/getproduct/${prodid}`, {
                    headers
                })
                .then(response => {
                    var unit;
                    var unitArray = [];
                    var unit_list = []
                    Object.values(response.data.data).forEach(value => {
                        if (value.unit_attributes) {
                            unit = value.unit_attributes.split(',');
                        }
                    });
                    if (unit && unit.length > 0) {
                        Object.values(unit).forEach(ele => {
                            console.log('attr-ele-', ele)
                            unit_list.push(ele);
                        });
                        console.log('unit_list- ', unit_list);

                        Object.values(unit).forEach(ele => {
                            if (unit_list.includes('Each-ea') || unit_list.includes('Dozen-doz')) {
                                if (unit_list.includes('Each-ea')) {
                                    if (ele == 'Each-ea') {
                                        var attr = ele.split('-');
                                        unitArray.push({
                                            'attr': attr[1],
                                            'value': ele
                                        });
                                    }
                                }
                                if (unit_list.includes('Dozen-doz')) {
                                    if (ele == 'Dozen-doz') {
                                        var attr = ele.split('-');
                                        unitArray.push({
                                            'attr': attr[1],
                                            'value': ele
                                        });
                                    }
                                }
                            } else {
                                var attr = ele.split('-');
                                unitArray.push({
                                    'attr': attr[1],
                                    'value': ele
                                });
                            }
                        });
                    }
                    this.unitsoptions = unitArray;
                })
                .catch(err => {});
        },
        async allunitmeasure() {
            var array = [];
            var token = localStorage.getItem("token");
            const headers = {
                'Authorization': 'Bearer ' + token,
            };
            if (this.$route.query.prodid && this.$route.query.prodid != '') {
                let prodid = this.$route.query.prodid;
                const headers = {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                };
                this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/getproduct/${prodid}`, {
                        headers
                    })
                    .then(response => {
                        var unit;
                        var unitArray = [];
                        var unit_list = []
                        Object.values(response.data.data).forEach(value => {
                            if (value.unit_attributes) {
                                unit = value.unit_attributes.split(',');
                            }
                        });
                        if (unit && unit.length > 0) {
                            Object.values(unit).forEach(ele => {
                                console.log('attr-ele-', ele)
                                unit_list.push(ele);
                            });
                            console.log('unit_list- ', unit_list);

                            Object.values(unit).forEach(ele => {
                                if (unit_list.includes('Each-ea') || unit_list.includes('Dozen-doz')) {
                                    if (unit_list.includes('Each-ea')) {
                                        if (ele == 'Each-ea') {
                                            var attr = ele.split('-');
                                            unitArray.push({
                                                'attr': attr[1],
                                                'value': ele
                                            });
                                        }
                                    }
                                    if (unit_list.includes('Dozen-doz')) {
                                        if (ele == 'Dozen-doz') {
                                            var attr = ele.split('-');
                                            unitArray.push({
                                                'attr': attr[1],
                                                'value': ele
                                            });
                                        }
                                    }
                                } else {
                                    var attr = ele.split('-');
                                    unitArray.push({
                                        'attr': attr[1],
                                        'value': ele
                                    });
                                }
                            });
                        }
                        this.unitsoptions = unitArray;
                    })
                    .catch(err => {});
            } else {
                await this.axios.get(process.env.VUE_APP_API_ENDPOINT + '/getmeasurements', {})
                    .then(response => {
                        var unitArray = [];
                        Object.values(response.data.data).forEach(value => {
                            var unitattr = value.attribute.split(',');
                            Object.values(unitattr).forEach(el => {
                                var attr = el.split('-');
                                unitArray.push({
                                    'attr': attr[1],
                                    'value': el
                                });
                            });
                        });
                        this.unitsoptions = unitArray;
                        var data = [];
                        if (this.$route.query.flag && this.$route.query.flag === 'requestquote-by-home') {
                            if (localStorage.getItem('requestQuoteArray')) {
                                data = JSON.parse(localStorage.getItem('requestQuoteArray'));
                                var unitArray = [];
                                var itemArray = [];
                                var unitattr = data[0].unittags.split(',');
                                Object.values(unitattr).forEach(el => {
                                    var attr = el.split('-');
                                    unitArray.push({
                                        'attr': attr[1],
                                        'value': el
                                    });
                                });
                                if (unitArray.length >= 1) {
                                    Object.values(unitArray).forEach(item => {
                                        Object.values(this.unitsoptions).forEach(el => {
                                            if (el.attr === item.attr) {
                                                if (!itemArray.includes(el)) {
                                                    itemArray.push(el);
                                                }
                                            }
                                        });
                                    });
                                }
                                this.unitsoptions = itemArray;
                                this.form.unit = data[0].unittags;
                            }
                        }
                    })
                    .catch(err => {});
            }
        },
    },
    mounted() {
        this.usertype = localStorage.getItem('userType');
        this.allcategory();
        this.allsubcategory();
        this.allproducts();
        this.allunitmeasure();
        var data = [];
        if (this.$route.query.flag && this.$route.query.flag === 'requestquote-by-home') {
            if (localStorage.getItem('requestQuoteArray')) {
                data = JSON.parse(localStorage.getItem('requestQuoteArray'));
                this.form.categoryget = data[0].catid;
                this.form.subcategoryget = data[0].subcatid;
                this.form.product = data[0].prodid;
                this.form.val = data[0].val;
                this.form.quantity = data[0].quantity;
                document.getElementById('totalquantity').value = data[0].total;
                this.form.picked = new Date(data[0].date);
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.p-multiselect {
    border-radius: 5px !important;
}

.unitdropdownIcon {
    right: 30px !important;
}

.optionChild {
    padding: 5px !important;
}
.snpt-row-top{
   padding-top: 0px !important;
}
.supplierCardDiv .sl-content{
    padding: 0px !important;
}
.suppcardDiv .v-card{
    margin-top: 15px !important;
}
.cardText{
    text-align: justify;
    font-size: 1.2rem !important;
    width: 250px;
}
#checksupp{
    width: 20px !important;
    height: 19px !important;
    // margin-top: 5px !important;
    cursor: pointer;
    margin-top: -3px;
    float: right;
    accent-color: #04eefa !important;
}
.supplierCardDiv .v-card-title{
    // padding: 5px;
    font-size: 1.5rem !important;
    padding: 0.8rem;
}
.supplierCardDiv .v-card-text{
    padding: 1.5rem !important;
}
.supplierCardDiv .v-card-item{
    background-color: #112785 !important;
}
// #checksupp[type="checkbox"]:before {
//   position: relative;
//   display: block;
//   width: 11px;
//   height: 11px;
//   border: 1px solid #808080;
//   content: "";
//   background: #FFF;
// }

// #checksupp[type="checkbox"]:after {
//   position: relative;
//   display: block;
//   left: 2px;
//   top: -11px;
//   width: 7px;
//   height: 7px;
//   border-width: 1px;
//   border-style: solid;
//   border-color: #B3B3B3 #dcddde #dcddde #B3B3B3;
//   content: "";
//   background-image: linear-gradient(135deg, #B1B6BE 0%, #FFF 100%);
//   background-repeat: no-repeat;
//   background-position: center;
// }

</style>

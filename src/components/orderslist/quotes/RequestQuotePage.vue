<template lang="html">
    <LoaderComponent v-if="this.loader" />
<div class="werehouseContainer">
    <div class="form">
        <section class="widget widget-white accountdWidget">
            <div class="werehousetitleDiv">
                <h3>Request New Quote</h3>
            </div>
            <div class="widget-body" style="padding: 30px;">
                <div class="form-rows p-t-no">
                    <form>
                        <div class="row mb-0">
                            <div class="col-md-3 mb-5 mt-5">
                            </div>
                            <div class="col-md-6  mb-5 mt-5">
                                    <SingleChipsDropdown v-model="form.custselect" :options="this.custoptions"
                                     @click.stop optionLabel="name" filter class="select select-sm 
                                     proinpfield w-full
                                        md:w-20rem groupmultiselect singleSelectdropdown" 
                                        style="margin: 1px !important;" optionValue="id" />
                                    <div class="select__arrow dropdownIcom unitdropdownIcon"></div>
                                    <label for="custDropdown">Select Customer</label>
                                    <div class="validator error" v-for="error of v$.form.custselect.$errors" 
                                        :key="error.$uid">
                                        {{ error.$message }}
                                    </div>
                            </div>
                            <div class="col-md-3 mb-5 mt-5">
                            </div>
                        </div>
                        <div class="row mb-0">
                            <div class="col-md-6  mb-5 mt-5">
                                    <SingleChipsDropdown v-model="form.categoryget" 
                                    :options="this.categoryoptions" @click.stop optionLabel="title" 
                                    filter class="select select-sm proinpfield w-full md:w-20rem 
                                    groupmultiselect singleSelectdropdown" optionValue="value"  id="catDropdown"
                                    style="margin: 1px !important;" @change="catChange($event)" />
                                    <label for="catDropdown">Select Category</label>
                                    <div class="validator error" v-for="error of v$.form.categoryget.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </div>
                                    <div class="select__arrow dropdownIcom unitdropdownIcon"></div>
                            </div>
                            <div class="col-md-6 mb-5 mt-5" id="subCatDiv">
                                    <SingleChipsDropdown v-model="form.subcategoryget" 
                                    :options="this.subcategoryoptions" @click.stop optionLabel="title" 
                                    filter class="select select-sm proinpfield w-full md:w-20rem 
                                    groupmultiselect singleSelectdropdown" optionValue="value"  id="subCatDropdown"
                                    style="margin: 1px !important;" @change="subChange($event)" />

                                    <label for="subCatDropdown">Select SubCategory</label>
                                    <div class="validator error" v-for="error of v$.form.subcategoryget.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </div>
                                    <div class="select__arrow dropdownIcom unitdropdownIcon"></div>
                            </div>
                        </div>
                        <div class="row mb-0 mt-0">
                            <div class="col-md-6 mb-5 mt-2">
                                    <SingleChipsDropdown v-model="form.product" 
                                    :options="this.productoptions" @click.stop optionLabel="title" 
                                    filter class="select select-sm proinpfield w-full md:w-20rem 
                                    groupmultiselect singleSelectdropdown" optionValue="value"  
                                    id="productDropdown"
                                    style="margin: 1px !important;" @change="prodChange($event)" />
                                    <div class="select__arrow dropdownIcom unitdropdownIcon"></div>
                                    <label for="productDropdown">Product Name</label>
                                    <div class="validator error" v-for="error of v$.form.product.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </div>
                            </div>
                            <div class="col-md-6 mb-5 mt-2 ml-0">
                                <div class="col-md-12 d-flex flex-row" style="margin-left: -27px;">
                                    <div class="col-md-3">
                                        <div class="select select-sm dropdownDiv circularfield">
                                            <select name="qtyDropdown" id="qtyDropdown" class="quantity" v-model="form.val" style="width:100%;">
                                                <option :value="qty" v-for="qty in quantityoptions" :key="qty">{{ qty }}</option>
                                            </select>
                                            <label for="qtyDropdown">Selectval</label>
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
                            <div class="col-md-3 mb-0 mt-0">
                            </div>
                            <div class="col-md-6 mb-0 datepickerDiv mt-2 ml-0">
                                <Datepicker v-model="form.picked" :locale="locale" :upperLimit="to" :lowerLimit="from" :clearable="true" id="datepick" class="inputField circularfield" />
                                <label for="datepick" class="form-label">Expected Date</label>
                                <div class="validator error" v-for="error of v$.form.picked.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                            <div class="col-md-3 mb-0 mt-0"></div>
                        </div>
                    </form>
                </div>
                <div class="ps-form__submit text-center mb-0 mt-8 col-12 controlBtnDiv">
                    <router-link to="/admin/quotes-list">
                        <span class="icon-arrow-left backarrow ml-0 mt-2"> Back</span>
                    </router-link>
                    <button class="ps-btn ps-btn--gray mr-3" @click.prevent="resetData" style="font-size:12px">Reset</button>
                    <button class="ps-btn success submitbtn" @click.prevent="SubmitQuotes" v-on:click="calloff">Submit</button>
                </div>
            </div>
        </section>
    </div>
</div>
</template>

<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
import {
    useVuelidate
} from '@vuelidate/core'
import {
    required,
    helpers,
} from '@vuelidate/validators'
export default {
    name: 'CreateQuotePageView',
    components: {
        LoaderComponent
    },
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    data() {
        return {
            loader:false,
            unitsoptions: [],
            categoryoptions: [],
            custoptions: [],
            subcategoryoptions: [],
            productoptions: [],
            quantityoptions: [25, 50, 100, 1000, 10000],
            form: {
                categoryget: '',
                subcategoryget: '',
                product: '',
                quantity: '',
                val: null,
                picked: new Date(),
                unit: [],
                custselect: '',
            },
            FORM_REQUIRED_FIELD: 'This field is required',
            FORM_CONFIRM_PASSWORD_FIELD: 'Confirm Password is required',
        };
    },
    validations() {
        return {
            form: {
                custselect: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                categoryget: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                subcategoryget: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                product: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                quantity: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                picked: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                val: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                unit: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                }
            },
        }
    },
    methods: {
        async SubmitQuotes() {
            const result = await this.v$.form.$validate();
            if (result == false) {
                return
            }
            let token = localStorage.getItem('token');
            var date = document.getElementById('datepick').value;
            var quantity = document.getElementById('totalquantity').value;
            let formData = new FormData();
            formData.append('unit_of_measurement[]', this.form.unit);
            formData.append('product', this.form.product);
            formData.append('qty', quantity);
            formData.append('customerid', this.form.custselect);
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
                customClass:'warningswal'
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
                                timer: 5000
                            }).then(() => {
                                this.$router.push({
                                    name: 'quotelist'
                                })
                            });
                        }
                        }).catch((error) => {
                            this.loader = false;
                            if (error.response) {
                                if (error.response.data.status === 'Token is Expired' && (error.response.status == 401 || error.response.status == 404)) {
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
                    this.loader = false;
                }
            });
        },
        getcustomers() {
            var token = localStorage.getItem('token');
            var array = [];
            let formData = new FormData();
            formData.append('customername', '');
            formData.append('customeremail', '');
            formData.append('phoneNo', '');
            const headers = {
                'Authorization': 'Bearer ' + token
            }
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + '/CustomerList', formData, {
                    headers
                })
                .then((response) => {
                    var itemArray=[]
                    response.data.data = response.data.data.map((el) => {
                        itemArray.push({
                            'id':el.customerlist.id,
                            'name':el.customerlist.name
                        })
                    });
                    this.custoptions = itemArray;
                });
        },
        resetData() {
            this.form.categoryget = '';
            this.form.subcategoryget = '';
            this.form.quantity = '';
            this.form.val = '';
            this.form.product = '';
            this.form.picked = '';
            this.form.unit = '';
            this.form.custselect = '';
        },
        async allcategory() {
            var array = [];
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + '/category', {
                    headers
                })
                .then(response => {
                    Object.values(response.data.data).forEach(value => {
                        array.push({
                            'value': value.id,
                            "title": value.name
                        });
                    });
                    this.categoryoptions = array;
                })
                .catch(err => {
                });
        },
        async allsubcategory() {
            var array = [];
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + '/subcategory', {
                    headers
                })
                .then(response => {
                    Object.values(response.data.data).forEach(value => {
                        array.push({
                            'value': value.id,
                            "title": value.name
                        });
                    });
                    this.subcategoryoptions = array;
                })
                .catch(err => {
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
                    Object.values(response.data.data).forEach(value => {
                        array.push({
                            'value': value.id,
                            "title": value.name
                        });
                    });
                    this.productoptions = array;
                })
                .catch(err => {
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
                    this.subcategoryoptions = [];
                    this.subcategoryoptions = array;
                })
                .catch(err => {
                });
        },
        subChange(e) {
            var array = [];
            let subcatid = e.value;
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/productdetails/${subcatid}`, {
                    headers
                })
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
                .catch(err => {
                });
        },
        prodChange(e) {
            var array = [];
            let prodid = e.target.value;
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/getproduct/${prodid}`, {
                    headers
                })
                .then(response => {
                    var unit;
                    var unitArray = [];
                    Object.values(response.data.data).forEach(value => {
                        if (value.unit_attributes) {
                            unit = value.unit_attributes.split(',');
                        }
                    });
                    if (unit && unit.length > 0) {
                        Object.values(unit).forEach(ele => {
                            var attr = ele.split('-');
                            unitArray.push({
                                'attr': attr[1],
                                'value': ele
                            });
                        });
                    }
                    this.unitsoptions = unitArray;
                })
                .catch(err => {
                });
        },
        async allunitmeasure() {
            var array = [];
            var token = localStorage.getItem("token");
            const headers = {
                'Authorization': 'Bearer ' + token,
            };
            await this.axios.get(process.env.VUE_APP_API_ENDPOINT + '/getmeasurements', {
                })
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
                .catch(err => {
                });
        },
    },
    mounted() {
        this.getcustomers();
        this.allcategory();
        this.allsubcategory();
        this.allproducts();
        this.allunitmeasure();
    }
};
</script>

<style  scoped>
.unitdropdownIcon{
    right: 25px !important;
}
</style>

<template>
<v-row justify="center">
    <v-dialog v-model="show" width="760px" class="modalShowContainer">
        <LoaderComponent v-if="this.loader" />
        <v-card>
            <v-card-title>
                <span class="text-h5 categoryhead">
                    <h4>{{ this.mode }} {{ this.selectedSubmenu }}</h4>
                </span>
                <font-awesome-icon :icon="['fasl', 'xmark']" class="modalCloseIcon" @click="closecatsubmodal" />
            </v-card-title>
            <v-card-text>
                <v-container v-if="this.mode == 'Request'">
                    <v-row>
                        <v-col cols="12" sm="8" md="4">
                            <div class="select select-sm dropdownDiv circularfield">
                                <select name="catDropdown" id="catDropdown" class="category" v-model="form.categoryget" style="width:100%;" @change="catChange($event)">
                                    <option :value="item.id" v-for="item in categoryoptions" :key="item">{{ item.title }}</option>
                                </select>
                                <label for="catDropdown">Select Category</label>
                                <div v-if="this.showerror">
                                    <div class="validator error" v-for="error of v$.form.categoryget.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </div>
                                </div>
                                <div class="select__arrow dropdownIcom"></div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="4">
                            <div class="select select-sm dropdownDiv circularfield">
                                <select name="subCatDropdown" id="subCatDropdown" class="subcategory" v-model="form.subcategoryget" style="width:100%;" @change="subChange($event)">
                                    <option :value="subcat.id" v-for="subcat in subcategoryoptions" :key="subcat">{{ subcat.title }}</option>
                                </select>
                                <label for="subCatDropdown">Select SubCategory</label>
                                <div v-if="this.showerror">
                                    <div class="validator error" v-for="error of v$.form.subcategoryget.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </div>
                                </div>
                                <div class="select__arrow dropdownIcom"></div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="4">
                            <div class="select select-sm dropdownDiv circularfield">
                                <select name="productDropdown" id="productDropdown" class="product" v-model="form.product" style="width:100%;">
                                    <option :value="prod.id" v-for="prod in productoptions" :key="prod">{{ prod.title }}</option>
                                </select>
                                <div class="select__arrow dropdownIcom"></div>
                                <label for="productDropdown">Product Name</label>
                                <div v-if="this.showerror">
                                    <div class="validator error" v-for="error of v$.form.product.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="12" class="d-flex flex-row mb-5">
                            <v-col cols="12" sm="8" md="4">
                                <div class="select select-sm dropdownDiv circularfield">
                                    <select name="qtyDropdown" id="qtyDropdown" class="quantity" v-model="form.val" style="width:100%;">
                                        <option :value="qty" v-for="qty in quantityoptions" :key="qty">{{ qty }}</option>
                                    </select>
                                    <label for="qtyDropdown">Select val</label>
                                    <div v-if="this.showerror">
                                        <div class="validator error" v-for="error of v$.form.val.$errors" :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                    </div>
                                    <div class="select__arrow dropdownIcom"></div>
                                </div>
                            </v-col>
                            <div class="mt-5">
                                <span>X</span>
                            </div>
                            <v-col cols="12" sm="8" md="4">
                                <div id="" style="margin-top: -25px !important;">
                                    <label for="quantity" class="form-label customlabel" style="top: 12px !important;">Quantity</label>
                                    <input name="quantity" v-model="form.quantity" id="quantity" class="input-control circularfield" />
                                    <div v-if="this.showerror">
                                        <div class="validator error" v-for="error of v$.form.quantity.$errors" :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                    </div>
                                </div>
                            </v-col>
                            <div class="mt-5">
                                <span style="font-size:15px">=</span>
                            </div>
                            <v-col cols="12" sm="8" md="4">
                                <div id="" style="margin-top: -25px !important;">
                                    <label for="totalquantity" class="form-label customlabel" style="top: 12px !important;">Total Quantity</label>
                                    <input name="quantity" :value="`${this.form.val * this.form.quantity}`" id="totalQuantity" class="input-control circularfield" />
                                </div>
                            </v-col>
                        </v-col>
                        <v-col cols="12" sm="8" md="4"></v-col>
                        <v-col cols="12" sm="8" md="4">
                            <div id="" style="margin-top: -25px !important;">
                                <label for="datepicker" class="form-label customlabel" style="top: 12px !important;">Expected Date</label>
                                <Datepicker v-model="form.picked" :locale="locale" :upperLimit="to" :lowerLimit="from" :clearable="true" id="datepicker" class="inputField circularfield" />
                                <div v-if="this.showerror">
                                    <div class="validator error" v-for="error of v$.form.picked.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="4"></v-col>
                    </v-row>
                </v-container>
                <v-container v-else>
                    <v-row>
                        <v-col cols="12" sm="8" md="12" class="d-flex flex-row mb-5">
                            <v-col cols="12" sm="8" md="3">
                                <div class="select select-sm dropdownDiv circularfield">
                                    <select name="qtyDropdown" id="qtyDropdown" class="quantity" v-model="form.val" style="width:100%;">
                                        <option :value="qty" v-for="qty in quantityoptions" :key="qty">{{ qty }}</option>
                                    </select>
                                    <label for="qtyDropdown">Select val</label>
                                    <div v-if="this.showerror">
                                        <div class="validator error" v-for="error of v$.form.val.$errors" :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                    </div>
                                    <div class="select__arrow dropdownIcom"></div>
                                </div>
                            </v-col>
                            <div class="mt-5">
                                <span>X</span>
                            </div>
                            <v-col cols="12" sm="8" md="3">
                                <div id="" style="margin-top: -25px !important;">
                                    <label for="quantity" class="form-label customlabel" style="top: 12px !important;">Quantity</label>
                                    <input name="quantity" v-model="form.quantity" id="quantity" class="input-control circularfield" />
                                    <div v-if="this.showerror">
                                        <div class="validator error" v-for="error of v$.form.quantity.$errors" :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                    </div>
                                </div>
                            </v-col>
                            <div class="mt-5">
                                <span style="font-size:15px">=</span>
                            </div>
                            <v-col cols="12" sm="8" md="3">
                                <div id="" style="margin-top: -25px !important;">
                                    <label for="totalquantity" class="form-label customlabel" style="top: 12px !important;">Total</label>
                                    <input name="quantity" :value="`${this.form.val * this.form.quantity}`" id="totalQuantity" class="input-control circularfield" />
                                </div>
                            </v-col>
                            <v-col cols="12" sm="8" md="3">
                                <div id="" style="margin-top: -5px !important;">
                                    <div class="select select-sm dropdownDiv circularfield">
                                        <select name="unitDropdown" id="unitDropdown" class="form-control rounded Searchbox" v-model="form.unit" style="width:100%; border: none !important;">
                                            <option :value="unit.value" v-for="unit in unitsoptions" :key="unit">{{ unit.attr }}
                                            </option>
                                        </select>
                                        <label for="unitDropdown">Unit</label>
                                        <div class="select__arrow dropdownIcom"></div>
                                        <div v-if="this.showerror">
                                            <div class="validator error" v-for="error of v$.form.unit.$errors" :key="error.$uid">
                                                {{ error.$message }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </v-col>
                        </v-col>
                    </v-row>
                    <v-row>
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-6 mb-0 datepickerDiv mt-2 ml-0">
                            <Datepicker v-model="form.picked" :locale="locale" :upperLimit="to" :lowerLimit="from" :clearable="true" id="datepicker" class="inputField circularfield" />
                            <label for="datepick" class="form-label">Expected Date</label>
                            <div v-if="this.showerror">
                                <div class="validator error" v-for="error of v$.form.picked.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                        </div>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <button class="ps-btn ps-btn--gray mr-3" style="font-size:12px" @click.prevent="closecatsubmodal">Close</button>
                <button class="ps-btn success addsubcategory" id="submitquote" @click.prevent="SubmitQuotes">Submit</button>
            </v-card-actions>
        </v-card>
    </v-dialog>
</v-row>
</template>

<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
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
export default {
    name: 'RequestQuotePage',
    components: {
        LoaderComponent
    },
    props: {
        selectedSubmenu: {
            type: String
        },
        visible: {
            type: String
        },
        mode: {},
        catid: {},
        catval: {},
        subcatid: {},
        subcatval: {},
        prodid: {},
        supplierid: {}
    },
    setup() {
        return {
            v$: useVuelidate(),
        }
    },
    computed: {
        show: {
            get() {
                this.allproducts();
                return this.visible;
            },
            set(value) {
                this.form.category = this.catval;
                if (!value) {
                    this.$emit('close');
                }
            },
        },
    },
    data: () => ({
        unitsoptions: [],
        loader: false,
        quantityoptions: [25, 50, 100, 1000, 10000],
        form: {
            quantity: null,
            val: null,
            picked: new Date(),
            unit: [],
        },
        usertype: '',
        FORM_REQUIRED_FIELD: 'This field is required',
        showerror: false,
        submitbutton: false,
        categoryoptions: [],
        subcategoryoptions: [],
        productoptions: []
    }),
    validations() {
        return {
            form: {
                val: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                quantity: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer
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
        closecatsubmodal() {
            this.$emit('close');
        },
        async SubmitQuotes() {
            const result = await this.v$.form.$validate();
            if (result == false) {
                this.showerror = true;
                return;
            }
            var loginId = localStorage.getItem('loginid');
            let token = localStorage.getItem('token');
            var date = document.getElementById('datepicker').value;
            var quantity = document.getElementById('totalQuantity').value;
            let formData = new FormData();
            formData.append('product', this.prodid);
            formData.append('qty', this.form.quantity);
            formData.append('customerid', loginId);
            formData.append('supplierid', '');
            formData.append('requiredtime', date);
            formData.append('category', this.catid);
            formData.append('subcategory', this.subcatid);
            formData.append('companyname', 'Wholesale Express');
            formData.append('unit_of_measurement[]', this.form.unit);
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/reqquote`, formData, {
                    headers: {
                        'Authorization': 'Bearer' + token,
                        'Content-Type': 'multipart/form-data',
                    }
                })
                .then((response) => {
                    if (response.status == 200) {
                        this.$swal.fire({
                            icon: 'success',
                            title: 'Successfully requested a quote and send mail to supplier and admin!',
                            showConfirmButton: true,
                            timer: 5000
                        }).then(() => {
                            this.closecatsubmodal();
                            this.loader = false;
                            this.form.val = '';
                            this.form.quantity = '';
                            this.form.picked = '';
                            this.showerror = false;
                            if (localStorage.getItem('requestQuoteArray') != '') {
                                localStorage.removeItem('requestQuoteArray');
                            }
                        });
                    }
                }).catch((error) => {
                    var dataArry = [];
                    if (error.response) {
                        if (error.response.data.status == 'Unauthorized') {
                            dataArry.push({
                                catid: this.catid,
                                subcatid: this.subcatid,
                                prodid: this.prodid,
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
        },
        async allcategory() {
            var array = [];
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            await this.axios.get(process.env.VUE_APP_API_ENDPOINT + '/categorylist', {})
                .then(response => {
                    Object.values(response.data.data).forEach(value => {
                        array.push({
                            'id': value.id,
                            "title": value.name
                        });
                    });
                    this.categoryoptions = array;
                })
                .catch(err => {});
        },
        catChange(e) {
            var array = [];
            let catid = e.target.value;
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/categorysubdetails/${catid}`, {})
                .then(response => {
                    Object.values(response.data.data).forEach(value => {
                        array.push({
                            'id': value.id,
                            "title": value.name
                        });
                    });
                    this.subcategoryoptions = [];
                    this.subcategoryoptions = array;
                })
                .catch(err => {});
        },
        subChange(e) {
            var array = [];
            let subcatid = e.target.value;
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/productlist/${subcatid}`, {})
                .then(response => {
                    Object.values(response.data.data).forEach(value => {
                        array.push({
                            'id': value.id,
                            "title": value.name
                        });
                    });
                    this.productoptions = [];
                    this.productoptions = array;
                })
                .catch(err => {});
        },
        async allproducts() {
            var array = [];
            var subcatid;
            if (this.$route.query.subcatid) {
                subcatid = this.$route.query.subcatid;
            }
            var data = [];
            if (this.$route.query.flag) {
                if (localStorage.getItem('requestQuoteArray')) {
                    data = JSON.parse(localStorage.getItem('requestQuoteArray'));
                    subcatid = data[0].subcatid;
                }
            }
            await this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/productlist/${subcatid}`, {

                })
                .then(response => {
                    var unit;
                    var unitArray = [];
                    Object.values(response.data.data).forEach(value => {
                        if (data.length == 0 ? this.$route.query.prodid == value.id : data[0].prodid == value.id) {
                            if (value.unit_attributes) {
                                unit = value.unit_attributes.split(',');
                            }
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
                        }
                    });

                })
                .catch(err => {});
        },
    },
    mounted() {
        var data = [];
        if (this.$route.query.flag && this.$route.query.flag === 'requestquote-by-home') {
            if (localStorage.getItem('requestQuoteArray')) {
                data = JSON.parse(localStorage.getItem('requestQuoteArray'));
                this.form.val = data[0].val;
                this.form.quantity = data[0].quantity;
                document.getElementById('totalquantity').value = data[0].total;
                this.form.picked = new Date(data[0].date);
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
            } else {
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
                        .catch(err => {});
                }
            }
        }
    }
}
</script>

<style scoped>
.unitdropdownIcon {
    top: 103px !important;
    right: 46px !important;
}

.p-dropdown-panel {
    z-index: 99999 !important;
    /* top: 900px !important;  */
}
</style>

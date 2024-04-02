<template>
<div>
    <div class="col mt-0">
        <div class="row infoDiv mb-5 ml-3">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 mb-0">
                <!-- <h3 class="mb-2 prodListHead">Product Listing</h3> -->
                <v-expansion-panels class="mb-6" v-if="this.productlist.length>0">
                    <v-expansion-panel>
                        <v-expansion-panel-title expand-icon="mdi-menu-down">
                            <h3 class="prodListHead">Choose Product and add/update details</h3>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-list class="ProductListing">
                                <v-list-item v-for="product in productlist" :key="product" :value="product" color="primary" rounded="shaped" @click.prevent="ShowProduct(product.value, 'editmode')">
                                    <template v-slot:prepend>
                                        <font-awesome-icon :icon="['fas', 'angles-right']" />
                                    </template>
                                    <v-list-item-title v-text="product.title"></v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
        </div>
        <div class="row infoDiv mb-2 ml-3">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                <SingleChipsDropdown v-model="productform.category" :options="this.categoryoptions" @click.stop optionLabel="title" filter class="select select-sm proinpfield w-full md:w-20rem 
                    groupmultiselect singleSelectdropdown" optionValue="value" id="catDropdown" style="margin: 1px !important;opacity: 1 !important;" @change="catChange($event)" readonly :disabled="productform.category != '' && this.mode !=''?true:false" />
                <div class="select__arrow unitdropdownIcon"></div>
                <label for="prodcategory">Select Category</label>
                <div v-if="this.showerror">
                    <div class="validator error" v-for="error of v$.productform.category.$errors" :key="error.$uid">
                        {{ error.$message }}
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                <SingleChipsDropdown v-model="productform.subcategory" :options="this.subcategoryoptions" @click.stop optionLabel="title" filter class="select select-sm proinpfield w-full md:w-20rem 
                    groupmultiselect singleSelectdropdown" optionValue="value" id="subCatDropdown" style="margin: 1px !important;opacity: 1 !important;" @change="subChange($event)" readonly :disabled="productform.subcategory != '' && this.mode !=''?true:false" />
                <div class="select__arrow unitdropdownIcon"></div>
                <label for="subCatDropdown">Select SubCategory</label>
                <div v-if="this.showerror">
                    <div class="validator error" v-for="error of v$.productform.subcategory.$errors" :key="error.$uid">
                        {{ error.$message }}
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                <SingleChipsDropdown v-model="productform.name" :options="this.products" @click.stop optionLabel="title" filter class="select select-sm proinpfield w-full md:w-20rem 
                    groupmultiselect singleSelectdropdown" optionValue="value" id="productDropdown" style="margin: 1px !important;opacity: 1 !important;" @change="prodChange($event)" readonly :disabled="productform.name != '' && this.mode !=''?true:false" />
                <div class="select__arrow unitdropdownIcon"></div>
                <label for="productDropdown">Product Name</label>
                <div v-if="this.showerror">
                    <div class="validator error" v-for="error of v$.productform.name.$errors" :key="error.$uid">
                        {{ error.$message }}
                    </div>
                </div>
            </div>
        </div>
        <div class="row infoDiv mb-0 ml-3">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                <textarea name="description" rows="5" cols="20" id="description" v-model="productform.description" class="input-control inputField mt-0 mb-0 proddecbox"></textarea>
                <label for="description">Product Description</label>
                <div v-if="this.showerror">
                    <div class="validator error" v-for="error of v$.productform.description.$errors" :key="error.$uid">
                        {{ error.$message }}
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                <div class="">
                    <ChipsMultiSelect v-model="productform.unit" display="chip" @click.stop :options="this.unitsoptions" optionLabel="attr" optionGroupLabel="attr" filter showClear optionGroupChildren="attribute" :maxSelectedLabels="3" class="select select-sm proinpfield w-full 
                            md:w-20rem groupmultiselect" style="margin: 1px !important;">
                        <template #optiongroup="slotProps">
                            <div class="flex align-items-center" @click.stop>
                                <div class="optionOptGroup" @click.stop>{{ slotProps.option.title }}</div>
                            </div>
                        </template>
                        <template #footer>
                            <div class="py-2 px-3">
                                <b>{{ productform.unit ? productform.unit.length : 0 }}</b> item{{ (productform.unit ? productform.unit.length : 0) > 1 ? 's' : '' }} selected.
                            </div>
                        </template>
                    </ChipsMultiSelect>
                    <div class="select__arrow dropdownIcom unitdropdownIcon"></div>
                    <label for="unitDropdown">Unit of Measurement</label>
                    <div v-if="this.showerror">
                        <div class="validator error" v-for="error of v$.productform.unit.$errors" :key="error.$uid">
                            {{ error.$message }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
            </div>
        </div>
        <div class="row infoDiv mb-0 ml-3 mt-5">
            <label for="prod" class="col-sm-4 col-form-label">
                Product Image
            </label>
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-md-4 divimg">
                        <div v-if="this.images.length > 0" class="parentDiv">
                            <div v-for="(image, index) in this.images" :key="index" class="childDiv mr-2">
                                <button style="color: #f00;font-size: 15px;float: right;" @click="removeImage(index)">X</button>
                                <img :src="image" alt="product" width="80" height="80" class="productimg m-r-40px" @click="showImg(index)">
                            </div>
                        </div>
                        <div class="parentDiv" v-else>
                            <div class="childDiv">
                                <img v-if="this.prodimage" class="img-responsive" :src="`${ this.srcimage + 'productImages/'+ this.prodimage}`" alt="product image" style="height: 80px;" width="80" height="80">
                                <span v-else class="text-secondary">Image will uploade...</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class=" clearfix changebtn">
                            <router-link class="btn btn-default mr-0 cancelprofile" to="#" style="margin-top:-5px !important;font-size:12px !important;">Cancel</router-link>
                            <label for="prodimage" class="btn saveprofile" style="position: relative; padding: 7px !important;margin-top: 15px !important">Upload
                                image</label>
                            <input multiple capture type="file" id="prodimage" class="btn saveprofile" accept="image/*" style="visibility: hidden;" @change="changeImage">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row ml-8 mt-0 mb-0">
            <span class="infoboxhead">Pricing and Minimum Order</span>
        </div>
        <div class="row infoDiv mb-0 ml-3 mt-3">
            <div class="col-sm-4">
                <input type="text" class="form-control proinpfield" id="priceperunit" value="Whole Price Per Unit" readonly>
                <label for="priceperunit">Attribute1</label>
            </div>
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-md-12">
                        <input type="text" class="form-control proinpfield" id="priceunitattr" v-model="productform.priceperunit">
                        <div class=" dropdownIcom pricingDiv">
                            <span><i>$</i></span>
                        </div>
                        <label for="priceunitattr">Pricing</label>
                        <div v-if="this.showerror">
                            <div class="validator error" v-for="error of v$.productform.priceperunit.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row infoDiv mb-0 ml-3 mt-3">
            <div class="col-sm-4">
                <input type="text" class="form-control proinpfield" id="qty" value="Maximum Order Qty" readonly>
                <label for="qty">Attribute2</label>
            </div>
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-md-12">
                        <input type="text" class="form-control proinpfield" id="orderqty" v-model="productform.maxqty">
                        <label for="orderqty">Maximum Quantity</label>
                        <div v-if="this.showerror">
                            <div class="validator error" v-for="error of v$.productform.maxqty.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row infoDiv mb-0 ml-3 mt-3">
            <div class="col-sm-4">
                <input type="text" class="form-control proinpfield" id="minqty" value="Minimum Order Qty" readonly>
                <label for="minqty">Attribute3</label>
            </div>
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-md-12">
                        <input type="text" class="form-control proinpfield" id="orderqty" v-model="productform.minqty">
                        <label for="orderqty">Minimum Quantity</label>
                        <div v-if="this.showerror">
                            <div class="validator error" v-for="error of v$.productform.minqty.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row infoDiv mb-0 ml-3 mt-3">
            <div class="col-sm-4">
                <input type="text" class="form-control proinpfield" id="offerdeal" value="Special Offer Deals" readonly>
                <label for="offerdeal">Attribute4</label>
            </div>
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-md-12">
                        <input type="text" class="form-control proinpfield" id="offerdealattr" v-model="productform.offerdeal">
                        <label for="offerdealattr">Offer Deals</label>
                        <div v-if="this.showerror">
                            <div class="validator error" v-for="error of v$.productform.offerdeal.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row ml-8 mt-5 mb-0">
            <span class="infoboxhead">Packaging and Shipping</span>
        </div>
        <div class="row infoDiv mb-0 ml-3 mt-3">
            <div class="col-sm-4">
                <input type="text" class="form-control proinpfield" id="pkgdetail" value="Packaging Detail" readonly>
                <label for="pkgdetail">Attribute1</label>
            </div>
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-md-12">
                        <div class="select select-sm proinpfield">
                            <select name="pkgattr" id="pkgattr" class="category" v-model="productform.pakaging" style="width:100%;">
                                <option :value="item" v-for="item in packagedetails" :key="item">{{ item }}</option>
                            </select>
                            <div class="select__arrow"></div>
                            <label for="prodcategory">Package Type</label>
                            <div v-if="this.showerror">
                                <div class="validator error" v-for="error of v$.productform.pakaging.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row infoDiv mb-0 ml-3 mt-3">
            <div class="col-sm-4">
                <input type="text" class="form-control proinpfield" id="shipmethod" value="Shipping Methods" readonly>
                <label for="shipmethod">Attribute2</label>
            </div>
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-md-12">
                        <input type="text" class="form-control proinpfield" id="shippintattr" v-model="productform.shipping">
                        <label for="shippintattr">Shipping</label>
                        <div v-if="this.showerror">
                            <div class="validator error" v-for="error of v$.productform.shipping.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row infoDiv mb-0 ml-3 mt-3">
            <div class="col-sm-4">
                <input type="text" class="form-control proinpfield" id="estimatedtime" value="Estimated Delivery Time" readonly>
                <label for="estimatedtime">Attribute3</label>
            </div>
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-md-12">
                        <input type="text" class="form-control proinpfield" id="estimateddays" v-model="productform.estimated_days">
                        <label for="estimateattr">Estimated Days</label>
                        <div v-if="this.showerror">
                            <div class="validator error" v-for="error of v$.productform.estimated_days.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row ml-8 mt-5 mb-0">
            <span class="infoboxhead">Order Charges</span>
        </div>
        <div class="row infoDiv mb-0 ml-3">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                <input type="text" class="form-control proinpfield" id="discount" v-model="productform.discount">
                <label for="discount">Discount</label>
                <div v-if="this.showerror">
                    <div class="validator error" v-for="error of v$.productform.discount.$errors" :key="error.$uid">
                        {{ error.$message }}
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                <input type="text" class="form-control proinpfield" id="tax" v-model="productform.tax">
                <label for="tax">Tax</label>
                <div v-if="this.showerror">
                    <div class="validator error" v-for="error of v$.productform.tax.$errors" :key="error.$uid">
                        {{ error.$message }}
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                <input type="text" class="form-control proinpfield" id="shippingcharge" v-model="productform.shippingcharge">
                <label for="shippingcharge">Shipping</label>
                <div v-if="this.showerror">
                    <div class="validator error" v-for="error of v$.productform.shippingcharge.$errors" :key="error.$uid">
                        {{ error.$message }}
                    </div>
                </div>
            </div>
        </div>
        <div class="row infoDiv mb-0 ml-3 mt-0 pswddiv">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0 d-flex flex-row">
                <button type="button" class="btn btn-default pull-left mr-3 mt-4 cancelprofile" style="font-size: 12px !important;" @click.prevent="resetData">Reset</button>
                <input type="submit" name="submitbtn" value="Submit" id="submitbtn" style="height: 35px;padding-top: 9px;" class="btn pull-right saveprofile" @click.prevent="addProductInformation">
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0"></div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0"></div>
        </div>
    </div>  
</div>
</template>

<script>
import {
    useVuelidate
} from '@vuelidate/core';
import {
    required,
    helpers,
    minLength,
    maxLength,
    integer,
    email,
    sameAs
} from '@vuelidate/validators';
import {
    ref
} from 'vue';
export default {
    name: 'profductinfoComponent',
    components: {},
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    data() {
        return {
            showerror: false,
            existingProducts: true,
            items: [{
                    text: 'Real-Time',
                    icon: 'mdi-clock'
                },
                {
                    text: 'Audience',
                    icon: 'mdi-account'
                },
                {
                    text: 'Conversions',
                    icon: 'mdi-flag'
                },
            ],
            count: 1,
            packagecount: 1,
            removefield: false,
            removepkgfield: false,
            usertype: '',
            pricingtags: [],
            packagingtags: [],
            unittags: [],
            iphonesrc: require("@/assets/img/iphone.jpg"),
            packagedetails: ['Cardboard boxes', 'wooden cases', 'steel drums', 'containers'],
            prodimage: '',
            srcimage: process.env.VUE_APP_SET_PATH,
            mode: '',
            productform: {
                category: '',
                subcategory: '',
                name: '',
                description: '',
                unit: [],
                priceperunit: '',
                minqty: '',
                maxqty: '',
                offerdeal: '',
                pakaging: '',
                shipping: '',
                estimated_days: '',
                discount: '',
                tax: '',
                shippingcharge: ''
            },
            FORM_REQUIRED_FIELD: 'This field is required',
            FORM_INTEGER_FIELD: 'Must be an integer',
            images: [],
            imgs: '',
            storeimages: [],
            visibility: false,
            files: ref(''),
            categoryoptions: [],
            subcategoryoptions: [],
            products: [],
            unitsoptions: [],
            subcategory: '',
            pricelist: [],
            pkglist: [],
            estimatedtime: false,
            estimated_date: null,
            requested_date: new Date(),
            cust_id: null,
            requiredtime: null,
            productlist: []
        }
    },
    validations() {
        return {
            productform: {
                category: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                subcategory: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                name: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                description: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                unit: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                priceperunit: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer
                },
                minqty: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer
                },
                maxqty: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer
                },
                offerdeal: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                pakaging: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                shipping: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                estimated_days: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer
                },
                discount: {
                    integer: helpers.withMessage(this.FORM_INTEGER_FIELD, integer)
                },
                tax: {
                    integer: helpers.withMessage(this.FORM_INTEGER_FIELD, integer)
                },
                shippingcharge: {
                    integer: helpers.withMessage(this.FORM_INTEGER_FIELD, integer)
                },
            },
        }
    },
    methods: {
        resetData() {
            this.productform.category = '';
            this.productform.subcategory = '';
            this.productform.name = '';
            this.productform.description = '';
            this.productform.unit = [];
            this.productform.priceperunit = '';
            this.productform.minqty = '';
            this.productform.maxqty = '';
            this.productform.offerdeal = '';
            this.productform.pakaging = '';
            this.productform.shipping = '';
            this.productform.estimated_days = '';
            this.productform.discount = '';
            this.productform.tax = '';
            this.productform.shippingcharge = '';
        },
        showImg(index) {
            this.imgs = this.images
            this.index = index
            this.visibility = true
        },
        changeImage(e) {
            let files = e.target.files
            this.storeimages.push(e.target.files[0]);
            this.files = e.target.files;
            if (!files.length) return;
            this.uploadImage(files);
        },
        uploadImage(files) {
            var vm = this
            for (var i = 0; i < files.length; i++) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    const imgUrl = event.target.result;
                    vm.images = [];
                    vm.images.push(imgUrl)
                }
                reader.readAsDataURL(files[i])
            }
        },
        removeImage(index) {
            this.images.splice(index, 1)
        },
        changeAttribute(e) {
            var defaultval = document.getElementById('pricingDropdown1').value;
            if (this.pricelist[defaultval] != 'undefined') {
                this.pricelist.push(e.target.value);
            } else {
                this.pricelist = [];
                this.pricelist.push(defaultval);
                this.pricelist.push(e.target.value);
            }
        },
        changepkgAttribute(e) {
            var defaultval = document.getElementById('pkgDropdown1').value;
            if (e.target.value === 'estimated_delivery_time') {
                this.estimatedtime = true;
            } else {
                this.estimatedtime = false;
            }

            if (this.pkglist[defaultval] != 'undefined') {
                this.pkglist.push(e.target.value);
            } else {
                this.pkglist = [];
                this.pkglist.push(defaultval);
                this.pkglist.push(e.target.value);
            }
        },
        handleChangeTag(tags) {
            this.pricingtags = tags;
        },
        async fetchQuoteList() {
            let formData = new FormData();
            var token = localStorage.getItem("token");
            let quoteno = this.$route.query.id;
            formData.append('search_by_quote_id', quoteno);
            formData.append('categoryname', '');
            formData.append('product', '');
            formData.append('reqdate', '');
            const headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            };
            this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + '/get-reqquote', formData, {
                        headers
                    })
                .then(response => {
                    this.items = response.data.data;
                    this.items = this.items.map((el) => {
                        this.productform.category = el.quoteproductname[0].quotesubcategoryname[0].categoryname[0].id;
                        this.productform.subcategory = el.quoteproductname[0].quotesubcategoryname[0].id;
                        this.productform.name = el.quoteproductname[0].id;
                        this.cust_id = el.customerid;
                        this.productform.qty = el.qty;
                        this.requiredtime = el.created_at.split('T')[0];
                        return true;
                    })
                })
                .catch(err => {});
        },
        async addProductInformation() {
            const result = await this.v$.productform.$validate();
            if (result == false) {
                this.showerror = true;
                return
            }
            let token = localStorage.getItem('token');
            let supp_id = localStorage.getItem('loginid');
            let formData = new FormData();
            let quote_id = this.$route.query.id;
            var productName = '';
            Object.values(this.products).forEach((prod) => {
                if (prod.value == this.productform.name) {
                    productName = prod.title;
                }
            });
            if (this.productform.unit) {
                if (this.productform.unit.length > 0) {
                    for (let i = 0; i < this.productform.unit.length; i++) {
                        let unittags = this.productform.unit[i]['value'];
                        formData.append('unit_of_measurement[]', unittags);
                    }
                }
            }
            formData.append('productImage', this.files[0]);
            formData.append('suplierid', supp_id);
            formData.append('product_id', this.productform.name);
            formData.append('productname', productName);
            formData.append('description', this.productform.description);
            formData.append('whole_price_per_unit', this.productform.priceperunit);
            formData.append('max_order_qty', this.productform.maxqty);
            formData.append('min_order_qty', this.productform.minqty);
            formData.append('special_offer_deals', this.productform.offerdeal);
            formData.append('packaging_detail', this.productform.pakaging);
            formData.append('ship_methods', this.productform.shipping);
            formData.append('estimated_days', this.productform.estimated_days);
            formData.append('tax', this.productform.tax);
            formData.append('discount', this.productform.discount);
            formData.append('shipping', this.productform.shippingcharge);

            if (this.prod_id != undefined) {
                formData.append('_method', 'put')
                this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/products/${this.prod_id}`, formData, {
                        headers: {
                            'Authorization': 'Bearer ' + token,
                            'Content-Type': 'multipart/form-data',
                        }
                    })
                    .then((response) => {
                        this.$swal.fire({
                            icon: 'success',
                            title: 'Successfully updated product information.',
                            showConfirmButton: true,
                            timer: 5000
                        }).then(() => {})
                    }).catch((error) => {});
            } else {
                formData.append('flag', 'addproductinfo');
                this.axios.post(process.env.VUE_APP_API_ENDPOINT + '/products', formData, {
                        headers: {
                            'Authorization': 'Bearer ' + token,
                            'Content-Type': 'multipart/form-data',
                        }
                    })
                    .then((response) => {
                        this.$swal.fire({
                            icon: 'success',
                            title: 'Successfully added product information',
                            showConfirmButton: true,
                            timer: 5000
                        }).then(() => {
                            this.productform = Object.assign({}, {});
                            this.productform.category = '';
                            this.productform.subcategory = '';
                            this.productform.name = '';
                            this.images = '';
                            this.showerror = false;
                        })
                    }).catch((error) => {});
            }
        },
        getUserProfile() {
            let user_id = localStorage.getItem('loginid');
            let token = localStorage.getItem('token');
            const headers = {
                'Authorization': 'Bearer' + token,
            }
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/get-profile/${user_id}`, {
                    headers
                })
                .then((response) => {
                    this.subcategory = response.data.user[0].userprofile.subcategory;
                }).catch((error) => {});
        },
        addfield() {
            this.count++;
            this.removefield = true;
        },
        removeField(index) {
            this.count--;
        },
        addpkgfield() {
            this.packagecount++;
            this.removepkgfield = true;
        },
        removepkgField(index) {
            this.packagecount--;
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
                        const foundSubCat = subcatArray.some(el => el.title === value.product_details[0].subcategoryname[0].name);
                        prodArray.push({
                            'value': value.product_details[0].id,
                            "title": value.product_details[0].name
                        });
                        if (!foundCategory) {
                            catArray.push({
                                'value': value.product_details[0].subcategoryname[0].categoryname[0].id,
                                "title": value.product_details[0].subcategoryname[0].categoryname[0].name
                            });
                        } else {
                            return;
                        }
                        if (!foundSubCat) {
                            subcatArray.push({
                                'value': value.product_details[0].subcategoryname[0].id,
                                "title": value.product_details[0].subcategoryname[0].name
                            });
                        } else {
                            return;
                        }
                    });
                    this.categoryoptions = catArray;
                    this.subcategoryoptions = subcatArray;
                    this.products = prodArray;
                    this.productlist = prodArray;
                })
                .catch(err => {});
        },
        async allunitmeasure() {
            var array = [];
            var token = localStorage.getItem("token");
            const headers = {
                'Authorization': 'Bearer ' + token,
            };
            await this.axios.get(process.env.VUE_APP_API_ENDPOINT + '/getmeasurement', {
                    headers
                })
                .then(response => {
                    Object.values(response.data.data).forEach(value => {
                        var unitArray = [];
                        var unitattr = value.attribute.split(',');
                        Object.values(unitattr).forEach(el => {
                            var attr = el.split('-');
                            unitArray.push({
                                'attr': attr[1],
                                'value': el
                            });
                        });
                        array.push({
                            'title': value.title,
                            "attribute": unitArray
                        });
                    });
                    this.unitsoptions = array;
                })
                .catch(err => {});
        },
        catChange(e) {
            var array = [];
            let catid;
            if (typeof e != 'number') {
                catid = e.value;
            } else {
                catid = e;
            }
            let supplier_id = localStorage.getItem('loginid');
            let formData = new FormData();
            formData.append('supplier_id', supplier_id);
            formData.append('category_id', catid);
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'multipart/form-data'
            };
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/suppcatlist`, formData, {
                    headers
                })
                .then(response => {
                    var data = response.data.data;
                    Object.values(data).forEach(value => {
                        const foundSubCat = array.some(el => el.title === value.product_details[0].subcategoryname[0].name);
                        if (!foundSubCat) {
                            array.push({
                                'value': value.product_details[0].subcategoryname[0].id,
                                "title": value.product_details[0].subcategoryname[0].name
                            });
                        } else {
                            return;
                        }
                    });
                    this.subcategoryoptions = array;
                })
                .catch(err => {});
        },
        subChange(e) {
            var array = [];
            let subcatid = e.value;
            let supplier_id = localStorage.getItem('loginid');
            let formData = new FormData();
            formData.append('supplier_id', supplier_id);
            formData.append('subcategory_id', subcatid);
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'multipart/form-data'
            };
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/suppcatlist`, formData, {
                    headers
                })
                .then(response => {
                    var data = response.data.data;
                    Object.values(data).forEach(value => {
                        array.push({
                            'value': value.product_details[0].id,
                            "title": value.product_details[0].name
                        });
                    });
                    this.products = array;
                })
                .catch(err => {});
        },
        async prodChange(e) {
            let prodid = e.value;
            this.ShowProduct(prodid, 'addmode');
        },
        async ShowProduct(id, mode) {
            this.allunitmeasure();
            this.suppcatlist();
            this.prod_id = id;
            if (mode == 'editmode') {
                this.mode = mode;
            }
            var token = localStorage.getItem("token");
            let supplier_id = localStorage.getItem('loginid');
            let formData = new FormData();
            formData.append('supplier_id', supplier_id);
            formData.append('product_id', id);
            formData.append('flag', 'showing product info');
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + '/suppcatlist', formData, {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'multipart/form-data',
                    }
                })
                .then(response => {
                    var data = response.data.data;
                    this.productform = Object.assign({}, {});
                    var array = [];
                    Object.values(data).forEach(dataval => {
                        Object.values(dataval).forEach(value => {
                            this.prodimage = null;
                            var itemArray = [];
                            this.productform.category = value.category;
                            this.catChange(this.productform.category);
                            this.productform.subcategory = value.subcategory;
                            this.productform.name = value.product_id;
                            if (value.product_info.length == 0) {
                                var unitArray = [];
                                if (value.product_details[0].unit_attributes != undefined) {
                                    var unitattr = value.product_details[0].unit_attributes.split(',');
                                    Object.values(unitattr).forEach(el => {
                                        var attr = el.split('-');
                                        unitArray.push({
                                            'attr': attr[1],
                                            'value': el
                                        });
                                    });
                                    if (unitArray.length >= 1) {
                                        this.productform.unit = unitArray;
                                        Object.values(this.productform.unit).forEach(item => {
                                            Object.values(this.unitsoptions).forEach(el => {
                                                Object.values(el.attribute).forEach(ele => {
                                                    if (ele.attr === item.attr) {
                                                        if (!itemArray.includes(el)) {
                                                            itemArray.push(el);
                                                        }
                                                    }
                                                });
                                            });
                                        });
                                    }
                                }
                                this.unitsoptions = itemArray;
                            }
                            if (value.product_info.length > 0) {
                                if (value.product_info[0].unit_of_measurement != undefined) {
                                    var unitArray = [];
                                    var unitattr = value.product_info[0].unit_of_measurement.split(',');
                                    Object.values(unitattr).forEach(el => {
                                        var attr = el.split('-');
                                        unitArray.push({
                                            'attr': attr[1],
                                            'value': el
                                        });
                                    });
                                    if (unitArray.length >= 1) {
                                        this.productform.unit = [];
                                        this.productform.unit = unitArray;
                                        Object.values(this.productform.unit).forEach(item => {
                                            Object.values(this.unitsoptions).forEach(el => {
                                                Object.values(el.attribute).forEach(ele => {
                                                    if (ele.attr === item.attr) {
                                                        if (!itemArray.includes(el)) {
                                                            itemArray.push(el);
                                                        }
                                                    }
                                                });
                                            });
                                        });
                                    }
                                }
                                this.unitsoptions = itemArray;
                                this.prodimage = value.product_info[0].productImage;
                                this.productform.description = value.product_info[0].description;
                                this.productform.priceperunit = value.product_info[0].whole_price_per_unit;
                                this.productform.minqty = value.product_info[0].min_order_qty;
                                this.productform.maxqty = value.product_info[0].max_order_qty;
                                this.productform.offerdeal = value.product_info[0].special_offer_deals;
                                this.productform.pakaging = value.product_info[0].packaging_detail;
                                this.productform.shipping = value.product_info[0].ship_methods;
                                this.productform.estimated_days = value.product_info[0].estimated_days;
                                this.productform.discount = value.product_info[0].discount;
                                this.productform.tax = value.product_info[0].tax;
                                this.productform.shippingcharge = value.product_info[0].shipping;
                            }
                        });
                    });
                })
                .catch(err => {});
        }
    },
    mounted() {
        this.usertype = localStorage.getItem('userType');
        this.quoteid = this.$route.query.quoteid;
        this.suppcatlist();
    }
};
</script>

<style lang="scss" scoped>
body {
    font-family: 'Quicksand', sans-serif;
}

.prodListHead {
    color: #740490;
}

.ProductListing .v-list-item__prepend>svg,
.ProductListing .v-list-item__content>.v-list-item-title {
    font-size: 15px;
    color: #770367;
}

.select select:disabled {
    opacity: 1.5 !important;
}

#priceunitattr {
    padding-left: 2.5rem !important;
}

.pricingDiv {
    top: 0px !important;
    position: absolute;
    padding: 1rem;
}

.pricingDiv span>i {
    color: #aaa8ab !important;
}

.select__arrow {
    right: 15px;
}

.unitdropdownIcon {
    right: 25px !important;
}

.singleSelectdropdown {
    border-radius: 15px !important;
}
.text-secondary{
    color: #979797 !important;
}
.v-expansion-panel{
    border-top-left-radius: 2rem !important;
    border-top-right-radius: 2rem !important;
}
// .v-expansion-panel-title h3{
//     font-size: 13px !important;
// }
</style>

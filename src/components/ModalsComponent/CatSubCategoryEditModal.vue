<template>
<v-row justify="center">
    <v-dialog persistent v-model="show" width="860px" class="modalShowContainer">
        <LoaderComponent v-if="this.loader" />
        <v-card>
            <v-card-title>
                <span class="text-h5 categoryhead">
                    <h4>{{ this.mode }} {{ this.selectedSubmenu }}</h4>
                </span>
                <font-awesome-icon :icon="['fasl', 'xmark']" class="modalCloseIcon" @click="$emit('close')" />
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row v-if="`${this.mode}` == 'Show'">
                        <v-col cols="12" sm="8" md="4" style="margin-top: -29px !important;">
                            <div id="Submitmsg" style="display:none;"></div>
                            <label :for="'catr' + key" class="form-label customlabel" style="top: 12px !important;">Category</label>
                            <input type="text" v-model="categoryval" class="form-control inputField circularfield" size="50" :id="'catr' + key">
                        </v-col>
                        <v-col cols="12" sm="8" md="4">
                            <div v-for="sub in this.subcategoryDetails" :key="sub.id" :id="'subInputFieldDiv' + sub.id" style="margin-top: -29px !important;">
                                <label :for="key" class="form-label customlabel" style="top: 12px !important;">Subcategory</label>
                                <input type="text" v-model="subcategoryname[sub.id]" class="form-control inputField mb-5 circularfield" :id="key">
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="4">
                            <div v-for="prod in this.productDetails" :key="prod.id" :id="'subInputFieldDiv' + prod.id" style="margin-top: -29px !important;">
                                <label :for="key" class="form-label customlabel" style="top: 12px !important;">Product</label>
                                <input type="text" v-model="productname[prod.id]" class="form-control inputField mb-5 circularfield" :id="key">
                            </div>
                        </v-col>
                    </v-row>
                    <v-row v-else-if="this.selectedSubmenu =='Category'">
                        <v-col cols="12" sm="8" md="6" style="margin-top: -29px !important;">
                            <div id="Submitmsg" style="display:none;"></div>
                            <label for="category" class="form-label customlabel" style="top: 12px !important;">Category</label>
                            <input type="text" v-model="form.category" class="form-control inputField circularfield" size="50" id="category">
                            <div v-if="this.showerror">
                                <div class="validator error" v-for="error of v$.form.category.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="6" style="margin-left: -13px !important;">
                            <label for="imgBox" class="ps-btn success addcategory" style="position: relative;">
                                Upload image</label>
                            <input multiple capture type="file" id="imgBox" accept="image/*" style="visibility: hidden;" @change="changeImage">
                        </v-col>
                        <v-col cols="12" sm="8" md="6"></v-col>
                        <v-col cols="12" sm="8" md="6">
                            <div v-if="form.images.length>0" style="width: 165px;" class="ml-5">
                                <div v-for="(image, index) in form.images" :key="index" class="mb-3">
                                    <img :src="image" alt="categoryimg" width="100" height="100" @click="showImg(index)">
                                    <button style="color: #f00;font-size: 15px;float: right;" @click="removeImage(index)">X</button>
                                </div>
                            </div>
                            <div class="mb-3" v-else>
                                <img :src="`${this.catimage}`" width="200" height="200" />
                                <button style="color: #f00;font-size: 15px;float: right;" @click="removeImage(index)">X</button>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row v-else-if="this.selectedSubmenu =='SubCategory'">
                        <v-col cols="12" sm="8" md="4" style="margin-top: -29px !important;">
                            <div id="Submitmsg" style="display:none;"></div>
                            <label for="category" class="form-label customlabel" style="top: 12px !important;">Category</label>
                            <input type="text" v-model="subcatform.category" class="form-control inputField circularfield" size="50" id="category" :disabled="true">
                            <div v-if="this.showerror">
                                <div class="validator error" v-for="error of v$.form.category.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="8">
                            <div style="margin-top: -29px !important;">
                                <label for="subtags" class="form-label customlabel" style="top: 12px !important;">
                                    Subcategory</label>
                                <input type="text" v-model="subcatform.subcategory" class="form-control 
                                inputField mb-5 circularfield" id="subcategory">
                                <div v-if="this.showerror" :id="key">
                                    <div class="validator error" v-for="error of v$.subcatform.subcategory.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="4" style="margin-left: -13px !important;">
                            <label for="imgBox" class="ps-btn success addcategory" style="position: relative;">
                                Upload image</label>
                            <input multiple capture type="file" id="imgBox" accept="image/*" style="visibility: hidden;" @change="changeImage">
                        </v-col>
                        <v-col cols="12" sm="8" md="4">
                            <div v-if="this.subcatform.images.length>0" style="width: 165px;" class="ml-5">
                                <div v-for="(image, index) in this.subcatform.images" :key="index" class="mb-3">
                                    <img :src="image" alt="categoryimg" width="150" height="150" @click="showImg(index)">
                                    <button style="color: #f00;font-size: 15px;float: right;" @click="removeImage(index)">X</button>
                                </div>
                            </div>
                            <div class="mb-3" v-else>
                                <img :src="`${this.catimage}`" width="200" height="200" />
                                <button style="color: #f00;font-size: 15px;float: right;" @click="removeImage(index)">X</button>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row v-else-if="this.selectedSubmenu =='Product'">
                        <v-col cols="12" sm="8" md="4" style="margin-top: -29px !important;">
                            <div id="Submitmsg" style="display:none;"></div>
                            <label for="category" class="form-label customlabel" style="top: 12px !important;">Category</label>
                            <input type="text" v-model="prodform.category" class="form-control inputField circularfield" size="50" id="category" :disabled="true">
                            <div v-if="this.showerror">
                                <div class="validator error" v-for="error of v$.prodform.category.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="4">
                            <div style="margin-top: -29px !important;">
                                <label for="subtags" class="form-label customlabel" style="top: 12px !important;">
                                    Subcategory</label>
                                <input type="text" v-model="prodform.subcategory" class="form-control 
                                inputField mb-5 circularfield" id="subcategory" :disabled="true">
                                <div v-if="this.showerror" :id="key">
                                    <div class="validator error" v-for="error of v$.prodform.subcategory.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="4">
                            <div style="margin-top: -29px !important;">
                                <label for="subtags" class="form-label customlabel" style="top: 12px !important;">
                                    Product</label>
                                <input type="text" v-model="prodform.name" class="form-control 
                                inputField mb-5 circularfield" id="subcategory">
                                <div v-if="this.showerror" :id="key">
                                    <div class="validator error" v-for="error of v$.prodform.name.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="6">
                            <div style="margin-top: -29px !important;">
                                <label for="subtags" class="form-label customlabel" style="top: 12px !important;">
                                    Unit of Measurement</label>
                                <ChipsMultiSelect v-model="prodform.unit" display="chip" @click.stop :options="this.unitsoptions" optionLabel="attr" optionGroupLabel="attr" filter showClear optionGroupChildren="attribute" :maxSelectedLabels="this.unitsoptions.length" class="select select-sm proinpfield circularfield w-full md:w-20rem groupmultiselect" style="margin: 1px !important;">
                                    <template #optiongroup="slotProps">
                                        <div class="flex align-items-center" @click.stop>
                                            <div class="optionOptGroup" @click.stop>{{ slotProps.option.title }}</div>
                                        </div>
                                    </template>
                                    <template #footer>
                                        <div class="py-2 px-3">
                                            <b>{{ prodform.unit ? prodform.unit.length : 0 }}</b> item{{ (prodform.unit ? prodform.unit.length : 0) > 1 ? 's' : '' }} selected.
                                        </div>
                                    </template>
                                </ChipsMultiSelect>
                                <div class="select__arrow editDropdownIcon"></div>
                                <div v-if="this.showerror" :id="key">
                                    <div class="validator error" v-for="error of v$.prodform.unit.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="4" style="margin-left: -13px !important;">
                            <label for="imgBox" class="ps-btn success addcategory" style="position: relative;">
                                Upload image</label>
                            <input multiple capture type="file" id="imgBox" accept="image/*" style="visibility: hidden;" @change="changeImage">
                        </v-col>
                        <v-col cols="12" sm="8" md="4">
                            <div v-if="this.prodform.images.length>0" style="width: 165px;" class="ml-5">
                                <div v-for="(image, index) in this.prodform.images" :key="index" class="mb-3">
                                    <img :src="image" alt="categoryimg" width="150" height="150" @click="showImg(index)">
                                    <button style="color: #f00;font-size: 15px;float: right;" @click="removeImage(index)">X</button>
                                </div>
                            </div>
                            <div class="mb-3" v-else>
                                <img :src="`${this.catimage}`" width="200" height="200" />
                                <button style="color: #f00;font-size: 15px;float: right;" @click="removeImage(index)">X</button>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <button class="ps-btn success mr-3 editcategory" id="editcategory" v-if="this.selectedSubmenu =='Category'" @click="EditCategory">Update</button>
                <button class="ps-btn success mr-3 editcategory" id="editsubcategory" v-if="this.selectedSubmenu =='SubCategory'" @click="EditSubcategory">Update</button>
                <button class="ps-btn success mr-3 editcategory" id="editproduct" v-if="this.selectedSubmenu =='Product'" @click="EditProduct">Update</button>
                <button class="ps-btn success mr-3 editcategory" id="deleteproduct" v-if="this.selectedSubmenu =='Product'" @click="deleteproduct">Delete</button>
                <button class="ps-btn ps-btn--gray mr-3" style="font-size:12px" v-on:click="this.items" @click="$emit('close')">Close</button>
            </v-card-actions>
        </v-card>
    </v-dialog>
</v-row>
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
import {
    ref
} from 'vue';
export default {
    name: 'CatSubCategoryModalPage',
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
        subid: {},
        prodid: {},
        catval: {},
    },
    setup() {
        return {
            v$: useVuelidate(),
        }
    },
    data: () => ({
        loader: false,
        categoryname: [],
        options: [],
        categoryval: '',
        array: [],
        arrayCat: [],
        subcategoryDetails: [],
        productDetails: [],
        subcategoryname: [],
        productname: [],
        images: [],
        imgs: '',
        storeimages: [],
        files: ref(''),
        catimage: '',
        srcimage: process.env.VUE_APP_SET_PATH,
        CATEGORY_REQUIRED_FIELD: 'Category field is required',
        IMAGE_REQUIRED_FIELD: 'Image field is required',
        SUBCATEGORY_REQUIRED_FIELD: 'Subcategory field is required',
        PRODUCTS_REQUIRED_FIELD: 'Product field is required',
        FIELD_IS_REQUIRED: 'This field is required',
        form: {
            category: '',
            images: []
        },
        subcatform: {
            category: '',
            subcategory: '',
            images: [],
        },
        prodform: {
            category: '',
            subcategory: '',
            name: '',
            images: [],
            unit: []
        },
        unitsoptions: [],
        showerror: false
    }),
    computed: {
        show: {
            get() {
                if (this.catid != '') {
                    this.fetchData2();
                    this.allunitmeasure();
                }
                return this.visible
            },
            set(value) {
                if (!value) {
                    this.$emit('close');
                }
            },
        },
    },
    validations() {
        return {
            form: {
                category: {
                    required: helpers.withMessage(this.CATEGORY_REQUIRED_FIELD, required)
                }
            },
            prodform: {
                category: {
                    required: helpers.withMessage(this.CATEGORY_REQUIRED_FIELD, required)
                },
                subcategory: {
                    required: helpers.withMessage(this.SUBCATEGORY_REQUIRED_FIELD, required)
                },
                name: {
                    required: helpers.withMessage(this.PRODUCTS_REQUIRED_FIELD, required)
                },
                unit: {
                    required: helpers.withMessage(this.FIELD_IS_REQUIRED, required)
                }
            },
            subcatform: {
                category: {
                    required: helpers.withMessage(this.CATEGORY_REQUIRED_FIELD, required)
                },
                subcategory: {
                    required: helpers.withMessage(this.SUBCATEGORY_REQUIRED_FIELD, required)
                }
            },
            subtagsform: {
                images: {
                    required: helpers.withMessage(this.IMAGE_REQUIRED_FIELD, required)
                }
            },
            searchProdform: {
                name: {
                    required: helpers.withMessage(this.FIELD_IS_REQUIRED, required)
                }
            }
        }
    },
    methods: {
        changeImage(e) {
            let files = e.target.files;
            this.storeimages.push(e.target.files[0]);
            this.files = e.target.files[0];
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
                    vm.images.push(imgUrl);
                    vm.form.images = [];
                    vm.form.images.push(imgUrl);
                    vm.subcatform.images = [];
                    vm.subcatform.images.push(imgUrl);
                    vm.prodform.images = [];
                    vm.prodform.images.push(imgUrl);
                }
                reader.readAsDataURL(files[i])
            }
        },
        removeImage(index) {
            this.images.splice(index, 1);
            this.form.images.splice(index, 1);
            this.subcatform.images.splice(index, 1);
            this.prodform.images.splice(index, 1);
            this.files = null;
            this.catimage = null;
        },
        async fetchData1() {
            this.categoryval = this.catval;
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.axios.get(
                    process.env.VUE_APP_API_ENDPOINT + `/singleCatlist/${this.catid}`, {
                        headers
                    })
                .then(response => {
                    this.subcategoryDetails = response.data.data[0].subcatedetails;
                    this.subcategoryDetails.map((el) => {
                        this.subcategoryname[el.id] = el.name;
                    });
                    this.categoryval = response.data.data[0].name;
                    this.catimage = this.srcimage + 'categoryImages/' + response.data.data[0].categoryImage
                })
                .catch(err => {});
        },
        async fetchData2() {
            this.categoryval = this.catval;
            this.form.category = this.catval;
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.loader = true;
            this.axios.get(
                    process.env.VUE_APP_API_ENDPOINT + `/singleCatlist/${this.catid}`, {
                        headers
                    })
                .then(response => {
                    this.loader = false;
                    this.subcategoryDetails = response.data.data[0].subcatedetails;
                    var prodDetail = [];
                    var unitArray = [];
                    var unit;
                    this.subcatform.subcategory = [];
                    this.subcategoryDetails.map((el) => {
                        if (el.id == this.subid) {
                            this.subcatform.subcategory = el.name;
                            this.prodform.subcategory = el.name;
                        }
                        el.product_details.map((prod) => {
                            if (prod.id == this.prodid) {
                                this.prodform.name = prod.name;
                                this.catimage = this.srcimage + 'productImages/' + prod.productImage;
                                if (prod.unit_attributes != undefined) {
                                    unit = prod.unit_attributes.split(',');
                                }
                            }
                        });
                    });
                    if (unit != undefined) {
                        Object.values(unit).forEach(ele => {
                            var attr = ele.split('-');
                            unitArray.push({
                                'attr': attr[1],
                                'value': ele
                            });
                        });
                    }
                    this.prodform.unit = unitArray;
                    this.categoryval = response.data.data[0].name;
                    this.form.category = response.data.data[0].name;
                    this.subcatform.category = response.data.data[0].name;
                    this.prodform.category = response.data.data[0].name;
                    if (this.selectedSubmenu == 'Category') {
                        this.catimage = this.srcimage + 'categoryImages/' + response.data.data[0].categoryImage
                    }
                })
                .catch(err => {
                    this.loader = false;
                });
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
                    this.options = array;
                })
                .catch(err => {});
        },
        async EditCategory() {
            const result = await this.v$.form.$validate();
            if (result == false) {
                this.showerror = true;
                return;
            }
            let formData = new FormData();
            formData.append('category', this.form.category);
            formData.append('categoryImage', this.files);
            formData.append("_method", "put");
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/category/${this.catid}`,
                    formData, {
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            'Content-Type': 'multipart/form-data',
                        }
                    }
                ).then(response => {
                    this.loader = false;
                    this.$emit('close')
                })
                .catch(error => {
                    this.loader = false;
                    if (error.response.data.data = 'Already Exist.') {
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Category already exist',
                            showConfirmButton: true,
                            timer: 500
                        }).then(() => {
                            this.form.category = "";
                        });
                    }
                });
        },
        async EditSubcategory() {
            const result = await this.v$.subcatform.$validate();
            if (result == false) {
                this.showerror = true;
                return;
            }
            let formData = new FormData();
            formData.append('subcategory', this.subcatform.subcategory);
            formData.append('category_id', this.catid);
            formData.append('subcategoryImage', this.files);
            formData.append("_method", "put");
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/subcategory/${this.subid}`,
                    formData, {
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            'Content-Type': 'application/json',
                        }
                    }
                ).then(response => {
                    this.loader = false;
                    this.$emit('close')
                })
                .catch(error => {
                    this.loader = false;
                    if (error.response.data.data = 'Already Exist.') {
                        this.$swal.fire({
                            icon: 'error',
                            title: 'SubCategory already exist',
                            showConfirmButton: true,
                            timer: 500
                        }).then(() => {
                            this.subcatform.subcategory = "";
                        });
                    }
                });
        },
        async EditProduct() {
            const result = await this.v$.prodform.$validate();
            if (result == false) {
                this.showerror = true;
                return;
            }
            let formData = new FormData();
            formData.append('subcategory_id', this.subid);
            formData.append('product', this.prodform.name);
            formData.append('flag', 'updateprod');
            if (this.prodform.unit) {
                if (this.prodform.unit.length > 0) {
                    for (let i = 0; i < this.prodform.unit.length; i++) {
                        let unittags = this.prodform.unit[i]['value'];
                        formData.append('unitattributes[]', unittags);
                    }
                }
            }
            formData.append('productImage', this.files);
            formData.append("_method", "put");
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/products/${this.prodid}`,
                    formData, {
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            'Content-Type': 'multipart/form-data',
                        }
                    }
                ).then(response => {
                    if (response.status == 200) {
                        this.loader = false;
                        this.$emit('close');
                    }
                })
                .catch(error => {
                    this.loader = false;
                    if (error.response) {
                        if (error.response.data.data = 'Already Exist.') {
                            this.$swal.fire({
                                icon: 'error',
                                title: 'Product already exist',
                                showConfirmButton: true,
                                timer: 500
                            }).then(() => {
                                this.prodform.name = "";
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
        deleteproduct() {
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.$swal({
                title: 'Are you sure you want to delete this Product',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes Delete it!',
                cancelButtonText: 'No, Keep it!',
                showCloseButton: true,
                showLoaderOnConfirm: true,
                customClass: 'warningswal'
            }).then((result) => {
                if (result.value) {
                    this.axios
                        .delete(
                            process.env.VUE_APP_API_ENDPOINT + `/products/${this.prodid}`, {
                                headers
                            })
                        .then(response => {
                            this.$emit('close');
                        })
                        .catch((error) => {})
                } else {}
            })
        },
        async allunitmeasure() {
            var array = [];
            var token = localStorage.getItem("token");
            const headers = {
                'Authorization': 'Bearer ' + token,
            };
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + '/getmeasurement', {
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
    },
    mounted() {
        if (this.catid != '') {}
    }
}
</script>

<style>
.swal2-container {
    z-index: 20000 !important;
}

.inputField:disabled {
    background-color: transparent !important;
}

.optionOptGroup {
    color: #122e84 !important;
    font-weight: bold;
}

.groupmultiselect {
    position: initial !important;
}
</style>

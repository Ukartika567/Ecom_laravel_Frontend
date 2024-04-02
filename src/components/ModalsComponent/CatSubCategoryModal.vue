<template>
<v-row justify="center">
    <v-dialog persistent v-model="show" width="780px" class="modalShowContainer">
        <LoaderComponent v-if="this.loader" />
        <v-card>
            <v-card-title>
                <span class="text-h5 categoryhead">
                    <h4>{{ this.mode }} {{ this.selectedSubmenu }}</h4>
                </span>
                <font-awesome-icon :icon="['fasl', 'xmark']" class="modalCloseIcon" @click="closecatsubmodal" />
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row v-if="this.mode == 'Select'">
                        <v-col cols="12" sm="8" md="12">
                            <div id="catInputFieldDiv" style="margin-top: -25px !important;">
                                <label for="catDropdown" class="form-label customlabel" style="top: 12px !important;">Select Product</label>
                                <div class="select select-sm dropdownDiv prodDropdownDiv circularfield">
                                    <select name="catDropdown" v-model="searchProdform.name" id="catDropdown" class="category" style="width:100%;">
                                        <option :value="item.id" v-for="item in productoptions" :key="item">
                                            {{ item.name }}</option>
                                    </select>
                                </div>
                                <div class="validator error" v-for="error of v$.searchProdform.name.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row v-else>
                        <v-col cols="12" sm="8" md="6" v-if="`${this.selectedSubmenu}` == 'Category'">
                            <div id="catInputFieldDiv" style="margin-top: -25px !important;">
                                <label for="catr" class="form-label customlabel" style="top: 12px !important;">Category</label>
                                <input type="text" v-model="form.category" class="form-control 
                                    inputField circularfield" id="catr" style="height: 40px !important;">
                                <div v-if="this.showerror">
                                    <div class="validator error" v-for="error of v$.form.category.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="6" v-if="`${this.selectedSubmenu}` == 'Category'">
                            <label for="imgBox" class="ps-btn success addcategory" style="position: relative;">Upload image</label>
                            <input multiple capture type="file" id="imgBox" accept="image/*" style="visibility: hidden;" @change="changeImage">
                            <div v-if="this.showerror">
                                <div class="validator catvalidation error ml-5 mt-0" v-for="error of v$.form.images.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="6" v-if="`${this.selectedSubmenu}` == 'Category'"></v-col>
                        <v-col cols="12" sm="8" md="6" v-if="`${this.selectedSubmenu}` == 'Category'">
                            <div v-if="this.form.images" style="width: 165px;" class="ml-5">
                                <div v-for="(image, index) in this.form.images" :key="index" class="mb-3">
                                    <img :src="image" alt="categoryimg" width="150" height="150" @click="showImg(index)">
                                    <button style="color: #f00;font-size: 15px;float: right;" @click="removeImage(index)">X</button>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="6" lg="4" v-if="`${this.selectedSubmenu}` == 'SubCategory'" style="margin-top: -25px !important;">
                            <label for="catDropdown" class="form-label customlabel" style="top: 12px !important;">
                                Select Category</label>
                            <SingleChipsDropdown v-model="subcatform.category" :options="this.options" @click.stop optionLabel="title" filter class="select select-sm proinpfield w-full
                                    md:w-20rem groupmultiselect singleSelectdropdown" style="margin: 1px !important;" optionValue="value" id="catDropdown" />
                            <div v-if="this.showerror">
                                <div class="validator error" v-for="error of v$.subcatform.category.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="6" lg="8" v-if="`${this.selectedSubmenu}` == 'SubCategory'">
                            <div id="subInputFieldDiv" style="margin-top: -10px !important;">
                                <label for="subtags" class="form-label customlabel subtagslabel">Subcategory</label>
                                <Chips v-model="subcatform.subcategorytags" separator="," class="select select-sm chipsDiv prodDropdownDiv circularfield" id="subtags" placeholder="Type subcategory and press 'Enter' or ','" />
                            </div>
                            <div v-if="this.showerror">
                                <div class="validator error" v-for="error of v$.subcatform.subcategorytags.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="6" v-if="`${this.selectedSubmenu}` == 'SubCategory'">
                            <label for="imgBox" class="ps-btn success addcategory" style="position: relative;">Upload image</label>
                            <input multiple capture type="file" id="imgBox" accept="image/*" style="visibility: hidden;" @change="changeImage">
                            <div v-if="this.showerror">
                                <div class="validator catvalidation error ml-5" v-for="error of v$.subcatform.images.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="6" v-if="`${this.selectedSubmenu}` == 'SubCategory'">
                            <div v-if="this.subcatform.images" style="width: 165px;">
                                <div v-for="(image, index) in this.subcatform.images" :key="index" class="mb-3">
                                    <img :src="image" alt="categoryimg" width="150" height="150" @click="showImg(index)">
                                    <button style="color: #f00;font-size: 15px;float: right;" @click="removeImage(index)">X</button>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="4" v-if="`${this.selectedSubmenu}` == 'Product'" style="margin-top: -25px !important;">
                            <label for="catDropdown" class="form-label customlabel" style="top: 12px !important;">
                                Select Category</label>
                            <SingleChipsDropdown v-model="prodform.category" :options="this.options" @click.stop optionLabel="title" filter class="select select-sm proinpfield w-full
                                    md:w-20rem groupmultiselect singleSelectdropdown" style="margin: 1px !important;" optionValue="value" id="catDropdown" @change="catChange($event)" />
                            <div v-if="this.showerror">
                                <div class="validator error" style="margin-left: 0px !important;" v-for="error of v$.prodform.category.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="4" v-if="`${this.selectedSubmenu}` == 'Product'" style="margin-top: -25px !important;">
                            <label for="subcatDropdown" class="form-label customlabel" style="top: 12px !important;">
                                Select SubCategory</label>
                            <SingleChipsDropdown v-model="prodform.subcategory" :options="this.subcatoptions" @click.stop optionLabel="title" filter class="select select-sm proinpfield w-full
                                    md:w-20rem groupmultiselect singleSelectdropdown" style="margin: 1px !important;" optionValue="value" id="subcatDropdown" />
                            <div v-if="this.showerror">
                                <div class="validator error ml-5" style="margin-left: 0px !important;" v-for="error of v$.prodform.subcategory.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="4" v-if="`${this.selectedSubmenu}` == 'Product'">
                            <div id="subInputFieldDiv mb-0" style="margin-top: -10px !important;">
                                <label for="prodtags" class="form-label customlabel subtagslabel">Product</label>
                                <Chips v-model="prodform.product" separator="," class="select select-sm chipsDiv prodDropdownDiv circularfield mb-0" id="prodtags" placeholder="Type product and press 'Enter' or ','" />
                            </div>
                            <div v-if="this.showerror">
                                <div class="validator error mt-0" style="margin-left: 0px !important;" v-for="error of v$.prodform.product.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="6" v-if="`${this.selectedSubmenu}` == 'Product'">
                            <div id="subInputFieldDiv mb-0" style="margin-top: -25px !important;" @click.stop>
                                <label for="prodtags" class="form-label customlabel unitlabel ">
                                    Unit of Measurement</label>
                                <ChipsMultiSelect v-model="prodform.unit" display="chip" @click.stop :options="this.unitsoptions" optionLabel="attr" optionGroupLabel="attr" filter optionGroupChildren="attribute" :maxSelectedLabels="this.unitsoptions.length" class="select select-sm proinpfield circularfield w-full md:w-20rem groupmultiselect" style="margin: 1px !important;">
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
                            </div>
                            <div v-if="this.showerror">
                                <div class="validator error mt-0" style="margin-left: 0px !important;" v-for="error of v$.prodform.unit.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="6" v-if="`${this.selectedSubmenu}` == 'Product'">
                            <label for="imgBox" class="ps-btn success addcategory" style="position: 
                            relative; left: -15px !important;">
                                Upload image</label>
                            <input multiple capture type="file" id="imgBox" accept="image/*" style="visibility: hidden;" @change="changeImage">
                            <div v-if="this.showerror">
                                <div class="validator catvalidation error ml-5" style="margin-left: 0px !important;" v-for="error of v$.prodform.images.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="6" v-if="`${this.selectedSubmenu}` == 'Product'">
                            <div v-if="this.prodform.images" style="width: 165px;">
                                <div v-for="(image, index) in this.prodform.images" :key="index" class="mb-3">
                                    <img :src="image" alt="categoryimg" width="150" height="150" @click="showImg(index)">
                                    <button style="color: #f00;font-size: 15px;float: right;" @click="removeImage(index)">X</button>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <button class="ps-btn ps-btn--gray mr-3" style="font-size:12px" @click="closecatsubmodal">Close</button>
                <button class="ps-btn success addcategory" id="addcategory" v-on:click="handleAddCategory" v-if="`${this.selectedSubmenu}` == 'Category' && `${this.mode}`=='Add'">Add</button>
                <button class="ps-btn success editcategory" id="editcategory" v-on:click="handleEditclick" v-if="`${this.selectedSubmenu}` == 'Category' && `${this.mode}`=='Edit'">Edit</button>
                <button class="ps-btn success addsubcategory" id="addsubcategory" v-on:click="handleAddSubcategory" v-if="`${this.selectedSubmenu}` == 'SubCategory'">Add</button>
                <button class="ps-btn success addsubcategory" id="addsubcategory" v-on:click="handleAddProduct" v-if="`${this.selectedSubmenu}` == 'Product' && this.mode != 'Select'">Add</button>
                <button class="ps-btn success addsubcategory" id="searchsupp" v-on:click="searchSupplier" v-if="`${this.selectedSubmenu}` == 'Product' && this.mode == 'Select'">Search</button>
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
        catval: {},
        subcatid: {},
        subcatval: {},
    },
    setup() {
        return {
            v$: useVuelidate(),
        }
    },
    computed: {
        show: {
            get() {
                if (this.mode == 'Select') {
                    this.allproducts();
                }
                this.handleSetcat();
                if (this.selectedSubmenu == 'Product' && this.mode != 'Select') {
                    this.allunitmeasure();
                }
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
        loader: false,
        value: ref(),
        categoryname: [],
        options: [],
        subcatoptions: [],
        array: [],
        countsub: 1,
        subcategory: {},
        subcategoryname: [],
        files: ref(''),
        categoryval: '',
        subcategoryval: '',
        imgs: '',
        subtags: [],
        prodtags: [],
        storeimages: [],
        visibility: false,
        form: {
            category: '',
            images: [],
        },
        subtagsform: {
            images: [],
        },
        subcatform: {
            category: '',
            subcategorytags: [],
            images: [],
        },
        prodform: {
            category: '',
            subcategory: '',
            product: [],
            images: [],
            unit: ''
        },
        unitsoptions: [],
        searchProdform: {
            name: ''
        },
        showerror: false,
        CATEGORY_REQUIRED_FIELD: 'Category field is required',
        IMAGE_REQUIRED_FIELD: 'Image field is required',
        SUBCATEGORY_REQUIRED_FIELD: 'Subcategory field is required',
        PRODUCTS_REQUIRED_FIELD: 'Product field is required',
        FIELD_IS_REQUIRED: 'This field is required',
        productoptions: []
    }),
    validations() {
        return {
            form: {
                category: {
                    required: helpers.withMessage(this.CATEGORY_REQUIRED_FIELD, required)
                },
                images: {
                    required: helpers.withMessage(this.IMAGE_REQUIRED_FIELD, required)
                },
            },
            prodform: {
                category: {
                    required: helpers.withMessage(this.CATEGORY_REQUIRED_FIELD, required)
                },
                subcategory: {
                    required: helpers.withMessage(this.SUBCATEGORY_REQUIRED_FIELD, required)
                },
                product: {
                    required: helpers.withMessage(this.PRODUCTS_REQUIRED_FIELD, required)
                },
                images: {
                    required: helpers.withMessage(this.IMAGE_REQUIRED_FIELD, required)
                },
                unit: {
                    required: helpers.withMessage(this.FIELD_IS_REQUIRED, required)
                }
            },
            subcatform: {
                category: {
                    required: helpers.withMessage(this.CATEGORY_REQUIRED_FIELD, required)
                },
                subcategorytags: {
                    required: helpers.withMessage(this.SUBCATEGORY_REQUIRED_FIELD, required)
                },
                images: {
                    required: helpers.withMessage(this.IMAGE_REQUIRED_FIELD, required)
                },
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
        async handleAddCategory() {
            const result = await this.v$.form.$validate();
            if (result == false) {
                this.showerror = true;
                return;
            }
            let formData = new FormData();
            formData.append('category', this.form.category);
            formData.append('categoryImage', this.files);
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + '/category',
                    formData, {
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            'Content-Type': 'multipart/form-data',
                        }
                    }
                ).then(response => {
                    if (response.status == 200) {
                        this.loader = false;
                        this.$swal.fire({
                            icon: 'success',
                            title: response.data.message,
                            showConfirmButton: true,
                            timer: 5000
                        }).then(() => {
                            this.form.category = "";
                            this.form.images = [];
                            this.showerror = false;
                            this.closecatsubmodal();
                            this.allcategory();
                        });
                    }
                })
                .catch(error => {
                    this.loader = false;
                    if (error.response) {
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
        async handleEditclick() {
            this.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
            let formData = new FormData();
            formData.append('category', this.category);
            formData.append("_method", "patch");
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'multipart/form-data',
            };
            await this.axios.post(
                process.env.VUE_APP_API_ENDPOINT + `/category/` + this.catid, formData, {
                    headers
                }).then(response => {
                document.getElementById("Submitmsg").style = "dispaly:block";
                document.getElementById("Submitmsg").innerHTML = response.data.message;
            }).catch(error => {
                document.getElementById("Submitmsg").style = "dispaly:block";
                document.getElementById("Submitmsg").innerHTML = error.response.data.data
            })
        },
        async handleSetcat() {
            this.form.category = this.catval;
            this.subcategory['dynamic-field-1'] = this.subcatval;
            this.categoryval = this.subcatid;
            this.prodform.category = this.subcatid;
        },
        async handleAddSubcategory() {
            const result = await this.v$.subcatform.$validate();
            if (result == false) {
                this.showerror = true;
                return;
            }
            let formData = new FormData();
            formData.append('category_id', this.subcatform.category);
            if (this.subcatform.subcategorytags) {
                if (this.subcatform.subcategorytags.length > 0) {
                    for (let i = 0; i < this.subcatform.subcategorytags.length; i++) {
                        let tags = this.subcatform.subcategorytags[i];
                        formData.append('subcategory[]', tags);
                    }
                }
            }
            formData.append('subcategoryImage', this.files);
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + '/subcategory',
                    formData, {
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            'Content-Type': 'multipart/form-data',
                        }
                    }
                ).then(response => {
                    if (response.status == 200) {
                        this.loader = false;
                        this.$swal.fire({
                            icon: 'success',
                            title: 'Successfully added  Subcategory',
                            showConfirmButton: true,
                            timer: 5000
                        }).then(() => {
                            this.subcatform.category = '';
                            this.subcatform.subcategorytags = '';
                            this.subcatform.images = '';
                            this.showerror = false;
                            this.closecatsubmodal();
                            this.allcategory();
                            this.allsubcategory();
                        });
                    }
                })
                .catch(error => {
                    this.loader = false;
                    if (error.response) {
                        if (error.response.data.data = 'Already Exist.') {
                            this.$swal.fire({
                                icon: 'error',
                                title: 'Subcategory already exist',
                                showConfirmButton: true,
                                timer: 500
                            }).then(() => {
                                this.subcatform.subcategorytags = '';
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
        async handleAddProduct() {
            this.allcategory();
            this.allsubcategory();
            const result = await this.v$.prodform.$validate();
            if (result == false) {
                this.showerror = true;
                return;
            }
            var token = localStorage.getItem("token");
            let formData = new FormData();
            formData.append('subcategory_id', this.prodform.subcategory);
            if (this.prodform.product) {
                if (this.prodform.product.length > 0) {
                    for (let i = 0; i < this.prodform.product.length; i++) {
                        let tags = this.prodform.product[i];
                        formData.append('productname[]', tags);
                    }
                }
            }
            if (this.prodform.unit) {
                if (this.prodform.unit.length > 0) {
                    for (let i = 0; i < this.prodform.unit.length; i++) {
                        let unittags = this.prodform.unit[i]['value'];
                        formData.append('unitattributes[]', unittags);
                    }
                }
            }
            formData.append('productImage', this.files);
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + '/products',
                    formData, {
                        headers: {
                            'Authorization': 'Bearer ' + token,
                            'Content-Type': 'multipart/form-data',
                        }
                    }
                ).then(response => {
                    if (response.status == 200) {
                        this.loader = false;
                        this.$swal.fire({
                            icon: 'success',
                            title: 'Successfully added Product',
                            showConfirmButton: true,
                            timer: 5000
                        }).then(() => {
                            this.prodform.category = '';
                            this.prodform.subcategory = '';
                            this.prodform.product = '';
                            this.showerror = false;
                            this.closecatsubmodal();
                        });
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
                                this.prodform.product = '';
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
                    this.subcatoptions = array;
                })
                .catch(err => {});
        },
        showImg(index) {
            this.imgs = this.form.images;
            this.imgs = this.subtagsform.images;
            this.imgs = this.prodform.images;
            this.imgs = this.subcatform.images;
            this.index = index
            this.visibility = true
        },
        changeImage(e) {
            let files = e.target.files
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
                    vm.form.images = [];
                    vm.form.images.push(imgUrl);
                    vm.subtagsform.images = [];
                    vm.subtagsform.images.push(imgUrl);
                    vm.prodform.images = [];
                    vm.prodform.images.push(imgUrl);
                    vm.subcatform.images = [];
                    vm.subcatform.images.push(imgUrl);
                }
                reader.readAsDataURL(files[i])
            }
        },
        removeImage(index) {
            this.form.images.splice(index, 1);
            this.subtagsform.images.splice(index, 1);
            this.prodform.images.splice(index, 1);
            this.subcatform.images.splice(index, 1);
            this.files = null;
        },
        closecatsubmodal() {
            this.$emit('close');
            this.form.images = [];
            this.subtagsform.images = [];
            this.prodform.images = [];
            this.subcatform.images = [];
            this.files = null;
        },
        handleChangeTag(tags) {
            if (tags.length > 0) {
                this.prodform.product = tags;
            }
            this.tags = tags;
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
                    this.subcatoptions = [];
                    this.subcatoptions = array;
                })
                .catch(err => {});
        },
        async allproducts() {
            var array = [];
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/productlist/${this.subcatid}`, {})
                .then(response => {
                    Object.values(response.data.data).forEach(value => {
                        array.push({
                            'id': value.id,
                            "name": value.name
                        });
                    });
                    this.productoptions = [];
                    this.productoptions = array;
                })
                .catch(err => {});
        },
        async searchSupplier() {
            this.$router.push({
                'path': '/suppSpecific',
                query: {
                    'catid': this.catid,
                    'subcatid': this.subcatid,
                    'prodid': this.searchProdform.name
                }
            });
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
                    if (response.status == 200) {
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
                    }
                })
                .catch(error => {
                    if (error.response) {
                        if (error.response.status == 401 || error.response.status == 404 || error.response.status == 400) {
                            localStorage.clear();
                            this.$router.push({
                                name: 'home'
                            });
                        }
                    } else {
                        if (error.message == "Network Error") {
                            localStorage.clear();
                            this.$router.push({
                                name: 'home'
                            });
                        }
                    }
                });
        },
    },
    mounted() {
        if (this.$route.path.includes('/admin/add-category')) {
            this.allcategory();
            this.allsubcategory();
        }
        if (this.catval != '') {
            this.handleSetcat();
        }
    }
}
</script>

<style lang="scss" scoped>
.optionOptGroup {
    color: #122e84 !important;
    font-weight: bold;
}

.unitlabel {
    top: 12px !important;
}

.unitdropdownIcon {
    right: 24px !important;
}

.p-dropdown-panel {
    z-index: 99999 !important;
}
</style>

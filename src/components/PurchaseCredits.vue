<template lang="html">
<LoaderComponent v-if="this.loader" />

<div class="werehouseContainer">
    <div class="form m-auto">
        <div class="widget widget-white werehouseWidget" :ref="`creditPackDiv`">
            <div class="werehousetitleDiv">
                <h3>Credit point options</h3>
            </div>
            <div class="widget-body" style="padding: 20px">
                <div class="form-rows p-t-no">
                    <div class="row">
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <div class="contentdiv mt-0">
                                <div class="headerDiv text-center">
                                    <h2>Select Credit Pack</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3"></div>
                    </div>
                    <div class="row">
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <div class="contentdiv mt-0 mb-5">
                                <div class="headerDiv text-center">
                                    <div class="text-comments text-small">Top up your credits by selecting a credit pack below
                                        <span class="text-small text-grey">&nbsp;&nbsp;
                                        <span class="text-success">$20/credit</span></span>.</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3"></div>
                    </div>
                    <div class="form-row m-b-no" style="padding-left: 150px;">
                        <div class="col-md-3 mr-8 payoptiondiv" v-for="pack in creditPointpacks" :key="pack.id" :class="pack.divclass">
                            <div class="orderdetailDiv ml-0">
                                <div class="creditleftcontainer">
                                    <div class="contentDiv">
                                        <div class="cardContent">
                                            <div class="pointDiv text-center">
                                                <p class="packtype">{{ pack.type }}</p>
                                                <span>{{ pack.credit_point }} Credits</span>
                                                <p>$ {{ pack.credit_point_amt }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center mt-5 itemDiv">
                                        <span>Pack Details</span>
                                    </div>
                                    <div class="pachDetails">
                                        <div class="contentdiv mt-5 mb-5">
                                            <div class="row mt-2 packliitem">
                                                <ul>
                                                    <li>
                                                        <span>
                                                            <font-awesome-icon :icon="['far', 'circle-check']" class="packcheckIcon" />
                                                            {{ pack.pack_detail }}
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="contentDiv mb-5" @click.prevent="buyCreditPoint(pack.id, pack.credit_point, pack.credit_point_amt)">
                                            <div class="cardContent paybtn text-center">
                                                <span>Buy Now</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3"></div>
                    </div>
                    <div class="row">
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <div class="contentdiv mt-8">
                                <div class="headerDiv text-center">
                                    <h3>OR</h3>
                                    <h3>YOU CAN MANUALY ENTER CREDITS POINTS</h3>
                                </div>
                                <div class="contentform">
                                    <div class=" row mt-8">
                                        <div class="col-md-6 mb-5">
                                            <input name="pointbox" type="text" v-model="form.pointbox" id="pointbox" class="form-control inputField circularfield" placeholder="Enter credit points" style="height: 44px !important;">
                                            <label for="pointbox">Credit Points</label>
                                            <div class="error validator" v-for="error of v$.form.pointbox.$errors" :key="error.$uid">
                                                {{ error.$message }}
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-5">
                                            <span class="amtdollar"><i>$</i></span>
                                            <input name="amountbox" type="text" :value="isNaN(((20) * Number(form.pointbox)))?0:(20) * Number(form.pointbox)" id="amountbox" class="form-control inputField circularfield" placeholder="Total amount" style="height: 44px !important; padding: 0 25px !important;">
                                            <label for="amountbox">Total Amount</label>
                                        </div>
                                    </div>
                                    <div class="row mt-5">
                                        <div class="col-md-3">
                                        </div>
                                        <div class="col-md-6">
                                            <router-link id="proceedbtn" name="proceedbtn" class="btn block proceddbtn" to="#" style="" @click.prevent="buyCreditPoint('',form.pointbox,  ((20) * Number(form.pointbox)))">Proceed</router-link>
                                        </div>
                                        <div class="col-md-3">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="widget widget-white d-none paymentDiv mt-0 werehouseWidget" :ref="`payDiv`">
    <div class="widget-body p-b-no" style="padding: 20px">
        <div class="form-rows p-t-no">
            <div class="form-rows-header m-b-25">
                <h3>Choose Payment Method</h3>
            </div>
            <div class="">
                <div class="">
                    <div class="form-row">
                        <input value="Credit Card" name="paycardradio" type="radio" id="creditcard" class="magic-radio">
                        <label for="creditcard">Credit Card</label>
                    </div>
                </div>
                <div class="">
                    <div class="form-row">
                        <input value="EFT/Card with Payfast" name="paycardradio" type="radio" id="payfastbtn" class="magic-radio">
                        <label for="payfastbtn">EFT/Card with Payfast</label>
                    </div>
                </div>
                <div class="">
                    <div class="form-row">
                        <input value="Direct Deposit" name="paycardradio" type="radio" id="directdeposit" class="magic-radio" v-model="this.calamonut">
                        <label for="directdeposit">Direct Deposit</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="widget-footer clearfix">
        <a class="btn btn-default pull-left ml-5" href="#" style="font-size:12px" @click.prevent="proceed">Cancel</a>
        <input type="submit" name="paymentbtn" value="Proceed to Payment" id="paymentbtn" class="btn proceddbtn pull-right" style="margin-right: 5px !important;" @click.prevent="showDailog()">
    </div>
</div>
<PaymentMethodModal :visible="showModal" :paymentMethod="this.paymentMethod" @close="showModal=false" />
</template>

<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
import PaymentMethodModal from '@/components/ModalsComponent/PaymentMethodModal.vue'
import {
    useVuelidate
} from '@vuelidate/core'
import {
    required,
    integer,
    minLength,
    maxLength,
    helpers,
} from '@vuelidate/validators'
export default {
    name: 'PurchaseCreditPage',
    components: {
        PaymentMethodModal,
        LoaderComponent
    },
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    data: () => ({
        loader: false,
        showModal: false,
        calamonut: null,
        e: null,
        paymentMethod: '',
        form: {
            pointbox: null,
            amountbox: 0
        },
        FORM_REQUIRED_FIELD: 'This field is required',
        supplier_id: '',
        creditPointpacks: [{
                id: 1,
                type: 'Basic',
                divclass: 'credit1Div',
                credit_point: 10,
                credit_point_amt: 200,
                pack_detail: 'This is the Basic pack.'
            },
            {
                id: 2,
                type: 'Standard',
                divclass: 'credit2Div',
                credit_point: 25,
                credit_point_amt: 500,
                pack_detail: 'This is the Standard pack.'
            },
            {
                id: 3,
                type: 'Premium',
                divclass: 'credit3Div',
                credit_point: 50,
                credit_point_amt: 1000,
                pack_detail: 'This is the Premium pack.'
            }
        ],
    }),
    validations() {
        return {
            form: {
                pointbox: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    creditPoint:helpers.withMessage('Credit Point should be numeric',(value)=>{
                        const creditpoints = /^-?\d*(\.\d+)?$/;
                        return creditpoints.test(value);
                    })
                },
            }
        }
    },
    methods: {
        showDailog() {
            this.showModal = true;
            if (document.querySelector('input[name="paycardradio"]:checked')) {
                this.paymentMethod = document.querySelector('input[name="paycardradio"]:checked').value
            }
        },
        proceed() {
            if (document.querySelector('.paymentDiv').classList.contains('d-none')) {
                document.querySelector('.paymentDiv').classList.remove('d-none');
                this.$refs["payDiv"].scrollIntoView({
                    behavior: 'smooth',
                    block: 'end'
                });
            } else {
                document.querySelector('.paymentDiv').classList.add('d-none');
                this.$parent.$refs["creditPackHead"].scrollIntoView({
                    behavior: 'smooth',
                    block: 'end'
                });
            }
        },
        onPress() {
            var val = Number(this.e)
            if (isNaN(val)) {
                this.calamonut = ' ';
            } else {
                this.calamonut = 20 * val;
            }
        },
        async buyCreditPoint(id, creditpoint, amount) {
            const result = await this.v$.form.$validate();
            if(result == false){
                return;
            }
            var token = localStorage.getItem('token');
            let formData = new FormData();
            formData.append('credit_point', creditpoint);
            formData.append('supplier_id', this.supplier_id);
            formData.append('amount', amount);
            this.loader = true;
            this.$swal({
                title: 'Do you want to purchase these credit points?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                showCloseButton: true,
                showLoaderOnConfirm: true,
                customClass: 'warningswal'
            }).then((result) => {
                if (result.value) {
                    this.axios.post(
                            process.env.VUE_APP_API_ENDPOINT + '/admincredit', formData, {
                                headers: {
                                    'Authorization': 'Bearer' + token,
                                    'Content-Type': 'multipart/form-data'
                                }
                            }
                        )
                        .then((response) => {
                            this.loader = false;
                            this.$swal.fire({
                                icon: 'success',
                                title: 'Credit points added successfully.',
                                showConfirmButton: true,
                                timer: 5000
                            }).then(() => {})
                        }).catch((error) => {});
                } else {
                    this.loader = false;
                }
            });
        },
    },
    mounted() {
        this.supplier_id = localStorage.getItem('loginid');
    }
};
</script>

<style scoped>
.packliitem {
    justify-content: center;
}

.packliitem ul li>span {
    text-wrap: nowrap;
}

input[type="radio"].magic-radio {
    display: none !important;
}
</style>

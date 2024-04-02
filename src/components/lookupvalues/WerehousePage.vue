<template lang="html">
<div class="werehouseContainer">
    <div class="form">
        <section class="widget widget-white werehouseWidget">
            <div class="werehousetitleDiv">
                <h3>Werehouse Logistics</h3>
            </div>
            <div class="widget-body">
                <div class="form-rows p-t-no">
                    <div class="userInfoBox">
                        <div class="row">
                            <div class="col" style="margin-top: 10px;margin-left: 17px;">
                                <div>
                                    <h4>Wherehouse Location</h4>
                                </div>
                            </div>
                            <div class="col infoDivider">
                                <div class="addDiv">
                                    <h4 class="infoHead">Packing and Shipping Services </h4>
                                    <div class="mt-5">
                                        <span>
                                            Address:- xyz
                                        </span><br />
                                        <span>City: xyz</span>
                                        <br />
                                        <span>State: xyz</span>
                                        <br />
                                        <span>Country: xyz</span>
                                        <br />
                                        <span>ZipCode: 123456</span>
                                    </div>
                                </div>
                                <div class="ps-section__actions" style="padding-left:65px; margin-top: 30px;">
                                    <router-link to="#" class="btn btn-primary block" style="width:250px;">
                                        Add Wherehouses
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
</template>

<script>
export default {
    name: 'WerehousePageComponent',
    components: {},
    data() {
        return {
            comp_apple: require('@/assets/img/Computers/comp_infinix.jpg'),
            tv: require('@/assets/img/ElectronicItem/tablet_2.jpg'),
            camera: require('@/assets/img/Parts/sunvisor.jpg'),
            center: {
                lat: 40.689247,
                lng: -74.044502
            },
        };
    },
};
</script>

<style lang="scss" scoped></style>

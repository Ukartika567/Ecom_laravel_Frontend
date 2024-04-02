<template lang="html">
<section class="section section-odd section-border">
    <div class="container">
        <h1 class="text-center">Contact Us</h1>
    </div>
</section>
<section class="section-row">
    <div class="container">
        <div class="layout-cols layout-cols-sd-block sd-block">
            <div class="layout-col-left">
                <div class="widget widget-white form-contact-us">
                    <div class="widget-body">
                        <div class="form">
                            <div class="form-header">
                                <h2>Any Queries? Send us an email by filling in this form</h2>
                            </div>
                            <div class="form-rows p-t-no">
                                <div class="form-rows-header">
                                    <h3>Your Details</h3>
                                </div>
                                <div class="row">
                                    <div class="col-nd-6 col-sd-12">
                                        <div class="form-row">
                                            <input name="ctl00$ctl00$ContentPlaceHolder1$cphContent$txtCUName" type="text" maxlength="100" id="ContentPlaceHolder1_cphContent_txtCUName" class="input-control" placeholder="Name">
                                            <span id="ContentPlaceHolder1_cphContent_rfvCUName" class="validator" style="display:none;">Name Required</span>
                                        </div>
                                    </div>
                                    <div class="col-nd-6 col-sd-12">
                                        <div class="form-row">
                                            <input name="ctl00$ctl00$ContentPlaceHolder1$cphContent$txtCUCell" type="text" maxlength="10" id="ContentPlaceHolder1_cphContent_txtCUCell" class="input-control" placeholder="Cell Phone Number">
                                            <span id="ContentPlaceHolder1_cphContent_rfvCUCell" class="validator" style="display:none;">Cellphone Number Required</span>
                                            <span id="ContentPlaceHolder1_cphContent_revCell" class="validator" style="display:none;">Cellphone Number Should be a Valid 10 Digit Number For eg. 083XXXXXX.</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-nd-6 col-sd-12">
                                        <div class="form-row">
                                            <input name="ctl00$ctl00$ContentPlaceHolder1$cphContent$txtCUCompanyName" type="text" maxlength="100" id="ContentPlaceHolder1_cphContent_txtCUCompanyName" class="input-control" placeholder="Your company name (optional)">
                                        </div>
                                    </div>
                                    <div class="col-nd-6 col-sd-12">
                                        <div class="form-row">
                                            <input name="ctl00$ctl00$ContentPlaceHolder1$cphContent$txtCUEmail" type="text" maxlength="100" id="ContentPlaceHolder1_cphContent_txtCUEmail" class="input-control" placeholder="Email">
                                            <span id="ContentPlaceHolder1_cphContent_revEmail" class="validator" style="display:none;">Invalid email</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-rows m-b-no">
                                <div class="form-rows-header">
                                    <h3>Message</h3>
                                </div>
                                <div class="form-row mb-no">
                                    <textarea name="ctl00$ctl00$ContentPlaceHolder1$cphContent$txtCUMessage" rows="2" cols="20" id="ContentPlaceHolder1_cphContent_txtCUMessage" class="input-control" placeholder="Write your message here" style="height:100px;"></textarea>
                                    <span id="ContentPlaceHolder1_cphContent_rfvCUMessage" class="validator" style="display:none;">Message Required</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="widget-footer clearfix">
                        <input type="submit" name="ctl00$ctl00$ContentPlaceHolder1$cphContent$btnCUSubmit" value="Submit" id="ContentPlaceHolder1_cphContent_btnCUSubmit" class="btn btn-primary pull-right">
                    </div>
                </div>
            </div>
            <div class="layout-col-right">
                <div class="list-featured">
                    <i class="icon icon-telephone"></i>
                    <div class="desc">
                        <h2>Telephone</h2>
                        xxx xxx xxxx
                    </div>
                </div>
                <div class="list-featured">
                    <i class="icon icon-envelope"></i>
                    <div class="desc">
                        <h2>Email</h2>
                        <a href="mailto:support@snupit.co.za">xyz@xyz.com</a>
                    </div>
                </div>
                <div class="list-featured">
                    <i class="icon icon-printer"></i>
                    <div class="desc">
                        <h2>Fax</h2>
                        xxx xxx xxxx
                    </div>
                </div>
                <div class="list-featured">
                    <i class="icon icon-road-sign"></i>
                    <div class="desc">
                        <h2>Physical Address</h2>
                        XYZ<br>
                        South Africa
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'ContactusPage',
    data: () => ({}),
};
</script>

<style lang="scss" scoped></style>

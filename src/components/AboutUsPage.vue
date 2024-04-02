<template lang="html">
<section class="section section-odd section-border" v-if="this.$route.path.includes('aboutus')">
    <div class="container">
        <h1 class="text-center">About Us</h1>
    </div>
</section>
<section class="section section-odd section-border" v-if="this.$route.path.includes('how-it-works')">
    <div class="container">
        <h1 class="text-center">How It Works</h1>
    </div>
</section>
<section class="section-row" v-if="this.$route.path.includes('aboutus')">
    <div class="section-content">
        <p class="">
            WholeSaleExpress, the trusted marketplace that brings suppliers and customers together with confidence.We understand the importance of trust in business relationships, which is why we've built a platform that prioritizes transparency, reliability, and security. With SupplierDirect suppliers can showcase their products with peace of mind, knowing that they are connecting with genuine customers who value quality. Customers, on the other hand, can explore a wide array of trusted suppliers, ensuring a seamless and trustworthy sourcing experience. Join us today and experience the power of trust in driving successful business connections. Welcome to SupplierDirect,
            where trust builds lasting partnerships.
        </p>
    </div>
</section>
<section class="section-row" v-if="this.$route.path.includes('how-it-works')">
    <div class="section-content">
        <p class="section-desc">
            For Suppliers:</p>
        <p>
            Welcome to our platform! We provide a unique opportunity for suppliers like you to expand your market reach and connect with potential customers who are actively seeking your products. Here's a step-by-step breakdown of how it works:
        </p>
        <p>
            <ul class="list-dots">
                <li>
                    Sign up and Profile Creation: Create an account and complete your profile, highlighting your expertise, product offerings, and any certifications or qualifications you possess.
                </li>
                <li>
                    Request Submissions: Customers submit specific requests for products they need, including details like quantity, specifications, and delivery timelines.
                </li>
                <li>
                    Request Matching: Our platform intelligently matches customer requests with suppliers who offer relevant products. You'll receive notifications for relevant requests based on your product offerings.
                </li>
                <li>
                    Quote Submission: Review the customer's request and provide a competitive quote that includes pricing, delivery terms, and any additional details. Showcase your expertise and value proposition to stand out from the competition.
                </li>
                <li>
                    .Order Confirmation: Once a customer accepts your quote, the order is confirmed. You'll receive a notification to proceed with order fulfillment.
                </li>
                <li>
                    Product Preparation and Delivery: Prepare the products according to the customer's specifications. Ship the items to our secure warehouse, where they will undergo a thorough quality inspection.
                </li>
                <li>
                    Quality Assurance: Our team inspects the received products to ensure they meet the customer's requirements and adhere to the highest quality standards. This step ensures customer satisfaction and maintains the reputation of our platform.
                </li>
                <li>
                    .Customer Delivery: Once the products pass the quality inspection, they are shipped directly to the customer's designated location. We handle the logistics and ensure timely and secure delivery.
                </li>
            </ul>
        </p>
        <p class="section-desc">
            For Customers:</p>
        <p>
            Welcome to our platform! We offer a convenient way for you to find reliable suppliers and source the products you need. Here's a step-by-step breakdown of how it works:
        </p>
        <p>
            <ul class="list-dots">
                <li>
                    Sign up and Profile Creation: Create an account and provide details about your business, industry, and product requirements. This helps us match you with the most suitable suppliers.
                </li>
                <li>
                    Request Submission: Submit specific requests for the products you need, including details like quantity, specifications, and desired delivery timeframe.
                </li>
                <li>
                    Supplier Matching: Our platform matches your requests with a wide network of suppliers who specialize in the products you're looking for. You'll receive notifications when relevant quotes become available
                </li>
                <li>
                    Quote Review: Compare the quotes you receive from different suppliers, considering factors like pricing, product quality, delivery terms, and supplier ratings. Our platform provides a transparent overview of the quotes to assist you in making an informed decision.
                </li>
                <li>
                    Supplier Selection: Choose the quote that best meets your requirements and accepts their quote, you can select all three if you deem appropriate! You can review supplier profiles, jobs previously done, trust verification, ratings, and reviews to make an informed decision.
                </li>
                <li>
                    Payment and Security: Make payment securely through our integrated payment system. We hold the funds until you receive the products and confirm your satisfaction.
                </li>
                <li>
                    Supplier Fulfilment: Once you've accepted a supplier's quote and made the payment, they will prepare and ship the products to our secure warehouse for inspection.
                </li>
                <li>
                    Quality Inspection: Our team thoroughly inspects the received products to ensure they meet your specifications and quality standards. This step ensures you receive the products as expected.
                </li>
            </ul>
        </p>
    </div>
</section>
<section class="section section-odd" v-if="this.$route.path.includes('how-it-works')">
    <div class="section-content">
        <p class="section-desc">
            Timely Delivery</p>
        <p>
            Once the products pass the quality inspection, we arrange for their prompt shipment to
            your specified location. We track the delivery to ensure it reaches you on time.
        </p>
    </div>
</section>
<section class="section section-no-border" v-if="this.$route.path.includes('how-it-works')"></section>
</template>

<script>
export default {
    name: 'AboutUsPage',
    data: () => ({}),
};
</script>

<style lang="scss" scoped></style>

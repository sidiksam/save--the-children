<template>
  <div>
    <div class>
      <img
        src="~/assets/images/cna1.jpeg"
        alt
        class="w-full h-screen object-corver bg-no-repeat bg-home"
      />
      <!-- <Slider-comp /> -->
    </div>
    <section>
      <!-- <div class="container mx-auto">
        <div class="mx-32">
          <div class="">
            <p class="bg-white shadow-md rounded-t w-1/2 mt-40 text-4xl font-bold p-3">
              NOW MORE THAN EVER,
              CHILDREN NEED YOUR HELP
            </p>
            <p
              class="bg-white rounded-b shadow-md w-2/5 pb-2 text-4xl font-bold primary-text font-bold px-3"
            >TO SURVIVE AND THRIVE</p>
          </div>
        </div>
      </div>-->
      <!-- Donate Buttpon -->
      <!-- <div class="container mx-auto pt-6 pb-16">
        <div class="mx-32">
          <nuxt-link to="/donationForm">
            <button
              class="primary-color py-2 px-16 rounded text-xl font-bold text-white"
            >Donate Today</button>
          </nuxt-link>
        </div>
      </div>-->
    </section>
    <!-- 2 -->
    <section class="bg-white h-auto">
      <div class="container mx-auto">
        <div class="mx-44 pt-6">
          <div class="bg-body text-white mb-12 shadow-lg">
            <p
              class="text-3xl font-bold pt-5 px-6"
            >We work in the hardest-to-reach places, where it’s toughest to be a child.</p>
            <p
              class="px-6 pt-2 text-lg"
            >When you give to Save the Children, 85% of every leone goes straight to our mission to provide lifesaving relief to children.</p>
            <ul class="list-disc px-16 pt-4 text-lg">
              <li>
                <strong>le50,000</strong> can provide enough food to keep 3 children from going hungry for a month
              </li>
              <li>
                <strong>le150,000</strong> can wrap 30 warm, cozy blankets around children affected by conflict
              </li>
              <li>
                <strong>le300,000</strong> can provide 150 face masks to refugee health workers on the front lines
              </li>
            </ul>
            <p
              class="text-lg px-6 pt-4 pb-12"
            >With your support, we can continue our work to keep children in the U.S. and around the world healthy, educated and safe.</p>
          </div>
        </div>

        <!-- Cards -->
        <div>
          <p>
            <Cards-com />
          </p>
        </div>
      </div>
    </section>
    <!-- News sec -->
    <section>
      <!-- News Card -->
      <div>
        <p>
          <News-cards />
        </p>
      </div>
    </section>
    <section>
      <!-- News Card -->
      <div>
        <p>
          <Donors-cards />
        </p>
      </div>
    </section>
  </div>
</template>

<script>
// import {slider} from"../plugins/slider"
export default {
  data() {
    return {}
  },
  mounted() {
    //  slider()
  },
  methods: {},
}
</script>

<style>
</style>
<template>
  <div>
    <div>
     <div class="block md:hidden mt-14">
        <img
        src="~/assets/images/cna1.jpeg"
        alt
        class=" bg-no-repeat bg-home"
      />
     </div>
     <div class="hidden md:block">
        <Slider-comp />
     </div>
    </div>
    <section>
    </section>
    <!-- 2 -->
    <section class="bg-white h-auto ">
      <div class="container mx-auto">
        <div class="md:mx-44 pt-6">
          <div class="bg-body text-white mb-12 ">
            <p
              class="md:text-3xl text-xl font-bold pt-5 px-6"
            >We work in the hardest-to-reach places, where it’s toughest to be a child.</p>
            <p
              class="px-6 pt-2 text-normal"
            >When you give to Children’s Advocacy Network (CAN - SL), 90% of every leone goes straight to our mission to provide lifesaving relief to children.</p>
            <ul class="list-disc px-16 pt-4 text-normal">
              <li>
                <strong>le50,000</strong> can provide enough food for a child.
              </li>
              <li>
                <strong>le150,000</strong> can wrap 30 warm, cozy blankets abadon children.
              </li>
              <li>
                <strong>le300,000</strong> can provide school materials for needy children or children living in deprive communities
              </li>
            </ul>
            <p
              class="text-normal px-6 pt-4 pb-12"
            >With your support, we can continue our work to keep children in Sierra Leone healthy, educated and sefety.</p>
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

export default {
  data() {
    return {}
  },
  mounted() {
  
  },
  methods: {},
}
</script>

<style>
</style>
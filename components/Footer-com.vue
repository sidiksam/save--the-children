<template>
  <div>
    <div class="bg-footer">
      <div class="container mx-auto">
        <div class="md:mx-44 mx-8">
          <div class="md:flex flex-wrap pt-16 footer-text justify-center">
            <!-- our mission -->
            <div class="md:w-1/4">
              <p class="md:text-3xl text-xl  text-white font-bold">Our Mission</p>
              <p
                class="pt-2"
              >Children’s Advocacy Network (CAN - SL) believes every child deserves a future.</p>
              <p>To provide necessary support in changing the perception and wrong doing of our people‘s by minimizing the incidence of child abuse in our society. Thereby a secured safe and friendly environment will be attained for the betterment of our beloved children’s.</p>
            </div>
            <!-- quick link -->
            <div class="md:w-1/3 md:pl-24 leading-8 md:pt-2 pt-4">
              <div>
                <p class="text-lg font-bold text-white pb-1">Quick Links</p>
              </div>

              <nuxt-link to="/about-page">
                <p>About Us</p>
              </nuxt-link>
              <nuxt-link to="/education-page">Education</nuxt-link>
              <nuxt-link to="/child-protection">
                <p>Child Protection</p>
              </nuxt-link>
              <nuxt-link to="/livelihood-page">
                <p>Livelihood</p>
              </nuxt-link>
              <nuxt-link to="/faq-page">
                <p>Frequently Asked Questions</p>
              </nuxt-link>
              <nuxt-link to="/health-page">
                <p>Health</p>
              </nuxt-link>
              <nuxt-link to="/help-a-child">
                <p>Help a Child</p>
              </nuxt-link>
              
            </div>

            <!-- contact ur -->
            <div class="md:w-1/3 md:pt-0 pt-4">
              <div>
                <p class="text-xl font-bold text-white">Contact Us</p>
              </div>

              <p class="pt-4 pb-4">
                <strong>
                  <i class="el-icon-s-promotion text-white pr-2 bg-blue-700 p-2 rounded-full"></i>
                  <span class="px-3">Address</span>
                </strong>
                <br />51 Lower Easton Street, (Admin-Head Quarters) Freetown.
                <br />54b Manosewallu Road, Massanta Section, Kailahun town.
              </p>
              <p class="pb-4">
                <strong class>
                  <i class="el-icon-phone text-white pr-2 bg-blue-700 p-2 rounded-full"></i>
                  <span class="px-3">Phone Number</span>
                </strong>
                <br />+232 77 552 643
                <br />+232 77 750123
                <br />+232 77 209 005
                <br />+232 76 136 965
              </p>
              <p class="pb-6">
                <strong>
                  <i class="el-icon-message text-white pr-2 bg-blue-700 p-2 rounded-full"></i>
                  <span class="px-3">Email</span>
                </strong>
                <br />
                <a href="mailto:canmagbell2007@gmail.com">canmagbell2007@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 
            copy right
    -->
    <div class="flex justify-center   md:pb-8 pb-24 md:pt-6 w-full bg-copy-right copy-right">
      <p class="md:text-base text-sm md:mx-0 mx-8">Copyright &copy;2022 Children’s Advocacy Network (CAN - SL).</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>  
<template>
  <div>
    <div class="container mx-auto hidden md:block">
      <div class="mx-24">
        <div class="flex justify-between items-center">
          <!-- 1 -->
          <div>
            <!-- Who We are -->
            <div class>
              <el-dropdown>
                <span class="el-dropdown-link">
                  <nuxt-link to="/about-page" class="text-xl font-bold">
                    Who We Are
                    <i class="el-icon-arrow-right el-icon--right"></i>
                  </nuxt-link>
                </span>
                <!-- <el-dropdown-menu slot="dropdown" class="el-dropdown-menu">
                          <nuxt-link to="#">
                            <el-dropdown-item class="dropdown-item">Why Save the Children?</el-dropdown-item>
                          </nuxt-link>
                          <nuxt-link to="#">
                            <el-dropdown-item class="dropdown-item">Charity Ratings</el-dropdown-item>
                          </nuxt-link>
                          <nuxt-link to="#">
                            <el-dropdown-item class="dropdown-item">Leadership and Trustees</el-dropdown-item>
                          </nuxt-link>
                          <nuxt-link to="#">
                            <el-dropdown-item class="dropdown-item">Strategic Partners</el-dropdown-item>
                          </nuxt-link>
                          <nuxt-link to="#">
                            <el-dropdown-item class="dropdown-item">Media</el-dropdown-item>
                          </nuxt-link>
                          <nuxt-link to="#">
                            <el-dropdown-item class="dropdown-item">Reports and publications</el-dropdown-item>
                          </nuxt-link>
                          <nuxt-link to="#">
                            <el-dropdown-item class="dropdown-item">Financial Tnformation</el-dropdown-item>
                          </nuxt-link>
                </el-dropdown-menu>-->
              </el-dropdown>
            </div>
          </div>
          <!-- 2 -->
          <div>
            <!-- Items -->
            <div>
              <el-dropdown>
                <span class="el-dropdown-link">
                  <div class="text-xl font-bold">
                    What we do
                    <i class="el-icon-arrow-right el-icon--right"></i>
                  </div>
                </span>
                <el-dropdown-menu slot="dropdown" class="el-dropdown-menu">
                  <nuxt-link to="/education-page">
                    <el-dropdown-item class="dropdown-item">Education</el-dropdown-item>
                  </nuxt-link>
                  <nuxt-link to="/child-protection">
                    <el-dropdown-item class="dropdown-item">Child protection</el-dropdown-item>
                  </nuxt-link>
                  <nuxt-link to="/livelihood-page">
                    <el-dropdown-item class="dropdown-item">Livelihood</el-dropdown-item>
                  </nuxt-link>
                  <nuxt-link to="/health-page">
                    <el-dropdown-item class="dropdown-item">Health</el-dropdown-item>
                  </nuxt-link>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <!-- 3 -->
          <div>
            <!-- Items -->
            <div>
              <el-dropdown>
                <span class="el-dropdown-link">
                  <div class="text-xl font-bold">
                    Blog
                    <i class="el-icon-arrow-right el-icon--right"></i>
                  </div>
                </span>
                <el-dropdown-menu slot="dropdown" class="el-dropdown-menu">
                  <nuxt-link to="/image-blog">
                    <el-dropdown-item class="dropdown-item">Image Blogs</el-dropdown-item>
                  </nuxt-link>
                  <nuxt-link to="/video-blog">
                    <el-dropdown-item class="dropdown-item">Video Blogs</el-dropdown-item>
                  </nuxt-link>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <!-- 4 -->
          <div>
            <!-- Items -->
            <div>
              <el-dropdown>
                <span class="el-dropdown-link">
                  <nuxt-link to="/help-a-child" class="text-xl font-bold">
                    Help a Child
                    <i class="el-icon-arrow-right el-icon--right"></i>
                  </nuxt-link>
                </span>
                <!-- <el-dropdown-menu slot="dropdown" class="el-dropdown-menu">
                          <nuxt-link to="#">
                            <el-dropdown-item class="dropdown-item">Shop Popular Gifts?</el-dropdown-item>
                          </nuxt-link>
                          <nuxt-link to="#">
                            <el-dropdown-item class="dropdown-item">Shop by Price</el-dropdown-item>
                          </nuxt-link>
                          <nuxt-link to="#">
                            <el-dropdown-item class="dropdown-item">Shop by Category</el-dropdown-item>
                          </nuxt-link>
                          <nuxt-link to="#">
                            <el-dropdown-item class="dropdown-item">Shop all Gifts</el-dropdown-item>
                          </nuxt-link>
                        
                </el-dropdown-menu>-->
              </el-dropdown>
            </div>
          </div>
          <!-- 5 -->
          <div>
            <!-- -->
            <div>
              <el-dropdown>
                <span class="el-dropdown-link">
                  <nuxt-link to="/faq-page" class="text-xl font-bold">
                    FAQ
                    <i class="el-icon-arrow-right el-icon--right"></i>
                  </nuxt-link>
                </span>
                <!-- <el-dropdown-menu slot="dropdown" class="el-dropdown-menu">
                          <nuxt-link to="#">
                            <el-dropdown-item class="dropdown-item">Sponsor a Child Around the World</el-dropdown-item>
                          </nuxt-link>
                          <nuxt-link to="#">
                            <el-dropdown-item class="dropdown-item">Sponsor a Child in the SL.</el-dropdown-item>
                          </nuxt-link>
                          <nuxt-link to="#">
                            <el-dropdown-item class="dropdown-item">Leadership and Trustees</el-dropdown-item>
                          </nuxt-link>
                        
                </el-dropdown-menu>-->
              </el-dropdown>
            </div>
          </div>
          <!-- Donate Buttpon -->
          <div>
            <nuxt-link to="/donationForm">
              <button class="primary-color py-2 px-4 rounded text-lg font-bold text-white">Donate</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile view -->
    <nav class="flex flex-wrap items-center justify-end  -mt-3 px-3 text-lg text-gray-300   md:hidden">
      <svg
        id="menu-button"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div id="menu" class="hidden w-full md:flex mx-4  flex-wrap md:items-center md:w-auto">
        <div class="pt-4 text-base text-white md:flex md:justify-between md:pt-0">
            <div class="flex-wrap justify-start leading-10 items-center">
          <!-- 1 -->
          <div>
            <!-- Who We are -->
            <div >
              <el-dropdown>
                <span class="el-dropdown-link">
                  <nuxt-link to="/about-page" class="text-sm font-bold ">
                    Who We Are
                    <i class="md:el-icon-arrow-right el-icon--right"></i>
                  </nuxt-link>
                </span>
               
              </el-dropdown>
            </div>
          </div>
          <!-- 2 -->
          <div>
            <!-- Items -->
            <div>
              <el-dropdown>
                <span class="el-dropdown-link">
                  <div class="text-sm font-bold">
                    What we do
                    <i class="md:el-icon-arrow-right el-icon--right"></i>
                  </div>
                </span>
                <el-dropdown-menu slot="dropdown" class="el-dropdown-menu">
                  <nuxt-link to="/education-page">
                    <el-dropdown-item class="dropdown-item">Education</el-dropdown-item>
                  </nuxt-link>
                  <nuxt-link to="/child-protection">
                    <el-dropdown-item class="dropdown-item">Child protection</el-dropdown-item>
                  </nuxt-link>
                  <nuxt-link to="/livelihood-page">
                    <el-dropdown-item class="dropdown-item">Livelihood</el-dropdown-item>
                  </nuxt-link>
                  <nuxt-link to="/health-page">
                    <el-dropdown-item class="dropdown-item">Health</el-dropdown-item>
                  </nuxt-link>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <!-- 3 -->
          <div>
            <!-- Items -->
            <div>
              <el-dropdown>
                <span class="el-dropdown-link">
                  <div class="text-sm font-bold">
                    Blog
                    <i class="md:el-icon-arrow-right el-icon--right"></i>
                  </div>
                </span>
                <el-dropdown-menu slot="dropdown" class="el-dropdown-menu">
                  <nuxt-link to="/image-blog">
                    <el-dropdown-item class="dropdown-item">Image Blogs</el-dropdown-item>
                  </nuxt-link>
                  <nuxt-link to="/video-blog">
                    <el-dropdown-item class="dropdown-item">Video Blogs</el-dropdown-item>
                  </nuxt-link>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <!-- 4 -->
          <div>
            <!-- Items -->
            <div>
              <el-dropdown>
                <span class="el-dropdown-link">
                  <nuxt-link to="/help-a-child" class="text-sm font-bold">
                    Help a Child
                    <i class="md:el-icon-arrow-right el-icon--right"></i>
                  </nuxt-link>
                </span>
                
              </el-dropdown>
            </div>
          </div>
          <!-- 5 -->
          <div>
            <!-- -->
            <div>
              <el-dropdown>
                <span class="el-dropdown-link">
                  <nuxt-link to="/faq-page" class="text-sm font-bold">
                    FAQ
                    <i class="md:el-icon-arrow-right el-icon--right"></i>
                  </nuxt-link>
                </span>
                
              </el-dropdown>
            </div>
          </div>
          <!-- Donate Buttpon -->
          <div>
            <nuxt-link to="/donationForm">
              <button class="primary-color mt-2 py-1 px-8 rounded text-sm font-bold text-white">Donate</button>
            </nuxt-link>
          </div>
        </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { navButton } from '../plugins/nav-button'
export default {
  mounted() {
    navButton()
  },
}
</script>

<style>
.primary-color:hover {
  background-color: brown;
}
</style>
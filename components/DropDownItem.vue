<template>
  <div>
        <div class="container mx-auto">
                <div class="mx-28">
                 <div class="flex justify-between">
                     <!-- 1 -->
                      <div>
                    <!-- Items -->
                    <div class="">
                       <el-dropdown>
                        <span class="el-dropdown-link">
                         <nuxt-link to="/about-page" class="text-xl font-bold ">
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
                        </el-dropdown-menu> -->
                      </el-dropdown>
                    </div>
                  </div>
                  <!-- 2 -->
                   <div>
                    <!-- Items -->
                    <div>
                      <el-dropdown>
                        <span class="el-dropdown-link">
                          <div  class="text-xl font-bold ">
                            What we do 
                            <i class="el-icon-arrow-right el-icon--right"></i>
                          </div>
                        </span>
                        <el-dropdown-menu slot="dropdown" class="el-dropdown-menu">
                         
                          <nuxt-link to="/education-page">
                            <el-dropdown-item class="dropdown-item">Education</el-dropdown-item>
                          </nuxt-link>
                          <nuxt-link to="/child-protection">
                            <el-dropdown-item class="dropdown-item">Child protection  </el-dropdown-item>
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
                          
                          <div class="text-xl font-bold  "> Blog
                            <i class="el-icon-arrow-right el-icon--right"></i></div>

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
                          <nuxt-link to="/help-a-child" class="text-xl font-bold ">
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
                        
                        </el-dropdown-menu> -->
                      </el-dropdown>
                    </div>
                  </div>
                  <!-- 5 -->
                   <div>
                    <!-- -->
                    <div>
                      <el-dropdown>
                        <span class="el-dropdown-link">
                          <nuxt-link to="/faq-page" class="text-xl font-bold ">
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
                        
                        </el-dropdown-menu> -->
                      </el-dropdown>
                    </div>
                  </div>
                  <!-- Donate Buttpon -->
                  <div>
                      <nuxt-link to="/donationForm">  <button  class="primary-color py-2 px-4 rounded text-lg font-bold text-white ">Donate</button></nuxt-link>
                  </div>
                 </div>
                </div>
              </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.primary-color:hover{
background-color: brown;
}
</style>
<!-- Please remove this file from your project -->
<template>
  <div class>
    <section class="bg-yellow-300 ">
      <nav >
        <div>
          <div>
            <div class="container mx-auto">
              <!-- Parent -->
              <div class="md:mx-24 -mt-6 -mb-8  flex-wrap flex items-center justify-between">
                <div>
                  <nuxt-link to="/" class="hidden md:block">
                    <div class="md:mt-2 -ml-14 relative flex items-center">
                      <p class="py-4">
                        <img
                          class="w-40 pb-4 h-40 object-cover"
                          src="~/assets/images/logo22.png"
                          alt
                        />
                      </p>
                    </div>
                  </nuxt-link >
                  <!-- Mobile -->
                    <nuxt-link to="/" class="block md:hidden">
                    <div class="md:mt-2 -ml-1 py-2 relative flex items-center">
                      <p class="py-4">
                        <img
                          class="w-20 h-20 pl-2 pb-2 object-cover"
                          src="~/assets/images/logo22.png"
                          alt
                        />
                      </p>
                    </div>
                  </nuxt-link >
                </div>
                <div class="flex items-center text-gray-700">
                  <nuxt-link to="#" class="hidden md:block">
                    <nav>
                      <div class>
                        <div class="flex border ">
                            <input class=" focus:outline-none o border-none px-2 placeholder-gray-400 bg-white" type="text"  placeholder="Enter search term" >
                          <button class="flex focus:outline-none bg-white border-l border-current  py-2 px-2 items-center">
                        
                            <span class="px-1">
                              <i class="el-icon-search text-3xl "></i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </nav>
                  </nuxt-link>
                  <!-- Movile view -->
                   <nuxt-link to="#" class="block md:hidden">
                    <nav>
                      <div class>
                       
                        <div class="flex border mr-3  ">
                            <input class=" focus:outline-none border-none text-xs px-2 placeholder-gray-400 bg-white" type="text"  placeholder="Enter search term" >
                          <button class="flex focus:outline-none bg-white border-l border-current  py-2 px-2 items-center">
                        
                            <span class="px-1 flex items-center">
                             <i class="el-icon-search text-xl pl-1 -mr-2"></i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </nav>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <!-- Drop down -->
          <div class="pb-4 pt-8 bg-blue-800 -z-20 absolute w-full ">
            <DropDownItem class="" />
          </div>
        </div>
      </nav>
    </section>
    <div class="container mx-auto">
      <div class="mx-28">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',

  data() {
    return {
      input: '',
    }
  },
  head() {
    return {
      title: 'Home -Donation',
    }
  },
}
</script>

<style scope>


</style>
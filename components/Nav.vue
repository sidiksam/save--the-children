<!-- Please remove this file from your project -->
<template>
  <div class>
    <section class="bg-yellow-300 ">
      <nav class>
        <div>
          <div>
            <div class="container mx-auto">
              <div class="mx-28 -mt-8 -mb-12  flex-wrap flex items-center justify-between">
                <div>
                  <nuxt-link to="/">
                    <div class="md:mt-2 -ml-1 relative flex items-center">
                      <p class="py-4">
                        <img
                          class="w-56 h-72 object-cover"
                          src="~/assets/images/logo4.jpeg"
                          alt
                        />
                      </p>
                    </div>
                  </nuxt-link>
                </div>
                <div class="flex items-center text-gray-700">
                  <nuxt-link to="#" class>
                    <nav>
                      <div class>
                        <div class>
                          <button class="flex border border-current rounded items-center">
                            <el-input v-model="input" placeholder="Enter search term" ></el-input>
                            <span class="pr-3">
                              <i class="el-icon-search text-3xl"></i>
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

<style>
</style>
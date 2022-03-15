<template>
  <div>
    <div>
      <div>
        <p>
          <img src="~/assets/images/cna2.jpeg" alt class="w-full object-cover bg-no-repeat bg-home" />
        </p>
        <div class="container mx-auto">
          <p class="md:text-5xl font-bold md:-mt-60 md:mx-40 mx-8 -mt-8">
            <span class="bg-white px-3 pb-2 rounded">Blog vdeos</span>
          </p>
        </div>
      </div>
      <!-- News Compenent -->

      <div class="mb-8">
        <div class="container mx-auto">
          <div class="md:mx-44 md:mt-56 mt-8">
            <div>
              <p class="md:text-4xl text-xl md:mx-0 mx-8 pb-5 font-bold">News and Featured Stories</p>
            </div>
            <div class="bg-news-color">
              <!-- Blog Card 1 -->
              <div class="md:flex p-8 md:space-x-12 items-center cursor-pointer">
                <p class>
                  <!-- <video class src="~/assets/images/cq5dam.thumbnail.768.768 (2).jpg" alt /> -->
                  <video width="380" height="240" controls>
                    <source src="~/assets/videos/movie.mp4" type="video/mp4" />Your browser does not support the video tag.
                  </video>
                </p>
                <div>
                  <p
                    class="md:text-3xl text-base font-bold"
                  >What Is the Current Situation for Children in Conflict in Ukraine?</p>
                  <p
                    class="py-4"
                  >The Ukraine crisis has already forced at least 1.5 million children and families from their homes.</p>
                  <p class="pt-2">
                    <button
                      class="form-color py-2 md:w-60 w-full rounded md:text-xl text-sm font-bold text-white"
                    >READ MORE</button>
                  </p>
                </div>
              </div>
              <!-- Blog Card 2 -->
              <div class="md:flex p-8 md:space-x-12 items-center cursor-pointer">
                <p class>
                  <!-- <video class src="~/assets/images/cq5dam.thumbnail.768.768 (2).jpg" alt /> -->
                  <video width="380" height="240" controls>
                    <source src="~/assets/videos/movie.mp4" type="video/mp4" />Your browser does not support the video tag.
                  </video>
                </p>
                <div>
                  <p
                    class="md:text-3xl text-base font-bold"
                  >What Is the Current Situation for Children in Conflict in Ukraine?</p>
                  <p
                    class="py-4"
                  >The Ukraine crisis has already forced at least 1.5 million children and families from their homes.</p>
                  <p class="pt-2">
                    <button
                      class="form-color py-2 md:w-60 w-full rounded md:text-xl text-sm font-bold text-white"
                    >READ MORE</button>
                  </p>
                </div>
              </div>
              <!-- Blog Card 3 -->
              <div class="md:flex p-8 md:space-x-12 items-center cursor-pointer">
                <p class>
                  <!-- <video class src="~/assets/images/cq5dam.thumbnail.768.768 (2).jpg" alt /> -->
                  <video width="380" height="240" controls>
                    <source src="~/assets/videos/movie.mp4" type="video/mp4" />Your browser does not support the video tag.
                  </video>
                </p>
                <div>
                  <p
                    class="md:text-3xl text-base font-bold"
                  >What Is the Current Situation for Children in Conflict in Ukraine?</p>
                  <p
                    class="py-4"
                  >The Ukraine crisis has already forced at least 1.5 million children and families from their homes.</p>
                  <p class="pt-2">
                    <button
                      class="form-color py-2 md:w-60 w-full rounded md:text-xl text-sm font-bold text-white"
                    >READ MORE</button>
                  </p>
                </div>
              </div>
              <!-- Blog card 4 -->
              <div class="md:flex p-8 md:space-x-12 items-center cursor-pointer">
                <p class>
                  <!-- <video class src="~/assets/images/cq5dam.thumbnail.768.768 (2).jpg" alt /> -->
                  <video width="380" height="240" controls>
                    <source src="~/assets/videos/movie.mp4" type="video/mp4" />Your browser does not support the video tag.
                  </video>
                </p>
                <div>
                  <p
                    class="md:text-3xl text-base font-bold"
                  >What Is the Current Situation for Children in Conflict in Ukraine?</p>
                  <p
                    class="py-4"
                  >The Ukraine crisis has already forced at least 1.5 million children and families from their homes.</p>
                  <p class="pt-2">
                    <button
                      class="form-color py-2 md:w-60 w-full rounded md:text-xl text-sm font-bold text-white"
                    >READ MORE</button>
                  </p>
                </div>
              </div>
              <!-- Blog Card 5 -->
              <div class="md:flex p-8 md:space-x-12 items-center cursor-pointer">
                <p class>
                  <!-- <video class src="~/assets/images/cq5dam.thumbnail.768.768 (2).jpg" alt /> -->
                  <video width="380" height="240" controls>
                    <source src="~/assets/videos/movie.mp4" type="video/mp4" />Your browser does not support the video tag.
                  </video>
                </p>
                <div>
                  <p
                    class="md:text-3xl text-base font-bold"
                  >What Is the Current Situation for Children in Conflict in Ukraine?</p>
                  <p
                    class="py-4"
                  >The Ukraine crisis has already forced at least 1.5 million children and families from their homes.</p>
                  <p class="pt-2">
                    <button
                      class="form-color py-2 md:w-60 w-full rounded md:text-xl text-sm font-bold text-white"
                    >READ MORE</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Pagination -->
    <div class="flex justify-center pb-5 -mt-4">
      <el-pagination  layout="prev, pager, next" :total="50"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  head() {
    return {
      title: 'Blog-page',
    }
  },
}
</script>

<style>
</style>
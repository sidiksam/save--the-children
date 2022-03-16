<template>
  <div class="mt-3 ">
    <section class="flex m-0 p-0  h-screen justify-center items-center ">
      <!-- images sliders start -->
      <div class="slider">
        <div class="slides ">
          <!-- redio button start -->
          <input id="radio1" type="radio" name="radio-btn" />
          <input id="radio2" type="radio" name="radio-btn" />
          <input id="radio3" type="radio" name="radio-btn" />
          <input id="radio4" type="radio" name="radio-btn" />
          <!-- redio button end -->
          <!-- sliders images start -->
          <!-- slide1 -->
          <div class="slide first ">
            <img class="object-cover" src="~/assets/images/cna1.jpeg" alt />
          </div>
          <!-- slide 2 -->
          <div class="slide">
            <img class="object-cover" src="~/assets/images/cna2.jpeg" alt />
          </div>
          <!-- slide 3 -->
          <div class="slide">
            <img class="object-cover" src="~/assets/images/cna1.jpeg" alt />
          </div>
          <!-- slide 4 -->
          <div class="slide">
            <img class="object-cover" src="~/assets/images/cna2.jpeg" alt />
          </div>
          <!-- sliders images end -->
          <!-- automatic navigation start -->
          <div class="navigation-auto">
            <div class="auto-btn1"></div>
            <div class="auto-btn2"></div>
            <div class="auto-btn3"></div>
            <div class="auto-btn14"></div>
          </div>
          <!-- automatic navigation end -->
        </div>
        <!-- Manual navigation start -->
        <div class="navigation-manual">
          <label for="radio1" class="manual-btn"></label>
          <label for="radio2" class="manual-btn"></label>
          <label for="radio3" class="manual-btn"></label>
          <label for="radio4" class="manual-btn"></label>
        </div>
        <!-- Manual navigation end -->
      </div>
      <!-- images sliders end -->
    </section>
  </div>
</template>

<script>
import  {slider}  from '.././plugins/slider'
export default {
  data() {
    return {}
  },
  mounted() {
    slider()
  },
}
</script>


<style scoped >
.slider {
  width: 100vw;
  height: 600px;
  overflow: hidden;
}
.slides {
  width: 500%;
  height: 470px;
  display: flex;

  
}

.slides input {
  display: none;
  
}

.slide {
  width: 20%;
  transition: 2s;
 
}
.slide img {
  width: 100vw;
  height: 700px;
 
}

/* css for manual */

.navigation-manual {
  position: absolute;
  width: 100vw;
  margin-top: 100px;
  display: flex;
  justify-content: center;
}
.manual-btn {
  border: 2px solid #2240af;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s;
}
.manual-btn:not(:last-child) {
  margin-right: 40px;
  
}
  .manual-btn:hover{
    background: #2240af;
  
  }

#radio1:checked ~ .first {
  margin-left: 0;
}
#radio2:checked ~ .first {
  margin-left: -20%;
}
#radio3:checked ~ .first {
  margin-left: -40%;
}
#radio4:checked ~ .first {
  margin-left: -60%;
}

/* css auto */
.navigation-auto{
position: absolute;
display: flex;
width: 100vw;
 justify-content: center;
 align-items: center;
 margin-top: 570px;
}
.navigation-auto div{
  border: 2px solid #2240af;
  padding: 5px;
  border-radius: 10px;
transition: 1s;
}
.navigation-auto div:not(:last-child){
  margin-right: 40px;
}


#radio1:checked ~ .navigation-auto .auto-btn1 {
  background: #2240af;
}
#radio2:checked ~ .navigation-auto .auto-btn2 {
  background: #2240af;
}
#radio3:checked ~ .navigation-auto .auto-btn3{
  background: #2240af;
}
#radio4:checked ~ .navigation-auto .auto-btn4{
  background: #2240af;
}
</style>
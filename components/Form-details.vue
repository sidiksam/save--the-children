<template>
  <div>
    <div class="primary-text text-2xl font-bold p-3">1. CHOOSE YOUR GIFT TYPE</div>
    <!-- srction1 -->

    <section>
      <div class="flex justify-center p-4">
        <p>
          <button class="button-bg py-1 px-16 mx-1 rounded font-bold text-2xl form-button">MONTHLY</button>
        </p>
        <p>
          <button class="button-bg py-1 px-16 rounded mx-1 font-bold text-2xl form-button">ONE-TIME</button>
        </p>
      </div>
    </section>
    <div class="primary-text text-2xl font-bold p-3">2. CHOOSE YOUR GIFT AMOUNT</div>

    <!-- Monthly -->
    <section>
      <div class="flex flex-wrap p-4">
        <p>
          <button
            class="button-bg py-1 px-6 mx-1 rounded font-medium text-2xl form-button m-1"
          >le15,000</button>
        </p>
        <p>
          <button
            class="button-bg py-1 px-6 mx-1 rounded font-medium text-2xl form-button m-1"
          >le25,000</button>
        </p>
        <p>
          <button
            class="button-bg py-1 px-6 mx-1 rounded font-medium text-2xl form-button m-1"
          >le35,000</button>
        </p>
        <p>
          <button
            class="button-bg py-1 px-6 mx-1 rounded font-medium text-2xl form-button m-1"
          >le50,000</button>
        </p>
        <p>
          <button
            class="button-bg py-1 px-6 mx-1 rounded font-medium text-2xl form-button m-1"
          >le75,000</button>
        </p>
        <p>
          <button
            class="button-bg py-1 px-6 mx-1 rounded font-medium text-2xl form-button m-1"
          >le100,000</button>
        </p>
      </div>
    </section>
    <!-- one time -->
    <section>
      <div class="flex flex-wrap p-4">
        <p>
          <button
            class="button-bg py-1 px-6 mx-1 rounded font-medium text-2xl form-button m-1"
          >le50,000</button>
        </p>
        <p>
          <button
            class="button-bg py-1 px-6 mx-1 rounded font-medium text-2xl form-button m-1"
          >le100,000</button>
        </p>
        <p>
          <button
            class="button-bg py-1 px-6 mx-1 rounded font-medium text-2xl form-button m-1"
          >le150,000</button>
        </p>
        <p>
          <button
            class="button-bg py-1 px-6 mx-1 rounded font-medium text-2xl form-button m-1"
          >le300,000</button>
        </p>
        <p>
          <button
            class="button-bg py-1 px-6 mx-1 rounded font-medium text-2xl form-button m-1"
          >le500,000</button>
        </p>
        <p>
          <button
            class="button-bg py-1 px-6 mx-1 rounded font-medium text-2xl form-button m-1"
          >le100,000,000</button>
        </p>
      </div>
    </section>
    <!-- Other -->
    <section>
      <p class="flex items-center px-4 pb-3">
        <button class="button-bg py-1 px-6 mx-1 rounded font-medium text-2xl m-1">Other</button>
        <el-input
          v-model="input"
          class="py-2 rounded flex items-center pl-5"
          type="text"
          placeholder="Please input"
        />
      </p>
    </section>

    <div
      class="primary-text text-2xl font-bold p-3 flex flex-nowrap"
    >3. ENTER YOUR BILLING INFORMATION</div>
    <!-- 3 -->
    <section>
      <div class="flex flex-wrap p-4">
        <div class="md:w-full flex-wrap px-1">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" @submit.prevent.native>
            <div class>
              <el-form-item label="Email" prop="email" class>
                <el-input v-model="ruleForm.email" class placeholder="Email"></el-input>
              </el-form-item>
            </div>
            <div>
              <div class="flex pl-2">
                <div class="md:w-1/4">
                  <!-- title -->
                  <el-form-item label="Title" prop="title">
                    <el-select
                      class="w-full"
                      v-model="ruleForm.title"
                      placeholder="Title"
                      filterable
                    >
                      <el-option
                        class="text-sm"
                        v-for="(row, index) in titles"
                        :key="`title-${index}`"
                        :value="row"
                        :label="row"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <!-- first name -->
                <div class="w-full pl-2">
                  <el-form-item label="First Name" prop="givenNames" class>
                    <el-input v-model="ruleForm.givenNames" class placeholder="First Name"></el-input>
                  </el-form-item>
                </div>
              </div>
            </div>
            <!-- last name -->
            <div class="w-full pl-2">
              <el-form-item label="Last Name" prop="lastName" class>
                <el-input v-model="ruleForm.lastName" class placeholder="Last Name"></el-input>
              </el-form-item>
            </div>
            <!-- Address -->
            <div class="w-full pl-2">
              <el-form-item label="Address" prop="address" class>
                <el-input v-model="ruleForm.address" class placeholder="Address"></el-input>
              </el-form-item>
            </div>
            <!-- City -->
            <div class="w-full pl-2">
              <el-form-item label="City" prop="town" class>
                <el-input v-model="ruleForm.town" class placeholder="City"></el-input>
              </el-form-item>
            </div>
            <!-- district -->
            <div class="w-full pl-2">
              <el-form-item label="District" prop="district">
                <el-select
                  v-model="ruleForm.district"
                  placeholder="District"
                  filterable
                  class="w-full"
                >
                  <el-option
                    class="text-sm"
                    v-for="(row, index) in districts"
                    :key="`district-${index}`"
                    :value="row"
                    :label="row"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="w-full pl-2">
              <el-form-item label="Phone Number" prop="phone">
                <el-input type="phone" placeholder="Phone Number" v-model="ruleForm.phone">
                  <p class="w-4 -ml-4" slot="prepend">+232</p>
                </el-input>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <div class="px-6 -mt-3">
          <p>
            By providing my mobile phone number, I opt in to receive text messages and phone calls
            from Save the Children regarding its lifesaving work.
            Text STOP to opt out, HELP for help. Message and data rates may apply.
          </p>
        </div>
      </div>
    </section>

    <!-- 4 -->
    <div
      class="primary-text text-2xl font-bold p-3 flex flex-nowrap"
    >4. ENTER YOUR PAYMENT INFORMATION</div>
    <section>
      <div class="flex justify-start p-4 ml-2">
        <div
          class="button-bg mx-1 rounded font-bold text-2xl form-button flex items-center px-3 py-2"
        >
          <div class="flex items-center">
            <img class="pr-2" src="~/assets/images/visa_small.gif" alt />
            <img class="pr-2" src="~/assets/images/mastercd_small.gif" alt />
            <img class="pr-2" src="~/assets/images/amex_small.gif" alt />
            <img class src="~/assets/images/discovercard_sm.gif" alt />
          </div>
        </div>
        <div class="button-bg mx-1 rounded font- text-2xl form-button flex items-center px-3">
          <div class="flex items-center">
            <img class="pr-2" src="~/assets/images/paypal-logo.png" alt />
            <p>PayPal</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Credit card and pay pal -->
    <section>

      <div class="container mx-auto md:px-5  ">



        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" @submit.prevent.native>
<!--  credit number-->
             <div class=" w-full pl-2">
              <el-form-item label="CREDIT CARD NUMBER" prop="creditCard" class>
                <el-input v-model="ruleForm.creditCard" class placeholder="Credit card number"></el-input>
              </el-form-item>
            </div>
          <!-- CCV -->
          <div class="flex items-center">
            <div class=" pl-2">
              <el-form-item label="CCV" prop="ccv" class>
                <el-input v-model="ruleForm.ccv" class placeholder="CCV"></el-input>
              </el-form-item>
            </div>
            <!-- .Month -->
            <div>
                <div class="pl-2 ">
              <el-form-item label="EXPIRATION DATE" prop="month">
                <el-date-picker class="" v-model="ruleForm.month" type="month" placeholder="Pick a month"></el-date-picker>
              </el-form-item>
            </div>
            </div>
            <!-- Year -->
            <div class=" pl-2 pt-10 ">
              <el-form-item class="" label prop="year">
                <el-date-picker v-model="ruleForm.year" type="year" placeholder="Pick a month"></el-date-picker>
              </el-form-item>
            </div>
          </div>
        </el-form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      ruleForm: {
        email: '',
      },
      titles: ['Mr.', 'Ms.', 'Mrs.', 'Miss.', 'Dr,'],
    }
  },
  computed: {
    districts() {
      return this.$store.state.districts
    },
    // Validation
    rules() {
      return {
        givenNames: [
          {
            required: true,
            message: 'This field is required',
            trigger: 'blur',
          },
        ],
        lastName: [
          {
            required: true,
            message: 'This field is required',
            trigger: 'blur',
          },
        ],

        // birthPlace: [
        //   {
        //     required: true,
        //     message: 'This field is required',
        //     trigger: 'blur',
        //   },
        // ],
        email: [
          {
            required: true,
            message: 'This field is required',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: 'Please input correct email',
            trigger: ['change', 'blur'],
          },
        ],
        title: [
          {
            required: true,
            message: 'This field is required',
            trigger: 'change',
          },
        ],

        district: [
          {
            required: true,
            trigger: 'change',
            message: 'This field is required',
          },
        ],
        address: [
          {
            required: true,
            trigger: 'blur',
            message: 'This field is required',
          },
        ],
        town: {
          required: true,
          message: 'This field is required',
          trigger: 'blur',
        },
        ccv: {
          required: true,
          message: 'This field is required',
          trigger: 'blur',
        },
      }
    },
  },
  methods:{
    

  }
}
</script>

<style>
</style>
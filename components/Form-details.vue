<template >
  <div>
    <div
      class="primary-text md:text-2xl font-bold p-3 flex flex-nowrap"
    >1. ENTER YOUR BILLING INFORMATION</div>
    <!-- 3 -->
    <section>
      <div class="md:flex flex-wrap p-4">
        <div class="md:w-full flex-wrap px-1">
          <el-form ref="ruleForm" :model="ruleForm" :rules="rules" @submit.prevent.native>
            <div class>
              <el-form-item label="Email" prop="email" class>
                <el-input v-model="ruleForm.email" class placeholder="Email"></el-input>
              </el-form-item>
            </div>
            <div>
              <div class="md:flex">
                <div class="md:w-1/4">
                  <!-- title -->
                  <el-form-item label="Title" prop="title">
                    <el-select
                      v-model="ruleForm.title"
                      class="w-full"
                      placeholder="Title"
                      filterable
                    >
                      <el-option
                        v-for="(row, index) in titles"
                        :key="`title-${index}`"
                        class="text-sm"
                        :value="row"
                        :label="row"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <!-- first name -->
                <div class="w-full">
                  <el-form-item label="First Name" prop="givenNames" class>
                    <el-input v-model="ruleForm.givenNames" class placeholder="First Name"></el-input>
                  </el-form-item>
                </div>
              </div>
            </div>
            <!-- last name -->
            <div class="w-full">
              <el-form-item label="Last Name" prop="lastName" class>
                <el-input v-model="ruleForm.lastName" class placeholder="Last Name"></el-input>
              </el-form-item>
            </div>
            <!-- Address -->
            <div class="w-full">
              <el-form-item label="Address" prop="address" class>
                <el-input v-model="ruleForm.address" class placeholder="Address"></el-input>
              </el-form-item>
            </div>
            <!-- City -->
            <div class="w-full">
              <el-form-item label="City" prop="town" class>
                <el-input v-model="ruleForm.town" class placeholder="City"></el-input>
              </el-form-item>
            </div>
            <!-- district -->
            <div class="w-full">
              <el-form-item label="District" prop="district">
                <el-select
                  v-model="ruleForm.district"
                  placeholder="District"
                  filterable
                  class="w-full"
                >
                  <el-option
                    v-for="(row, index) in districts"
                    :key="`district-${index}`"
                    class="text-sm"
                    :value="row"
                    :label="row"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="w-full">
              <el-form-item label="Phone Number" prop="phone">
                <el-input v-model="ruleForm.phone" type="phone" placeholder="Phone Number">
                  <p slot="prepend" class="w-4 -ml-4">+232</p>
                </el-input>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <div class="md:px-6 -mt-3">
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
      class="primary-text md:text-2xl font-bold p-3 flex flex-nowrap"
    >2. ENTER YOUR PAYMENT INFORMATION</div>
    <section>
      <div class="flex justify-start p-4 md:ml-2">
        <div
          class="button-bg mx-1 rounded font-bold md:text-2xl form-button flex items-center px-3 py-2"
        >
          <div class="flex items-center" @click="creditCard">
            <img class="pr-2" src="~/assets/images/visa_small.gif" alt />
            <img class="pr-2" src="~/assets/images/mastercd_small.gif" alt />
            <img class="pr-2" src="~/assets/images/amex_small.gif" alt />
            <img class src="~/assets/images/discovercard_sm.gif" alt />
          </div>
        </div>
        <div class="button-bg mx-1 rounded md:text-2xl form-button flex items-center px-3">
          <div class="flex items-center" @click="payPal">
            <img class="pr-2" src="~/assets/images/paypal-logo.png" alt />
            <p>PayPal</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Credit card and pay pal -->
    <section>
      <div class="container mx-auto px-5">
        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" @submit.prevent.native>
          <div>
            <!--  credit number-->
            <div v-show="credit_card == true">
              <div class="w-full">
                <el-form-item label="CREDIT CARD NUMBER" prop="creditCard" class>
                  <el-input v-model="ruleForm.creditCard" class placeholder="Credit card number"></el-input>
                </el-form-item>
              </div>
              <!-- CCV -->
              <div class="md:flex  items-center">
                <div class>
                  <el-form-item label="CCV" prop="ccv" class>
                    <el-input v-model="ruleForm.ccv" class="w-full" placeholder="CCV"></el-input>
                  </el-form-item>
                </div>
                <!-- .Month -->

                <div>
                  <div class="md:pl-2 ">
                    <el-form-item label="EXPIRATION DATE" prop="month">
                      <el-date-picker
                        v-model="ruleForm.month"
                        class
                        type="month"
                        placeholder="Pick a month"
                      ></el-date-picker>
                    </el-form-item>
                  </div>
                </div>
                <!-- Year -->
                <div class="md:pl-2 md:pt-10 pt-4 ">
                  <el-form-item class label prop="year">
                    <el-date-picker v-model="ruleForm.year" type="year" placeholder="Pick a month"></el-date-picker>
                  </el-form-item>
                </div>
              </div>
            </div>
          </div>
          <!-- Aggrement -->
          <div class="flex items-start">
            <p class="pr-3 pt-1">
              <input type="checkbox" class="text-3xl" />
            </p>
            <p>I want to help even more by covering the cost of the transaction fee on my donation. My total will be le25,000</p>
          </div>
          <div>
            <p class="px-3 pt-3">
              See if your employer will match your donation!
              Enter the name of your company
            </p>
          </div>
        </el-form>

        <div class="pt-8">
          <nuxt-link to="#">
            <button
              class="primary-color py-2 w-full rounded text-lg font-bold text-white"
            >Donate Monthly</button>
          </nuxt-link>
        </div>
        <!-- Parahraph -->
        <div class="text-sm">
          <p
            class="pt-8"
          >Once you donate, an account with a temporary password will be created for you in our Supporter Center. Simply log in to securely view this as well as any future gifts and so much more. You'll also start receiving email news of your generosity in action, including inspiring children's stories, emergency alerts and ways to get involved.</p>
          <p
            class="pt-8"
          >By making a donation, you give us permission to use your gift, when applicable, combined with those of other donors, as part of our matching gift fund to inspire more donors like you to support our mission. Whether or not your gift is matched, it will still be tax deductible to the full extent allowable by IRS regulations in the same year it was made. If you donate after December 31, your donation will be matched in the following year.</p>
          <p
            class="pt-8"
          >For monthly gifts only: By providing my credit card information, I authorize Save the Children Federation, Inc. to charge my credit card on a recurring basis in the amount indicated above. I understand that this authorization shall remain in effect until I notify Save the Children at least 30 days prior to the upcoming charge that I wish to end this agreement. I understand my credit card issuer may impose additional requirements and I should contact the credit card issuer for further information. A record of my contributions will appear on my billing statement.</p>
          <p
            class="pt-8"
          >Monthly gifts will be matched for the first monthly installment only. If we meet our match goal prior to receiving your one-time or monthly donation, your donation will not be matched but will still go to support our programs.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: 1,
      other: false,
      credit_card: true,
      pay_pay: false,
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
  methods: {
    monthly() {
      this.state = 1
      this.other = false
    },
    onTime() {
      this.state = 2
      this.other = false
    },
    otherFun() {
      this.other = true
    },
    creditCard() {
      this.credit_card = true
    },
    payPal() {
      this.credit_card = false
    },
  },
}
</script>

<style scoped>
input[type='checkbox'] {
  width: 30px;
  height: 30px;
}

.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
</style>
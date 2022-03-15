<template>
  <div>
    <div>
      <div>
        <p>
          <img src="~/assets/images/cna2.jpeg" alt class="w-full object-cover bg-no-repeat bg-home" />
        </p>
        <div class="container mx-auto">
          <p class="md:text-5xl font-bold md:-mt-60 md:mx-40 mx-8 -mt-8">
            <span class="bg-white px-3 pb-2 rounded">Frequently Ask Questions</span>
          </p>
        </div>
      </div>
      <!-- Faq -->
      <div class="container mx-auto">
        <div class="md:mt-48">
          <div class="accordion-body">
            <div class="accordion">
              <p class="md:text-3xl text-xl font-bold md:faq pb-8">Frequently Asked Questions</p>
              <hr />
              <div class="container md:text">
                <div class="label">What is CAN?</div>
                <div
                  class="content"
                >Children’s Advocacy Network (CAN) is a Local non-governmental Organization non-profit that is founded in June, 2009 as a result of the volunteered role played by self-will Community Development Activist operating in Slum Communities and shanty towns through Government, INGO’s and NGO’s Interventions for the transformation of our societies after the devastating civil war. We are presently in Kaihulan District, Western Rural and Western Urban soon we will extend our operations to Kambia and other part of the country. We support children in the communities we work to gain their full potential.</div>
              </div>
              <hr />
              <div class="container">
                <div class="label">Why should I donate to CAN?</div>
                <div
                  class="content"
                >Your gift or support can help make change that protects the lives of children, families, communities, during emergencies and within our programs.</div>
              </div>
              <hr />
              <div class="container">
                <div class="label">
                  How do you coordinate your work with other aid agencies, to avoid
                  <br />duplication of services?
                </div>
                <div
                  class="content"
                >We work closely with Government Partners and other INGO’s/LNGO’s agencies to coordinate our programs.</div>
              </div>
              <hr />
              <div class="container">
                <div class="label">How much of my donation will go toward programs?</div>
                <div class="content">
                  Checks/money orders should be send to our bank account or through our orange money number on +232 73 662 06. If you wish your gift to be allocated to a particular program, please include this information in the mail you will sent to us at
                  <a
                    class="text-indigo-600"
                    href="mailto: "
                  >canmagbell2007@gmail.com</a>, also contact us for the bank account number on the above mail.
                </div>
              </div>
              <hr />
              <div class="container">
                <div class="label">How do I make a wire transfer to CAN?</div>
                <div class="content">
                  Please contact
                  <a class="text-indigo-600" href="mailto: ">canmagbell2007@gmail.com</a> at or visit any of our office at 51Lower Easton Street
                </div>
              </div>
              <hr />
              <div class="container">
                <div class="label">Who do I contact if I have a question or issue with my donation?</div>
                <div class="content">
                  Please contact us at
                  <a
                    class="text-indigo-600"
                    href="mailto: "
                  >canmagbell2007@gmail.com</a> at or visit any of our office at 51Lower Easton Street, Monday-Friday 9am-4pm.
                </div>
              </div>
              <hr />
              <div class="container">
                <div class="label">What if I don’t see my donation in the Supporter Center?</div>
                <div class="content">
                  Web donations show up approximately 24 hours after the transaction is complete. If you don’t see yours, please contact us at
                  <a
                    class="text-indigo-600"
                    href="mailto: "
                  >canmagbell2007@gmail.com</a> or visit any of our office at 51Lower Easton Street. Monday-Friday 9am-4pm.
                </div>
              </div>
              <hr />
              <div class="container">
                <div class="label">Can I donate if I live outside the Sierra Leone?</div>
                <div
                  class="content"
                >Yes, we accept donations within and outside Sierra Leone. If you live outside the Sierra Leone you will receive a mailed acknowledgement from CAN.</div>
              </div>
              <hr />
              <div class="container">
                <div class="label">Where can I find CAN publications?</div>
                <div
                  class="content"
                >Visit our publications section to access our latest resources, reports and publications.</div>
              </div>
              <hr />
              <div class="container">
                <div class="label">How do I apply for a job at CAN?</div>
                <div
                  class="content"
                >We are delighted that you are interested in helping children and families in need through CAN. Please check our Blog page for any available opportunities or you can visit any of our office here in Sierra Leone..</div>
              </div>
              <hr />
              <div class="container">
                <div class="label">How can I be an intern at CAN?</div>
                <div
                  class="content"
                >We offer internships for Student; we provide work experience and personal development. Our internships are support with stipend and run the length of a semester. The work you will be involved in changes the lives of children at home and around the world. To learn more please visit any of our offices, Monday-Friday 9am-4pm</div>
              </div>
              <hr />
              <div class="container">
                <div class="label">How can I be a volunteer at CAN?</div>
                <div
                  class="content"
                >To be a volunteer in CAN is easy but you must ensure that you did not have any record of ABUSE against children. You will send us a letter of intreast by our email.</div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { accordion } from '.././plugins/accrodion'
export default {
  data() {
    return {
      faqs: '',
    }
  },
  mounted() {
    accordion()
  },
  methods: {},
}
</script>

<style scoped>
/* Aligns the heading text to the center. */

.faq {
  text-align: center;
}

/* Sets the width for the accordion. Sets the margin to 90px on the top and bottom and auto to the left and right */

.accordion {
  width: 1200px;
  margin: 90px auto;
  color: black;
  background-color: white;
  padding: 45px 45px;
}
.accordion .container {
  position: relative;
  margin: 10px 10px;
}

/* Positions the labels relative to the .container. Adds padding to the top and bottom and increases font size. Also makes its cursor a pointer */

.accordion .label {
  position: relative;
  padding: 10px 0;
  font-size: 30px;
  color: black;
  cursor: pointer;
}
/* Positions the plus sign 5px from the right. Centers it using the transform property. */

.accordion .label::before {
  content: '+';
  color: black;
  position: absolute;
  top: 50%;
  right: 4px;
  font-size: 30px;
  transform: translateY(-50%);
}

/* Hides the content (height: 0), decreases font size, justifies text and adds transition */

.accordion .content {
  position: relative;
  background: white;
  height: 0;
  font-size: 20px;
  text-align: justify;
  width: 1050px;
  overflow: hidden;
  transition: 0.5s;
}

/* Adds a horizontal line between the contents */

.accordion hr {
  width: 100%;
  margin-left: 0;
  border: 1px solid grey;
}
/* Unhides the content part when active. Sets the height */

.accordion .container.active .content {
  height: 120px;
}

/* Changes from plus sign to negative sign once active */

.accordion .container.active .label::before {
  content: '-';
  font-size: 30px;
}

@media (max-width: 780px) {
  .accordion {
    width: 350px;
    flex-wrap: wrap;
    margin: 0px;
    color: black;
    background-color: white;
    padding: 60px 8px;
  }
  .accordion .container {
    position: relative;
    margin: 10px 10px;
  }

  .accordion .label {
    position: relative;
    padding: 8px 0px;
    font-size: 15px;
    color: black;
    cursor: pointer;
  }
  .accordion .label::before {
    content: '+';
    color: black;
    position: absolute;
    top: 50%;
    right: 4px;
    font-size: 18px;
    transform: translateY(-50%);
  }

  .accordion .content {
    position: relative;
    flex-wrap: wrap;
    background: white;
    height: 0;
    font-size: 12px;
    text-align: start;
    width: 330px;
    overflow: hidden;
    transition: 0.5s;
  }

  .accordion .container.active .label::before {
    content: '-';
    font-size: 18px;
  }
  .accordion .container.active .content {
    height: 200px;
  }
}
</style>
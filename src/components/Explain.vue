<template>
  <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-body">
    	<div class="container">

        <!-- Einstein's quote -->
        <div class="headline has-text-centered">
      		<p class="title is-5">
            <i>"If you can't explain it simply, you don't understand it well enough."</i>
          </p>
      		<p class="subtitle is-6">
            - Albert Einstein -
          </p>
        </div>

        <!-- a box that contains the entire form -->
        <div class="box">

          <!-- <p class="help is-danger has-text-centered" v-text=""></p> -->

          <!-- concept name input field -->
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Concept Name</label>
            </div>
            <div class="field-body">
              <input-field :name="'concept name'" :errors="validationErrors" v-validate="'required'" data-vv-value-path="name" placeholder="Concept Name / Title" v-model="conceptName"></input-field>
            </div>
          </div>

          <!-- category button -->
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Category</label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div class="control">
                  <a class="button is-inverted is-outlined">
                    Select Category
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- explanation input field -->
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Explanation</label>
            </div>
            <div class="field-body">
              <text-editor :name="'explanation'" :errors="validationErrors" v-validate="'required'" data-vv-value-path="explanation" v-model="explanation"></text-editor>
            </div>
          </div>

          <!-- control buttons -->
          <div class="field is-horizontal">
            <div class="field-label"></div>
            <div class="field-body">
              <div class="field is-grouped">
                <div class="control">
                  <a class="button">
                    Save Draft
                  </a>
                </div>
                <div class="control">
                  <a class="button is-warning" @click="validateAndSubmit">
                    Submit
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div> <!-- end of box -->
    	</div> <!-- end of container -->
    </div> <!-- end of hero body -->
  </section> <!-- end of hero -->
</template>

<script>
  import InputField from '@/components/reusables/InputField'
  import TextEditor from '@/components/reusables/TextEditor'
  import { ExplainHttp } from '@/js/http'

  export default {
    // enable vee-validator plugin, which provides the $validator instance variable
    $validates: true,

    components: {
      'text-editor': TextEditor,
      'input-field': InputField
    },

    data () {
      return {
        http: new ExplainHttp(),
        validationErrors: this.$validator.errors,
        conceptName: '',
        category: '',
        explanation: ''
      }
    },

    methods: {
      // validate the form and submit if no error is encountered
      validateAndSubmit () {
        let self = this
        this.$validator.validateAll().then(function (result) {
          if (result) {
            self.http.addConcept(self.conceptName, self.category, self.explanation)
              .then(function (data) {
                console.log(data)
              })
              .catch(function (error) {
                console.log(error)
              })
          }
        })
      }
    }
  }
</script>

<style lang="sass-loader" scoped>
  .headline {
    padding: 2rem 0 1.5rem 0;
  }
</style>
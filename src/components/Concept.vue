<template>
  <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">

        <p class="title" v-text="concept.name"></p>
        <div class="box">
          <div v-html="concept.bestExplanation"></div>
        </div>

        <div class="box">
          <text-editor label="Explain this concept:" :error="validator.getError('explanation')" @input="validator.clearError('explanation')" v-model="newExplanation"></text-editor>
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
    </div>
  </section>
</template>

<script>
  import TextEditor from '@/components/reusables/TextEditor'
  import { ConceptHttp } from '@/js/http'
  import Validator from '@/js/validate'

  export default {
    props: ['conceptId'],

    components: {
      'text-editor': TextEditor
    },

    data () {
      return {
        http: new ConceptHttp(),
        validator: new Validator(['explanation']),
        concept: {},
        newExplanation: ''
      }
    },

    created () {
      let self = this
      this.http.getConcept(this.conceptId)
        .then(function (data) {
          self.concept = data
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    methods: {
      validateAndSubmit () {
        this.validator.validate(['required'], 'explanation', this.newExplanation)
        if (!this.validator.hasError()) {
          this.http.addExplanation(this.conceptId, this.newExplanation)
            .then(function () {
              console.log('Explanation added successfully')
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      }
    }
  }
</script>

<style lang="sass-loader" scoped></style>

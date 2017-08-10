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

          <!-- concept title input field -->
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Concept</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control has-icons-left">
                  <input class="input" type="text" placeholder="Concept Name / Title" v-model="name">
                  <span class="icon is-small is-left">
                    <i class="fa fa-book"></i>
                  </span>
                </p>
              </div>
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

          <!-- TextEditor component -->
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Explanation</label>
            </div>
            <div class="field-body">
              <div class="field">
                <text-editor v-model="explanation"></text-editor>
              </div>
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
                  <a class="button is-warning" @click="addConcept(name, category, explanation)">
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
  import TextEditor from '@/components/reusables/TextEditor'
  import { concepts } from '@/mixins/firebase'

  export default {
    data () {
      return {
        name: '',
        category: '',
        explanation: ''
      }
    },

    components: {
      'text-editor': TextEditor
    },

    mixins: [concepts]
  }
</script>

<style lang="sass-loader" scoped>
  .headline {
    padding: 2rem 0 1.5rem 0;
  }
</style>
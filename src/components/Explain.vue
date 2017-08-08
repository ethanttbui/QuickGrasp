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
                  <input class="input" type="text" placeholder="Concept Name / Title" v-model="concept.name">
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
                <text-editor v-model="concept.explanation"></text-editor>
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
                  <a class="button is-warning" @click="submitConcept">
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

  import Firebase from 'firebase'
  let config = {
    apiKey: 'AIzaSyDL6XQ0eTNIpRHNhFupKGIGNF0Q6GYoN-8',
    authDomain: 'quickgrasp-f79b8.firebaseapp.com',
    databaseURL: 'https://quickgrasp-f79b8.firebaseio.com',
    projectId: 'quickgrasp-f79b8',
    storageBucket: 'quickgrasp-f79b8.appspot.com',
    messagingSenderId: '981275673453'
  }
  let app = Firebase.initializeApp(config)
  let db = app.database()
  let conceptsRef = db.ref('concepts')

  export default {
    data () {
      return {
        concept: {
          name: '',
          category: '',
          explanation: ''
        }
      }
    },

    components: {
      'text-editor': TextEditor
    },

    methods: {
      submitConcept () {
        conceptsRef.push(this.concept)
      }
    }
  }
</script>

<style lang="sass-loader" scoped>
  .headline {
    padding: 2rem 0 1.5rem 0;
  }
</style>
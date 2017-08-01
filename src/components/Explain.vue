<template>
	<div class="container has-text-centered">

    <!-- Einstein's quote -->
		<p class="title is-5">
      <i>"If you can't explain it simply, you don't understand it well enough."</i>
    </p>
		<p class="subtitle is-6">
      - Albert Einstein -
    </p>

    <!-- explain concept form -->
    <div class="box">

      <!-- concept title input field -->
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Concept</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="text" placeholder="Concept Name / Title">
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
              <div class="button is-inverted is-outlined">
                Select Category
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- load TextEditor component -->
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Explanation</label>
        </div>
        <div class="field-body">
          <TextEditor></TextEditor>
        </div>
      </div>

      <!-- control buttons -->
      <div class="field is-horizontal">
        <div class="field-label"></div>
        <div class="field-body">
          <div class="field is-grouped">
            <div class="control">
              <button class="button">
                Save Draft
              </button>
            </div>
            <div class="control">
              <button class="button is-warning">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>

	</div>
</template>

<script>
  import TextEditor from '@/components/TextEditor'

  export default {
    name: 'Explain',
    components: { TextEditor }
  }
</script>

<style lang="sass-loader" scoped>
  .container {
    top: 2rem;
  }
</style>
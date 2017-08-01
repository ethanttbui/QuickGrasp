<template>
	<div class="container has-text-centered">

    <!-- Einstein's quote -->
		<p class="title is-5">
      <i>"If you can't explain it simply, you don't understand it well enough."</i>
    </p>
		<p class="subtitle is-6">
      - Albert Einstein -
    </p>

    <!-- explain-concept form -->
    <div class="box">

      <!-- concept title -->
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Concept</label>
        </div>
        <div class="field-body">

          <!-- concept's name / title -->
          <div class="field">
            <p class="control is-expanded has-icons-left">
              <input class="input" type="text" placeholder="Concept Name / Title">
              <span class="icon is-small is-left">
                <i class="fa fa-font"></i>
              </span>
            </p>
          </div>

          <!-- keywords / tags -->
          <div class="field">
            <p class="control is-expanded has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Keywords (Key 1, Key 2, Key 3)">
              <span class="icon is-small is-left">
                <i class="fa fa-key"></i>
              </span>
            </p>
          </div>

        </div>
      </div>

      <!-- category dropdown -->
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Category</label>
        </div>
        <div class="field-body">

          <!-- category -->
          <div class="field is-narrow">
            <div class="control">
              <div class="button is-inverted is-outlined">
                Select Category
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- explanation texarea -->
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Explanation</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <textarea class="textarea" rows="10" placeholder="Explain how you understand the concept within 300 words"></textarea>
            </div>
          </div>
        </div>
      </div>

      <!-- source input -->
       <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Sources</label>
        </div>
        <div class="field-body">
          <div class="field has-addons">
            <div class="control">
              <input class="input" type="text" placeholder="http://www.example.com">
            </div>
            <div class="control">
              <a class="button">
                Add Source
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- submit button -->
      <div class="field is-horizontal">
        <div class="field-label"></div>
        <div class="field-body">
          <div class="field is-grouped">
            <div class="control">
              <button class="button">
                Save
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
  export default {
    name: 'explain'
  }
</script>

<style lang="sass-loader" scoped>
  .container {
    top: 2rem;
  }
</style>
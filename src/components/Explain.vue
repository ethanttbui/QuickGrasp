<template>
	<div class="container has-text-centered">

    <!-- Einstein's quote -->
		<p class="title is-4">
      "If you can't explain it simply, you don't understand it well enough."
    </p>
		<p class="subtitle is-6">
      <i>- Albert Einstein -</i>
    </p>

    <!-- explain-concept form -->
    <div class="box">

      <!-- concept title -->
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Concept</label>
        </div>
        <div class="field-body">

          <!-- concept's name -->
          <div class="field">
            <p class="control is-expanded has-icons-left">
              <input class="input" type="text" placeholder="Concept's name">
              <span class="icon is-small is-left">
                <i class="fa fa-user"></i>
              </span>
            </p>
          </div>

          <!-- keywords -->
          <div class="field">
            <p class="control is-expanded has-icons-left has-icons-right">
              <input class="input is-success" type="email" placeholder="Keywords">
              <span class="icon is-small is-left">
                <i class="fa fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fa fa-check"></i>
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
              <div class="select is-fullwidth">
                <select>
                  <option>Category</option>
                  <option>Computer Science</option>
                  <option>Philosophy</option>
                  <option>Business</option>
                  <option>Others</option>
                </select>
              </div>
            </div>
          </div>

          <!-- sub-category -->
          <div class="field is-narrow">
            <div class="control">
              <div class="select is-fullwidth">
                <select>
                  <option>Subcategory</option>
                  <option>Algorithms</option>
                  <option>Machine Learning</option>
                  <option>Artificial Intelligenge</option>
                  <option>Others</option>
                </select>
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
              <textarea class="textarea" rows=10 placeholder="Explain how you understand the concept"></textarea>
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

<style lang="sass-loader" scoped></style>
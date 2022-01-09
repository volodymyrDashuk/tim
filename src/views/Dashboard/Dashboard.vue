<template>
  <h1>
    Hello
  </h1>
  <div class="action-toolbar">
    <button class="button-primary">Button primary</button>
    <button class="button-secondary">Button secondary</button>
  </div>

  <h1>some text</h1>
  <h2>some text 2</h2>
  <h3>some text 3</h3>
  <h4>some text 4</h4>

  <div class="form-group">
    <input type="text" placeholder="placeholder">
  </div>

  <div class="form-group">
    <input type="checkbox" id="html">
    <label for="html">HTML</label>
  </div>
  <div class="form-group">
    <input type="checkbox" id="css">
    <label for="css">CSS</label>
  </div>
  <div class="form-group">
    <input type="checkbox" id="javascript">
    <label for="javascript">Javascript</label>
  </div>

  <p class="form-group">
    <input type="radio" id="test1" name="radio-group" checked>
    <label for="test1">Apple</label>
  </p>
  <p class="form-group">
    <input type="radio" id="test2" name="radio-group">
    <label for="test2">Peach</label>
  </p>
  <p class="form-group">
    <input type="radio" id="test3" name="radio-group">
    <label for="test3">Orange</label>
  </p>

  <div class="switch">
    <input type="checkbox" id="switch" />
    <label for="switch">Toggle</label>
  </div>
</template>

<script src="./model.js"/>
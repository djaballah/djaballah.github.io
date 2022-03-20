<template>
  <input
    type="text"
    name="in"
    list="cityname"
    placeholder="Type / to list command"
  >
  <datalist id="cityname">
    <option value="Boston" />
    <option value="Cambridge" />
  </datalist>
</template>

<script>
export default {

};
</script>

<style>
input {
    background-color: black;
    border: none;
}

input:focus {
    border: none;
    outline: none;
}
</style>

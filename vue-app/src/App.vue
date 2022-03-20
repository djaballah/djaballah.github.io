<template>
  <div class="flex-container">
    <div class="flex-item-left">
      <About />
    </div>
    <div class="flex-item-right">
      <ShowCase />
    </div>
  </div>
</template>

<script>
import About from './components/About.vue';
import ShowCase from './components/ShowCase.vue';

export default {
    'name': 'APP',
    'components': {
        About,
        ShowCase,
    },
};
</script>

<style>
.flex-container {
    display: flex;
    background-color: #000000;
    min-height: 100vh;
    font-family: Fjalla One;
}

.flex-item-left {
    flex: 50%;
}

.flex-item-right {
    flex: 50%;
    display: flex;
}

@media screen and (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
  .flex-item-left {
    flex: 100%;
  }

  .flex-item-right {
      flex: 100%;
      display: flex;
  }
}
</style>

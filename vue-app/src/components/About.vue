<template>
  <div class="about">
    <h1 class="m-top-200 name">
      {{ name }}
    </h1>
    <h3 class="job-title">
      Software Engineer
    </h3>
    <div class="social-media">
      <span
        v-for="(item, key) in socialMedia"
        :key="key"
      >
        <a
          class="socialize"
          :href="item"
        >
          {{ key }}
        </a> <span class="separator">|</span>
      </span>
    </div>
  </div>
</template>

<script>
import config from '../config/config.js';

export default {
    'name': 'About',
    'data': () => {
        return {
            'name': config.name,
            'socialMedia': config.socialMedia,
        };
    },
};

</script>

<style>

.about {
    position: fixed;
    padding-left: 15px;
}

.m-top-200 {
    margin-top: 200px;
}

.name {
    font-family: Fjalla One;
    color: #4F5562;
}

.job-title {
    font-family: Fjalla One;
    color: #4fc4cf;
}

.social-media {
    margin-top: 8px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, sans-serif;
}

.socialize {
    color: #E5E5E5;
    text-decoration-line: none;
}

.socialize:hover {
    color: #E5E5E5;
    text-decoration-line: none;
}

.separator {
    color: #4F5562;
    margin-right: 8px;
    margin-left: 8px;
}

@media screen and (max-width: 800px) {
  .about {
    position: static;
    padding-left: 15px;
  }
}
</style>

<template>
  <div class="project">
    <div class="project-header">
      <h4 class="project-title">
        {{ title }}
      </h4>
      <div class="project-links-container">
        <a
          class="project-link"
          :href="demoLink"
        >Demo</a> <span>/ </span>
        <a
          class="project-link"
          :href="githubLink"
        >Github</a>
      </div>
    </div>
    <p
      class="project-description"
      :title="description"
    >
      {{ description }}
    </p>
    <div class="project-tags">
      <span
        v-for="tag in tags"
        :key="tag"
        class="project-tag"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
    'name': 'Project',
    'props': {
        title: String,
        description: String,
        demoLink: String,
        githubLink: String,
        tags: Array,
    },
};
</script>

<style>

.project {
  width: 90%;
  padding: 5px 15px;
  background: #000000;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 0px 5px 0px #1C1919;
  border-radius: 5px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.project-header {
  display: flex;
  justify-content: space-between;
}

.project-title {
  color: #4F5562;
}

.project-description {
  color: #E5E5E5;
  max-width: 80%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.project-link {
  color: #ff9f1c;
}

.project-link:hover {
  color: #ff9f1c;
  text-decoration-line: none;
}

.project-tag {
  background-color: #bd1e1e;
  color: #E5E5E5;
  padding: 1px 5px;
  border-radius: 1px;
  margin-right: 4px;
}

</style>

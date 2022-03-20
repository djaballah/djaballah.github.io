<template>
  <div class="projects">
    <Project
      v-for="project in projects"
      :key="project"
      :title="project.title"
      :description="project.desc"
      :demo-link="project.demoLink"
      :github-link="project.github"
      :tags="project.tech"
    />
  </div>
</template>

<script>

import Project from './Project.vue';
import config from '../config/config.js';

export default {
    'name': 'ShowCase',
    'components': {
        Project,
    },
    'data': () => {
        return {
            projects: config.projects,
        };
    },
};
</script>

<style>
.projects {
  width: 100%;
  margin-top: 160px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>

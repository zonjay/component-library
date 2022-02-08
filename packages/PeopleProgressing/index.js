import PeopleProgressing from './src/index.vue'

PeopleProgressing.install = app => {
  app.component(PeopleProgressing.name, PeopleProgressing)
}

export default PeopleProgressing
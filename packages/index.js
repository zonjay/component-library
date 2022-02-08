import PeopleProgressing from './PeopleProgressing'

const components = [PeopleProgressing]

const install = app => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  PeopleProgressing,
  install
}

export default {
  install
}
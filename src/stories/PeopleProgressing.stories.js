import PeopleProgressing from './../components/PeopleProgressing';

export default {
  title: 'Example/PeopleProgressing',
  component: PeopleProgressing,
};
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PeopleProgressing },
  template: '<PeopleProgressing />',
});
export const Walking_Man = Template.bind({});

Walking_Man.parameters = {
  docs: { 
    source: { 
      code: 
        `<template>
  <PeopleProgressing :score="80" />
</template>` 
    },
  },
};

import WalkingMan from './../components/WalkingMan';

export default {
  title: 'Example/WalkingMan',
  component: WalkingMan,
};
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { WalkingMan },
  template: '<WalkingMan />',
});
export const Walking_Man = Template.bind({});

Walking_Man.parameters = {
  docs: { 
    source: { 
      code: 
        `<template>
  <WalkingMan />
</template>` 
    },
  },
};

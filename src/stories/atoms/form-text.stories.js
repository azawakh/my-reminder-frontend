import { storiesOf } from '@storybook/vue';
import FormText from '../../components/atoms/FormText.vue';

storiesOf('atoms/FormText', module).add('normal', () => ({
  components: { FormText },
  data() {
    return {
      label: 'foo',
      placeholder: 'bar'
    };
  },
  template: '<FormText :label="label" :placeholder="placeholder" />'
}));

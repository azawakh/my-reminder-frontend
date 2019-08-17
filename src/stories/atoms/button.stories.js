import { storiesOf } from '@storybook/vue';
import Button from '../../components/atoms/Button.vue';

storiesOf('atoms/Button', module).add('normal', () => ({
  components: { Button },
  data() {
    return {
      success: 'baz'
    };
  },
  template: '<Button :color="success">Hello Button</Button>'
}));

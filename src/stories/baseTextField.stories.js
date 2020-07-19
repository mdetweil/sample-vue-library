
import BaseTextField from '../components/_base-Text-Field.vue';
import { storiesOf } from '@storybook/vue';

storiesOf('Base Text Field', module)
  .add('default', () => ({
    components: { BaseTextField },
    template: `<BaseTextField />`
  }))
  .add('label', () => ({
    components: { BaseTextField },
    template: `<BaseTextField :label="labelData" />`,
    data() {
      return {
        labelData: "Sample Label"
      }
    }
  }))
  .add('required', () => ({
    components: { BaseTextField },
    template: `<BaseTextField :required="isRequired"/>`,
    data() {
      return {
        isRequired: true
      }
    }
  }))
  .add('label and required', () => ({
    components: { BaseTextField },
    template: `<BaseTextField :label="labelData" :required="isRequired"/>`,
    data() {
      return {
        labelData: "Sample Label",
        isRequired: true
      }
    }
  }))

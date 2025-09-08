import {nl} from '@formkit/i18n';
import {rootClasses} from './formkit.theme';
import {defineFormKitConfig} from '@formkit/vue';

export default defineFormKitConfig({
  locales: {nl},
  locale: 'nl',
  config: {
    rootClasses,
  }
});

import {nl} from '@formkit/i18n';
import {genesisIcons} from '@formkit/icons';
import {generateClasses} from '@formkit/themes';
import {rootClasses} from './formkit.theme';
import {defineFormKitConfig} from '@formkit/vue';
import {createProPlugin, inputs} from '@formkit/pro-unlimited';

const pro = createProPlugin('fk-2657efaa88a', inputs);

export default defineFormKitConfig({
  plugins: [
    pro,
  ],
  locales: {nl},
  locale: 'nl',
  icons: {
    ...genesisIcons,
  },
  config: {
    rootClasses,
    classes: generateClasses({
      global: {
        outer: '!mb-0',
        wrapper: '!mb-0',
        input: 'h-12',
      },
      autocomplete: {
        dropdownWrapper: '!max-h-72',
      },
    }),
  },
});

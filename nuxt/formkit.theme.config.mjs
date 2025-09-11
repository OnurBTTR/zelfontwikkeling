import formkitTheme from '@formkit/theme-regenesis';

/**
 * Steps to generate the FormKit theme
 *
 * 1. Check https://themes.formkit.com/editor for the suitable theme options
 * 2. Add theme options below
 * 3. Run `pnpm formkit:generate` to regenerate and add formkit.theme.ts to the repository
 */
export default formkitTheme({
  radius: 'rounded-lg',
  accentColor: 'blue',
  spacing: '2',
  scale: 'base',
  inputShadow: 'none',
});

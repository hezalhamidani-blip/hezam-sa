/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary:   '#0F3D2E',
        secondary: '#2F6B4F',
        lightbg:   '#EEF4F0',
        mainbg:    '#F8F9F7',
        card:      '#FFFFFF',
        dark:      '#1F2933',
        muted:     '#6B7280',
        border:    '#DADDD7',
        accent:    '#86C9A2',
      },
      fontFamily: {
        cairo:   ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

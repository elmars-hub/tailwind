/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        sageBlack: '#131313',
        sageMidBlack: '#303030',
        sageWhite: '#FAFAFA',
        sageLightBlue: '#D1F0FF',
        sageOffWhite: '#F5F9FF',
        sageMidWhite: '#F5F5F5',
        sageDarkBlue: '#0076FF',
        sageHeavyBlue: '#0047AB',
        sageProfileBlue: '#D1F0FF',
        sageHighBlue: '#35C1FF',
        sageLowBlue: '#079CFF',
        sageGray: '#F5F5F5',
        sageLightGray: '#838383',
        sageGreen: '#34C759',
        sageRed: '#FF3B30',
      },

      fontFamily: {
        aftika: ['Aftika', 'san-serif'],
      },
    },
  },
  plugins: [],
};

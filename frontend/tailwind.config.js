/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  mode: 'jit',
  theme: {
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      screens: {
        '1000px': '1050px',
        '1100px': '1110px',
        '800px': '800px',
        '1300px': '1300px',
        '400px': '400px',
      },
      colors: {
        yellow: '#f1c40f',
        green: {
          light: '#1B8C0C',
          dark: '#13A500',
          'blur-sidebar': '#E8F9E8',
          'blur-sidebar-hover': '#CCEFCC',
          other1: '#3AAF2A',
          other2: '#E2F8E2',
        },
        blue: {
          light: '#42C0DC',
          dark: '#337AEE',
          other: '#EEF9FC',
        },
        red: {
          error: '#F03D3E',
        },
        txt: {
          primary: '#505050',
          secondary: '#343434',
          blur: '#9B9B9B',
          other2: '#7C7C7C',
          other3: '#252424',
          other4: '#696969',
          other5: '#3F3F3F',
          other6: '#9B9B9B',
        },
        smoke: '#E1E1E1',
      },
      keyframes: {
        'slide-top': {
          '0%': {'-webkit-transform': 'translateY(0);', transform: 'translateY(0);'},
          '100%': {'-webkit-transform': 'translateY(-100px);', transform: 'translateY(-300px);'},
        },
      },
      animation: {
        'slide-top': 'slide-top 0.5s cubic-bezier(0.250,0.460,0.450,0.940) both;',
      },
    },
  },
  plugins: [],
};

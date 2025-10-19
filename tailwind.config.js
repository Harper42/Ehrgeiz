module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        'slide-down': 'slide-down 0.5s ease-out forwards'
      }
    }
  },
  plugins: []
}

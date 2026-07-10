/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'Inter', 'Arial', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        // Geist/Vercel design tokens
        ink: 'var(--color-ink)',
        body: 'var(--color-body)',
        mute: 'var(--color-mute)',
        faint: 'var(--color-faint)',
        hairline: 'var(--color-hairline)',
        'hairline-soft': 'var(--color-hairline-soft)',
        canvas: 'var(--color-canvas)',
        elevated: 'var(--color-elevated)',
        link: 'var(--color-link)',
        'link-deep': 'var(--color-link-deep)',
        'link-soft': 'var(--color-link-soft)',
        danger: 'var(--color-danger)',
        'danger-deep': 'var(--color-danger-deep)',
        warning: 'var(--color-warning)',
        'warning-soft': 'var(--color-warning-soft)',
        'warning-deep': 'var(--color-warning-deep)',
        violet: '#7928ca',
        'violet-soft': '#d8ccf1',
        cyan: '#50e3c2',
        'cyan-soft': '#aaffec',
        pink: '#ff0080',
        magenta: '#eb367f',
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '16px',
        pill: '100px',
        'pill-cat': '64px',
        full: '9999px',
      },
      spacing: {
        xxs: '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '40px',
        '3xl': '64px',
        '4xl': '96px',
        section: '128px',
      },
      boxShadow: {
        whisper: '0px 1px 1px rgba(0,0,0,0.04)',
        float: '0px 2px 2px rgba(0,0,0,0.06), 0px 8px 16px -4px rgba(0,0,0,0.08)',
        modal: '0px 4px 8px rgba(0,0,0,0.08), 0px 16px 32px -8px rgba(0,0,0,0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.15s ease-out',
        'slide-up': 'slideUp 0.2s ease-out',
        'spin-slow': 'spin 1.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

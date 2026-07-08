// Design system tokens for Sabr PWA
// Based on STYLE.md

export const colors = {
  // Primary
  primary: '#2E8B57',
  primaryLight: '#4fad67',
  primaryDark: '#236857',
  primaryVeryLight: '#F0F9F4',

  // Secondary
  secondary: '#4CAF50',
  pillBackground: 'rgba(119, 168, 141, 0.15)',
  pillActiveBackground: 'rgba(46, 139, 87, 0.3)',

  // Neutral
  blackNear: '#1A1A1A',
  grayDark: '#666666',
  grayMedium: '#999999',
  grayLight: '#E0E0E0',
  grayVeryLight: '#F5F7FA',
  grayExtraLight: '#F9F9F9',
  white: '#FFFFFF',

  // State
  disabled: '#A5A5A5',
  inactiveIcon: 'rgba(0,0,0,0.4)',
};

export const spacing = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 30,
  xxxl: 35,
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 30,
  round: 50,
};

export const typography = {
  display: {
    fontSize: 28,
    fontWeight: 700,
    lineHeight: 34,
  },
  heading: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 30,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 24,
  },
  bodyLarge: {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 24,
  },
  body: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 24,
  },
  bodySmall: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 16,
  },
};

export const shadows = {
  primaryButton: {
    shadowColor: '#2E8B57',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  modal: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
};

// Reusable component styles
export const buttonPrimary = {
  backgroundColor: colors.primary,
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.xxl,
  borderRadius: borderRadius.xxxl,
  color: colors.white,
  fontSize: 16,
  fontWeight: 600,
  ...shadows.primaryButton,
};

export const buttonSecondary = {
  backgroundColor: colors.primaryVeryLight,
  borderWidth: 1,
  borderColor: colors.primary,
  paddingVertical: spacing.sm,
  paddingHorizontal: spacing.lg,
  borderRadius: borderRadius.xl,
  color: colors.primary,
  fontSize: 16,
  fontWeight: 500,
};

export const inputContainer = {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: colors.grayVeryLight,
  borderRadius: borderRadius.md,
  paddingHorizontal: spacing.lg,
  paddingVertical: spacing.md,
  gap: spacing.md,
};

export const card = {
  backgroundColor: colors.white,
  borderRadius: borderRadius.lg,
  padding: spacing.lg,
  ...shadows.card,
};

export const container = {
  padding: spacing.xl,
  maxWidth: 600,
  margin: '0 auto',
  minHeight: '100vh',
  boxSizing: 'border-box',
};

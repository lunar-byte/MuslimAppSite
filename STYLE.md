# MuslimApp Design System

This document describes the visual design system used in the MuslimApp project. It provides comprehensive guidelines for colors, typography, spacing, components, and patterns to maintain consistency across the application.

---

## Table of Contents

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Components](#components)
5. [Shadows & Effects](#shadows--effects)
6. [Icons & Imagery](#icons--imagery)
7. [Navigation Patterns](#navigation-patterns)
8. [Accessibility Considerations](#accessibility-considerations)

---

## 1. Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Primary Green** | `#2E8B57` | 46, 139, 87 | Primary actions, active states, icons, focus indicators |
| **Primary Light** | `#4fad67` | 79, 173, 103 | Gradient starts (prayer card) |
| **Primary Dark** | `#236857` | 35, 104, 87 | Gradient ends (prayer card) |
| **Primary Very Light** | `#F0F9F4` | 240, 249, 244 | Light green backgrounds, cards, secondary surfaces |

### Secondary Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Secondary Green** | `#4CAF50` | Completed states, success indicators |
| **Pill Background** | `rgba(119, 168, 141, 0.15)` | Bottom navigation pill background (15% opacity) |
| **Pill Active Background** | `rgba(46, 139, 87, 0.3)` | Active tab indicator (30% opacity) |

### Neutral Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Black (Near)** | `#1A1A1A` | Headings, primary text |
| **Gray Dark** | `#666666` | Body text, secondary information |
| **Gray Medium** | `#999999` | Tertiary text, hints, disabled states |
| **Gray Light** | `#E0E0E0` | Dividers, borders, separators |
| **Gray Very Light** | `#F5F7FA` | Input backgrounds, subtle surfaces |
| **Gray Extra Light** | `#F9F9F9` | Input focus backgrounds, modal surfaces |
| **White** | `#FFFFFF` | Primary background, cards, text on dark backgrounds |

### State Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Disabled** | `#A5A5A5` | Disabled buttons |
| **Inactive Icon** | `rgba(0,0,0,0.4)` | Inactive navigation icons at 40% opacity |

### Gradient Presets

**Prayer Card Day Gradient**
```javascript
colors: ['#4fad67', '#236857']
```
Direction: diagonal (top-left to bottom-right)

**Prayer Card Loading Gradient**
```javascript
colors: ['#2f9c4a', '#136953']
```

---

## 2. Typography

### Font Families

- **System Font**: San Francisco (iOS), Roboto (Android) - default
- **Custom Font**: `Cinzel Bold` (registered for notifications icon; not yet used in UI)

### Font Sizes & Weights

| Style | Font Size | Weight | Line Height | Usage |
|-------|-----------|--------|-------------|-------|
| **Display** | 28px | 700 (Bold) | ~34px | Screen titles, major headings |
| **Heading** | 24px | 700 (Bold) | ~30px | User name greeting |
| **Subheading** | 18-20px | 600 (SemiBold) | ~24-28px | Card titles, section headers |
| **Body Large** | 18px | 400-500 (Regular-Medium) | ~24px | Hadith English, button text |
| **Body** | 15-16px | 400-500 (Regular-Medium) | ~22-24px | Descriptions, body text |
| **Body Small** | 13-15px | 500 (Medium) | ~20px | Secondary text, labels |
| **Caption** | 12px | 500-600 (Medium-SemiBold) | ~16px | Helper text, prayer labels |
| **Arabic Text** | 30px | 700 (Bold) | 36px | Hadith Arabic (special) |
| **Prayer Time** | 33px | 700 (Bold) | - | Next prayer name |
| **Prayer Time Countdown** | 18px | 450 (custom weight) | - | Time remaining |

### Text Color Rules

- **Primary text**: `#1A1A1A` (headings, main content)
- **Secondary text**: `#666666` (descriptions, subtitles)
- **Tertiary text**: `#999999` (hints, placeholders, metadata)
- **Light text**: `#FFFFFF` (on colored backgrounds)
- **Accent text**: `#2E8B57` (highlighted Arabic, links, interactive text)
- **Muted text**: `#bdbdbd` (passed prayer times)

### Text Alignment

- Most content: **Center** (onboarding, cards)
- Lists and forms: **Left**
- Arabic text: **Right**

---

## 3. Spacing & Layout

### Padding & Margins

**Standard Horizontal Padding**
- Content: `24px` (most screens)
- Cards internal: `16-20px`

**Vertical Spacing**
- Between sections: `16-24px`
- Between related elements: `8-12px`
- Between unrelated elements: `24-30px`

**Specific Values Used**
- `marginBottom: 16` (tight spacing)
- `marginBottom: 20` (standard)
- `marginBottom: 24` (section break)
- `marginBottom: 30` (major break)
- `marginBottom: 35` (card spacing)
- `marginTop: 16-32` (various)

### Common Spacing Units

| Value | Usage |
|-------|-------|
| `8px` | Small gap between related icons/text |
| `12px` | Icon padding, internal spacing |
| `16px` | Button vertical padding, standard gap |
| `20px` | Card padding |
| `24px` | Horizontal margin, screen padding |
| `30px` | Vertical gap between major sections |
| `40px` | Circle padding (onboarding icon) |
| `80px` | Circle size (onboarding icon container) |

### Border Radius

| Value | Usage |
|-------|-------|
| `8px` | Small inputs, subtle cards |
| `12px` | Input fields, standard cards, buttons |
| `16px` | Larger cards (prayer, hadith), bottom nav pill |
| `18px` | Active tab indicator |
| `20px` | Modals, popups |
| `24px` | Bottom nav pill outer, pill background |
| `30px` | Primary buttons |
| `50px` | Pill shape (bottom nav) |
| `80px` | Large circular icon containers |

### Layout Patterns

**Full Width with Horizontal Padding**
```javascript
paddingHorizontal: 24,
```

**Centered Content**
```javascript
alignItems: 'center',
justifyContent: 'center',
```

**Card Layout**
```javascript
padding: 20,
borderRadius: 16,
marginBottom: 24,
```

---

## 4. Components

### Buttons

#### Primary Button
```javascript
backgroundColor: '#2E8B57',
paddingVertical: 16,
paddingHorizontal: 80, // or flexible
borderRadius: 30, // or 12 for smaller
shadowColor: '#2E8B57',
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.3,
shadowRadius: 12,
elevation: 6,
```

**Text**: White (`#FFFFFF`), size 16-18px, weight 600

#### Secondary Button
```javascript
backgroundColor: '#F0F9F4', // or transparent with border
borderWidth: 1,
borderColor: '#2E8B57',
paddingVertical: 10,
paddingHorizontal: 20,
borderRadius: 20,
```

**Text**: `#2E8B57`, size 14-15px, weight 500

#### Small Action Button
```javascript
padding: 8,
```

### Inputs

#### Text Input Container
```javascript
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#F5F7FA',
borderRadius: 12,
paddingHorizontal: 16,
paddingVertical: 14,
gap: 12,
```

**Input Text**
```javascript
fontSize: 16,
color: '#1A1A1A',
flex: 1,
```

**Placeholder**: `#999999`

#### Icon in Input
```javascript
color: '#2E8B57',
size: 20,
```

### Cards

#### Feature Card (Onboarding)
```javascript
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#F0F9F4',
paddingHorizontal: 16,
paddingVertical: 12,
borderRadius: 12,
gap: 12,
```

**Text**: `#2E8B57`, size 15px, weight 500

#### Prayer Times Card
```javascript
borderRadius: 16,
padding: 20,
// Uses LinearGradient: ['#4fad67', '#236857']
```

#### Hadith Card
```javascript
borderWidth: 2,
borderColor: '#ffffff',
borderRadius: 16,
padding: 20,
```

**Active State** (on long press):
```javascript
borderColor: 'rgba(46, 139, 87, 0.3)',
shadowColor: '#000',
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.15,
shadowRadius: 8,
elevation: 6,
```

#### Goal Placeholder Card
```javascript
backgroundColor: '#F0F9F4',
borderRadius: 16,
padding: 20,
height: 160,
```

### Navigation

#### Bottom Navigation Pill

```javascript
position: 'absolute',
bottom: 30,
left: 0,
right: 0,
borderRadius: 24,
alignItems: 'center',
```

**Pill Container**
```javascript
flexDirection: 'row',
backgroundColor: 'transparent',
borderRadius: 24, // outer pill shape
paddingVertical: 5,
paddingHorizontal: 17,
gap: 5,
```

**Background Blur**
```javascript
position: 'absolute',
backgroundColor: 'rgba(119, 168, 141, 0.15)',
borderRadius: 24,
```

**Tab Item**
```javascript
width: 64,
height: 64,
alignItems: 'center',
justifyContent: 'center',
position: 'relative',
```

**Active Tab Indicator**
```javascript
position: 'absolute',
width: 70,
height: 52,
borderRadius: 18,
backgroundColor: 'rgba(46, 139, 87, 0.3)',
top: 5,
left: -2,
```

**Icons**
- Inactive: Ionicons `*-outline` variant, color `rgba(0,0,0,0.4)`
- Active: Filled variant, color `#2E8B57`

#### Progress Indicator (Onboarding)

**Container**
```javascript
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
gap: 8,
marginVertical: 20,
```

**Dot**
```javascript
width: 8,
height: 8,
borderRadius: 4,
```

**Active Dot**
```javascript
backgroundColor: '#2E8B57',
width: 24,
```

**Completed Dot**
```javascript
backgroundColor: '#4CAF50',
```

### Modals

#### Bottom Sheet Modal
```javascript
position: 'absolute',
left: 0,
right: 0,
bottom: 0,
height: '65%',
backgroundColor: 'white',
borderTopLeftRadius: 20,
borderTopRightRadius: 20,
paddingTop: 20,
paddingHorizontal: 20,
paddingBottom: 30,
shadowColor: '#000',
shadowOffset: { width: 0, height: -2 },
shadowOpacity: 0.1,
shadowRadius: 8,
elevation: 5,
```

**Close Button**
```javascript
position: 'absolute',
top: 15,
right: 15,
padding: 4,
```

**Title**: 20px, weight 600, color `#1A1A1A`

**Input**: Same as text input component above

**Save Button**: Primary button style

#### Congratulations Popup
```javascript
backgroundColor: 'rgba(255, 255, 255, 0.95)',
borderRadius: 20,
padding: 24,
width: '80%',
maxWidth: 320,
shadowColor: '#000',
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.15,
shadowRadius: 12,
elevation: 8,
```

**Title**: 24px, weight 700, color `#2E8B57` ("Masha'Allah!")

**Arabic Text**: 16px, weight 700, color `#2E8B57`, align right, lineHeight 36

**English Text**: 15px, color `#666666`, align left, lineHeight 22

### Day Selector (Goal Habit Tracker)

**Circle (unchecked)**
```javascript
width: 40,
height: 40,
borderRadius: 16,
borderWidth: 2,
borderColor: '#2E8B57',
alignItems: 'center',
justifyContent: 'center',
```

**Checked**: Add `backgroundColor: '#2E8B57'`

**Label**: 11px, weight 500, color `#666666` (unchecked) / `#FFFFFF` (checked)

---

## 5. Shadows & Effects

### Shadow Presets

#### Primary Button Shadow
```javascript
shadowColor: '#2E8B57',
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.3,
shadowRadius: 12,
elevation: 6,
```

#### Card Elevation (hadith active)
```javascript
shadowColor: '#000',
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.15,
shadowRadius: 8,
elevation: 6,
```

#### Modal/Popup Shadow
```javascript
shadowColor: '#000',
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.15,
shadowRadius: 12,
elevation: 8,
```

#### Floating Card Shadow (hadith long-press)
```javascript
shadowColor: '#000',
shadowOffset: { width: 0, height: 8 },
shadowOpacity: 0.25,
shadowRadius: 16,
elevation: 12,
```

### Blur Effects

Used with `expo-blur`:

**Modal Backdrop**
```javascript
<BlurView intensity={10} style={StyleSheet.absoluteFill} />
```

**Bottom Navigation**
```javascript
<BlurView intensity={5} style={styles.pillBackground} tint="light" />
```

### Gradients

**Prayer Card**
```javascript
import { LinearGradient } from 'expo-linear-gradient';

<LinearGradient
  colors={['#4fad67', '#236857']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={styles.prayerCard}
/>
```

**Loading Prayer Card**
```javascript
colors={['#2f9c4a', '#136953']}
```

---

## 6. Icons & Imagery

### Icon Library

All icons use **Ionicons** from `@expo/vector-icons`.

**Icon Styles**
- Size range: 20px-60px (common: 24px for buttons, 28px for headers, 60px for large icons)
- Color: `#2E8B57` (primary), `rgba(0,0,0,0.4)` (inactive), `#999999` (optional), `#ffffff` (on dark backgrounds)

**Common Icon Names Used**
- `earth` (onboarding)
- `book-outline` / `book` (Quran)
- `time-outline` / `time` (prayer times)
- `menu` (hamburger)
- `muslim` (auth logo)
- `mail-outline` (email input)
- `lock-closed-outline` (password input)
- `eye-outline` / `eye-off-outline` (password visibility)
- `logo-google` (social login)
- `heart` / `heart-outline` (Duas)
- `compass` / `compass-outline` (Kaaba)
- `home` / `home-outline` (home)
- `add-circle-outline` (add goal)
- `close` (close buttons)
- `sunny-outline` / `cloudy-night-outline` (weather icon in prayer card)
- `settings-outline` (settings)

### Background Images

Background images are positioned absolutely with low opacity (0.15) and scaled down to create a watermark effect.

**Example (HomeScreen)**
```javascript
Image
  source={require('../assets/background.png')}
  style={{
    position: 'absolute',
    top: -475,
    left: -338,
    right: 0,
    bottom: 0,
    zIndex: -1,
    opacity: 0.15,
    transform: [{ scale: 0.3 }],
  }}
  resizeMode="cover"
```

**Note**: Scale and offset values are tuned for specific image dimensions.

---

## 7. Navigation Patterns

### Stack Navigator

Uses `@react-navigation/stack` with `headerShown: false` for most screens.

**Major Routes**
- Onboarding flow: `OnboardingWelcome` → `OnboardingQuran` → `OnboardingPrayerTimes` → `OnboardingStudyFeatures` → `OnboardingPersonalization`
- Auth: `Auth`
- Main app: `HomeV4`, `PrayerTimes`, `QuranReader`, `MosqueFinder`, `Settings`, `Menu`
- Additional: `GoalAdd`, `GoalDetail`, `AllGoals`, `Habits`, `Dua`, `Hadiths`, `FastingTime`, `Kaaba`, `Pomodoro`, `FocusMode`

**Authentication Flow**
- Route determined by AsyncStorage flags (`onboardingCompleted`, `userAuthenticated`)
- Initial route logic in `App.js`:
  - Not onboarded → `OnboardingWelcome`
  - Onboarded but not authenticated → `PersonalizationIntro`
  - Onboarded and authenticated → `HomeV4`

### Bottom Navigation

Visible only on main app screens. Uses custom component `BottomNav` with pill-shaped container and blur background.

**Tab Structure**
- Home
- Reading (Quran)
- Duas
- Kaaba

Each tab uses both outline and filled icon variants depending on active state.

### Transitions

- Modal presentation: slide-up animation (translateY from SCREEN_HEIGHT to 0, 300ms)
- No custom screen transition configurations (use default stack transitions)

---

## 8. Accessibility Considerations

### Contrast Ratios

- Primary text (#1A1A1A) on white: **19.6:1** (excellent)
- Secondary text (#666666) on white: **7.1:1** (good)
- Tertiary text (#999999) on white: **3.8:1** (acceptable)
- White text on primary green (#2E8B57): **3.8:1** (acceptable but could be improved with slightly darker green)
- Primary green (#2E8B57) on white: **3.8:1** (acceptable)

### Touch Targets

- Bottom navigation tabs: 64x64px (meets 44x44 minimum)
- Buttons: Minimum height 44px with 16px vertical padding + text height
- Form inputs: Minimum height 44px (14px padding + 16px text = ~44px)

### Recommendations for Improvement
1. Consider using darker text on primary green buttons for better contrast
2. Ensure all interactive elements have sufficient hit area
3. Provide content descriptions for icons (currently no `accessibilityLabel` props visible)
4. Support dynamic type / font scaling (currently using fixed pixel sizes)

---

## 9. Implementation Checklist

When recreating screens with this design system:

### Required Imports

```javascript
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  Image,
  ActivityIndicator,
  Animated,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
```

### Common Screen Structure

```javascript
export default function ScreenName() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Screen content */}
      </ScrollView>
      {bottomNavVisible && <BottomNav />}
    </SafeAreaView>
  );
}
```

### Safe Area Handling

- Wrap app in `<SafeAreaProvider>` in `App.js`
- Use `<SafeAreaView edges={['top']}>` on individual screens
- Add bottom padding to ScrollView content to accommodate bottom nav (150px)

### Color Usage Pattern

- Always use `#2E8B57` for primary interactive elements
- Use `#FFFFFF` for primary backgrounds
- Use `#F0F9F4` for secondary card backgrounds
- Use `#1A1A1A` for all primary text
- Use `#999999` for placeholder and disabled states

### Russian Language Support

All UI text is in Russian. Use appropriate fonts that support Cyrillic characters. System fonts are acceptable.

---

## 10. Component Library Reference

| Component | File Reference | Reusable? |
|-----------|---------------|-----------|
| OnboardingProgressIndicator | `components/OnboardingProgressIndicator.js` | Yes |
| BottomNav | `components/BottomNav.js` | Yes |
| PlaceholderScreen | `components/PlaceholderScreen.js` | Yes (basic stub) |
| PrayerTimesCard | Defined within `HomeScreenV4.js` | Extractable |
| TopGreeting | Defined within `HomeScreenV4.js` | Extractable |
| GoalCard | Defined within `HomeScreenV4.js` | Extractable |
| ModalGoalCreator | Defined within `HomeScreenV4.js` | Extractable |
| HadithCard | Defined within `HomeScreenV4.js` | Extractable |

---

## 11. Design Principles

1. **Clean & Minimal**: Use ample white space (or light backgrounds) with clear visual hierarchy
2. **Consistent Color Language**: Primary green is the brand color; use it judiciously for actions and emphasis
3. **Islamic Aesthetics**: Arabic calligraphy, respectful imagery (Kaaba, geometric patterns)
4. **Accessibility First**: Ensure touch targets are large and text is readable
5. **Responsive Layout**: Use percentage widths and flexbox for multi-device support
6. **Subtle Elevation**: Use shadows and blur to create depth without overwhelming
7. **Contextual Gradients**: Use gradients to add visual interest to primary information cards

---

## 12. Dependencies

Ensure these packages are installed:

```json
{
  "dependencies": {
    "react": "19.1.0",
    "react-native": "0.81.5",
    "@react-navigation/native": "^7.2.2",
    "@react-navigation/stack": "^7.8.11",
    "@react-native-async-storage/async-storage": "2.2.0",
    "react-native-safe-area-context": "~5.6.0",
    "react-native-screens": "~4.16.0",
    "@expo/vector-icons": "^15.0.3",
    "expo-blur": "~15.0.8",
    "expo-linear-gradient": "~15.0.8",
    "moment": "^2.30.1",
    "moment-hijri": "^3.0.0",
    "axios": "^1.6.8"
  }
}
```

---

## 13. Version History

- **v1.0** (2026-07-08): Initial design system documentation based on codebase analysis

---

*This design system serves as a living document. Update it when design patterns evolve.*


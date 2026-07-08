import StepLayout from '../components/StepLayout';
import useSabrSession from '../hooks/useSabrSession';
import { spacing, colors, borderRadius, typography } from '../styles/theme';

const ALTERNATIVE_OPTIONS = [
  'This may not be as bad as it seems',
  'Their intention may not have been bad',
  'They may be going through something themselves',
  'I don\'t have the full picture',
  'It\'s not personal',
  'Perhaps Allah is protecting me'
];

const MUHASABA_OPTIONS = [
  'Assumptions',
  'Pride',
  'Resentment',
  'Impatience',
  'Harshness',
  'Envy'
];

const textareaStyle = {
  width: '100%',
  height: 120,
  padding: '12px 15px',
  boxSizing: 'border-box',
  borderRadius: borderRadius.md,
  border: 'none',
  backgroundColor: colors.grayVeryLight,
  fontSize: typography.body.fontSize,
  color: colors.blackNear,
  fontFamily: 'system-ui, -apple-system, sans-serif',
  resize: 'none',
};

const labelStyle = {
  display: 'block',
  marginBottom: spacing.xs,
  ...typography.bodySmall,
  color: colors.grayDark,
};

export default function Step3() {
  const { session, updateStep } = useSabrSession();
  const { alternatives, gratitude, muhasaba } = session.step3;

  const toggleAlternative = (option) => {
    if (alternatives.includes(option)) {
      updateStep(3, { alternatives: alternatives.filter(a => a !== option) });
    } else {
      updateStep(3, { alternatives: [...alternatives, option] });
    }
  };

  const handleGratitudeChange = (index, value) => {
    const newGratitude = [...gratitude];
    newGratitude[index] = value;
    updateStep(3, { gratitude: newGratitude });
  };

  const toggleMuhasaba = (item) => {
    if (muhasaba.includes(item)) {
      updateStep(3, { muhasaba: muhasaba.filter(m => m !== item) });
    } else {
      updateStep(3, { muhasaba: [...muhasaba, item] });
    }
  };

  return (
    <StepLayout currentStep={3}>
      <div>
        <h2 style={{ ...typography.subheading, color: colors.blackNear, marginBottom: spacing.lg }}>
          Step 3: Expand Your Heart
        </h2>

        <div style={{ marginBottom: spacing.lg }}>
          <p style={{ marginBottom: spacing.sm, ...typography.bodySmall, color: colors.grayDark }}>
            Other explanations
          </p>
          {ALTERNATIVE_OPTIONS.map(option => (
            <div key={option} style={{ marginBottom: spacing.xs }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: spacing.xs }}>
                <input
                  type="checkbox"
                  checked={alternatives.includes(option)}
                  onChange={() => toggleAlternative(option)}
                />
                <span style={{ ...typography.body, color: colors.blackNear }}>{option}</span>
              </label>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: spacing.lg }}>
          <p style={{ marginBottom: spacing.sm, ...typography.bodySmall, color: colors.grayDark }}>
            5 gratitude perspectives
          </p>
          {gratitude.map((item, index) => (
            <div key={index} style={{ marginBottom: spacing.sm }}>
              <label htmlFor={`gratitude-${index}`} style={labelStyle}>
                {index + 1}.
              </label>
              <textarea
                id={`gratitude-${index}`}
                value={item}
                onChange={(e) => handleGratitudeChange(index, e.target.value)}
                style={textareaStyle}
                placeholder={`Perspective ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div>
          <p style={{ marginBottom: spacing.sm, ...typography.bodySmall, color: colors.grayDark }}>
            What needs to be cleansed in the heart? (muhasaba)
          </p>
          {MUHASABA_OPTIONS.map(item => (
            <div key={item} style={{ marginBottom: spacing.xs }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: spacing.xs }}>
                <input
                  type="checkbox"
                  checked={muhasaba.includes(item)}
                  onChange={() => toggleMuhasaba(item)}
                />
                <span style={{ ...typography.body, color: colors.blackNear }}>{item}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </StepLayout>
  );
}

import StepLayout from '../components/StepLayout';
import useSabrSession from '../hooks/useSabrSession';
import { spacing, colors, borderRadius, typography } from '../styles/theme';

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
  marginBottom: spacing.sm,
  ...typography.bodySmall,
  color: colors.grayDark,
};

const buttonToggleBase = {
  padding: `${spacing.sm}px ${spacing.lg}px`,
  borderRadius: borderRadius.md,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: colors.grayLight,
  backgroundColor: colors.white,
  color: colors.blackNear,
  fontSize: typography.body.fontSize,
  cursor: 'pointer',
};

export default function Step2() {
  const { session, updateStep } = useSabrSession();
  const { negativeThoughts, whoBecome, thoughtsTruth } = session.step2;

  const handleNegativeThoughtsChange = (e) => {
    updateStep(2, { negativeThoughts: e.target.value });
  };

  const handleWhoBecomeChange = (e) => {
    updateStep(2, { whoBecome: e.target.value });
  };

  const handleTruthSelect = (value) => {
    updateStep(2, { thoughtsTruth: value });
  };

  return (
    <StepLayout currentStep={2}>
      <div>
        <h2 style={{ ...typography.subheading, color: colors.blackNear, marginBottom: spacing.lg }}>
          Step 2: Story Behind the Emotion
        </h2>
        <div style={{ marginBottom: spacing.lg }}>
          <label htmlFor="negativeThoughts" style={labelStyle}>
            Negative thoughts in your head
          </label>
          <textarea
            id="negativeThoughts"
            value={negativeThoughts}
            onChange={handleNegativeThoughtsChange}
            style={textareaStyle}
            placeholder="Describe what's spinning in your head..."
          />
        </div>

        <div style={{ marginBottom: spacing.lg }}>
          <label htmlFor="whoBecome" style={labelStyle}>
            Who am I becoming with these thoughts?
          </label>
          <textarea
            id="whoBecome"
            value={whoBecome}
            onChange={handleWhoBecomeChange}
            style={textareaStyle}
            placeholder="How do these thoughts affect you? Who are you becoming?"
          />
        </div>

        <div>
          <p style={{ marginBottom: spacing.sm, ...typography.bodySmall, color: colors.grayDark }}>
            Are these thoughts always true?
          </p>
          <div style={{ display: 'flex', gap: spacing.sm, flexWrap: 'wrap' }}>
            {['Yes', 'Maybe', 'No'].map(option => {
              const value = option === 'Yes' ? 'yes' : option === 'Maybe' ? 'maybe' : 'no';
              const isActive = thoughtsTruth === value;
              return (
                <button
                  key={option}
                  onClick={() => handleTruthSelect(value)}
                  style={{
                    ...buttonToggleBase,
                    ...(isActive ? { borderWidth: 2, borderColor: colors.primary, backgroundColor: colors.primaryVeryLight } : {})
                  }}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </StepLayout>
  );
}

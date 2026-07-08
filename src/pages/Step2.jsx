import StepLayout from '../components/StepLayout';
import useSabrSession from '../hooks/useSabrSession';
import { spacing, colors, borderRadius, typography } from '../styles/theme';

const textareaStyle = {
  width: '100%',
  padding: `${spacing.md} ${spacing.lg}`,
  boxSizing: 'border-box',
  borderRadius: borderRadius.md,
  border: 'none',
  backgroundColor: colors.grayVeryLight,
  fontSize: typography.body.fontSize,
  color: colors.blackNear,
  fontFamily: 'system-ui, -apple-system, sans-serif',
  resize: 'vertical',
};

const labelStyle = {
  display: 'block',
  marginBottom: spacing.sm,
  ...typography.bodySmall,
  color: colors.grayDark,
};

const buttonToggleBase = {
  padding: `${spacing.sm} ${spacing.lg}`,
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
          Шаг 2: История за эмоцией
        </h2>
        <div style={{ marginBottom: spacing.lg }}>
          <label htmlFor="negativeThoughts" style={labelStyle}>
            Негативные мысли в голове
          </label>
          <textarea
            id="negativeThoughts"
            value={negativeThoughts}
            onChange={handleNegativeThoughtsChange}
            rows={4}
            style={textareaStyle}
            placeholder="Опишите, что крутится в голове..."
          />
        </div>

        <div style={{ marginBottom: spacing.lg }}>
          <label htmlFor="whoBecome" style={labelStyle}>
            Кем я становлюсь с этими мыслями?
          </label>
          <textarea
            id="whoBecome"
            value={whoBecome}
            onChange={handleWhoBecomeChange}
            rows={4}
            style={textareaStyle}
            placeholder="Как эти мысли влияют на вас? Кем вы становитесь?"
          />
        </div>

        <div>
          <p style={{ marginBottom: spacing.sm, ...typography.bodySmall, color: colors.grayDark }}>
            Эти мысли всегда правда?
          </p>
          <div style={{ display: 'flex', gap: spacing.sm, flexWrap: 'wrap' }}>
            {['Да', 'Может быть', 'Нет'].map(option => {
              const value = option === 'Да' ? 'yes' : option === 'Может быть' ? 'maybe' : 'no';
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

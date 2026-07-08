import StepLayout from '../components/StepLayout';
import useSabrSession from '../hooks/useSabrSession';
import { spacing, colors, borderRadius, typography } from '../styles/theme';

const EMOTIONS = [
  'Depressed',
  'Sad',
  'Scared',
  'Angry',
  'Hurt',
  'Disappointed',
  'Anxious',
  'Numb',
  'Helpless',
  'Confused'
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
  marginBottom: spacing.sm,
  ...typography.bodySmall,
  color: colors.grayDark,
};

export default function Step1() {
  const { session, updateStep } = useSabrSession();
  const { trigger, emotions } = session.step1;

  const handleTriggerChange = (e) => {
    updateStep(1, { trigger: e.target.value });
  };

  const toggleEmotion = (emotionName) => {
    const exists = emotions.find(e => e.name === emotionName);
    if (exists) {
      updateStep(1, { emotions: emotions.filter(e => e.name !== emotionName) });
    } else {
      updateStep(1, { emotions: [...emotions, { name: emotionName, intensity: 5 }] });
    }
  };

  const updateIntensity = (emotionName, newIntensity) => {
    updateStep(1, {
      emotions: emotions.map(e =>
        e.name === emotionName ? { ...e, intensity: newIntensity } : e
      )
    });
  };

  const isNextDisabled = !trigger.trim() || emotions.length === 0;

  return (
    <StepLayout currentStep={1} isNextDisabled={isNextDisabled}>
      <div>
        <h2 style={{ ...typography.subheading, color: colors.blackNear, marginBottom: spacing.lg }}>
          Step 1: Trigger and Emotions
        </h2>
        <div style={{ marginBottom: spacing.lg }}>
          <label htmlFor="trigger" style={labelStyle}>
            What happened?
          </label>
          <textarea
            id="trigger"
            value={trigger}
            onChange={handleTriggerChange}
            style={textareaStyle}
            placeholder="Describe the situation..."
          />
        </div>

        <div>
          <p style={{ marginBottom: spacing.sm, ...typography.bodySmall, color: colors.grayDark }}>
            What emotions are you feeling?
          </p>
          {EMOTIONS.map(emotion => {
            const isSelected = emotions.some(e => e.name === emotion);
            const emotionObj = emotions.find(e => e.name === emotion);
            return (
              <div key={emotion} style={{ marginBottom: spacing.xs }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: spacing.xs }}>
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleEmotion(emotion)}
                  />
                  <span style={{ ...typography.body, color: colors.blackNear }}>{emotion}</span>
                </label>
                {isSelected && (
                  <div style={{ marginLeft: spacing.lg, marginTop: spacing.xs, display: 'flex', alignItems: 'center', gap: spacing.sm }}>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={emotionObj.intensity}
                      onChange={(e) => updateIntensity(emotion, parseInt(e.target.value))}
                      style={{ flex: 1 }}
                    />
                    <span style={{ ...typography.bodySmall, color: colors.grayDark }}>{emotionObj.intensity}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </StepLayout>
  );
}

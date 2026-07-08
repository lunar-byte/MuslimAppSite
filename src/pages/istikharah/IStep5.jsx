import { useState } from 'react';
import IstikharahStepLayout from '../../components/IstikharahStepLayout';
import useIstikharahSession from '../../hooks/useIstikharahSession';
import { spacing, colors, borderRadius, typography, buttonPrimary } from '../../styles/theme';

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

const inputStyle = {
  width: '100%',
  padding: '12px 15px',
  boxSizing: 'border-box',
  borderRadius: borderRadius.md,
  border: 'none',
  backgroundColor: colors.grayVeryLight,
  fontSize: typography.body.fontSize,
  color: colors.blackNear,
  fontFamily: 'system-ui, -apple-system, sans-serif',
};

const labelStyle = {
  display: 'block',
  marginBottom: spacing.sm,
  ...typography.bodySmall,
  color: colors.grayDark,
};

const cardStyle = {
  backgroundColor: colors.white,
  borderRadius: borderRadius.lg,
  padding: spacing.lg,
  marginBottom: spacing.md,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
};

const cardHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: spacing.md,
};

const removeButtonStyle = {
  background: 'none',
  border: 'none',
  color: colors.grayMedium,
  fontSize: 24,
  cursor: 'pointer',
  padding: 0,
  width: 32,
  height: 32,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: borderRadius.round,
};

const fieldStyle = {
  marginBottom: spacing.md,
};

export default function IStep5() {
  const { session, updateStep } = useIstikharahSession();
  const { nextSteps } = session;
  const [heartInclination, setHeartInclination] = useState(nextSteps.heartInclination || '');
  const [steps, setSteps] = useState(nextSteps.steps || []);

  const addStep = () => {
    const newSteps = [...steps, ''];
    setSteps(newSteps);
    updateStep('nextSteps', { steps: newSteps });
  };

  const updateStepField = (index, value) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
    updateStep('nextSteps', { steps: newSteps });
  };

  const removeStep = (index) => {
    const newSteps = steps.filter((_, i) => i !== index);
    setSteps(newSteps);
    updateStep('nextSteps', { steps: newSteps });
  };

  const handleHeartInclinationChange = (e) => {
    const value = e.target.value;
    setHeartInclination(value);
    updateStep('nextSteps', { heartInclination: value });
  };

  return (
    <IstikharahStepLayout currentStep={5} isNextDisabled={false}>
      <div>
        <h2 style={{ ...typography.subheading, color: colors.blackNear, marginBottom: spacing.lg }}>
          Step 5: Next Steps
        </h2>

        <div style={fieldStyle}>
          <label htmlFor="heartInclination" style={labelStyle}>
            What is your heart telling you?
          </label>
          <textarea
            id="heartInclination"
            value={heartInclination}
            onChange={handleHeartInclinationChange}
            style={textareaStyle}
            placeholder="Describe where your heart is leaning after all this work..."
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle}>
            What are the next steps you will take?
          </label>
          {steps.map((step, index) => (
            <div key={index} style={{ ...cardStyle, marginBottom: spacing.sm }}>
              <div style={cardHeaderStyle}>
                <span style={{ ...typography.bodySmall, color: colors.grayDark }}>
                  Step {index + 1}
                </span>
                <button
                  type="button"
                  onClick={() => removeStep(index)}
                  style={removeButtonStyle}
                  title="Remove step"
                >
                  ×
                </button>
              </div>
              <input
                type="text"
                value={step}
                onChange={(e) => updateStepField(index, e.target.value)}
                style={inputStyle}
                placeholder="Describe your next step..."
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addStep}
            style={{
              ...buttonPrimary,
              width: '100%',
              backgroundColor: colors.grayVeryLight,
              color: colors.blackNear,
              boxShadow: 'none'
            }}
          >
            + Add step
          </button>
        </div>
      </div>
    </IstikharahStepLayout>
  );
}

import { useState } from 'react';
import IstikharahStepLayout from '../../components/IstikharahStepLayout';
import useIstikharahSession from '../../hooks/useIstikharahSession';
import { spacing, colors, borderRadius, typography, buttonPrimary } from '../../styles/theme';

const textareaStyle = {
  width: '100%',
  height: 100,
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

export default function IStep3() {
  const { session, updateStep } = useIstikharahSession();
  const { istisharah } = session;
  const [advisors, setAdvisors] = useState(istisharah.advisors || []);
  const [heartAfterCounsel, setHeartAfterCounsel] = useState(istisharah.heartAfterCounsel || '');

  const addAdvisor = () => {
    const newAdvisor = { id: Date.now(), name: '', role: '', advice: '' };
    const newAdvisors = [...advisors, newAdvisor];
    setAdvisors(newAdvisors);
    updateStep('istisharah', { advisors: newAdvisors });
  };

  const removeAdvisor = (id) => {
    const newAdvisors = advisors.filter(a => a.id !== id);
    setAdvisors(newAdvisors);
    updateStep('istisharah', { advisors: newAdvisors });
  };

  const updateAdvisor = (id, field, value) => {
    const newAdvisors = advisors.map(a =>
      a.id === id ? { ...a, [field]: value } : a
    );
    setAdvisors(newAdvisors);
    updateStep('istisharah', { advisors: newAdvisors });
  };

  const handleHeartAfterCounselChange = (e) => {
    const value = e.target.value;
    setHeartAfterCounsel(value);
    updateStep('istisharah', { heartAfterCounsel: value });
  };

  return (
    <IstikharahStepLayout currentStep={3} isNextDisabled={false}>
      <div>
        <h2 style={{ ...typography.subheading, color: colors.blackNear, marginBottom: spacing.sm }}>
          Istisharah — Who to ask for advice?
        </h2>
        <p style={{ ...typography.bodySmall, color: colors.grayDark, marginBottom: spacing.lg }}>
          Reach out to knowledgeable and trusted people
        </p>

        {advisors.map(advisor => (
          <div key={advisor.id} style={cardStyle}>
            <div style={cardHeaderStyle}>
              <span style={{ ...typography.body, fontWeight: 600, color: colors.blackNear }}>
                Advisor
              </span>
              <button
                type="button"
                onClick={() => removeAdvisor(advisor.id)}
                style={removeButtonStyle}
                title="Remove"
              >
                ×
              </button>
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Name</label>
              <input
                type="text"
                value={advisor.name}
                onChange={(e) => updateAdvisor(advisor.id, 'name', e.target.value)}
                style={inputStyle}
                placeholder="Advisor's name"
              />
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Role / Relationship</label>
              <input
                type="text"
                value={advisor.role}
                onChange={(e) => updateAdvisor(advisor.id, 'role', e.target.value)}
                style={inputStyle}
                placeholder="e.g., teacher, father, friend, mentor"
              />
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Their advice</label>
              <textarea
                value={advisor.advice}
                onChange={(e) => updateAdvisor(advisor.id, 'advice', e.target.value)}
                style={textareaStyle}
                placeholder="Write down the advice they gave..."
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addAdvisor}
          style={{
            ...buttonPrimary,
            width: '100%',
            backgroundColor: colors.grayVeryLight,
            color: colors.blackNear,
            boxShadow: 'none',
            marginBottom: spacing.lg
          }}
        >
          + Add advisor
        </button>

        <div style={fieldStyle}>
          <label htmlFor="heartAfterCounsel" style={labelStyle}>
            After advice — where is your heart leaning?
          </label>
          <textarea
            id="heartAfterCounsel"
            value={heartAfterCounsel}
            onChange={handleHeartAfterCounselChange}
            style={textareaStyle}
            placeholder="Describe where your heart is leaning after these conversations..."
          />
        </div>
      </div>
    </IstikharahStepLayout>
  );
}

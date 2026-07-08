import { useState } from 'react';
import IstikharahStepLayout from '../../components/IstikharahStepLayout';
import useIstikharahSession from '../../hooks/useIstikharahSession';
import { spacing, colors, borderRadius, typography, buttonPrimary } from '../../styles/theme';

const AFFECTED_AREAS = [
  'Family',
  'Health',
  'Spirituality',
  'Finances',
  'Community',
  'Work/Career'
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

const chipContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: spacing.sm,
  marginBottom: spacing.lg,
};

const chipStyle = (isSelected) => ({
  padding: `${spacing.sm}px ${spacing.md}px`,
  borderRadius: borderRadius.xxxl,
  backgroundColor: isSelected ? colors.primary : colors.grayVeryLight,
  color: isSelected ? colors.white : colors.blackNear,
  fontSize: typography.body.fontSize,
  cursor: 'pointer',
  border: 'none',
  transition: 'background-color 0.2s ease',
});

const inputGroupStyle = {
  marginBottom: spacing.lg,
};

export default function IStep1() {
  const { session, updateStep } = useIstikharahSession();
  const { decision } = session;
  const [question, setQuestion] = useState(decision.question || '');
  const [niyyah, setNiyyah] = useState(decision.niyyah || '');
  const [deadline, setDeadline] = useState(decision.deadline || '');
  const [deadlineHijri, setDeadlineHijri] = useState(decision.deadlineHijri || '');
  const [affectedAreas, setAffectedAreas] = useState(decision.affectedAreas || []);

  const toggleArea = (area) => {
    const newAreas = affectedAreas.includes(area)
      ? affectedAreas.filter(a => a !== area)
      : [...affectedAreas, area];
    setAffectedAreas(newAreas);
    updateStep('decision', { affectedAreas: newAreas });
  };

  const handleQuestionChange = (e) => {
    const value = e.target.value;
    setQuestion(value);
    updateStep('decision', { question: value });
  };

  const handleNiyyahChange = (e) => {
    const value = e.target.value;
    setNiyyah(value);
    updateStep('decision', { niyyah: value });
  };

  const handleDeadlineChange = (e) => {
    const value = e.target.value;
    setDeadline(value);
    updateStep('decision', { deadline: value });
  };

  const handleDeadlineHijriChange = (e) => {
    const value = e.target.value;
    setDeadlineHijri(value);
    updateStep('decision', { deadlineHijri: value });
  };

  const isNextDisabled = !question.trim() || !niyyah.trim();

  return (
    <IstikharahStepLayout currentStep={1} isNextDisabled={isNextDisabled}>
      <div>
        <h2 style={{ ...typography.subheading, color: colors.blackNear, marginBottom: spacing.lg }}>
          Step 1: Understanding the Decision
        </h2>

        <div style={inputGroupStyle}>
          <label htmlFor="question" style={labelStyle}>
            What decision do I need to make?
          </label>
          <textarea
            id="question"
            value={question}
            onChange={handleQuestionChange}
            style={textareaStyle}
            placeholder="Describe the decision you need to make..."
          />
        </div>

        <div style={inputGroupStyle}>
          <label htmlFor="niyyah" style={labelStyle}>
            My intention (niyyah) for this decision
          </label>
          <textarea
            id="niyyah"
            value={niyyah}
            onChange={handleNiyyahChange}
            style={textareaStyle}
            placeholder="What is your intention? Why are you making this decision?"
          />
        </div>

        <div style={inputGroupStyle}>
          <label htmlFor="deadline" style={labelStyle}>
            By when do I need to decide?
          </label>
          <div style={{ display: 'flex', gap: spacing.md, marginBottom: spacing.sm }}>
            <input
              type="date"
              id="deadline"
              value={deadline}
              onChange={handleDeadlineChange}
              style={{ ...inputStyle, flex: 1 }}
            />
            <input
              type="text"
              id="deadlineHijri"
              value={deadlineHijri}
              onChange={handleDeadlineHijriChange}
              style={{ ...inputStyle, flex: 1 }}
              placeholder="Hijri date (optional)"
            />
          </div>
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>
            Which areas of life will this affect?
          </label>
          <div style={chipContainerStyle}>
            {AFFECTED_AREAS.map(area => (
              <button
                key={area}
                type="button"
                onClick={() => toggleArea(area)}
                style={chipStyle(affectedAreas.includes(area))}
              >
                {area}
              </button>
            ))}
          </div>
        </div>
      </div>
    </IstikharahStepLayout>
  );
}

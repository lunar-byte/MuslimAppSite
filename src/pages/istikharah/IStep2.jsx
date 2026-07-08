import { useState } from 'react';
import IstikharahStepLayout from '../../components/IstikharahStepLayout';
import useIstikharahSession from '../../hooks/useIstikharahSession';
import { spacing, colors, borderRadius, typography } from '../../styles/theme';

const FEELINGS = [
  'Confused',
  'Indecisive',
  'Fearful',
  'Vulnerable',
  'Guilty',
  'Depressed',
  'Excited',
  'Joyful',
  'Calm',
  'Optimistic',
  'Grateful',
  'Curious'
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

const sectionStyle = {
  marginBottom: spacing.lg,
};

const opportunitiesColumnsStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: spacing.md,
};

export default function IStep2() {
  const { session, updateStep } = useIstikharahSession();
  const { nafs } = session;
  const [nafsAttachment, setNafsAttachment] = useState(nafs.nafsAttachment || '');
  const [feelings, setFeelings] = useState(nafs.feelings || []);
  const [duniyaOpportunities, setDuniyaOpportunities] = useState(nafs.duniyaOpportunities || '');
  const [akhirahOpportunities, setAkhirahOpportunities] = useState(nafs.akhirahOpportunities || '');
  const [challenges, setChallenges] = useState(nafs.challenges || '');

  const toggleFeeling = (feeling) => {
    const newFeelings = feelings.includes(feeling)
      ? feelings.filter(f => f !== feeling)
      : [...feelings, feeling];
    setFeelings(newFeelings);
    updateStep('nafs', { feelings: newFeelings });
  };

  const handleNafsAttachmentChange = (e) => {
    const value = e.target.value;
    setNafsAttachment(value);
    updateStep('nafs', { nafsAttachment: value });
  };

  const handleDuniyaOpportunitiesChange = (e) => {
    const value = e.target.value;
    setDuniyaOpportunities(value);
    updateStep('nafs', { duniyaOpportunities: value });
  };

  const handleAkhirahOpportunitiesChange = (e) => {
    const value = e.target.value;
    setAkhirahOpportunities(value);
    updateStep('nafs', { akhirahOpportunities: value });
  };

  const handleChallengesChange = (e) => {
    const value = e.target.value;
    setChallenges(value);
    updateStep('nafs', { challenges: value });
  };

  const isNextDisabled = !nafsAttachment.trim() || feelings.length === 0;

  return (
    <IstikharahStepLayout currentStep={2} isNextDisabled={isNextDisabled}>
      <div>
        <h2 style={{ ...typography.subheading, color: colors.blackNear, marginBottom: spacing.lg }}>
          Step 2: Nafs and Feelings
        </h2>

        <div style={sectionStyle}>
          <label htmlFor="nafsAttachment" style={labelStyle}>
            What is the nafs attached to and why?
          </label>
          <textarea
            id="nafsAttachment"
            value={nafsAttachment}
            onChange={handleNafsAttachmentChange}
            style={textareaStyle}
            placeholder="What does your soul desire? What are you afraid of? What attracts you?"
          />
        </div>

        <div style={sectionStyle}>
          <label style={labelStyle}>
            How do you feel about this decision?
          </label>
          <div style={chipContainerStyle}>
            {FEELINGS.map(feeling => (
              <button
                key={feeling}
                type="button"
                onClick={() => toggleFeeling(feeling)}
                style={chipStyle(feelings.includes(feeling))}
              >
                {feeling}
              </button>
            ))}
          </div>
        </div>

        <div style={sectionStyle}>
          <label style={{ ...typography.subheading, color: colors.blackNear, marginBottom: spacing.md }}>
            Opportunities and Challenges
          </label>
          <div style={opportunitiesColumnsStyle}>
            <div>
              <label htmlFor="duniyaOpportunities" style={labelStyle}>
                Dunya — worldly opportunities
              </label>
              <textarea
                id="duniyaOpportunities"
                value={duniyaOpportunities}
                onChange={handleDuniyaOpportunitiesChange}
                style={textareaStyle}
                placeholder="What worldly benefits might come?"
              />
            </div>
            <div>
              <label htmlFor="akhirahOpportunities" style={labelStyle}>
                Akhirah — opportunities in the hereafter
              </label>
              <textarea
                id="akhirahOpportunities"
                value={akhirahOpportunities}
                onChange={handleAkhirahOpportunitiesChange}
                style={textareaStyle}
                placeholder="What spiritual benefits might come?"
              />
            </div>
          </div>
          <div style={{ marginTop: spacing.md }}>
            <label htmlFor="challenges" style={labelStyle}>
              Possible challenges
            </label>
            <textarea
              id="challenges"
              value={challenges}
              onChange={handleChallengesChange}
              style={textareaStyle}
              placeholder="What difficulties or risks do you foresee?"
            />
          </div>
        </div>
      </div>
    </IstikharahStepLayout>
  );
}

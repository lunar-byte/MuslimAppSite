import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import { container, buttonPrimary, colors, spacing } from '../styles/theme';

export default function StepLayout({ currentStep, children, isNextDisabled = false, onNext }) {
  const navigate = useNavigate();

  const handleNext = () => {
    if (onNext) {
      const shouldContinue = onNext();
      if (shouldContinue === false) return;
    }
    if (currentStep < 6) {
      navigate(`/step/${currentStep + 1}`);
    } else {
      navigate('/complete');
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div style={container}>
      <ProgressBar currentStep={currentStep} totalSteps={6} />
      <div style={{ marginBottom: spacing.lg }}>{children}</div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: spacing.md
      }}>
        <button
          onClick={handleBack}
          style={{
            ...buttonPrimary,
            backgroundColor: colors.grayVeryLight,
            color: colors.blackNear,
            shadow: 'none',
            elevation: 0,
            flex: 1
          }}
        >
          Назад
        </button>
        <button
          onClick={handleNext}
          disabled={isNextDisabled}
          style={{
            ...buttonPrimary,
            flex: 1,
            opacity: isNextDisabled ? 0.6 : 1,
            cursor: isNextDisabled ? 'not-allowed' : 'pointer'
          }}
        >
          Далее
        </button>
      </div>
    </div>
  );
}

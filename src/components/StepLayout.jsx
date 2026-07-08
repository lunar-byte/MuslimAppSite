import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import { container, buttonPrimary, colors, spacing, borderRadius } from '../styles/theme';

export default function StepLayout({ currentStep, children, isNextDisabled = false, onNext }) {
  const navigate = useNavigate();

  const handleNext = () => {
    if (onNext) {
      if (onNext() === false) return;
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

  const backButtonStyle = {
    flex: 1,
    padding: `${spacing.md} ${spacing.lg}`,
    borderRadius: borderRadius.xxxl,
    backgroundColor: colors.grayVeryLight,
    color: colors.blackNear,
    fontSize: 16,
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
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
        <button onClick={handleBack} style={backButtonStyle}>
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

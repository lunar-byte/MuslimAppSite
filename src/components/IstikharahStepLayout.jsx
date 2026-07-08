import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import { container, buttonPrimary, colors, spacing, borderRadius } from '../styles/theme';

export default function IstikharahStepLayout({ currentStep, children, isNextDisabled = false, onNext }) {
  const navigate = useNavigate();

  const handleNext = () => {
    if (onNext) {
      if (onNext() === false) return;
    }
    if (currentStep < 5) {
      navigate(`/istikharah/step/${currentStep + 1}`);
    } else {
      navigate('/istikharah/complete');
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const backButtonStyle = {
    flex: 1,
    padding: `${spacing.md}px ${spacing.lg}px`,
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
      <ProgressBar currentStep={currentStep} totalSteps={5} />
      <div style={{ marginBottom: spacing.lg }}>{children}</div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: spacing.md
      }}>
        <button onClick={handleBack} style={backButtonStyle}>
          Back
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
          Next
        </button>
      </div>
    </div>
  );
}

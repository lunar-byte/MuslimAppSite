import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';

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
    <div style={{
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto',
      minHeight: '100vh',
      boxSizing: 'border-box'
    }}>
      <ProgressBar currentStep={currentStep} totalSteps={6} />
      <div style={{ marginBottom: '20px' }}>{children}</div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10px'
      }}>
        <button
          onClick={handleBack}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            cursor: 'pointer',
            flex: 1
          }}
        >
          Назад
        </button>
        <button
          onClick={handleNext}
          disabled={isNextDisabled}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            cursor: isNextDisabled ? 'not-allowed' : 'pointer',
            flex: 1,
            opacity: isNextDisabled ? 0.6 : 1
          }}
        >
          Далее
        </button>
      </div>
    </div>
  );
}

import React from 'react';

export default function ProgressBar({ currentStep, totalSteps = 6 }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      marginBottom: '20px'
    }}>
      {Array.from({ length: totalSteps }, (_, index) => {
        const stepNum = index + 1;
        const isCompleted = stepNum < currentStep;
        const isCurrent = stepNum === currentStep;
        return (
          <div
            key={stepNum}
            title={`Шаг ${stepNum}`}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: isCompleted ? '#4CAF50' : isCurrent ? '#2196F3' : '#ccc',
              border: isCurrent ? '2px solid #1976D2' : 'none',
              transition: 'background-color 0.3s'
            }}
          />
        );
      })}
    </div>
  );
}

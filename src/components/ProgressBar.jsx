import React from 'react';
import { colors, spacing, borderRadius } from '../styles/theme';

export default function ProgressBar({ currentStep, totalSteps = 6 }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: spacing.xs,
      marginBottom: spacing.lg
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
              width: isCurrent ? 24 : 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: isCompleted ? colors.secondary : isCurrent ? colors.primary : colors.grayLight,
              transition: 'background-color 0.3s ease'
            }}
          />
        );
      })}
    </div>
  );
}

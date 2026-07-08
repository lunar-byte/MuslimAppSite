import { useState, useEffect, useCallback } from 'react';

function getDefaultSession() {
  return {
    createdAt: new Date().toISOString(),
    step1: { trigger: '', emotions: [] },
    step2: { negativeThoughts: '', whoBecome: '', thoughtsTruth: null },
    step3: { alternatives: [], gratitude: ['', '', '', '', ''], muhasaba: [] },
    step4: { allahName: '', nameIntention: '' },
    step5: { healthyThought: '', niyyah: '', oneStep: '' },
    step6: { rerating: [], finalNote: '' }
  };
}

export default function useSabrSession() {
  const [session, setSession] = useState(() => {
    try {
      const saved = localStorage.getItem('sabr_session');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to parse session from localStorage', e);
    }
    return getDefaultSession();
  });

  useEffect(() => {
    localStorage.setItem('sabr_session', JSON.stringify(session));
  }, [session]);

  const updateStep = useCallback((stepNumber, data) => {
    setSession(prev => {
      const stepKey = `step${stepNumber}`;
      const existingStep = prev[stepKey] || {};
      const updatedStep = { ...existingStep, ...data };
      return {
        ...prev,
        [stepKey]: updatedStep
      };
    });
  }, []);

  const updateSession = useCallback((data) => {
    setSession(prev => ({ ...prev, ...data }));
  }, []);

  const clearSession = useCallback(() => {
    const fresh = getDefaultSession();
    setSession(fresh);
    localStorage.removeItem('sabr_session');
  }, []);

  return { session, updateStep, updateSession, clearSession };
}

import { useState, useEffect, useCallback } from 'react';

function getDefaultSession() {
  return {
    createdAt: new Date().toISOString(),
    decision: {
      question: '',
      niyyah: '',
      deadline: '',
      deadlineHijri: '',
      affectedAreas: []
    },
    nafs: {
      nafsAttachment: '',
      feelings: [],
      duniyaOpportunities: '',
      akhirahOpportunities: '',
      challenges: ''
    },
    istisharah: {
      advisors: [],
      heartAfterCounsel: ''
    },
    prayerLog: {
      entries: []
    },
    nextSteps: {
      heartInclination: '',
      steps: []
    },
    completedAt: null
  };
}

export default function useIstikharahSession() {
  const [session, setSession] = useState(() => {
    try {
      const saved = localStorage.getItem('istikharah_session');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to parse session from localStorage', e);
    }
    return getDefaultSession();
  });

  useEffect(() => {
    localStorage.setItem('istikharah_session', JSON.stringify(session));
  }, [session]);

  const updateStep = useCallback((stepKey, data) => {
    setSession(prev => {
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
    localStorage.removeItem('istikharah_session');
  }, []);

  return { session, updateStep, updateSession, clearSession };
}

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StepLayout from '../components/StepLayout';
import useSabrSession from '../hooks/useSabrSession';

export default function Step6() {
  const { session, updateStep, updateSession } = useSabrSession();
  const step1Emotions = session.step1.emotions;
  const rerating = session.step6.rerating;

  useEffect(() => {
    if (step1Emotions.length > 0 && rerating.length === 0) {
      const initialRerating = step1Emotions.map(e => ({
        name: e.name,
        before: e.intensity,
        after: e.intensity
      }));
      updateStep(6, { rerating: initialRerating });
    }
  }, [step1Emotions, rerating.length, updateStep]);

  const handleRerate = (name, newValue) => {
    const newRerating = rerating.map(item =>
      item.name === name ? { ...item, after: parseInt(newValue) } : item
    );
    updateStep(6, { rerating: newRerating });
  };

  const handleFinalNoteChange = (e) => {
    updateStep(6, { finalNote: e.target.value });
  };

  const handleComplete = () => {
    const completedAt = new Date().toISOString();
    updateSession({ completedAt });
    const historyJson = localStorage.getItem('sabr_history');
    let history = [];
    if (historyJson) {
      try { history = JSON.parse(historyJson); } catch (e) { console.error(e); }
    }
    history.push({ ...session, completedAt });
    localStorage.setItem('sabr_history', JSON.stringify(history));
  };

  return (
    <StepLayout currentStep={6} onNext={handleComplete}>
      <div>
        <h2>Step 6: Completion</h2>

        <div style={{ marginBottom: '20px' }}>
          <h3>Re-evaluation of emotions</h3>
          {rerating && rerating.length > 0 ? (
            rerating.map(({ name, before, after }) => (
              <div key={name} style={{ marginBottom: '15px' }}>
                <p><strong>{name}</strong>: was {before}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={after}
                    onChange={(e) => handleRerate(name, e.target.value)}
                    style={{ flex: 1 }}
                  />
                  <span>{after}</span>
                </div>
              </div>
            ))
          ) : (
            <p>No data for re-evaluation.</p>
          )}
        </div>

        <div>
          <label htmlFor="finalNote" style={{ display: 'block', marginBottom: '8px' }}>
            Note to self
          </label>
          <textarea
            id="finalNote"
            value={session.step6?.finalNote || ''}
            onChange={handleFinalNoteChange}
            style={{
              width: '100%',
              height: 120,
              padding: '12px 15px',
              boxSizing: 'border-box',
              borderRadius: '4px',
              border: '1px solid #ccc',
              resize: 'none',
            }}
            placeholder="Any additional thoughts..."
          />
        </div>
      </div>
    </StepLayout>
  );
}

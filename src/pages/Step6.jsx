import React, { useEffect } from 'react';
import StepLayout from '../components/StepLayout';
import useSabrSession from '../hooks/useSabrSession';

export default function Step6() {
  const { session, updateStep, updateSession } = useSabrSession();
  const step1Emotions = session.step1.emotions;
  const rerating = session.step6.rerating;

  // Initialize rerating from step1 if empty
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
    // Update current session
    updateSession({ completedAt });
    // Save to history
    const historyJson = localStorage.getItem('sabr_history');
    let history = [];
    if (historyJson) {
      try { history = JSON.parse(historyJson); } catch (e) { console.error(e); }
    }
    // Push a copy of current session along with completedAt
    history.push({ ...session, completedAt });
    localStorage.setItem('sabr_history', JSON.stringify(history));
    // Navigation will happen automatically after onNext returns
  };

  return (
    <StepLayout currentStep={6} onNext={handleComplete}>
      <div>
        <h2>Шаг 6: Завершение</h2>

        <div style={{ marginBottom: '20px' }}>
          <h3>Повторная оценка эмоций</h3>
          {rerating && rerating.length > 0 ? (
            rerating.map(({ name, before, after }) => (
              <div key={name} style={{ marginBottom: '15px' }}>
                <p><strong>{name}</strong>: было {before}</p>
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
            <p>Нет данных для повторной оценки.</p>
          )}
        </div>

        <div>
          <label htmlFor="finalNote" style={{ display: 'block', marginBottom: '8px' }}>
            Заметка себе
          </label>
          <textarea
            id="finalNote"
            value={session.step6?.finalNote || ''}
            onChange={handleFinalNoteChange}
            rows={4}
            style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
            placeholder="Любые дополнительные мысли..."
          />
        </div>
      </div>
    </StepLayout>
  );
}

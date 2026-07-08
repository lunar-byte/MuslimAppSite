import StepLayout from '../components/StepLayout';
import useSabrSession from '../hooks/useSabrSession';

export default function Step2() {
  const { session, updateStep } = useSabrSession();
  const { negativeThoughts, whoBecome, thoughtsTruth } = session.step2;

  const handleNegativeThoughtsChange = (e) => {
    updateStep(2, { negativeThoughts: e.target.value });
  };

  const handleWhoBecomeChange = (e) => {
    updateStep(2, { whoBecome: e.target.value });
  };

  const handleTruthSelect = (value) => {
    updateStep(2, { thoughtsTruth: value });
  };

  return (
    <StepLayout currentStep={2}>
      <div>
        <h2>Шаг 2: История за эмоцией</h2>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="negativeThoughts" style={{ display: 'block', marginBottom: '8px' }}>
            Негативные мысли в голове
          </label>
          <textarea
            id="negativeThoughts"
            value={negativeThoughts}
            onChange={handleNegativeThoughtsChange}
            rows={4}
            style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
            placeholder="Опишите, что крутится в голове..."
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="whoBecome" style={{ display: 'block', marginBottom: '8px' }}>
            Кем я становлюсь с этими мыслями?
          </label>
          <textarea
            id="whoBecome"
            value={whoBecome}
            onChange={handleWhoBecomeChange}
            rows={4}
            style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
            placeholder="Как эти мысли влияют на вас? Кем вы становитесь?"
          />
        </div>

        <div>
          <p style={{ marginBottom: '10px' }}>Эти мысли всегда правда?</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {['Да', 'Может быть', 'Нет'].map(option => {
              const value = option === 'Да' ? 'yes' : option === 'Может быть' ? 'maybe' : 'no';
              const isActive = thoughtsTruth === value;
              return (
                <button
                  key={option}
                  onClick={() => handleTruthSelect(value)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '4px',
                    border: isActive ? '2px solid #2196F3' : '1px solid #ccc',
                    backgroundColor: isActive ? '#E3F2FD' : 'white',
                    cursor: 'pointer',
                    fontSize: '16px'
                  }}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </StepLayout>
  );
}

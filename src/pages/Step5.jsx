import StepLayout from '../components/StepLayout';
import useSabrSession from '../hooks/useSabrSession';

const NIYYAH_OPTIONS = [
  'Have a respectful conversation',
  'Ask for help',
  'Keep silent',
  'Set a boundary',
  'Make dua and trust Allah',
  'Let go of the situation'
];

export default function Step5() {
  const { session, updateStep } = useSabrSession();
  const { healthyThought, niyyah, oneStep } = session.step5;

  return (
    <StepLayout currentStep={5}>
      <div>
        <h2>Step 5: Reframe and Act</h2>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="healthyThought" style={{ display: 'block', marginBottom: '8px' }}>
            A healthier thought
          </label>
          <textarea
            id="healthyThought"
            value={healthyThought}
            onChange={(e) => updateStep(5, { healthyThought: e.target.value })}
            style={{
              width: '100%',
              height: 120,
              padding: '12px 15px',
              boxSizing: 'border-box',
              borderRadius: '4px',
              border: '1px solid #ccc',
              resize: 'none',
            }}
            placeholder="How can you view the situation differently?"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <p style={{ marginBottom: '10px' }}>My intention (niyyah)</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {NIYYAH_OPTIONS.map(option => (
              <button
                key={option}
                type="button"
                onClick={() => updateStep(5, { niyyah: option })}
                style={{
                  padding: '10px 16px',
                  borderRadius: '4px',
                  border: niyyah === option ? '2px solid #2196F3' : '1px solid #ccc',
                  backgroundColor: niyyah === option ? '#E3F2FD' : 'white',
                  cursor: 'pointer'
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="oneStep" style={{ display: 'block', marginBottom: '8px' }}>
            One small step I will take
          </label>
          <textarea
            id="oneStep"
            value={oneStep}
            onChange={(e) => updateStep(5, { oneStep: e.target.value })}
            style={{
              width: '100%',
              height: 120,
              padding: '12px 15px',
              boxSizing: 'border-box',
              borderRadius: '4px',
              border: '1px solid #ccc',
              resize: 'none',
            }}
            placeholder="What concrete step will you take?"
          />
        </div>
      </div>
    </StepLayout>
  );
}

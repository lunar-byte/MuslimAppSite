import StepLayout from '../components/StepLayout';
import useSabrSession from '../hooks/useSabrSession';

const NIYYAH_OPTIONS = [
  'Провести уважительный разговор',
  'Обратиться за помощью',
  'Сохранить молчание',
  'Установить границу',
  'Сделать дуа и довериться Аллаху',
  'Отпустить ситуацию'
];

export default function Step5() {
  const { session, updateStep } = useSabrSession();
  const { healthyThought, niyyah, oneStep } = session.step5;

  return (
    <StepLayout currentStep={5}>
      <div>
        <h2>Шаг 5: Переосмысли и действуй</h2>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="healthyThought" style={{ display: 'block', marginBottom: '8px' }}>
            Более здоровая мысль
          </label>
          <textarea
            id="healthyThought"
            value={healthyThought}
            onChange={(e) => updateStep(5, { healthyThought: e.target.value })}
            rows={4}
            style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
            placeholder="Как можно взглянуть на ситуацию иначе?"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <p style={{ marginBottom: '10px' }}>Моё намерение (ниет)</p>
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
            Один маленький шаг, который я сделаю
          </label>
          <textarea
            id="oneStep"
            value={oneStep}
            onChange={(e) => updateStep(5, { oneStep: e.target.value })}
            rows={4}
            style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
            placeholder="Какой конкретный шаг вы планируете?"
          />
        </div>
      </div>
    </StepLayout>
  );
}

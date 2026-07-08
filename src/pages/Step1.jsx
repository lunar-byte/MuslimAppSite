import StepLayout from '../components/StepLayout';
import useSabrSession from '../hooks/useSabrSession';

const EMOTIONS = [
  'Подавлен',
  'Грустно',
  'Испуган',
  'Злость',
  'Обижен',
  'Разочарован',
  'Тревога',
  'Онемение',
  'Беспомощность',
  'Растерян'
];

export default function Step1() {
  const { session, updateStep } = useSabrSession();
  const { trigger, emotions } = session.step1;

  const handleTriggerChange = (e) => {
    updateStep(1, { trigger: e.target.value });
  };

  const toggleEmotion = (emotionName) => {
    const exists = emotions.find(e => e.name === emotionName);
    if (exists) {
      updateStep(1, { emotions: emotions.filter(e => e.name !== emotionName) });
    } else {
      updateStep(1, { emotions: [...emotions, { name: emotionName, intensity: 5 }] });
    }
  };

  const updateIntensity = (emotionName, newIntensity) => {
    updateStep(1, {
      emotions: emotions.map(e =>
        e.name === emotionName ? { ...e, intensity: newIntensity } : e
      )
    });
  };

  const isNextDisabled = !trigger.trim() || emotions.length === 0;

  return (
    <StepLayout currentStep={1} isNextDisabled={isNextDisabled}>
      <div>
        <h2>Шаг 1: Триггер и эмоции</h2>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="trigger" style={{ display: 'block', marginBottom: '8px' }}>
            Что произошло?
          </label>
          <textarea
            id="trigger"
            value={trigger}
            onChange={handleTriggerChange}
            rows={3}
            style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
            placeholder="Опишите ситуацию..."
          />
        </div>

        <div>
          <p style={{ marginBottom: '10px' }}>Какие эмоции вы чувствуете?</p>
          {EMOTIONS.map(emotion => {
            const isSelected = emotions.some(e => e.name === emotion);
            const emotionObj = emotions.find(e => e.name === emotion);
            return (
              <div key={emotion} style={{ marginBottom: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleEmotion(emotion)}
                  />
                  <span>{emotion}</span>
                </label>
                {isSelected && (
                  <div style={{ marginLeft: '24px', marginTop: '4px' }}>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={emotionObj.intensity}
                      onChange={(e) => updateIntensity(emotion, parseInt(e.target.value))}
                      style={{ width: '200px' }}
                    />
                    <span style={{ marginLeft: '8px' }}>{emotionObj.intensity}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </StepLayout>
  );
}

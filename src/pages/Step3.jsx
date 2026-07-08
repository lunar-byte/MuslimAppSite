import StepLayout from '../components/StepLayout';
import useSabrSession from '../hooks/useSabrSession';

const ALTERNATIVE_OPTIONS = [
  'Это может быть не так плохо, как кажется',
  'Их намерение могло быть не плохим',
  'Они могут сами через что-то проходить',
  'У меня нет всей картины',
  'Это не личное',
  'Возможно, Аллах защищает меня'
];

const MUHASABA_OPTIONS = [
  'Предположения',
  'Гордость',
  'Обиду',
  'Нетерпение',
  'Резкость',
  'Зависть'
];

export default function Step3() {
  const { session, updateStep } = useSabrSession();
  const { alternatives, gratitude, muhasaba } = session.step3;

  const toggleAlternative = (option) => {
    if (alternatives.includes(option)) {
      updateStep(3, { alternatives: alternatives.filter(a => a !== option) });
    } else {
      updateStep(3, { alternatives: [...alternatives, option] });
    }
  };

  const handleGratitudeChange = (index, value) => {
    const newGratitude = [...gratitude];
    newGratitude[index] = value;
    updateStep(3, { gratitude: newGratitude });
  };

  const toggleMuhasaba = (item) => {
    if (muhasaba.includes(item)) {
      updateStep(3, { muhasaba: muhasaba.filter(m => m !== item) });
    } else {
      updateStep(3, { muhasaba: [...muhasaba, item] });
    }
  };

  return (
    <StepLayout currentStep={3}>
      <div>
        <h2>Шаг 3: Расширь сердце</h2>

        <div style={{ marginBottom: '20px' }}>
          <p style={{ marginBottom: '10px' }}>Другие объяснения</p>
          {ALTERNATIVE_OPTIONS.map(option => (
            <div key={option} style={{ marginBottom: '5px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="checkbox"
                  checked={alternatives.includes(option)}
                  onChange={() => toggleAlternative(option)}
                />
                <span>{option}</span>
              </label>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <p style={{ marginBottom: '10px' }}>5 перспектив благодарности</p>
          {gratitude.map((item, index) => (
            <div key={index} style={{ marginBottom: '8px' }}>
              <label htmlFor={`gratitude-${index}`} style={{ display: 'block', marginBottom: '4px' }}>
                {index + 1}.
              </label>
              <textarea
                id={`gratitude-${index}`}
                value={item}
                onChange={(e) => handleGratitudeChange(index, e.target.value)}
                rows={2}
                style={{
                  width: '100%',
                  padding: '8px',
                  boxSizing: 'border-box',
                  borderRadius: '4px',
                  border: '1px solid #ccc'
                }}
                placeholder={`Перспектива ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div>
          <p style={{ marginBottom: '10px' }}>Что нужно очистить в сердце? (мухасаба)</p>
          {MUHASABA_OPTIONS.map(item => (
            <div key={item} style={{ marginBottom: '5px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="checkbox"
                  checked={muhasaba.includes(item)}
                  onChange={() => toggleMuhasaba(item)}
                />
                <span>{item}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </StepLayout>
  );
}

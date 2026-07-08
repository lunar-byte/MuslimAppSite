import StepLayout from '../components/StepLayout';
import useSabrSession from '../hooks/useSabrSession';

const ALLAH_NAMES = [
  { key: 'ar-rahman', name: 'Ар-Рахман', arabic: 'الرَّحْمَنُ', meaning: 'Милостивый' },
  { key: 'al-khalim', name: 'Аль-Халим', arabic: 'الْحَلِيمُ', meaning: 'Кроткий' },
  { key: 'as-sabur', name: 'Ас-Сабур', arabic: 'الصَّبُورُ', meaning: 'Терпеливый' },
  { key: 'ash-shakur', name: 'Аш-Шакур', arabic: 'الشَّكُورُ', meaning: 'Благодарный' },
  { key: 'al-wadud', name: 'Аль-Вадуд', arabic: 'الْوَدُودُ', meaning: 'Любящий' }
];

export default function Step4() {
  const { session, updateStep } = useSabrSession();
  const { allahName, nameIntention } = session.step4;

  const handleNameSelect = (name) => {
    updateStep(4, { allahName: name });
  };

  const handleNameChange = (e) => {
    updateStep(4, { allahName: e.target.value });
  };

  const handleIntentionChange = (e) => {
    updateStep(4, { nameIntention: e.target.value });
  };

  const selectedPredefined = ALLAH_NAMES.find(n => n.name === allahName);

  return (
    <StepLayout currentStep={4}>
      <div>
        <h2>Шаг 4: Имена Аллаха</h2>
        <p style={{ marginBottom: '15px' }}>Какое Имя Аллаха резонирует сейчас?</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '15px',
          marginBottom: '20px'
        }}>
          {ALLAH_NAMES.map(({ name, arabic, meaning }) => {
            const isSelected = allahName === name;
            return (
              <div
                key={name}
                onClick={() => handleNameSelect(name)}
                style={{
                  padding: '15px',
                  border: isSelected ? '2px solid #2196F3' : '1px solid #ddd',
                  borderRadius: '8px',
                  backgroundColor: isSelected ? '#E3F2FD' : 'white',
                  cursor: 'pointer',
                  textAlign: 'center',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                <div style={{ fontSize: '24px', marginBottom: '8px', direction: 'rtl' }}>{arabic}</div>
                <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>{name}</div>
                <div style={{ fontSize: '14px', color: '#666' }}>{meaning}</div>
              </div>
            );
          })}

          {/* Custom option */}
          <div
            style={{
              padding: '15px',
              border: !selectedPredefined && allahName ? '2px solid #2196F3' : '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: !selectedPredefined && allahName ? '#E3F2FD' : 'white',
              cursor: 'text',
              textAlign: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>Другое</div>
            <input
              type="text"
              value={selectedPredefined ? '' : allahName}
              onChange={handleNameChange}
              placeholder="Введите имя..."
              style={{
                width: '100%',
                padding: '8px',
                boxSizing: 'border-box',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>

        {selectedPredefined && (
          <div style={{
            padding: '15px',
            border: '2px solid #2196F3',
            borderRadius: '8px',
            backgroundColor: '#E3F2FD',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '28px', marginBottom: '10px', direction: 'rtl' }}>{selectedPredefined.arabic}</div>
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{selectedPredefined.name}</div>
            <div style={{ color: '#1976D2' }}>{selectedPredefined.meaning}</div>
          </div>
        )}

        <div>
          <label htmlFor="nameIntention" style={{ display: 'block', marginBottom: '8px' }}>
            В честь этого Имени я...
          </label>
          <textarea
            id="nameIntention"
            value={nameIntention}
            onChange={handleIntentionChange}
            rows={4}
            style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
            placeholder="Ваше намерение..."
          />
        </div>
      </div>
    </StepLayout>
  );
}

import StepLayout from '../components/StepLayout';
import useSabrSession from '../hooks/useSabrSession';
import { spacing, colors, borderRadius, typography } from '../styles/theme';

const ALLAH_NAMES = [
  { key: 'ar-rahman', name: 'Ar-Rahman', arabic: 'الرَّحْمَنُ', meaning: 'The Most Merciful' },
  { key: 'al-khalim', name: 'Al-Halim', arabic: 'الْحَلِيمُ', meaning: 'The Forbearing' },
  { key: 'as-sabur', name: 'As-Sabur', arabic: 'الصَّبُورُ', meaning: 'The Patient' },
  { key: 'ash-shakur', name: 'Ash-Shakur', arabic: 'الشَّكُورُ', meaning: 'The Appreciative' },
  { key: 'al-wadud', name: 'Al-Wadud', arabic: 'الْوَدُودُ', meaning: 'The Loving' }
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
        <h2>Step 4: Names of Allah</h2>
        <p style={{ marginBottom: '15px' }}>Which Name of Allah resonates right now?</p>

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
            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>Other</div>
            <input
              type="text"
              value={selectedPredefined ? '' : allahName}
              onChange={handleNameChange}
              placeholder="Enter name..."
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
            In honor of this Name I...
          </label>
          <textarea
            id="nameIntention"
            value={nameIntention}
            onChange={handleIntentionChange}
            style={{
              width: '100%',
              height: 120,
              padding: '12px 15px',
              boxSizing: 'border-box',
              borderRadius: '4px',
              border: '1px solid #ccc',
              resize: 'none',
            }}
            placeholder="Your intention..."
          />
        </div>
      </div>
    </StepLayout>
  );
}

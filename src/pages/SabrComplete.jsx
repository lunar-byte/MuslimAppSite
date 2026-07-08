import { useNavigate } from 'react-router-dom';
import useSabrSession from '../hooks/useSabrSession';

export default function SabrComplete() {
  const { session, clearSession } = useSabrSession();
  const navigate = useNavigate();

  const handleNewPractice = () => {
    clearSession();
    navigate('/');
  };

  const handleHistory = () => {
    navigate('/history');
  };

  const { step1, step2, step3, step4, step5, step6 } = session;

  // Build emotion dynamic string from rerating or step1
  const emotionLines = (step6?.rerating || []).map(({ name, before, after }) => `${name}: ${before} → ${after}`);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Практика завершена</h1>

      <div style={{ textAlign: 'left', marginTop: '30px' }}>
        <h2>Резюме сессии</h2>

        <p><strong>Триггер:</strong> {step1.trigger || '—'}</p>

        <div>
          <strong>Эмоции и их изменение:</strong>
          {emotionLines.length > 0 ? (
            <ul>
              {emotionLines.map((line, i) => <li key={i}>{line}</li>)}
            </ul>
          ) : (
            <p>Нет данных</p>
          )}
        </div>

        <p><strong>Имя Аллаха:</strong> {step4.allahName || '—'}</p>

        <p><strong>Намерение (ниет):</strong> {step5.niyyah || '—'}</p>

        <p><strong>Один маленький шаг:</strong> {step5.oneStep || '—'}</p>
      </div>

      <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
        <button
          onClick={handleNewPractice}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '6px'
          }}
        >
          Новая практика
        </button>
        <button
          onClick={handleHistory}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '6px'
          }}
        >
          История практик
        </button>
      </div>
    </div>
  );
}

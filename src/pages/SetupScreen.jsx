import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SetupScreen() {
  const navigate = useNavigate();
  const [decision, setDecision] = useState(null); // 'show' | 'redirect'

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

    const checkStandalone = () => {
      try {
        if (window.navigator.standalone === true) return true;
        if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) return true;
        if (window.matchMedia && window.matchMedia('(display-mode: fullscreen)').matches) return true;
        return false;
      } catch (e) {
        return false;
      }
    };

    const isStandalone = checkStandalone();

    // Показываем экран настройки только если это iOS и не standalone (запущен в Safari)
    if (isIOS && !isStandalone) {
      setDecision('show');
    } else {
      setDecision('redirect');
    }
  }, [navigate]);

  useEffect(() => {
    if (decision === 'redirect') {
      navigate('/intro', { replace: true });
    }
  }, [decision, navigate]);

  if (decision === null) {
    return <div style={{ textAlign: 'center', marginTop: '100px' }}>Загрузка...</div>;
  }

  if (decision !== 'show') {
    return null;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', padding: '20px' }}>
      <h1>Настройте приложение</h1>
      <p style={{ marginBottom: '30px', maxWidth: '400px', margin: '20px auto', lineHeight: '1.6' }}>
        Добро пожаловать! Это приложение поможет вам практиковать сабр (терпение) через серию шагов.
      </p>
      <button
        onClick={() => navigate('/intro')}
        style={{
          padding: '16px 32px',
          fontSize: '18px',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Продолжить
      </button>
    </div>
  );
}
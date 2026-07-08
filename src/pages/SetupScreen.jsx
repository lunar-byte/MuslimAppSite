import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SetupScreen() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    const isMobileDevice = mobileRegex.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  useEffect(() => {
    if (isMobile === true) {
      navigate('/intro', { replace: true });
    }
  }, [isMobile, navigate]);

  if (isMobile === null) {
    return <div style={{ textAlign: 'center', marginTop: '100px' }}>Загрузка...</div>;
  }

  // Desktop
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

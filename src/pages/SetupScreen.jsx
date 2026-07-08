import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { container, buttonPrimary, typography, colors, spacing } from '../styles/theme';

export default function SetupScreen() {
  const navigate = useNavigate();
  const [decision, setDecision] = useState(null);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    const checkStandalone = () => {
      try {
        if (window.navigator.standalone === true) return true;
        if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) return true;
        if (window.matchMedia && window.matchMedia('(display-mode: fullscreen)').matches) return true;
        return false;
      } catch (e) { return false; }
    };

    const isStandalone = checkStandalone();

    if (isMobile && !isStandalone) setDecision('show');
    else setDecision('redirect');
  }, [navigate]);

  useEffect(() => {
    if (decision === 'redirect') navigate('/intro', { replace: true });
  }, [decision, navigate]);

  if (decision === null) {
    return (
      <div style={{ ...container, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div>Загрузка...</div>
      </div>
    );
  }

  if (decision !== 'show') return null;

  return (
    <div style={{ ...container, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <h1 style={{ ...typography.heading, color: colors.blackNear, marginBottom: spacing.xxl }}>
        Настройте приложение
      </h1>
      <p style={{
        maxWidth: 400,
        margin: `${spacing.lg} auto`,
        lineHeight: 1.6,
        color: colors.grayDark,
        ...typography.body
      }}>
        Добро пожаловать! Это приложение поможет вам практиковать сабр (терпение) через серию шагов.
      </p>
      <button
        onClick={() => navigate('/intro')}
        style={buttonPrimary}
      >
        Продолжить
      </button>
    </div>
  );
}

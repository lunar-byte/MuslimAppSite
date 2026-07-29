import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { container, buttonPrimary, typography, colors, spacing } from '../styles/theme';
import PWAInstallOverlay from '../components/PWAInstallOverlay';

export default function SabrIntro() {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // Show overlay if not running as standalone PWA
    const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;
    if (!isStandalone) {
      setShowOverlay(true);
    }
  }, []);

  const handleOverlayClose = () => {
    setShowOverlay(false);
  };

  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  const goalAmount = 1000;
  const raisedAmount = 543;
  const progressPercent = Math.min((raisedAmount / goalAmount) * 100, 100);

  return (
    <div style={{ ...container, ...wrapperStyle }}>
      {showOverlay && <PWAInstallOverlay onClose={handleOverlayClose} />}

      {/* Заголовок WAQTI APP */}
      <div style={{ marginBottom: spacing.xxxl, maxWidth: 500 }}>
        <h1 style={{ ...typography.heading, color: colors.primary, fontSize: '2.5rem', marginBottom: spacing.md }}>
          WAQTI APP
        </h1>
        <p style={{ ...typography.body, color: colors.blackNear, marginBottom: spacing.lg }}>
          Waqti app is an application for Muslims who want to remain productive in both their worldly and spiritual lives.
        </p>
        <p style={{ ...typography.body, color: colors.blackNear, marginBottom: spacing.lg, fontStyle: 'italic' }}>
          The project is currently in development. We need your help—we need to raise $1,000 for the app's release and marketing. We have already raised $543!
        </p>

        {/* Прогресс-бар */}
        <div style={{ width: '100%', marginBottom: spacing.lg }}>
          <div
            style={{
              width: '100%',
              height: 16,
              backgroundColor: '#e0e0e0',
              borderRadius: 8,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${progressPercent}%`,
                height: '100%',
                backgroundColor: colors.primary,
                borderRadius: 8,
                transition: 'width 0.5s ease',
              }}
            />
          </div>
          <p style={{ ...typography.body, color: colors.blackNear, marginTop: spacing.sm, fontSize: '0.9rem' }}>
            ${raisedAmount} raised of ${goalAmount} ({Math.round(progressPercent)}%)
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', gap: spacing.xxl, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Кнопка поддержки — теперь тоже <button>, для одинакового box-model */}
            <button
              onClick={() => window.open('https://dalink.to/leenar', '_blank', 'noopener,noreferrer')}
              style={buttonPrimary}
            >
              Help project
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button onClick={() => navigate('/about')} style={buttonPrimary}>
              About app
            </button>
          </div>
        </div>

      </div>

      {/* Существующий контент без изменений */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: spacing.xxl, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
        
        <p style={{ ...typography.body, color: colors.blackNear, fontWeight: 'bold' }}>
          In the meantime, you can use part of the app for free:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{ ...typography.heading, color: colors.blackNear, marginBottom: spacing.xxl }}>
            Sabr
          </h1>
          <button onClick={() => navigate('/step/1')} style={buttonPrimary}>
            Start Practice
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{ ...typography.heading, color: colors.blackNear, marginBottom: spacing.xxl }}>
            Istikhara
          </h1>
          <button onClick={() => navigate('/istikharah')} style={buttonPrimary}>
            Start Practice
          </button>
        </div>
      </div>
    </div>
  );
}
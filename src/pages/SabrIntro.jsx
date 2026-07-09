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
  return (
    
    <div style={{ ...container, ...wrapperStyle }}>
      {showOverlay && <PWAInstallOverlay onClose={handleOverlayClose} />}
      <div style={{marginTop: -100,}}><h1>Choose your practice</h1></div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: spacing.xxl, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
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

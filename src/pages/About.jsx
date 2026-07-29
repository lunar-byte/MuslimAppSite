import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { container, buttonPrimary, typography, colors, spacing } from '../styles/theme';
import PWAInstallOverlay from '../components/PWAInstallOverlay';

export default function SabrIntro() {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
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

  const features = [
    { title: 'Goal Tracking', description: 'Set and track your personal goals' },
    { title: 'Habit Building', description: 'Build lasting daily habits' },
    { title: 'Prayer Reminders', description: 'Never miss your prayers' },
    { title: 'Progress Insights', description: 'See your growth over time' },
    { title: 'Daily Reflections', description: 'Reflect on your spiritual journey' },
    { title: 'Community Support', description: 'Connect with like-minded users' },
  ];

  // Скриншоты из public/screenshots — просто замени пути на свои файлы
  const screenshots = [
    { src: '/screenshots/home.jpg', caption: 'Home Screen' },
    { src: '/screenshots/goals.jpg', caption: 'Goals Tracker' },
    { src: '/screenshots/goaldetails.jpg', caption: 'Goals Detailed' },
    { src: '/screenshots/habbits.jpg', caption: 'Habbit Tracker' },
    { src: '/screenshots/pomodoro.jpg', caption: 'Pomodoro Timer' },
    { src: '/screenshots/duas.jpg', caption: 'Dua reading' },
    { src: '/screenshots/hadiths.jpg', caption: 'Hadiths' },
  ];

  const featureCardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 160,
    padding: spacing.md,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    minHeight: 120,
  };

  const screenshotCardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 160,
  };

  const screenshotPlaceholderStyle = {
    width: 160,
    height: 300,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: spacing.sm,
  };

  return (
    <div style={{ ...container, ...wrapperStyle }}>
      {showOverlay && <PWAInstallOverlay onClose={handleOverlayClose} />}

      {/* Заголовок WAQTI APP */}
      <div style={{ marginBottom: spacing.xxxl, maxWidth: 500 }}>
        <h1 style={{ ...typography.heading, color: colors.primary, fontSize: '2.5rem', marginBottom: spacing.md }}>
          ABOUT HIMMA APP
        </h1>
        <p style={{ ...typography.body, color: colors.blackNear, marginBottom: spacing.lg }}>
          Himma app is an application for Muslims who want to remain productive in both their worldly and spiritual lives.
        </p>
        <p style={{ ...typography.body, color: colors.blackNear, marginBottom: spacing.lg, fontStyle: 'italic' }}>
          Main function - goals and habbits tracking
        </p>
      </div>

      {/* Блок Features */}
      <div style={{ marginBottom: spacing.xxxl, maxWidth: 600 }}>
        <h2 style={{ ...typography.heading, color: colors.blackNear, marginBottom: spacing.xl }}>
          Features
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: spacing.lg,
            justifyItems: 'center',
          }}
        >
          {features.map((feature, index) => (
            <div key={index} style={featureCardStyle}>
              <h3 style={{ ...typography.body, color: colors.blackNear, fontWeight: 'bold', marginBottom: spacing.sm }}>
                {feature.title}
              </h3>
              <p style={{ ...typography.body, color: colors.blackNear, fontSize: '0.85rem' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Блок Screenshots */}
      <div style={{ marginBottom: spacing.xxxl, maxWidth: 600 }}>
        <h2 style={{ ...typography.heading, color: colors.blackNear, marginBottom: spacing.xl }}>
          Screenshots
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: spacing.lg,
            justifyItems: 'center',
          }}
        >
          {screenshots.map((screenshot, index) => (
            <div key={index} style={screenshotCardStyle}>
              <div style={screenshotPlaceholderStyle}>
                <img
                  src={screenshot.src}
                  alt={screenshot.caption}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <p style={{ ...typography.body, color: colors.blackNear, fontSize: '0.85rem' }}>
                {screenshot.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
<h4 style={{ ...typography.heading, color: colors.blackNear, marginBottom: spacing.xl }}>
          NO ADDS, NO UNNECECARY FEATURES AND JUST HELPFULL
        </h4>
      {/* Кнопка Help project в конце страницы */}
      <div style={{ marginBottom: spacing.xxxl }}>
        <button
          onClick={() => window.open('https://dalink.to/leenar', '_blank', 'noopener,noreferrer')}
          style={buttonPrimary}
        >
          Help project
        </button>
      </div>
    </div>
  );
}
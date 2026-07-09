import { buttonPrimary, typography, colors, spacing } from '../styles/theme';
import { GoShare } from "react-icons/go";

export default function PWAInstallOverlay({ onClose }) {
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '20px',
  };

  const contentStyle = {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '24px',
    maxWidth: '600px',
    maxHeight: '90vh',
    overflowY: 'auto',
    textAlign: 'center',
  };

  const headingStyle = {
    ...typography.display,
    color: colors.blackNear,
    marginBottom: spacing.lg,
  };

  const sectionTitleStyle = {
    marginBottom: spacing.sm,
    textAlign: 'center',
    color: colors.blackNear,
    fontWeight: 'bold',
    fontSize: '1.1rem',
  };

  const listStyle = {
    textAlign: 'left',
    marginBottom: spacing.lg,
    paddingLeft: '20px',
    color: colors.blackNear,
  };

  const noteStyle = {
    marginTop: spacing.md,
    fontSize: '0.85rem',
    color: '#666',
  };

  return (
    <div style={overlayStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>Install Sabr on your Home Screen</h1>
        <h3 style={sectionTitleStyle}>iOS (Safari)</h3>
        <ol style={listStyle}>
          <li style={{ marginBottom: spacing.sm }}>Tap the <strong>Share</strong> button <GoShare size={24}/> in the bottom toolbar of Safari.</li>
          <li style={{ marginBottom: spacing.sm }}>Scroll and select <strong>"Add to Home Screen"</strong>.</li>
          <li style={{ marginBottom: spacing.sm }}>Confirm the addition</li>
        </ol>
        <button style={buttonPrimary} onClick={onClose}>
          Continue
        </button>
      </div>
    </div>
  );
}

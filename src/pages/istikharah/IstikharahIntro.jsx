import { useNavigate } from 'react-router-dom';
import { container, buttonPrimary, typography, colors, spacing } from '../../styles/theme';

export default function IstikharahIntro() {
  const navigate = useNavigate();
  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };
  return (
    <div style={{ ...container, ...wrapperStyle }}>
      <h1 style={{ ...typography.heading, color: colors.blackNear, marginBottom: spacing.lg }}>
        Istikharah
      </h1>
      <p style={{ ...typography.body, color: colors.grayDark, marginBottom: spacing.xxl, maxWidth: 500 }}>
        Istikharah is a prayer for seeking Allah's guidance when making a decision.
        Through sincere prayer and reflection, we ask the Almighty to guide our hearts to what is best.
      </p>
      <button onClick={() => navigate('/istikharah/step/1')} style={buttonPrimary}>
        Start Practice
      </button>
    </div>
  );
}

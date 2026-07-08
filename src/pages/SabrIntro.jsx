  import { useNavigate } from 'react-router-dom';                                 import { container, buttonPrimary, typography, colors, spacing } from
  '../styles/theme';

  export default function SabrIntro() {
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
        <h1 style={{ ...typography.heading, color: colors.blackNear,
  marginBottom: spacing.xxl }}>
          Sabr
        </h1>
        <button
          onClick={() => navigate('/step/1')}
          style={buttonPrimary}
        >
          Start Practice
        </button>
      </div>
    );
  }

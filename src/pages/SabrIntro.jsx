import { useNavigate } from 'react-router-dom';

export default function SabrIntro() {
  const navigate = useNavigate();
  return (
    <div style={{
      textAlign: 'center',
      marginTop: '100px',
      padding: '20px'
    }}>
      <h1 style={{ marginBottom: '40px' }}>Sabr</h1>
      <button
        onClick={() => navigate('/step/1')}
        style={{
          padding: '16px 32px',
          fontSize: '18px',
          cursor: 'pointer',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          borderRadius: '8px'
        }}
      >
        Начать практику
      </button>
    </div>
  );
}

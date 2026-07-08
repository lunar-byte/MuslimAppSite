import { useNavigate } from 'react-router-dom';
import useIstikharahSession from '../../hooks/useIstikharahSession';
import { container, buttonPrimary, buttonSecondary, typography, colors, spacing } from '../../styles/theme';

export default function IstikharahComplete() {
  const { session, clearSession } = useIstikharahSession();
  const navigate = useNavigate();

  const handleNewPractice = () => {
    clearSession();
    navigate('/istikharah');
  };

  const handleHistory = () => {
    navigate('/history');
  };

  const { decision, nafs, istisharah, prayerLog, nextSteps } = session;

  const renderList = (items) => {
    if (!items || items.length === 0) {
      return <p style={{ color: colors.grayMedium, fontStyle: 'italic' }}>—</p>;
    }
    return (
      <ul style={{ margin: 0, paddingLeft: spacing.lg }}>
        {items.map((item, i) => (
          <li key={i} style={{ marginBottom: spacing.xs }}>{item}</li>
        ))}
      </ul>
    );
  };

  const renderAdvisors = (advisors) => {
    if (!advisors || advisors.length === 0) {
      return <p style={{ color: colors.grayMedium, fontStyle: 'italic' }}>—</p>;
    }
    return (
      <div>
        {advisors.map((advisor, i) => (
          <div key={i} style={{ marginBottom: spacing.md, padding: spacing.sm, backgroundColor: colors.grayVeryLight, borderRadius: borderRadius.md }}>
            <p style={{ margin: '0 0 4px 0' }}><strong>{advisor.name}</strong> ({advisor.role})</p>
            <p style={{ margin: 0, color: colors.grayDark }}>{advisor.advice || '—'}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ ...container, textAlign: 'center' }}>
      <h1 style={{ ...typography.heading, color: colors.blackNear, marginBottom: spacing.lg }}>
        Istikharah Complete
      </h1>

      <p style={{ ...typography.body, color: colors.grayDark, marginBottom: spacing.xxl }}>
        Alhamdulillah! You have completed the istikharah process. You can now review your entries and start a new practice.
      </p>

      <div style={{ textAlign: 'left', marginBottom: spacing.xxl }}>
        <h2 style={{ ...typography.subheading, color: colors.blackNear, marginBottom: spacing.md }}>
          Session Summary
        </h2>

        <div style={{ marginBottom: spacing.md }}>
          <strong style={{ color: colors.blackNear }}>Decision:</strong>
          <p style={{ margin: '4px 0 0 0', color: colors.grayDark }}>{decision.question || '—'}</p>
        </div>

        <div style={{ marginBottom: spacing.md }}>
          <strong style={{ color: colors.blackNear }}>Intention (niyyah):</strong>
          <p style={{ margin: '4px 0 0 0', color: colors.grayDark }}>{decision.niyyah || '—'}</p>
        </div>

        <div style={{ marginBottom: spacing.md }}>
          <strong style={{ color: colors.blackNear }}>Decision deadline:</strong>
          <p style={{ margin: '4px 0 0 0', color: colors.grayDark }}>
            {decision.deadline || '—'} {decision.deadlineHijri ? `(${decision.deadlineHijri})` : ''}
          </p>
        </div>

        <div style={{ marginBottom: spacing.md }}>
          <strong style={{ color: colors.blackNear }}>Affected areas:</strong>
          {renderList(decision.affectedAreas)}
        </div>

        <div style={{ marginBottom: spacing.md }}>
          <strong style={{ color: colors.blackNear }}>Nafs attachment:</strong>
          <p style={{ margin: '4px 0 0 0', color: colors.grayDark }}>{nafs.nafsAttachment || '—'}</p>
        </div>

        <div style={{ marginBottom: spacing.md }}>
          <strong style={{ color: colors.blackNear }}>Feelings:</strong>
          {renderList(nafs.feelings)}
        </div>

        <div style={{ marginBottom: spacing.md }}>
          <strong style={{ color: colors.blackNear }}>Opportunities (Dunya):</strong>
          <p style={{ margin: '4px 0 0 0', color: colors.grayDark }}>{nafs.duniyaOpportunities || '—'}</p>
        </div>

        <div style={{ marginBottom: spacing.md }}>
          <strong style={{ color: colors.blackNear }}>Opportunities (Akhirah):</strong>
          <p style={{ margin: '4px 0 0 0', color: colors.grayDark }}>{nafs.akhirahOpportunities || '—'}</p>
        </div>

        <div style={{ marginBottom: spacing.md }}>
          <strong style={{ color: colors.blackNear }}>Challenges:</strong>
          <p style={{ margin: '4px 0 0 0', color: colors.grayDark }}>{nafs.challenges || '—'}</p>
        </div>

        <div style={{ marginBottom: spacing.md }}>
          <strong style={{ color: colors.blackNear }}>Advice from people:</strong>
          {renderAdvisors(istisharah.advisors)}
        </div>

        <div style={{ marginBottom: spacing.md }}>
          <strong style={{ color: colors.blackNear }}>Heart leaning after advice:</strong>
          <p style={{ margin: '4px 0 0 0', color: colors.grayDark }}>{istisharah.heartAfterCounsel || '—'}</p>
        </div>

        <div style={{ marginBottom: spacing.md }}>
          <strong style={{ color: colors.blackNear }}>Prayer entries:</strong>
          {prayerLog.entries && prayerLog.entries.length > 0 ? (
            <ul style={{ margin: '4px 0 0 0', paddingLeft: spacing.lg }}>
              {prayerLog.entries.map((entry, i) => (
                <li key={i} style={{ marginBottom: spacing.xs }}>
                  {entry.date} {entry.time}: {entry.heartLeaning || '—'}
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ margin: '4px 0 0 0', color: colors.grayMedium, fontStyle: 'italic' }}>—</p>
          )}
        </div>

        <div style={{ marginBottom: spacing.md }}>
          <strong style={{ color: colors.blackNear }}>Heart inclination:</strong>
          <p style={{ margin: '4px 0 0 0', color: colors.grayDark }}>{nextSteps.heartInclination || '—'}</p>
        </div>

        <div style={{ marginBottom: spacing.md }}>
          <strong style={{ color: colors.blackNear }}>Action plan:</strong>
          {renderList(nextSteps.steps)}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.md, alignItems: 'center' }}>
        <button onClick={handleNewPractice} style={{ ...buttonPrimary, width: '100%', maxWidth: 300 }}>
          New Practice
        </button>
        <button onClick={handleHistory} style={{ ...buttonSecondary, width: '100%', maxWidth: 300 }}>
          Practice History
        </button>
      </div>
    </div>
  );
}

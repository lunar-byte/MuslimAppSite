import { useState } from 'react';
import IstikharahStepLayout from '../../components/IstikharahStepLayout';
import useIstikharahSession from '../../hooks/useIstikharahSession';
import { spacing, colors, borderRadius, typography, buttonPrimary } from '../../styles/theme';

const textareaStyle = {
  width: '100%',
  height: 100,
  padding: '12px 15px',
  boxSizing: 'border-box',
  borderRadius: borderRadius.md,
  border: 'none',
  backgroundColor: colors.grayVeryLight,
  fontSize: typography.body.fontSize,
  color: colors.blackNear,
  fontFamily: 'system-ui, -apple-system, sans-serif',
  resize: 'none',
};

const inputStyle = {
  width: '100%',
  padding: '12px 15px',
  boxSizing: 'border-box',
  borderRadius: borderRadius.md,
  border: 'none',
  backgroundColor: colors.grayVeryLight,
  fontSize: typography.body.fontSize,
  color: colors.blackNear,
  fontFamily: 'system-ui, -apple-system, sans-serif',
};

const labelStyle = {
  display: 'block',
  marginBottom: spacing.sm,
  ...typography.bodySmall,
  color: colors.grayDark,
};

const cardStyle = {
  backgroundColor: colors.white,
  borderRadius: borderRadius.lg,
  padding: spacing.lg,
  marginBottom: spacing.md,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
};

const cardHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: spacing.md,
};

const removeButtonStyle = {
  background: 'none',
  border: 'none',
  color: colors.grayMedium,
  fontSize: 24,
  cursor: 'pointer',
  padding: 0,
  width: 32,
  height: 32,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: borderRadius.round,
};

const inputGroupStyle = {
  marginBottom: spacing.md,
};

const getCurrentDateTime = () => {
  const now = new Date();
  const date = now.toISOString().split('T')[0];
  const time = now.toTimeString().slice(0, 5);
  return { date, time };
};

export default function IStep4() {
  const { session, updateStep } = useIstikharahSession();
  const { prayerLog } = session;
  const [entries, setEntries] = useState(prayerLog.entries || []);
  const [newEntryDate, setNewEntryDate] = useState(() => getCurrentDateTime().date);
  const [newEntryTime, setNewEntryTime] = useState(() => getCurrentDateTime().time);

  const addEntry = () => {
    const newEntry = {
      id: Date.now(),
      date: newEntryDate,
      time: newEntryTime,
      heartLeaning: ''
    };
    const newEntries = [...entries, newEntry];
    setEntries(newEntries);
    updateStep('prayerLog', { entries: newEntries });
  };

  const updateEntry = (id, field, value) => {
    const newEntries = entries.map(e =>
      e.id === id ? { ...e, [field]: value } : e
    );
    setEntries(newEntries);
    updateStep('prayerLog', { entries: newEntries });
  };

  const removeEntry = (id) => {
    const newEntries = entries.filter(e => e.id !== id);
    setEntries(newEntries);
    updateStep('prayerLog', { entries: newEntries });
  };

  const handleDateChange = (e) => {
    setNewEntryDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setNewEntryTime(e.target.value);
  };

  return (
    <IstikharahStepLayout currentStep={4} isNextDisabled={false}>
      <div>
        <h2 style={{ ...typography.subheading, color: colors.blackNear, marginBottom: spacing.lg }}>
          Step 4: Prayer Journal
        </h2>

        <div style={{
          backgroundColor: colors.grayVeryLight,
          borderRadius: borderRadius.lg,
          padding: spacing.md,
          marginBottom: spacing.lg,
          borderLeft: `4px solid ${colors.primary}`
        }}>
          <p style={{ ...typography.body, color: colors.grayDark, margin: 0 }}>
            <strong>Instruction:</strong> Perform 2 rak'ahs, then recite the Istikharah dua.
            Write below where your heart is leaning. Repeat as needed.
          </p>
        </div>

        {entries.map(entry => (
          <div key={entry.id} style={cardStyle}>
            <div style={cardHeaderStyle}>
              <span style={{ ...typography.body, fontWeight: 600, color: colors.blackNear }}>
                Prayer Entry
              </span>
              <button
                type="button"
                onClick={() => removeEntry(entry.id)}
                style={removeButtonStyle}
                title="Remove"
              >
                ×
              </button>
            </div>
            <div style={inputGroupStyle}>
              <label style={labelStyle}>Date</label>
              <input
                type="date"
                value={entry.date}
                onChange={(e) => updateEntry(entry.id, 'date', e.target.value)}
                style={inputStyle}
              />
            </div>
            <div style={inputGroupStyle}>
              <label style={labelStyle}>Time</label>
              <input
                type="time"
                value={entry.time}
                onChange={(e) => updateEntry(entry.id, 'time', e.target.value)}
                style={inputStyle}
              />
            </div>
            <div style={inputGroupStyle}>
              <label style={labelStyle}>Where is my heart leaning?</label>
              <textarea
                value={entry.heartLeaning}
                onChange={(e) => updateEntry(entry.id, 'heartLeaning', e.target.value)}
                style={textareaStyle}
                placeholder="Describe how you feel after prayer..."
              />
            </div>
          </div>
        ))}

        <div style={{ marginBottom: spacing.lg }}>
          <div style={{ display: 'flex', gap: spacing.md, marginBottom: spacing.md }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Date for new entry</label>
              <input
                type="date"
                value={newEntryDate}
                onChange={handleDateChange}
                style={inputStyle}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Time for new entry</label>
              <input
                type="time"
                value={newEntryTime}
                onChange={handleTimeChange}
                style={inputStyle}
              />
            </div>
          </div>
          <button
            type="button"
            onClick={addEntry}
            style={{
              ...buttonPrimary,
              width: '100%',
              backgroundColor: colors.grayVeryLight,
              color: colors.blackNear,
              boxShadow: 'none'
            }}
          >
            + Add entry
          </button>
        </div>

        <div style={{
          padding: spacing.md,
          backgroundColor: colors.primaryVeryLight,
          borderRadius: borderRadius.lg,
          borderStyle: 'dashed',
          borderWidth: 1,
          borderColor: colors.primary
        }}>
          <p style={{ ...typography.bodySmall, color: colors.grayDark, margin: 0, fontStyle: 'italic' }}>
            There is no rush. Repeat istikharah until your heart settles.
          </p>
        </div>
      </div>
    </IstikharahStepLayout>
  );
}

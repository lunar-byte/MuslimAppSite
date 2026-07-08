import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSabrSession from '../hooks/useSabrSession';

export default function History() {
  const [history, setHistory] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem('sabr_history');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse history', e);
      }
    }
  }, []);

  const handleDelete = (index) => {
    const newHistory = history.filter((_, i) => i !== index);
    setHistory(newHistory);
    localStorage.setItem('sabr_history', JSON.stringify(newHistory));
  };

  const handleEntryClick = (index) => {
    setExpandedId(expandedId === index ? null : index);
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getEmotionSummary = (step1, step6) => {
    if (!step1?.emotions?.length) return '—';
    const emotion = step1.emotions[0];
    const name = emotion.name;
    const before = emotion.intensity;
    let after = before;
    if (step6?.rerating?.length) {
      const rerated = step6.rerating.find(r => r.name === name);
      if (rerated) after = rerated.after;
    }
    return `${name}: ${before} → ${after}`;
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Practice History</h1>
      {history.length === 0 ? (
        <p>No completed practices.</p>
      ) : (
        history.map((session, index) => {
          const { createdAt, step1, step6, step4, step5 } = session;
          const emotionSummary = getEmotionSummary(step1, step6);
          const isExpanded = expandedId === index;
          return (
            <div key={index} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              marginBottom: '15px',
              padding: '15px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1, cursor: 'pointer' }} onClick={() => handleEntryClick(index)}>
                  <p><strong>Date:</strong> {formatDate(createdAt)}</p>
                  <p><strong>Trigger:</strong> {step1.trigger || '—'}</p>
                  <p><strong>Emotion:</strong> {emotionSummary}</p>
                  {isExpanded && (
                    <div style={{ marginTop: '15px', borderTop: '1px solid #eee', paddingTop: '10px' }}>
                      <h4>Full Summary</h4>
                      <p><strong>Emotions:</strong></p>
                      <ul>
                        {step1.emotions?.map(e => {
                          const before = e.intensity;
                          let after = before;
                          if (step6?.rerating) {
                            const r = step6.rerating.find(rr => rr.name === e.name);
                            if (r) after = r.after;
                          }
                          return <li key={e.name}>{e.name}: {before} → {after}</li>;
                        })}
                      </ul>
                      <p><strong>Allah's Name:</strong> {step4?.allahName || '—'}</p>
                      <p><strong>Intention:</strong> {step5?.niyyah || '—'}</p>
                      <p><strong>One step:</strong> {step5?.oneStep || '—'}</p>
                      <p><strong>Note:</strong> {step6?.finalNote || '—'}</p>
                    </div>
                  )}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(index);
                  }}
                  style={{
                    marginLeft: '10px',
                    padding: '6px 12px',
                    fontSize: '12px',
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
      )}
      <button
        onClick={() => navigate('/')}
        style={{
          display: 'block',
          margin: '20px auto',
          padding: '10px 20px',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

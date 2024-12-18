import React from 'react';

const newsData = [
  {
    id: 1,
    title: "Advances in blood pressure monitoring with wearables",
    date: "2024-12-01",
    summary:
      "New wearable devices allow for constant, non-invasive blood pressure monitoring, improving accuracy in diagnosis and treatment.",
    link: "https://pubs.acs.org/doi/10.1021/acsnano.4c04291",
  },
  {
    id: 2,
    title: "Sensor technology to measure oxygenation and glucose in real time",
    date: "2024-11-28",
    summary:
      "Researchers have developed advanced sensors that integrate measurement of oxygenation and glucose levels in compact devices.",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3878311/",
  },
  {
    id: 3,
    title: "How wearables are revolutionizing heart rate care",
    date: "2024-11-20",
    summary:
      "From early detection of arrhythmias to prediction of cardiovascular risks, wearables offer a new era in heart health.",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7931503/",
  },
  {
    id: 4,
    title: "Recent studies on the impact of wearables on health",
    date: "2024-11-15",
    summary:
      "A recent study reveals that the use of wearables reduces the risks associated with chronic diseases thanks to constant monitoring.",
    link: "https://tecscience.tec.mx/en/health/wearables/",
  },
];

const NewsSection = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', color: '#0073e6', marginBottom: '20px' }}>Latest news</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {newsData.map((news) => (
          <div
            key={news.id}
            style={{
              backgroundColor: '#fff',
              padding: '16px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 style={{ color: '#333', marginBottom: '10px' }}>{news.title}</h3>
            <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>
              <strong>Fecha:</strong> {news.date}
            </p>
            <p style={{ color: '#555', fontSize: '14px' }}>{news.summary}</p>
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '10px',
                color: '#0073e6',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              Reed More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;

import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FaSpinner } from 'react-icons/fa'; // Import loading icon

// Function to generate random numbers within a range
const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Function to generate random health data
const generateRandomData = (count) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: `${Date.now()}-${i}`,
      timestamp: new Date(Date.now() - i * 86400000).toLocaleString(), // Date
      heartRate: getRandomValue(60, 100), // Heart rate
      glucose: getRandomValue(80, 140), // Glucose level
      oxygen: getRandomValue(95, 100), // Oxygen saturation
      bloodPressure: `${getRandomValue(110, 130)}/${getRandomValue(70, 90)}`, // Blood pressure
    });
  }
  return data;
};

const HistoryScreen = () => {
  const [colorMode, setColorMode] = useState('light'); 
  const [displayedData, setDisplayedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firebaseConnecting, setFirebaseConnecting] = useState(true);

  const backgroundColor = colorMode === 'light' ? '#f0f0f0' : '#1a202c';
  const cardBackground = colorMode === 'light' ? '#fafafa' : '#2d3748';
  const textColor = colorMode === 'light' ? '#718096' : '#e2e8f0';

  //
  const data = generateRandomData(10);

  const renderHistoryItem = (item) => (
    <div
      key={`${item.id}-${item.timestamp}`}
      style={{
        backgroundColor: cardBackground,
        padding: '16px',
        margin: '8px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div style={{ marginBottom: '8px', color: textColor, fontSize: '14px' }}>
        <strong>Date and Time:</strong> {item.timestamp}
      </div>
      <div style={{ color: textColor, fontSize: '14px' }}>
        <p><strong>Heart Rate:</strong> {item.heartRate} bpm</p>
        <p><strong>Glucose Level:</strong> {item.glucose} mg/dL</p>
        <p><strong>Oxygen Saturation:</strong> {item.oxygen} %</p>
        <p><strong>Blood Pressure:</strong> {item.bloodPressure} mmHg</p>
      </div>
    </div>
  );

  useEffect(() => {
    setTimeout(() => setFirebaseConnecting(false), 2000); // Simulate connection 

    data.forEach((item, index) => {
      setTimeout(() => {
        setDisplayedData((prev) => {
          if (prev.find((p) => p.id === item.id)) {
            return prev;
          }
          return [...prev, item];
        });
        if (index === data.length - 1) {
          setLoading(false); // Finish simulation 
        }
      }, index * 500);
    });
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();
    const date = new Date().toLocaleDateString();
    doc.setFontSize(22);
    doc.text('Health Report', 14, 20);

    // Patient information
    doc.setFontSize(12);
    doc.text(`Generated on: ${date}`, 14, 30);
    doc.text('Patient: John Doe', 14, 36);
    doc.text('Patient ID: 123456', 14, 42);
    doc.text('Age: 34', 14, 48);
    doc.text('Gender: Male', 14, 54);

    // Spacer
    doc.line(14, 60, 200, 60);

    // Health data table
    const tableData = displayedData.map((item, index) => [
      index + 1,
      item.timestamp,
      `${item.heartRate} bpm`,
      `${item.glucose} mg/dL`,
      `${item.oxygen} %`,
      item.bloodPressure,
    ]);

    doc.autoTable({
      head: [['#', 'Date', 'Heart Rate', 'Glucose Level', 'Oxygen Saturation', 'Blood Pressure']],
      body: tableData,
      startY: 65,
      theme: 'striped',
      styles: { fontSize: 10, cellPadding: 2 },
      headStyles: { fillColor: [22, 160, 133] },
    });

    // Save PDF
    doc.save('health_report.pdf');
  };

  return (
    <div style={{ backgroundColor, minHeight: '100vh', padding: '16px' }}>
      <header style={{ marginBottom: '24px', textAlign: 'center' }}>
        <h1 style={{ color: textColor }}>Health Report</h1>
      </header>

      {firebaseConnecting ? (
        <div style={{ textAlign: 'center', color: textColor, marginBottom: '20px' }}>
          <FaSpinner
            size={30}
            style={{
              marginBottom: '10px',
              animation: 'spin 1s linear infinite',
              color: '#0073e6',
            }}
          />
          <p>Loading your data...</p>
        </div>
      ) : null}

      <button
        onClick={generatePDF}
        style={{
          backgroundColor: '#0073e6',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        Download Health Report (PDF)
      </button>

      <div>
        {loading
          ? Array(5)
              .fill()
              .map((_, i) => (
                <Skeleton
                  key={i}
                  height={140}
                  style={{ marginBottom: '16px', borderRadius: '8px' }}
                />
              ))
          : displayedData.map(renderHistoryItem)}
      </div>
    </div>
  );
};

export default HistoryScreen;

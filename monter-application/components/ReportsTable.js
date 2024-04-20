'use client';
import React from 'react';
import styles from './ReportsTable.module.css';

const ReportsTable = ({ reports }) => {
  // Function to handle file download
  const handleDownload = (fileName) => {
    // Implement file download logic here
    console.log(`Downloading ${fileName}`);
  };

  return (
      <div className={styles.pageContainer}>
        <div className={styles.reportsContainer}>
          <div className={styles.title}>Recently Generated Reports</div>
          <table className={styles.reportsTable}>
            <thead>
              <tr className={styles.tableHeader}>
                <th>Date</th>
                <th>Report Name</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={index}>
                  <td>
                    <div className={styles.dateTime}>
                      <div className={styles.date}>
                        {report.date}
                      </div>
                      <div className={styles.time}>
                        {report.time}
                      </div>
                    </div>
                  </td>
                  <td>{report.name}</td>
                  <td>
                    <button className={styles.downloadButton} onClick={() => handleDownload(report.fileName)}>
                      <img className={styles.downloadIcon} src={"/download-icon.png"} alt={report.fileName}>
                      </img>
                    </button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination component will go here */}
        </div>
      </div>
  );
};

export default ReportsTable;
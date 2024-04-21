'use client';
import React, {useState} from 'react';
import Paginator from "../components/Paginator";
import styles from './ReportsTable.module.css';

const ReportsTable = ({ reports }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reportsPerPage, setReportsPerPage] = useState(10);

  const totalPages = Math.ceil(reports.length / reportsPerPage);

  const startIndex = (currentPage - 1) * reportsPerPage;
  const currentReports = reports.slice(startIndex, startIndex + reportsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  // Function to handle file download
  const handleDownload = (fileName) => {
    // Implement file download logic here
    console.log(`Downloading ${fileName}`);
  };

  return (
      <div className={styles.pageContainer}>
        <div className={styles.reportsContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>Recently Generated Reports</div>
            <img src={"/filter-icon.png"} alt={"Filter Icon"} className={styles.filterIcon}></img>
            <img src={"/close-icon.png"} alt={"Close Icon"} className={styles.closeIcon}></img>
          </div>
          <table className={styles.reportsTable}>
            <thead>
              <tr className={styles.tableHeader}>
                <th>Date</th>
                <th>Report Name</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {currentReports.map((report, index) => (
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
          <Paginator
              currentPage={currentPage}
              onPageChange={handlePageChange}
              totalPages={totalPages}
              reportsPerPage={reportsPerPage}
              setReportsPerPage={setReportsPerPage}
          >
          </Paginator>
        </div>
      </div>
  );
};

export default ReportsTable;
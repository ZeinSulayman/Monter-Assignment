import React from 'react';
import ReportsTable from '../components/ReportsTable';

const sampleReports = [
  { date: '22.07.2021', time: '16:02 PM', name: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_31_2021.csv', fileName: 'report1.csv' },
  { date: '20.07.2021', time: '17:00 PM', name: 'RUR_L1_01_01_2021_31_03_2021.csv', fileName: 'report2.csv' },
  // ...more reports
];

const HomePage = () => {
  return (
    <div style={{margin: "0"}}>
      <ReportsTable reports={sampleReports} />
    </div>
  );
};

export default HomePage;
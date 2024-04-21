import React from 'react';
import ReportsTable from '../components/ReportsTable';

const sampleReports = [
  { date: '22.07.2021', time: '16:02 PM', name: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_31_2021.csv', fileName: 'report1.csv' },
  { date: '20.07.2021', time: '17:00 PM', name: 'RUR_L1_01_01_2021_31_03_2021.csv', fileName: 'report2.csv' },
  { date: '19.07.2021', time: '15:00 PM', name: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv', fileName: 'report3.csv'},
  { date: '18.07.2021', time: '14:30 PM', name: 'FINANCIAL_SUMMARY_01_01_2021_31_03_2021.csv', fileName: 'report4.csv' },
  { date: '17.07.2021', time: '13:45 PM', name: 'SALES_REPORT_2021_Q1.csv', fileName: 'report5.csv' },
  { date: '16.07.2021', time: '12:00 PM', name: 'HR_HIRING_STATISTICS_01_01_2021_30_06_2021.csv', fileName: 'report6.csv' },
  { date: '15.07.2021', time: '11:30 AM', name: 'IT_TICKET_SUMMARY_01_01_2021_30_06_2021.csv', fileName: 'report7.csv' },
  { date: '14.07.2021', time: '10:15 AM', name: 'CUSTOMER_FEEDBACK_2021_Q1.csv', fileName: 'report8.csv' },
  { date: '13.07.2021', time: '09:00 AM', name: 'MARKETING_CAMPAIGN_ANALYSIS_2021_Q1.csv', fileName: 'report9.csv' },
  { date: '12.07.2021', time: '08:30 AM', name: 'PRODUCTION_STATISTICS_01_01_2021_31_03_2021.csv', fileName: 'report10.csv' },
  { date: '11.07.2021', time: '07:45 AM', name: 'SUPPLY_CHAIN_ANALYSIS_01_01_2021_31_03_2021.csv', fileName: 'report11.csv' },
  { date: '10.07.2021', time: '06:30 AM', name: 'WAREHOUSE_INVENTORY_2021_Q1.csv', fileName: 'report12.csv' },
  { date: '09.07.2021', time: '05:15 AM', name: 'LOGISTICS_REPORT_2021_Q1.csv', fileName: 'report13.csv' },
  { date: '08.07.2021', time: '04:00 AM', name: 'TRANSPORTATION_COSTS_2021_Q1.csv', fileName: 'report14.csv' },
  { date: '07.07.2021', time: '03:30 AM', name: 'SALES_FORECAST_2021_Q2.csv', fileName: 'report15.csv' },
  { date: '06.07.2021', time: '02:15 AM', name: 'MARKET_RESEARCH_2021_Q1.csv', fileName: 'report16.csv' },
  { date: '05.07.2021', time: '01:00 AM', name: 'CUSTOMER_RESEARCH_2021_Q1.csv', fileName: 'report17.csv' },
  { date: '04.07.2021', time: '12:45 AM', name: 'PRODUCT_LAUNCH_PLANS_2021_Q2.csv', fileName: 'report18.csv' },
  { date: '03.07.2021', time: '11:30 PM', name: 'SUPPLIER_CONTRACTS_2021_Q1.csv', fileName: 'report19.csv' },
  { date: '02.07.2021', time: '10:15 PM', name: 'SERVICE_LEVEL_AGREEMENTS_2021_Q1.csv', fileName: 'report20.csv' },
  { date: '01.07.2021', time: '09:00 PM', name: 'IT_SYSTEM_MAINTENANCE_2021_Q1.csv', fileName: 'report21.csv' },
  { date: '30.06.2021', time: '07:45 PM', name: 'SECURITY_AUDIT_2021_Q1.csv', fileName: 'report22.csv' },
  { date: '29.06.2021', time: '06:30 PM', name: 'COMPLIANCE_REPORT_2021_Q1.csv', fileName: 'report23.csv' },
  { date: '28.06.2021', time: '05:15 PM', name: 'REGULATORY_AUDIT_2021_Q1.csv', fileName: 'report24.csv' },
  { date: '27.06.2021', time: '04:00 PM', name: 'IT_SYSTEM_UPGRADE_PLANS_2021_Q2.csv', fileName: 'report25.csv' },
  { date: '26.06.2021', time: '03:30 PM', name: 'NEW_TECHNOLOGY_RESEARCH_2021_Q1.csv', fileName: 'report26.csv' },
  { date: '25.06.2021', time: '02:15 PM', name: 'DATA_ANALYTICS_REPORT_2021_Q1.csv', fileName: 'report27.csv' },
  { date: '24.06.2021', time: '01:00 PM', name: 'PROJECT_MANAGEMENT_OVERVIEW_2021_Q1.csv', fileName: 'report28.csv' },
  { date: '23.06.2021', time: '12:45 PM', name: 'RESOURCE_ALLOCATION_2021_Q1.csv', fileName: 'report29.csv' },
  { date: '22.06.2021', time: '11:30 AM', name: 'WORKFORCE_PLANNING_2021_Q1.csv', fileName: 'report30.csv' },
  // ...more reports
];

const HomePage = () => {
  return (
    <div style={{margin: "0"}}>
      <ReportsTable reports={sampleReports} reportsPerPage={5} />
    </div>
  );
};

export default HomePage;
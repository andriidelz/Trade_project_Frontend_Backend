import React, { useState } from 'react';
import { fetchSalesReport, fetchProfitReport, fetchInventoryReport } from '../api/reports';

const ReportsPage = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reportType, setReportType] = useState('sales');
    const [reportData, setReportData] = useState(null);

    const handleGenerateReport = async () => {
        if (!startDate || !endDate) {
            alert('Please select start and end date.');
            return;
        }

        let data;
        if (reportType === 'sales') {
            data = await fetchSalesReport(startDate, endDate);
        } else if (reportType === 'profits') {
            data = await fetchProfitReport(startDate, endDate);
        } else if (reportType === 'inventory') {
            data = await fetchInventoryReport(startDate);
        }
        setReportData(data);
    };

    return (
        <div>
            <h1>Reports</h1>
            <div>
                <input
                    type="date"
                    placeholder="Start Date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="End Date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
                <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
                    <option value="sales">Sales</option>
                    <option value="profits">Profits</option>
                    <option value="inventory">Inventory</option>
                </select>
                <button onClick={handleGenerateReport}>Generate Report</button>
            </div>
            {reportData && (
                <div>
                    <h2>Report Data:</h2>
                    <pre>{JSON.stringify(reportData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default ReportsPage;

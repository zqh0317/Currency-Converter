import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import './index.scss';

const CurrencyTrend = ({ fromCurrency, toCurrency }) => {
  const [data, setData] = useState([]);
  const [timeRange, setTimeRange] = useState('1M'); 
  const [loading, setLoading] = useState(false);
  const [dataCache, setDataCache] = useState({}); 

  //Exchange rate fluctuation range
  const timeRanges = {
    '1W': 7,
    '1M': 30,
    '3M': 90,
    '6M': 180,
    '1Y': 365,
  };

  //Calculate start date and end date
  const calculateStartDate = (days) => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - days);
    return { start: startDate.toISOString().split('T')[0], end: endDate.toISOString().split('T')[0] };
  };

  //Request exchange rate fluctuation data and generate a trend chart
  useEffect(() => {
    //Cache trend chart data to avoid redundant data request and improve efficiency
    const fetchData = async () => {
      const cacheKey = `${fromCurrency}-${toCurrency}-${timeRange}`; 
      if (dataCache[cacheKey]) {
        setData(dataCache[cacheKey]); 
        return;
      }

      setLoading(true);
      const { start, end } = calculateStartDate(timeRanges[timeRange]);
      //API request
      try {
        const res = await fetch(
          `https://api.exchangerate.host/timeframe?access_key=${process.env.REACT_APP_API_KEY}&source=${fromCurrency}&currencies=${toCurrency}&start_date=${start}&end_date=${end}`
        );
        const result = await res.json();
        if (result.success) {
          const formattedData = Object.entries(result.quotes).map(([date, rate]) => ({
            date,
            value: Object.values(rate)[0],
          }));

          setData(formattedData);

          //Update the cache
          setDataCache((prevCache) => ({
            ...prevCache,
            [cacheKey]: formattedData,
          }));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fromCurrency, toCurrency, timeRange, dataCache]);

  return (
    <div className="trend-container">
      <h2>Exchange Rate Trend: {fromCurrency} to {toCurrency}</h2>

      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="chart-wrapper">
          {/* responsive design */}
          <ResponsiveContainer>
            {/* Using recharts to generate trend chart */}
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={['auto', 'auto']} />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
      {/* Time range selection buttons */}
      <div className="time-range-buttons">
        {Object.keys(timeRanges).map((range) => (
          <button
            key={range}
            onClick={() => setTimeRange(range)}
            className={timeRange === range ? 'active' : ''}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CurrencyTrend;

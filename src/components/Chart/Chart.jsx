import React, { useState, useEffect } from 'react'
import styles from './Chart.module.css'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'


const Chart = () => {
  const [dailyData, setDailyData] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData())
    }
    fetchAPI()
  })
  
  const lineChart = (
    dailyData.length
      ? (
        <Line 
          data={{
            labels: dailyData(({ date }) => date),
            datasets: [{
              data: dailyData(({ confirmed }) => confirmed),
              label: 'Infected',
              borderColor: '#3333ff',
              fill: true
            }, {
              data: dailyData(({ deaths }) => deaths),
              label: 'Infected',
              borderColor: 'red',
              backgroundColor: 'rgba(255,0,0,0.5)',
              fill: true
            }],
          }}
        />
      ) : null
  )

  return (
    <div className={styles.container}>
      { lineChart }
    </div>
  )
}
export default Chart
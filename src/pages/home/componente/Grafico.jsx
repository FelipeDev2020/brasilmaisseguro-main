import ApexCharts from 'react-apexcharts'
import styles from './Grafico.module.css';

function Grafico() {
  // Dados para o gráfico
  const option = {
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    yaxis: {
        tooltip: {
            enabled: true
        }
    }
  }

  const series = [
    { data: [10, 41, 35, 51, 49, 62, 69, 91, 148]}
  ]

  return (
    <div className={styles.grafic}>
        <ApexCharts 
        options={option}
        series={series}
        type='line'
        width={640}
        height={480}
    />
    </div>
  );
}

export default Grafico;
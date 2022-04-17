import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

//componentler
import ChartButton from "../components/common/ChartButton";
import { Line } from "react-chartjs-2";

//config
import { chartDays } from "../config/chartData";

//use context hookları
import { useOptionsContext } from "../hooks/useContextHooks/useOptionsContext";
import { useCryptoListContext } from "../hooks/useContextHooks/useCryptoListContext";

import { useState, useEffect } from "react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chartbar = ({ name, prices }) => {
  const { currency, darkMode } = useCryptoListContext();
  const { days, setDays } = useOptionsContext(); 
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({}); 

  useEffect(() => { // chart componentinin option ve data değerleri, component mount olduğunda değerler set ediliyor
    setChartData({
      labels:
        prices &&
        prices.map((price) => {
          let date = new Date(price[0]);
          let time =
            date.getHours() > 12
              ? `${date.getHours() - 12}: ${date.getMinutes()} PM`
              : `${date.getHours()}:${date.getMinutes()} AM`;
          return days === 1 ? time : date.toLocaleDateString();
        }),
      datasets: [
        {
          label: name,
          data: prices && prices.map((price) => price[1]),
          borderColor: darkMode ? '#ffc107' : '#ffc107',
          backgroundColor: '#ffc107',
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: `${name} ${days} days price in ${currency}`,
        },
      },
      elements: {
        point: {
          radius: 1,
        },
      },
    });
  }, [name, prices]);

  return (
    <div className="w-full h-full">
      {name && (
        <>
          <Line data={chartData} options={chartOptions} />
          <div className="flex gap-2 md:gap-8 mt-3 justify-center">
            {chartDays.map((day, index) => (
              <ChartButton
                onClick={() => {
                  setDays(day.value);
                }}
                key={index}
                selected={days === day.value}
              >
                {day.label}
              </ChartButton>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Chartbar;

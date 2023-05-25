import { View, Text } from 'react-native'
import {
  LineChart,
} from "react-native-chart-kit";
import { Dimensions} from "react-native";
import React from 'react'
import data from './ApiCall.mjs'
import { useEffect } from 'react';


const Charts = () => {
  // data();
  // const chartData = () =>{
  //   return data();
  // }

  // console.log(chartData());

  const chartConfig = {
    backgroundGradientFrom: "#5db4ef",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#45aaed",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(54, 162, 235, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  return (
    <View>
     <Text></Text>
  <LineChart
    data={{
      labels: ["Account", "Admin", "Blood Bank", "ENT", "Pharmacy", "Radiology"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#36a2eb",
      backgroundGradientFrom: "#5db4ef",
      backgroundGradientTo: "#8bcaf4",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
  />
    </View>
  )
}

export default Charts
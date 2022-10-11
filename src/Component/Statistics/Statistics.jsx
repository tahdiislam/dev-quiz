import React, { useContext } from 'react';
import { quizContext } from '../Layout/Main';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const Statistics = () => {
    const {quiz} = useContext(quizContext)
    console.log(quiz);
    //dummy data 
    const data = [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 2400
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100
        }
    ];
    return (
        <div>
            <h1 className="text-4xl text font-semibold my-4">Quiz Statistics</h1>
            <div>
                <LineChart width={500} height={300} data={data} margin={{}}>
                    <CartesianGrid strokeDasharray='3, 3'/>
                    <XAxis dataKey={name}/>
                    <YAxis/>
                    <Tooltip/>
                    <Line type="monotone" dataKey="pv" stroke='#82ca9d' activeDot={{r:10}}/>
                </LineChart>            
            </div>
        </div>
    );
};

export default Statistics;
import React, { useContext } from 'react';
import { quizContext } from '../Layout/Main';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const Statistics = () => {
    const {quiz: quizData} = useContext(quizContext)
    console.log(quizData.data);
    const quiz = quizData.data;
    return (
        <div>
            <h1 className="text-4xl text font-semibold my-4 underline text-indigo-600">Quiz Statistics</h1>
            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <AreaChart
                    data={quiz}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend/>
                    <Area type="monotone" dataKey="total" stroke="#3F00FF" fill="#3F00FF" activeDot={{r:11}}/>
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;
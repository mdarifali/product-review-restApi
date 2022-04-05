import React from 'react';
import './Dashboard.css';
import { 
        BarChart, CartesianGrid, YAxis, Tooltip, XAxis, Legend, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
        } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-6 ">
                    <BarChart width={500} height={250} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#4700D8" />
                        <Bar dataKey="sell" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </div>
                <div className="col-md-6">
                    <RadarChart  width={500} height={250} outerRadius={90} data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="month" />
                        <PolarRadiusAxis angle={30} domain={[0, 10000]} />
                        <Radar name="investment" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.8} />
                        <Radar name="sell" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        <Radar name="revenue" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                        <Legend />
                    </RadarChart>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-6 ">
                    <BarChart width={500} height={250} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#4700D8" />
                        <Bar dataKey="sell" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </div>
                <div className="col-md-6">
                    <RadarChart  width={500} height={250} outerRadius={90} data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="month" />
                        <PolarRadiusAxis angle={30} domain={[0, 10000]} />
                        <Radar name="investment" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.8} />
                        <Radar name="sell" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        <Radar name="revenue" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                        <Legend />
                    </RadarChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
import React from 'react'
import { Card } from 'react-bootstrap'
import { ScatterChart, 
  Scatter,
  BarChart, Bar,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
 
} from 'recharts';


export default function Chart() {
  const data02 = [
    { name: "Jan", y: 50 },
    { name: "Feb", y: 40 },
    { name: "Mar", y: 100 },
    { name: "Apr", y: 90 },
    { name: "May", y: 160 },
    { name: "Jun", y: 130 },
  ];
  const data03 = [
    { name: "Jan", y: 600 },
    { name: "Feb", y: 700},
    { name: "Mar", y: 800 },
    { name: "Apr", y: 700 },
    { name: "May", y: 1400 },
    { name: "Jun", y: 1850 },
  ];

  return (
    <div className='flex gap-2 mt-2'>
      <Card className=' bg-white w-[48%] ml-3'>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart
         data={data02}
          margin={{
            top: 20,
            right: 20,
            bottom: 10,
            left: 5,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="name" />
           <YAxis type="number" dataKey="y" />
          <ZAxis type="number" range={[100]} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="Add clicks"  fill="#82ca9d" line shape="diamond" />
        </ScatterChart>
      </ResponsiveContainer>
      </Card>
    
        <Card className=' bg-white w-[48%] mr-2'>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={600}
          height={300}
          data= {data03}

          margin={{
            top: 10,
            right: 30,
            left: 3,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" dataKey="y"  />
          <Tooltip />
          <Legend />
          <Bar name = "Add Reach" dataKey="y" barSize={20} stackId="a" fill="#8884d8" />
         
        </BarChart>
      </ResponsiveContainer>
        </Card>
      </div>
      
  )
}

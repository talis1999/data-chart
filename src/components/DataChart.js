import { useContext } from "react";
import { DataContext } from "./DataProvider.js";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Brush,
} from "recharts";
import moment from "moment";

const xAxisTickFormatter = (timestamp_measured) => {
  return moment(timestamp_measured).format("ll").slice(0, 6);
};

const DataChart = () => {
  const { data } = useContext(DataContext);
  return (
    <ResponsiveContainer width="100%" height={600}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="Close" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Brush tickFormatter={xAxisTickFormatter} dataKey="Date" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DataChart;

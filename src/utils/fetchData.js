import axios from "axios";

const fetchData = async (period, precision) => {
  const url = `https://www.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=${period}&Precision=${precision}&StartTime=8/28/2020%2016:0&EndTime=9/4/2020%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`;
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const res = await axios(url, { headers });
  const data = res.data;
  return data;
};

export const fetchAll = async () => {
  try {
    return await Promise.all([
      fetchData(1, "Minutes"),
      fetchData(5, "Minutes"),
      fetchData(1, "Hours"),
      fetchData(168, "Hours"),
    ]);
  } catch (error) {
    return { error: "failed to fetch data" };
  }
};



import { currentUser } from "@/lib/auth";
import db  from "@/lib/db";

interface GraphData {
  name: string;
  total: number;
}

export const getGraphData = async (): Promise<GraphData[]> => {
  const freelance = await currentUser();
  const data = await db.customer.findMany({
    where: {
      freelanceId: freelance.id,
    },
  });

  const monthlyData: { [key: number]: number } = {};

  // // Grouping the data by month and summing the revenue
  for (const dataUser of data) {
    const month = dataUser.createdAt.getMonth(); // 0 for Jan, 1 for Feb, ...
    const jumlahData = 1;

    // Adding the revenue for this order to the respective month
    monthlyData[month] = (monthlyData[month] || 0) + jumlahData;
  }

  // Converting the grouped data into the format expected by the graph
  const graphData: GraphData[] = [
    { name: "Jan", total: 0 },
    { name: "Feb", total: 0 },
    { name: "Mar", total: 0 },
    { name: "Apr", total: 0 },
    { name: "May", total: 0 },
    { name: "Jun", total: 0 },
    { name: "Jul", total: 0 },
    { name: "Aug", total: 0 },
    { name: "Sep", total: 0 },
    { name: "Oct", total: 0 },
    { name: "Nov", total: 0 },
    { name: "Dec", total: 0 },
  ];

  // Filling in the revenue data
  for (const month in monthlyData) {
    graphData[parseInt(month)].total = monthlyData[parseInt(month)];
  }

  return graphData;
};

export const getGraphDataAdmin = async (): Promise<GraphData[]> => {
  const data = await db.customer.findMany({});

  const monthlyData: { [key: number]: number } = {};

  // // Grouping the data by month and summing the revenue
  for (const dataUser of data) {
    const month = dataUser.createdAt.getMonth(); // 0 for Jan, 1 for Feb, ...
    const jumlahData = 1;

    // Adding the revenue for this order to the respective month
    monthlyData[month] = (monthlyData[month] || 0) + jumlahData;
  }

  // Converting the grouped data into the format expected by the graph
  const graphData: GraphData[] = [
    { name: "Jan", total: 0 },
    { name: "Feb", total: 0 },
    { name: "Mar", total: 0 },
    { name: "Apr", total: 0 },
    { name: "May", total: 0 },
    { name: "Jun", total: 0 },
    { name: "Jul", total: 0 },
    { name: "Aug", total: 0 },
    { name: "Sep", total: 0 },
    { name: "Oct", total: 0 },
    { name: "Nov", total: 0 },
    { name: "Dec", total: 0 },
  ];

  // Filling in the revenue data
  for (const month in monthlyData) {
    graphData[parseInt(month)].total = monthlyData[parseInt(month)];
  }

  return graphData;
};

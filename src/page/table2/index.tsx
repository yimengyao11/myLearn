import { useEffect, useState } from "react";
import { service } from "../../service";
import { Table } from "antd";
import type { TableProps } from "antd";
interface DataType {
  key: string;
  CityName: string;
  Date: number;
  hightemperature: string;
  lowtemperature: string;
}
const columns: TableProps<DataType>["columns"] = [
  {
    title: "CityName",
    dataIndex: "CityName",
    key: "CityName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Date",
    dataIndex: "Date",
    key: "Date",
  },
  {
    title: "hightemperature",
    dataIndex: "hightemperature",
    key: "hightemperature",
  },
  {
    title: "lowtemperature",
    key: "lowtemperature",
    dataIndex: "lowtemperature",
    // render: (_, { tags }) => (
    //   <>
    //     {tags.map((tag) => {
    //       let color = tag.length > 5 ? "geekblue" : "green";
    //       if (tag === "loser") {
    //         color = "volcano";
    //       }
    //       return (
    //         <Tag color={color} key={tag}>
    //           {tag.toUpperCase()}
    //         </Tag>
    //       );
    //     })}
    //   </>
    // ),
  },
  // {
  //   title: "Action",
  //   key: "action",
  //   render: (_, record) => (
  //     <Space size="middle">
  //       <a>Invite {record.name}</a>
  //       <a>Delete</a>
  //     </Space>
  //   ),
  // },
];
const data: DataType[] = [
  {
    key: "1",
    CityName: "John Brown",
    Date: 32,
    hightemperature: "New York No. 1 Lake Park",
    lowtemperature: ["nice", "developer"],
  },
  {
    key: "2",
    CityName: "John ",
    Date: 32,
    hightemperature: "New York No. 1 Lake Park",
    lowtemperature: ["nice", "developer"],
  },
  {
    key: "3",
    CityName: "rown",
    Date: 32,
    hightemperature: "New York No. 1 Lake Park",
    lowtemperature: ["nice", "developer"],
  },
];
// 静态table页面 ，从antdegin 那里去复制需要的组件，怎么知道需要那些组件呢？可以看....from ‘antd'
export const Table2 = () => {
  const [list, setList] = useState<any[]>([]);
  // 把数据存到states里面，方便后面数据展示在ui上，因为states 运用后，ui会重新渲染，那存在states的数据跟着渲染

  useEffect(() => {
    //api service

    getWeatherList();
  }, []);
  // 参数 空数组就是 只渲染一次，再复习useeffect
  const getWeatherList = async () => {
    const res = await service.Weather.getWeather();
    // 变量res 是获取到的后端数据，getWeather（）是获取数据的方法
    const newres = res.map((item, i) => {
      // map循环 有三个参数，第一个参数 是循环项的值，第二个参数是循环项的索引，第三个参数是原数组，基本不写
      return {
        key: i,
        CityName: item.result.city_name,
        // 控制变量 找到 item里面的字段，
        Date: item.result.update_time,
        hightemperature: item.result.dat_high_temperature,
        lowtemperature: item.result.dat_low_temperature,
      };
    });
    setList(newres);
  };
  return (
    <div>
      <Table columns={columns} dataSource={list} />;
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { Switch, Table } from "antd";
import type { TableColumnsType } from "antd";
import { service } from "../../service";
import Item from "antd/es/list/Item";
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}
export const Food: React.FC = () => {
  function declick() {
    alert("确认删除嘛");
  }
  function editclick() {
    alert("列表详情");
  }
  useEffect(() => {
    getFoodList();
  }, []);
  const [list, setlist] = useState<any[]>([]);
  const getFoodList = async () => {
    const res = await service.Food.getFoodList(1, 10);
    // getfoolist 是 获取后端数据
    // VScode编辑器 查找声明（转到源定义），查找引用（转到引用），做法：选中 右键，转源定义或声明
    console.log(res);
    // 明确好后端数据格式，明确好处理的数据在哪个字段里面，字段里面还有字段
    const newres = res.data.map((item, i) => {
      // 如果可以直接用map，那么循环的一定是数组，
      // js 不能用map，浏览器会报错，map is undefined。
      // .map 是原型方法
      console.log(item);
      // 看map循环好不好用，打印函数，就是打印函数里面的东西。
    });
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "Full Name",
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "Age",
      width: 100,
      dataIndex: "age",
      key: "age",
      fixed: "left",
    },
    {
      title: "Column 1",
      dataIndex: "address",
      key: "1",
      width: 150,
    },
    {
      title: "Column 2",
      dataIndex: "address",
      key: "2",
      width: 150,
    },
    {
      title: "Column 3",
      dataIndex: "address",
      key: "3",
      width: 150,
    },
    {
      title: "Column 4",
      dataIndex: "address",
      key: "4",
      width: 150,
    },
    {
      title: "Column 5",
      dataIndex: "address",
      key: "5",
      width: 150,
    },
    {
      title: "Column 6",
      dataIndex: "address",
      key: "6",
      width: 150,
    },
    {
      title: "Column 7",
      dataIndex: "address",
      key: "7",
      width: 150,
    },
    { title: "Column 8", dataIndex: "address", key: "8" },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => (
        <div style={{ display: "flex" }}>
          <div style={{ color: "red", marginRight: "10px" }} onClick={declick}>
            Delete
          </div>
          <div style={{ color: "blue" }} onClick={editclick}>
            edit
          </div>
        </div>
      ),
    },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }
  const [fixedTop, setFixedTop] = useState(false);
  return (
    <Table
      columns={columns}
      dataSource={data}
      scroll={{ x: 1500 }}
      summary={() => (
        <Table.Summary fixed={fixedTop ? "top" : "bottom"}>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={2}>
              <Switch
                checkedChildren="Fixed Top"
                unCheckedChildren="Fixed Top"
                checked={fixedTop}
                onChange={() => {
                  setFixedTop(!fixedTop);
                }}
              />
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} colSpan={8}>
              Scroll Context
            </Table.Summary.Cell>
            <Table.Summary.Cell index={10}>Fix Right</Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
      // antd site header height
    />
  );
};

import React, { useEffect, useState } from "react";
import { Switch, Table } from "antd";
import type { TableColumnsType } from "antd";
import { service } from "../../service";
import Item from "antd/es/list/Item";
import { Await } from "react-router-dom";
import { Index } from "../index";
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}
export const Food: React.FC = () => {
  // 问题2 async 要写在await的上层
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
    // async 要写在await的上层
    // console.log(res);
    const newres = res.data.map((item, i) => {
      return {
        key: i,
        foodid: item.id,
        foodname: item.name,
        foodcategory: item.category,
        foodprice: item.price,
      };
      // 如果可以直接用map，那么循环的一定是数组，
      // js 不能用map，浏览器会报错，map is undefined。
      // .map 是原型方法
      // console.log(item);
      // 看map循环好不好用，打印函数，就是打印函数里面的东西。
    });
    setlist(newres);
    // return <Table columns={columns} dataSource={list}></Table>;
  };
  // 明确好后端数据格式，明确好处理的数据在哪个字段里面，字段里面还有字段

  const columns: TableColumnsType<DataType> = [
    {
      title: "foodid",
      width: 200,
      dataIndex: "foodid",
      key: "foodid",
      fixed: "left",
    },
    {
      title: " foodname",
      width: 200,
      dataIndex: "foodname",
      key: " foodname",
      fixed: "left",
    },
    {
      title: "foodcategory",
      dataIndex: "foodcategory",
      key: "foodcategory",
      width: 200,
    },
    {
      title: "foodprice",
      dataIndex: "foodprice",
      key: "foodprice",
      width: 200,

      // },
      // {
      //   title: "Column 3",
      //   dataIndex: "address",
      //   key: "3",
      //   width: 150,
      // },
      // {
      //   title: "Column 4",
      //   dataIndex: "address",
      //   key: "4",
      //   width: 150,
      // },
      // {
      //   title: "Column 5",
      //   dataIndex: "address",
      //   key: "5",
      //   width: 150,
      // },
      // {
      //   title: "Column 6",
      //   dataIndex: "address",
      //   key: "6",
      //   width: 150,
      // },
      // {
      //   title: "Column 7",
      //   dataIndex: "address",
      //   key: "7",
      //   width: 150,
      // },
      // { title: "Column 8", dataIndex: "address", key: "8" },
      // {
      //   title: "Action",
      //   key: "operation",
      //   fixed: "right",
      //   width: 100,
      render: (text, record, index) => {
        const deleteFood = async () => {
          const res1 = await service.Food.deleteFood(record.foodid);
          // console.log(res1);
        };
        // 问题1 找不到...原因是没有搞清楚上下级的关系；下级可以获取到上级的东西！但上级不能获取下级的东西！
        async function declick() {
          alert("确认删除嘛");
          await deleteFood();
          getFoodList();
        }
        return (
          <div style={{ display: "flex" }}>
            <div
              style={{ color: "red", marginRight: "10px" }}
              onClick={declick}
            >
              Delete
            </div>
            <div style={{ color: "blue" }} onClick={editclick}>
              edit
            </div>
          </div>
        );
      },
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      foodid: "John Brown",
      foodname: 32,
      foodcategory: "New York No. 1 Lake Park",
      foodprice: ["nice", "developer"],
    },
    {
      key: "2",
      foodid: "John Brown",
      foodname: 32,
      foodcategory: "New York No. 1 Lake Park",
      foodprice: ["nice", "developer"],
    },
    {
      key: "3",
      foodid: "John Brown",
      foodname: 32,
      foodcategory: "New York No. 1 Lake Park",
      foodprice: ["nice", "developer"],
    },
    {
      key: "4",
      foodid: "John Brown",
      foodname: 32,
      foodcategory: "New York No. 1 Lake Park",
      foodprice: ["nice", "developer"],
    },
  ];
  // for (let i = 0; i < 100; i++) {
  //   data.push({
  //     key: i,
  //     name: `Edward ${i}`,
  //     age: 32,
  //     address: `London Park no. ${i}`,
  //   });
  // }
  const [fixedTop, setFixedTop] = useState(false);
  return (
    <Table
      columns={columns}
      dataSource={list}
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

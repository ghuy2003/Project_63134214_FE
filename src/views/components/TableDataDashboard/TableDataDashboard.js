import React from "react";
import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "4",
    name: "Mary White",
    age: 28,
    address: "Paris No. 1 Lake Park",
    tags: ["artist"],
  },
  {
    key: "5",
    name: "Emily Smith",
    age: 35,
    address: "Berlin No. 1 Lake Park",
    tags: ["writer"],
  },
  {
    key: "6",
    name: "Sophia Johnson",
    age: 30,
    address: "Tokyo No. 1 Lake Park",
    tags: ["chef"],
  },
  {
    key: "7",
    name: "Emma Davis",
    age: 45,
    address: "Rome No. 1 Lake Park",
    tags: ["manager"],
  },
  {
    key: "8",
    name: "Olivia Martinez",
    age: 38,
    address: "Madrid No. 1 Lake Park",
    tags: ["athlete"],
  },
  {
    key: "9",
    name: "Liam Wilson",
    age: 29,
    address: "Seoul No. 1 Lake Park",
    tags: ["musician"],
  },
  {
    key: "10",
    name: "Noah Taylor",
    age: 31,
    address: "Moscow No. 1 Lake Park",
    tags: ["scientist"],
  },
  {
    key: "11",
    name: "William Anderson",
    age: 40,
    address: "Toronto No. 1 Lake Park",
    tags: ["doctor"],
  },
  {
    key: "12",
    name: "James Thomas",
    age: 36,
    address: "Los Angeles No. 1 Lake Park",
    tags: ["entrepreneur"],
  },
  {
    key: "13",
    name: "Benjamin Harris",
    age: 33,
    address: "Chicago No. 1 Lake Park",
    tags: ["pilot"],
  },
];
const TableDataDashboard = () => {
  // const [dataProduct, setDataProduct] = useState([]);

  // const { getAll } = useProduct();

  // const fetchProduct = async () => {
  //   try {
  //     const { success, data } = await getAll({
  //       pageIndex: 1,
  //       pageSize: 30,
  //       ProductName: "",
  //     });
  //     if (success && data.status !== 'Error') {
  //       setDataProduct(data.data.items);
  //     } else {
  //       toast.error(data.message);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching product data:", error);
  //     toast.error("Error fetching product data");
  //   }
  // };

  // useEffect(() => {
  //   fetchProduct();
  // }, []);
  return (
    <>
      <Table columns={columns} dataSource={data} />;
    </>
  );
};

export default TableDataDashboard;

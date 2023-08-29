import React, { useState } from "react";
import { Space, Table } from "antd";
import { Trash, ExportSquare } from "iconsax-react";
import { TableDiv } from "./TableComponent.Styles";

const { Column } = Table;

const data = [
  {
    key: "1",
    customerName: "John Smith",
    email: "john@example.com",
    tags: ["Active"],
    createdDate: "2023-08-01",
  },
  {
    key: "2",
    customerName: "Emily Johnson",
    email: "emily@example.com",
    tags: ["Active"],
    createdDate: "2023-07-15",
  },
  {
    key: "3",
    customerName: "Michael Williams",
    email: "michael@example.com",
    tags: ["Active"],
    createdDate: "2023-06-20",
  },
  {
    key: "4",
    customerName: "Emma Davis",
    email: "emma@example.com",
    tags: ["Active"],
    createdDate: "2023-08-10",
  },
  {
    key: "5",
    customerName: "Daniel Miller",
    email: "daniel@example.com",
    tags: ["Active"],
    createdDate: "2023-07-05",
  },
  {
    key: "6",
    customerName: "Michael Williams",
    email: "michael@example.com",
    tags: ["Active"],
    createdDate: "2023-06-20",
  },
  {
    key: "7",
    customerName: "Emma Davis",
    email: "emma@example.com",
    tags: ["Active"],
    createdDate: "2023-08-10",
  },
  {
    key: "8",
    customerName: "Daniel Miller",
    email: "daniel@example.com",
    tags: ["Active"],
    createdDate: "2023-07-05",
  },
  {
    key: "9",
    customerName: "Daniel Miller",
    email: "daniel@example.com",
    tags: ["Active"],
    createdDate: "2023-07-05",
  },
  {
    key: "10",
    customerName: "Daniel Miller",
    email: "daniel@example.com",
    tags: ["Active"],
    createdDate: "2023-07-05",
  },
];

const App = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const onSelectChange = (selectedKeys) => {
    setSelectedRowKeys(selectedKeys);
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
    setSelectedRowKeys([]);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <TableDiv>
      <Table
        dataSource={data.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        )}
        rowSelection={rowSelection}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: data.length,
          onChange: onPageChange,
        }}
      >
        <Column
          title="Customer Name"
          dataIndex="customerName"
          key="customerName"
        />
        <Column title="Email" dataIndex="email" key="email" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => (
                <p className="table-tag">{tag}</p>
              ))}
            </>
          )}
        />
        <Column
          title="Created Date"
          dataIndex="createdDate"
          key="createdDate"
        />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <a href="/">
                <ExportSquare size="20px" color="#292D32" />
              </a>
              <a href="/">
                <Trash size="20px" color="#292D32" />
              </a>
            </Space>
          )}
        />
      </Table>
    </TableDiv>
  );
};

export default App;

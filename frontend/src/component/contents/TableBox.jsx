import React from 'react';
import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';
const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    company: '야나두',
    division: '개발팀',
    name: '유아영',
    rank: 'sp3',
    tags: ['good', 'developer'],
  },
  {
    key: '2',
    company: '야나두',
    division: '개발팀',
    name: '김현수',
    rank: 'mp1',
    tags: ['nice', 'developer'],
  },
  {
    key: '3',
    company: '야나두',
    division: '개발팀',
    name: '최주아',
    rank: 'mp3',
    tags: ['great', 'developer'],
  },
  {
    key: '4',
    company: '야나두',
    division: '개발팀',
    name: '이지희',
    rank: 'sp2',
    tags: ['excellent', 'developer'],
  },
];

const TableBox = () => {
  return (
    <>
      <Table dataSource={data}>
        <ColumnGroup title='Company'>
          <Column title='Company' dataIndex='company' key='company' />
          <Column title='Division' dataIndex='division' key='division' />
        </ColumnGroup>
        <Column title='Name' dataIndex='name' key='name' />
        <Column title='Rank' dataIndex='rank' key='rank' />
        <Column
          title='Tags'
          dataIndex='tags'
          key='tags'
          render={(tags) => (
            <>
              {tags.map((tag) => (
                <Tag color='blue' key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title='Action'
          key='action'
          render={(text, record) => (
            <Space size='middle'>
              <a>Invite {record.lastName}</a>
              <a>Delete</a>
            </Space>
          )}
        />
      </Table>
    </>
  );
};

export default TableBox;

import React, {useState} from 'react'
import PageWrapper from '../PageWrapper'
import { connect } from 'react-redux';
import { Table, Tag } from 'antd';
import { createStructuredSelector } from 'reselect';
import { newGetData, newGetElectedItem } from '../../store/selectors';
import { filteringArray } from './utils';
import HomeInput from './Input/HomeInput';
import style from './main.module.css'

const data = [
    {
      title: 'Букв.код',
      dataIndex: 'CharCode',
      key: 'CharCode'
    },
    {
      title: 'Числ.код',
      dataIndex: 'NumCode',
      key: 'NumCode'
    },
    {
      title: 'Номинал',
      dataIndex: 'Nominal',
      key: 'Nominal'
    },
    {
      title: 'Страна',
      dataIndex: 'Name',
      key: 'Name',
      width: '40%'
    },
    {
      title: 'Разница',
      dataIndex: 'Difference',
      key: 'Difference',
      render: Difference => (
        <span>
          <Tag color={Difference > 0 ? 'green' : 'red'} key={Difference}>
            {Difference}
          </Tag>
        </span>
      )
    },
    {
      title: 'Курс',
      dataIndex: 'Value',
      key: 'Value'
    }
  ];

const MainPage = ({ newGetData }) => {
    const [table, setTable] = useState([]);

    const list = filteringArray(newGetData.Valute);
    const sendValueFromInput = val =>
        setTable(list.filter(i => i.Name.toLowerCase().includes(val)));  
    return (
           <PageWrapper>
              <div className={style['container']}>
                <HomeInput sendValueFromInput={sendValueFromInput} />
                  <Table
                    columns={data}
                    pagination={false}
                    dataSource={table.length > 0 ? table : list}
                    rowKey={rec=> rec.ID}
                  />
              </div>
           </PageWrapper>
    )
}

const mapStateToProps = createStructuredSelector({
    newGetData,
    newGetElectedItem
  });
  
export default connect(mapStateToProps)(React.memo(MainPage));

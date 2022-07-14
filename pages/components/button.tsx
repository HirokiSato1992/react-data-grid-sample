import { useState } from 'react'

import { Table, Column, HeaderCell, Cell } from 'rsuite-table'
import 'rsuite/dist/rsuite.min.css'

import Link from 'next/link'
import { demoData, demoDataType } from '../../shared/tableData'

const Button = () => {
  // 選択データを表示する用の state
  const [pressedButtonData, setPressedButtonData] = useState<demoDataType | null>(null)

  return (
    <div style={{margin: '50px'}}>
      <h1 style={{marginBottom: '10px'}}>ボタン</h1>
      <Link href={"/"}>トップに戻る</Link>

      <div style={{margin: '20px'}}>
        <h4>選択したデータ</h4>
        <div>ID: {pressedButtonData?.id}</div>
        <div>性: {pressedButtonData?.firstName}</div>
        <div>名: {pressedButtonData?.lastName}</div>
        <div>メール: {pressedButtonData?.email}</div>
      </div>

      <Table
        height={500}
        data={demoData}
      >
        <Column width={70} align="center" fixed>
          <HeaderCell>
            <div>操作</div>
          </HeaderCell>
          <Cell>
            {(rowData) => {
              return (
                <button
                  onClick={() => {
                    setPressedButtonData(rowData as demoDataType)
                  }}
                >
                  選択
                </button>
              )
            }}
          </Cell>
        </Column>
        <Column width={70} align="center" fixed>
          <HeaderCell>ユーザID</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={100}>
          <HeaderCell>性</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column width={100}>
          <HeaderCell>名</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column width={300}>
          <HeaderCell>メール</HeaderCell>
          <Cell dataKey="email" />
        </Column>
      </Table>
    </div>
  )
}

export default Button
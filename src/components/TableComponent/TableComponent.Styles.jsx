import { styled } from "styled-components";



export const TableDiv = styled.div`
    .ant-table-wrapper {
        table {
            border: 1px solid rgba(194, 192, 255, 0.2);
            border-radius: 10px;
            .ant-table-cell {
                border-color: rgba(194, 192, 255, 0.2);
            }
            th.ant-table-cell  {
                background-color: #fff;
                font-weight: 500;
            }
            .ant-table-selection-column {
                padding-inline: 32px 24px;
            }
        }
    }
    .ant-pagination-item-active {
        border: none;
        background-color: #8C69FF;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
            color: #fff;
            font-weight: 500;
        }
    }
    .table-tag {
        color: #32BBFF;
    }
`;
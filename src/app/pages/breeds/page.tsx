"use client";

import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { dogData } from "@/modules/sections/dogs/items";

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const StyledTr = styled.tr`
  background-color: ${(props) => props.theme.tableBackground};
  transition: 1s;
`;



const TableText = styled.td`
  display: flex;
  justify-content: center;
  padding: 8px;

  font-size: 48px;
  font-family: "Krona One", sans-serif;

  border: ${(props) => props.theme.tableBorder};
  color: ${(props) => props.theme.textColor};

  &:hover {
    cursor: pointer;
  }
`;

const ForTable = styled.div`
padding-top: 92px;
`

const Table = () => {
  const [containers, setContainers] = useState(dogData);
  return (
    <StyledTable>
      <tbody>
        {containers.map((container, index) => (
          <StyledTr key={index}>
            <Link href={container.link} legacyBehavior>
              <TableText>{container.text}</TableText>
            </Link>
          </StyledTr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default function NonePage() {
  return (
    <div>
      <ForTable>
      <Table />
      </ForTable>
    </div>
  );
}

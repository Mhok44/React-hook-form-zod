// src/components/MembersGroup.tsx

import React from "react";

// กำหนด Type สำหรับ Member
export type Member = {
  nameTH: string;
  nameEN: string;
  heightCm: number;
  age: number;
  imageUrl?: string;
  group: "BUS" | "Saja";
};

// ข้อมูล Members ทั้งหมด
export const ALL_MEMBERS: Member[] = [
  // ... (ใส่ข้อมูลสมาชิกทั้งหมดที่นี่)
];

// Props สำหรับคอมโพเนนต์ MembersGroup
type Props = {
  members: Member[];
  group: "BUS" | "Saja";
};

const MembersGroup: React.FC<Props> = ({ members, group }) => {
  const groupColor = group === "BUS" ? "green" : "blue";

  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "20px" }}>
      {members
        .filter(member => member.group === group)
        .map(member => (
          <div
            key={member.nameEN}
            style={{
              color: groupColor,
              border: `2px solid ${groupColor}`,
              margin: "10px",
              padding: "10px",
              textAlign: "center",
              width: "120px",
              borderRadius: "8px",
              boxShadow: "2px 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            {member.imageUrl && (
              <img
                src={member.imageUrl}
                alt={member.nameEN}
                style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "4px" }}
              />
            )}
            <p style={{ margin: "5px 0 0 0", fontWeight: "bold" }}>{member.nameTH}</p>
            <p style={{ margin: "0" }}>({member.nameEN})</p>
          </div>
        ))}
    </div>
  );
};

export default MembersGroup;
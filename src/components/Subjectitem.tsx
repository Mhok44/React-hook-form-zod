//ปุ่มคำนวณ GPA และแสดงผลค่า GPA จากการคำนวน
import React from 'react';

type SubjectItemProps = {
    name: string;
    grade: string;
    onRemove: () => void;
};

const SubjectItem: React.FC<SubjectItemProps> = ({ name, grade, onRemove }) => {
    return (
        <li style={{ color: grade === "F" ? "red" : "black" }}>
            {name} - {grade}
            <button onClick={onRemove}>ลบ</button>
        </li>
    );
};

export default SubjectItem;

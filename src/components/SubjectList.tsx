// SubjectList.tsx
import { useState } from "react";

function SubjectList() {
  const [subject, setSubject] = useState<string>("");        
  const [grade, setGrade] = useState<string>("");            
  const [subjectList, setSubjectList] = useState<{ name: string; grade: string }[]>([]);
  const [menuOpen, setMenuOpen] = useState(false); // state คุมเมนู

  const gradeOptions = ["A", "B+", "B", "C+", "C", "D+", "D", "F", "W"];

  const handleAddSubject = () => {
    if (subject && grade) {
      setSubjectList([...subjectList, { name: subject, grade }]);
      setSubject("");
      setGrade("");
    }
  };

  const handleRemoveSubject = (index: number) => {
    const newSubjectList = subjectList.filter((_, i) => i !== index);
    setSubjectList(newSubjectList);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="รายชื่อวิชา"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      {/* ปุ่มแฮมเบอร์เกอร์ */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          marginLeft: "8px",
          padding: "6px 10px",
          fontSize: "18px",
          cursor: "pointer"
        }}
      >
        ☰ เลือกเกรด
      </button>

      {/* เมนูที่โผล่มาเมื่อกด */}
      {menuOpen && (
        <div
          style={{
            marginTop: "8px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            padding: "8px",
            display: "inline-block",
            background: "#f9f9f9"
          }}
        >
          {gradeOptions.map((g) => (
            <button
              key={g}
              onClick={() => {
                setGrade(g);
                setMenuOpen(false); // ปิดเมนูหลังเลือก
              }}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                backgroundColor: grade === g ? "#007bff" : "white",
                color: grade === g ? "white" : "black",
                border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "6px",
                marginBottom: "4px",
                cursor: "pointer"
              }}
            >
              {g}
            </button>
          ))}
        </div>
      )}

      <button onClick={handleAddSubject} style={{ marginLeft: "10px" }}>
        เพิ่มรายวิชา
      </button>

      <ul>
        {subjectList.map((item, index) => (
          <li
            key={index}
            style={{ color: item.grade === "F" ? "red" : "black" }}
          >
            {item.name} - {item.grade}
            <button onClick={() => handleRemoveSubject(index)}>ลบ</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubjectList;
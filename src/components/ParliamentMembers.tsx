import { useState } from "react";
import { z } from "zod";
import MemberForm from "./MemberForm";
import MemberCard from "./MemberCard";


export const MemberSchema = z.object({
  prefix: z.string().min(1, "กรุณาเลือกคำนำหน้า"),
  firstName: z.string().min(1, "กรุณากรอกชื่อ"),
  lastName: z.string().min(1, "กรุณากรอกนามสกุล"),
  photoUrl: z.string().url("ลิงก์รูปถ่ายไม่ถูกต้อง"),
  careerHistory: z.string().min(1, "กรุณากรอกประวัติการทำงาน"),
  achievements: z.string().min(1, "กรุณากรอกผลงานที่ผ่านมา"),
  ministerPosition: z.string().optional(),
  ministry: z.string().optional(),
  party: z.string().min(1, "กรุณากรอกพรรคการเมือง"),
});

export type Member = z.infer<typeof MemberSchema>;

export default function ParliamentMembers() {
  const [members, setMembers] = useState<Member[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleAdd = (data: Member) => {
    if (editingIndex !== null) {
      const updated = [...members];
      updated[editingIndex] = data;
      setMembers(updated);
      setEditingIndex(null);
    } else {
      setMembers([...members, data]);
    }
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
  };

  const handleDelete = (index: number) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">
        ทำเนียบสมาชิกสภาผู้แทนราษฎร
      </h1>

      <MemberForm
        onSubmit={handleAdd}
        editingMember={editingIndex !== null ? members[editingIndex] : undefined}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {members.map((m, index) => (
          <MemberCard
            key={index}
            member={m}
            onEdit={() => handleEdit(index)}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
}

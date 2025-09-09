import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MemberSchema, type Member } from "./ParliamentMembers";


type Props = {
  onSubmit: (data: Member) => void;
  editingMember?: Member;
};

export default function MemberForm({ onSubmit, editingMember }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Member>({
    resolver: zodResolver(MemberSchema),
  });

  useEffect(() => {
    if (editingMember) {
      reset(editingMember);
    }
  }, [editingMember, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-lg rounded-2xl p-6 mb-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select {...register("prefix")} className="border p-2 rounded">
          <option value="">-- คำนำหน้า --</option>
          <option value="นาย">นาย</option>
          <option value="นาง">นาง</option>
          <option value="นางสาว">นางสาว</option>
        </select>
        {errors.prefix && <p className="text-red-500">{errors.prefix.message}</p>}

        <input {...register("firstName")} placeholder="ชื่อ" className="border p-2 rounded" />
        {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}

        <input {...register("lastName")} placeholder="นามสกุล" className="border p-2 rounded" />
        {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}

        <input {...register("photoUrl")} placeholder="ลิงก์รูปถ่าย" className="border p-2 rounded" />
        {errors.photoUrl && <p className="text-red-500">{errors.photoUrl.message}</p>}

        <input {...register("ministerPosition")} placeholder="ตำแหน่งรัฐมนตรี" className="border p-2 rounded" />
        <input {...register("ministry")} placeholder="กระทรวง" className="border p-2 rounded" />

        <input {...register("party")} placeholder="พรรคการเมือง" className="border p-2 rounded" />
        {errors.party && <p className="text-red-500">{errors.party.message}</p>}
      </div>

      <textarea {...register("careerHistory")} placeholder="ประวัติการทำงาน" className="border p-2 rounded w-full mt-2" />
      {errors.careerHistory && <p className="text-red-500">{errors.careerHistory.message}</p>}

      <textarea {...register("achievements")} placeholder="ผลงานที่ผ่านมา" className="border p-2 rounded w-full mt-2" />
      {errors.achievements && <p className="text-red-500">{errors.achievements.message}</p>}

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
      >
        {editingMember ? "บันทึกการแก้ไข" : "เพิ่มสมาชิก"}
      </button>
    </form>
  );
}

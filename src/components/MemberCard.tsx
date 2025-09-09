import type { Member } from "./ParliamentMembers";


type Props = {
  member: Member;
  onEdit: () => void;
  onDelete: () => void;
};

export default function MemberCard({ member, onEdit, onDelete }: Props) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col">
      <img
        src={member.photoUrl}
        alt={member.firstName}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h2 className="text-xl font-bold">
        {member.prefix} {member.firstName} {member.lastName}
      </h2>
      <p className="text-gray-600">พรรค: {member.party}</p>
      {member.ministerPosition && (
        <p className="text-gray-600">
          {member.ministerPosition} - {member.ministry}
        </p>
      )}
      <p className="mt-2 text-sm text-gray-700">
        <span className="font-semibold">ประวัติ: </span>
        {member.careerHistory}
      </p>
      <p className="mt-1 text-sm text-gray-700">
        <span className="font-semibold">ผลงาน: </span>
        {member.achievements}
      </p>

      <div className="mt-4 flex gap-2">
        <button
          onClick={onEdit}
          className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
        >
          แก้ไข
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
        >
          ลบ
        </button>
      </div>
    </div>
  );
}

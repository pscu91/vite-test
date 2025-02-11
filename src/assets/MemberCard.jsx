function MemberCard({ member }) {
  return (
    <a
      href="#"
      className="mb-4 flex w-fit max-w-sm flex-col items-center divide-y rounded-md bg-white p-4 text-left drop-shadow-xl transition-opacity hover:opacity-80 lg:w-1/2 lg:max-w-none xl:w-1/3 xxl:w-1/4"
    >
      <img
        src={member.image}
        alt={`${member.name} profile`}
        className="mb-8 h-40 w-40 rounded-full"
      />
      <div className="w-full space-y-2 p-4 text-center">
        <p className="text-2xl">{member.name}</p>
        <p className="text-lg text-purple-600">{member.position}</p>
      </div>
      <div className="text-slate-800">
        <ul className="list-disc pl-10 pt-4">
          {member.bulletList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="p-4">{member.description}</p>
      </div>
    </a>
  );
}

export default MemberCard;

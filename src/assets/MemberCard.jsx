import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MemberCard({ member }) {
  return (
    <div className="mb-4 flex w-fit max-w-sm flex-col items-center divide-y rounded-md bg-white p-6 text-left drop-shadow-xl transition-opacity lg:w-1/2 lg:max-w-none xl:w-1/3 xxl:w-1/4">
      <img
        src={member.image}
        alt={`${member.name} profile`}
        className="mb-8 h-40 w-40 rounded-full"
      />
      <div className="w-full space-y-2 p-4 text-center">
        <p className="text-2xl font-semibold">{member.name}</p>
        <p className="text-lg font-semibold text-purple-600">
          {member.position}
        </p>
        <div className="flex justify-center gap-2">
          {member.snsIcons &&
            member.snsIcons.map((icon, index) => (
              <a
                href="#"
                className="text-xl text-slate-600 transition-colors hover:text-purple-600"
              >
                <FontAwesomeIcon key={index} icon={icon} />
              </a>
            ))}
        </div>
      </div>
      <div className="text-slate-800">
        <ul className="list-disc pl-10 pt-4">
          {member.bulletList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="p-4">{member.description}</p>
      </div>
    </div>
  );
}

export default MemberCard;

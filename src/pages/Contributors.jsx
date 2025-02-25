import { memberData } from "../data/MemberData";
import PageTitle from "../assets/PageTitle";

function Contributors() {
  return (
    <div className="flex h-full bg-slate-100 lg:pb-96">
      <div className="m-auto drop-shadow-lg">
        <PageTitle>Contributors</PageTitle>
        <div className="overflow-hidden rounded-xl">
          <table>
            <tbody>
              {memberData.map((member) => (
                <tr className="text-left text-lg odd:bg-white even:bg-slate-50 [&>*]:px-8 [&>*]:py-4">
                  <td>
                    <img
                      src={member.image}
                      className="h-auto w-20 rounded-full ring-2 ring-slate-100"
                    />
                  </td>
                  <td className="text-slate-800">{member.name}</td>
                  <td className="text-slate-500">{member.position}</td>
                  <td className="text-slate-500">{member.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Contributors;

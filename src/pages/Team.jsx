import UseMembers from "../hooks/UseMembers";
import MemberCard from "../assets/MemberCard";
import PageTitle from "../assets/PageTitle";

function Team() {
  const { members, loading, error } = UseMembers();

  if (loading) {
    return (
      <div>
        <PageTitle>Who we are</PageTitle>
        <div className="mt-8 text-center">로딩 중...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <PageTitle>Who we are</PageTitle>
        <div className="mt-8 text-center text-red-500">에러: {error}</div>
      </div>
    );
  }

  return (
    <div>
      <PageTitle>Who we are</PageTitle>
      <div className="mt-8 flex flex-col items-center justify-center">
        <div className="flex w-full flex-wrap justify-center gap-12 p-8 lg:p-4">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;

function ContributorsPreviewItem({ member }) {
  return (
    <>
      <div className="contributors-wrap">
        <img
          className="contributors-preview-profile-img"
          src={member.image}
          alt={member.name}
        />
        <div className="tooltip text-slate-800">{member.name}</div>
      </div>
    </>
  );
}

export default ContributorsPreviewItem;

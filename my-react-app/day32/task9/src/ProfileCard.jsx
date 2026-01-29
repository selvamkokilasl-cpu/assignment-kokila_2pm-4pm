
function ProfileCard({ name, role }) {
  return (
    <div style={{
      border: "1px solid #e60808",
      padding: "15px",
      margin: "10px",
      width: "220px"
    }}>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

export default ProfileCard;

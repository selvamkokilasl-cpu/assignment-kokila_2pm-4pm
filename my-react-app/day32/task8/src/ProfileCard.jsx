function ProfileCard({ name, role, email }) {
  return (
    <div style={{
      width: "250px",
      border: "1px solid #8cdb0d",
      borderRadius: "8px",
      padding: "16px",
      textAlign: "center",
      color: "#333",
      backgroundColor: "#cfdde7",
    }}>
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{email}</p>
      <button>View Profile</button>
    </div>
  );
}

export default ProfileCard;

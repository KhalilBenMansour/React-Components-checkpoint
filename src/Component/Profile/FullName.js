const FullName = () => {
  let firstName = "Khalil";
  let lastName = "Ben Mansour";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span>FullName: </span>
      <h3>
        {firstName} {lastName}
      </h3>
    </div>
  );
};

export default FullName;

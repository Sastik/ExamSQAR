export const Footerpart = () => {
  return (
    <div style={{ width: "100%", height: "5px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="https://exam-sqar.vercel.app/"
          style={{
            display: "flex",
            alignItems: "center",
            padding: 0,
          }}
        >
          <div
            style={{
              float: "left",
              fontFamily: "tesla",
              fontSize: "0.875rem",
              color: "#6b7280",
            }}
          >
            Exam
          </div>
        </a>
        <span
          style={{
            display: "block",
            textAlign: "center",
            fontSize: "0.875rem",
            color: "#6b7280",
          }}
        >
          © 2024{" "}
          <a
            href="https://exam-sqar.vercel.app/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            ExamSQAR™
          </a>
          . All Rights Reserved.
        </span>
        <div></div>
      </div>
    </div>
  );
};

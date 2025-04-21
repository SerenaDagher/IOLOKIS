import React from "react";

const ReviewCard = ({ name, review }) => {
  return (
    <div
      style={{
        width: "clamp(250px, 80vw, 300px)", 
        height: "clamp(250px, 80vw, 300px)", 
        backgroundColor: "black",
        border: "2px solid rgba(255, 255, 255, 0.5)",
        borderRadius: "20px",
        padding: "clamp(1rem, 5vw, 20px)", 
        display: "flex",
        flexDirection: "column",
        gap: "clamp(0.5rem, 2vw, 1rem)", 
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(0.5rem, 2vw, 0.7rem)",

        }}
      >
        <div
          style={{
            width: "clamp(2.5rem, 10vw, 3.875rem)", 
            height: "clamp(2.5rem, 10vw, 3.875rem)", 
            borderRadius: "50%",
            backgroundColor: "#D9D9D9",
            overflow: "hidden",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1rem, 4vw, 1.125rem)", 
              fontWeight: 500,
              color: "white",
              margin: 0,
            }}
          >
            {name}
          </p>
          <p
            style={{
              fontSize: "clamp(0.75rem, 3vw, 0.875rem)",
              color: "white",
              margin: 0,
              fontWeight: 400,
              opacity: 0.5,
            }}
          >
            Ortho
          </p>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontSize: "clamp(1rem, 4vw, 1.125rem)", 
            color: "white",
            margin: 0,
            fontWeight: 400,
            textAlign: "left",
          }}
        >
          {review}
        </p>
      </div>

      <p
        style={{
          fontSize: "clamp(0.875rem, 3vw, 1rem)", 
          color: "white",
          margin: 0,
          fontWeight: 300,
          opacity: 0.5,
          marginTop: "auto", 
          textAlign: "left",
        }}
      >
        Jan 10, 2025
      </p>
    </div>
  );
};

export default ReviewCard;
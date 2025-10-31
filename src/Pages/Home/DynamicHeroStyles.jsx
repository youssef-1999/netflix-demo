import { useMediaQuery } from "react-responsive";

export const useHeroStyles = () => {
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 992 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const heroStyle = {
    position: "absolute",
    color: "white",
    textShadow: "0px 2px 6px rgba(0,0,0,0.5)",
    top: isMobile ? "70%" : isTablet ? "60%" : "65%",
    left: isMobile ? "50%" : isTablet ? "35%" : "28%",
    transform: "translate(-50%, -50%)",
    textAlign: isMobile ? "center" : "left",
    width: isMobile ? "90%" : isTablet ? "70%" : "auto",
  };

  const titleStyle = {
    width: isMobile ? "80%" : isTablet ? "60%" : "50%",
    maxWidth: isMobile ? "300px" : isTablet ? "400px" : "500px",
    display: "block",
    margin: isMobile ? "0 auto" : "0",
  };

  const paragraphStyle = {
    maxWidth: isMobile ? "90%" : isTablet ? "500px" : "610px",
    margin: isMobile ? "10px auto" : "15px 0",
    fontSize: isMobile ? "0.9rem" : isTablet ? "0.95rem" : "1rem",
    lineHeight: "1.5",
  };

  const playInfoStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: isMobile ? "center" : "flex-start",
    flexDirection: isMobile ? "column" : "row",
    gap: "10px",
    width: isMobile ? "100%" : isTablet ? "80%" : "400px",
    marginTop: "20px",
  };

  const buttonStyle = {
    cursor: "pointer",
    borderRadius: "4px",
    transition: "all 0.3s ease",
    width: isMobile ? "80%" : "auto",
    justifyContent: "center",
    padding: "8px 12px",
  };

  // ✅ Return all styles
  return { heroStyle, titleStyle, paragraphStyle, playInfoStyle, buttonStyle };
};

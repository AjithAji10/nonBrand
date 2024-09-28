import { CircularProgress, Dialog, DialogContent } from "@mui/material";
import React from "react";
import "./styles.scss";
import MLPForm from "../../Forms/MLPForm/indexPopup";
import { useLocation } from "@reach/router";

const Index = ({ isLoading, isOpen, header,handleClose }) => {
  const location = useLocation();

  return (
    <Dialog
      open={isOpen}
      maxWidth="lg"
      fullWidth
      scroll="body"
      className="lead-details-form-container"
      sx={{
        
        "& .MuiPaper-root": {
          //width: "100%",
          m: 0.5,
          //background: "#fff",
          borderRadius: "18px",
          maxWidth: "900px !important",
          "@media (max-width: 800px)": {
            maxWidth: "320px !important",
          },
        },
      }}
    >
      <DialogContent className="lead-details-lp-content">
        {isLoading && (
          <div className="loader-container-main">
            <CircularProgress />
          </div>
        )}
       
        <div className="lead-details-lp-hero">{header}
          <button className="dialog-toggle-btn" onClick={handleClose}>
            {" "}
          ✕{" "}
          </button>
        </div>
        <div className="lp-p-popup">
          <MLPForm
            nonBranding="true"
            popUp={true}
            search={location.search} pathname={location?.pathname} locState={location?.state}
          ></MLPForm>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Index;

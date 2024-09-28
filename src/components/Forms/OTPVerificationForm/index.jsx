import React, {useState, useEffect, useRef} from "react";
import { formatPhoneNumberIntl } from "react-phone-number-input";

import OTPValidationImg from "../../../images/common/otp-validation-img.webp";
import "./styles.scss";
import { CONVEX_API_URL } from "../../../../config/config";
import { Link } from "gatsby";

const OTPVerificationForm = (props) => {

  const {
    campaignId,
    email,
    phone,
    btnLoading,
    errorOccured,
    goBack,
    resendOTP,
    submitFn,
    redirectToTestPage,
    formPageType
  } = props;
  
  // const [isResetBtnVisible, setResetBtnVisibility] = useState(false);
  const [otp, setOTP] = useState("");
  const [timer, setTimer] = useState(60);
  const timerRef = useRef(null);
  
  const initErrorState = {
    show: false,
    message: ""
  };
  const [showOTPError, setOTPError] = useState(false);
  const [generalError, setGeneralError] = useState(initErrorState);
  const [isLoading, setLoading] = useState(false);
  const [samePhone, setSamePhone] = useState(false);

  useEffect(() => {
    if(timerRef.current)
      return () => clearInterval(timerRef.current);
  }, []);
  
  useEffect(() => {
    timerRef.current = timer > 0 && setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);
  
    if(timerRef.current)
      return () => clearInterval(timerRef.current);
  }, [timer]);
  
  const handleResendOTP = () => {
    setOTP("");
    setOTPError(false);
    setGeneralError(initErrorState);
    resendOTP();
    setTimer(60);
  };
  
  const handleOTPChange = (e) => {
    let newOTP = e.target.value;
    const validOTPReg = /^(\d*)?$/;
  
    if(newOTP.length > 6)
      return;
  
    if(!validOTPReg.test(newOTP))
      return;
  
    setOTP(newOTP);
  };
  
  const blockInvalidChar = (e) => ['e', 'E', '+', '-', '.'].includes(e.key) && e.preventDefault();
  
  const handleVerifyOTP = async () => {
    try {
      setLoading(true);
      setOTPError(false);
      setGeneralError(initErrorState);
      let countryCode = formatPhoneNumberIntl(phone).split(" ")[0];
      let newPhone = phone.split(countryCode)[1];
  
      const leadData = {
        user_id: email,
        campaign_id: campaignId,
        otp,
        user_type:2,
        validation_data: Number(newPhone),
        form_page_type: formPageType
      };
      const postLeadData = await fetch(`${CONVEX_API_URL}/otp-validation/validate`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
      });
  
      const resData = await postLeadData.json();
  
      /*Error handling */
      if(resData.status === 400) {
        if(resData.message === "Enter correct OTP") {
          setOTPError(true);
        } else
          setGeneralError({
            show: true,
            message: resData.message
          });
  
        return;
      }
  
      if(!postLeadData.ok || postLeadData.status !== 200)
        throw resData;
  
      /*On Success*/
      if(postLeadData?.status === 200) {
        if(resData?.message === "SUCCESS"){
          submitFn();
        } else if(resData?.id) {
          if(resData.campaign_id !== campaignId) {
            /* Lead already registered in another program, but not in the current one. */
            submitFn( (resData?.email !== email) ? resData.email : null);

            return;
          }

          if(resData?.phone == newPhone && resData?.email !== email){
            setSamePhone(true);
          }

          redirectToTestPage(resData?.id, undefined, !!samePhone);
        }

        return;
      }
  
    } catch (error) {
      console.error(error);
      setGeneralError({
        show: true,
        message: "!Oops, something went wrong. Please try again later"
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div id="mlp-part-time-from" className="otp-verification-container">
      <div className="otp-form-header">
        <button 
          className="back-btn"
          onClick={goBack}
        >
          {"Back"}
        </button>
        <h2 className="main-header">
            Verify your Phone Number
        </h2>
        <img
          src={OTPValidationImg}
          alt="enter otp image" 
          loading="lazy"
          className="otp-validation-img"
        />
      </div>
      <div className="fill-otp-container">
        {(errorOccured || generalError.show) &&
            (
              <div className="alreadyExists" style={{margin: "-1em 0 2em 0"}}>
                {generalError.message === "Invalid Phone No/Email" ? (
                  <>
                    Email and mobile do not match. Try again or <Link className="contact-us-link" to="/contact-us/">Contact us</Link>
                  </>
                ): generalError.message}
              </div>
            )
        }
        <div className="otp-label-container">
          <label htmlFor="" className="otp-label">Enter 6 digit OTP sent on {phone}</label>
          <button 
            className="edit-otp-btn"
            onClick={goBack}
          >
              Edit
          </button>
        </div>
        <input
          show-error={showOTPError.toString()}
          type="number"
          className="otp-input" 
          onKeyDown={blockInvalidChar}
          onInput={handleOTPChange}
          value={otp}
        />
        <span className="otp-error-msg" aria-hidden={showOTPError}>
            Invalid OTP
        </span>
        <div className="resend-otp-container">
          {
            !!timer && 
                (<span className="resend-otp-helper-text">
                  Didn’t receive code?{" "}<span className="resend-timer">Resend OTP in {timer} seconds</span>
                </span>)
          }
          {
            !timer && (
              <button 
                className="resend-otp-btn"
                onClick={handleResendOTP}
              >
                  Resend OTP
              </button>
            )
          }
        </div>
        <button 
          className="verify-otp-btn"
          disabled={otp?.length !== 6 || isLoading || btnLoading}
          onClick={handleVerifyOTP}
        >
          {!isLoading && !btnLoading ? "Submit": "Verifying..."} 
        </button>
      </div>
    </div>
  );
};

export default OTPVerificationForm;
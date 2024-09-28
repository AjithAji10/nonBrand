import React, { useEffect, useState } from "react";
import Input from "./Input/input";
import ReferralCode from "../ReferralCode/referralCode";
import InEligible from "./InEligible/inEligible";
import "./styles.scss";
import { API_URL } from "../../../../config/config.js";
import { CONVEX_API_URL } from "../../../../config/config.js";
import moment from "moment";

import { Script, navigate } from "gatsby";
import PhoneInputInternational from "../PhoneInput/phoneInput";
import { formatPhoneNumberIntl } from "react-phone-number-input";
import { StaticImage } from "gatsby-plugin-image";
import { useLocation } from "@reach/router";

import OTPVerificationForm from "../OTPVerificationForm";

let formData = {
  name: "",
  email: "",
  phone: "",
  lead_type: "Studying",
  organization: "",
  profession: "",
  preferredSlot: "",
  specialisation: [],
  opt_in: "",
  program: "Marketing Launchpad On Demand Test",
  recommendation_code: "",
};

function MLPForm({ search, pathname, locState, children, nonBranding, popUp }) {
  const location = useLocation();
  let params = new URLSearchParams(search);
  const today = new Date();

  today.setDate(today.getDate() + 2);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "Asia/Kolkata",
  };
  const formattedDate = today.toLocaleDateString("en-IN", options);

  let vemail = params.get("email") || null;
  let recommendationCode = params.get("ir_co");
  let utm_source = params.get("utm_source");
  let refererCampaignId = params.get("ir_notify");

  let utmMedium = params.get("utm_medium") || "No Utm Medium";
  let utmSource = params.get("utm_source") || "No Utm Source";
  let utmContent = params.get("utm_content") || "No Utm Content";
  let utmCampaign = params.get("utm_campaign") || "No Utm Campaign";
  let utmTerm = params.get("utm_term") || "No Utm Term";

  let gaID = "No GA.ID";
  let campaignMediumArr = [
    "facebook",
    "facebook_vv",
    "discovery",
    "performance_max",
    "YT_TVA",
    // "search",
    "youtube_tva",
    "direct_campaign",
    "direct_campaigns",
    "social",
    "bing",
    "bing_brand",
    "bing_nonbrand",
    "email",
    "linkedin",
    // "search_brand",
    "search_nonbrand",
  ];

  const [showRecommendation, setShowRecommendation] = useState(true);
  const [visitorLoading, setVisitorLoading] = useState(false);

  const [detectDropOut, setdetectDropOut] = useState(false);

  const [btnClicked, setBtnClicked] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showInEligible, setShowInEligible] = useState(false);

  const [formFields, setFormFields] = useState(formData);
  const [screeningTests, setScreeningTests] = useState([]);
  const [testCourses, setTestCourses] = useState([]);
  const [campaignId, setCampaignId] = useState();
  const [selectedSlot, setSelectedSlot] = useState("");
  const [selectedCourse, setSelectedCourse] = useState([]);

  const [checkType, setType] = useState(false);
  const [scrollValidation, setScrollValidation] = useState(false);

  const [allFilled, setAllFilled] = useState(false);

  const [wpOptin, setWpOptin] = useState(true);

  const [emailAlreadyExists, setEmailAlreadyExists] = useState(false);

  const [emailNotExists, setEmailNotExists] = useState(false);
  const [errorOccured, setErrorOccured] = useState(false);
  const [gclid, setGclid] = useState(params.get("gclid") || "");
  const [gclsrc, setGclidSrc] = useState(params.get("gclsrc") || "");
  const [wbraid, setWbraid] = useState(params.get("wbraid") || "");
  const [gbraid, setGbraid] = useState(params.get("gbraid") || "");

  const [duplicateLeadEmail, setDuplicateLeadEmail] = useState("");

  const [isNewLead, setNewLead] = useState(true);
  const [leadID, setLeadID] = useState(null);
  const [whats, setwhats] = useState(null);

  useEffect(() => {
    if (campaignMediumArr.includes(utmMedium)) {
      setShowRecommendation(false);
    }

    syncGclId();
  }, []);

  useEffect(() => {}, [checkType]);

  useEffect(() => {
    const scrollToErr = () => {
      const errElement = document.querySelector(".validation-err");

      if (errElement) {
        errElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    };

    scrollToErr();
  }, [scrollValidation]);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await fetch(
          `${API_URL}/get_leads_data/by-email?email=${vemail}&program=${formData.program}`
        );

        const data = await res.json();

        formData = {
          ...data,
          lead_type: "Studying",
          preferredSlot: "",
        };

        setFormFields(formData);

        setVisitorLoading(false);
      } catch (err) {
        console.log("visitor err", err);
        setVisitorLoading(false);
      }
    };
    const getProgramCampaign = async () => {
      try {
        const res = await fetch(
          `${CONVEX_API_URL}/program/mlp/campaign/active` //mlp is variable
        );

        const data = await res.json();
        const sortedDates = data.ScreeningTests.sort(function (a, b) {
          return new Date(a.datetime) - new Date(b.datetime);
        });

        setCampaignId(data.id);
        let screenSlot = sortedDates.map((item) => ({
          value: moment(item.datetime).format("MMMM D, h:mm A"),
          day: moment(item.datetime).format("ddd"),
          time: moment(item.datetime).format("h A"),
          date: moment(item.datetime).format("MMM D"),
          id: item.id,
          isDisabled: item.status === "ACTIVE" ? false : true,
        }));

        setScreeningTests(screenSlot);
        setSelectedSlot(screenSlot[0]?.id ?? null);
        // formData.preferredSlot = screenSlot[0]?.id ?? null;
        formData.preferredSlot = screenSlot[0]?.value ?? null;

        const coursesOptions = data.ScreeningTests[0].TestCourses.map(
          (item) => ({
            value: item.name,
            title: item.description,
            id: item.id,
            isDisabled: item.status === "ACTIVE" ? false : true,
            isChecked: true,
          })
        );

        setTestCourses(coursesOptions);
        setSelectedCourse(coursesOptions?.map((course) => course.id) ?? []);
        formData.specialisation =
          coursesOptions?.map((course) => course.id) ?? [];

        setFormFields(formData);
      } catch (err) {
        console.log("visitor err", err);
      }
    };

    getProgramCampaign();

    if (vemail) {
      setVisitorLoading(true);
      getUserDetails();
    }
  }, []);

  function handleRadioChange(event) {
    const selectedValue = event.target.value;

    formFields.opt_in = selectedValue;
    setFormFields(formData);
    whatsAppHandle();

    const data = {
      value: event.target.value,
      id: 'opt_in',
    };

    getValuesFn(data);
  }

  const getExpiryRecord = (value) => {
    let expiryPeriod = 90 * 24 * 60 * 60 * 1000; // 90 day expiry in milliseconds
    let expiryDate = new Date().getTime() + expiryPeriod;

    return {
      value: value,
      expiryDate: expiryDate,
    };
  };
  
  const whatsAppHandle = () => {
    setWpOptin(!wpOptin);

    formData.opt_in = !wpOptin;

    setFormFields(formData);
  };

  const getValuesFn = (data) => {
    if (data.id === "preferredSlot") {
      let optedSlot = screeningTests.find((item) => item.value === data.value);

      setSelectedSlot(optedSlot.id);
    }

    if (data.id === "specialisation") {
      let optedCoursesId = [];

      testCourses.forEach((item) => {
        if (data.value.includes(item.value)) {
          optedCoursesId.push(item.id);
        }
      });
      setSelectedCourse(optedCoursesId);
    }

    setType(!checkType);
    formData[data.id] = data.value;

    if (data.id === "email") {
      formData[data.id] = data.value.toLowerCase();
    }

    if (formData.name && formData.email && detectDropOut === false) {
      setdetectDropOut(true);
    }

    formData.form_submitted = true;
    delete formData.not_eligible_for_program;

    checkAll();

    // for utm campaings

    formData.utmMedium = utmMedium;
    formData.utmCampaign = utmCampaign;
    formData.utmSource = utmSource;
    formData.utmContent = utmContent;
    formData.utmTerm = utmTerm;
    formData.gaID = gaID;

    if (emailAlreadyExists) {
      setEmailAlreadyExists(false);
    }

    setFormFields(formData);
    syncGclId();
  };

  const checkAll = () => {
    const isComplete = [];

    Object.keys(formFields).forEach(function (key) {
      if (
        formFields[key] === "" &&
        key !== "organization" &&
        key !== "profession" &&
        key !== "lead_type" &&
        key !== "recommendation_code"
      ) {
        isComplete.push(false);
      } else {
        isComplete.push(true);
      }

      if (
        key === "specialisation" &&
        formFields["specialisation"].length === 0
      ) {
        isComplete.push(false);
      } else {
        isComplete.push(true);
      }

      if (key === "opt_in" && formFields[key] === "") {
        isComplete.push(false);
      } else {
        isComplete.push(true);
      }
    });

    if (isComplete.includes(false)) {
      setAllFilled(false);

      return false;
    }

    setAllFilled(true);

    if (emailAlreadyExists) {
      setEmailAlreadyExists(false);
    }

    return true;
  };

  const storeOnClassApi = async (resData, existingEmail) => {
    const res = await fetch(
      `${API_URL}/isUserRegisteredToProgram?email=${
        existingEmail ?? formFields.email
      }&program=${formFields.program}`
    );

    const data = await res.json();

    if (data.message === "You are already registered!") {
      setEmailAlreadyExists(true);
      setBtnLoading(false);
      setShowThankYou(false);
      setShowForm(true);

      return null;
    }

    setEmailAlreadyExists(false);
    //setShowThankYou(true);

    let newFormFields = {
      ...formFields,
      email: existingEmail ?? formFields.email,
      form_page_type: "DMM",
      test_link: `${location?.origin}/marketing-launchpad/digital-marketing-course/screening-test/${selectedSlot}/${resData.id}`,
      w_test_link: `marketing-launchpad/digital-marketing-course/screening-test/${selectedSlot}/${resData.id}`,
    };

    // const postData = await fetch(`${API_URL}/program_leads_data`, {
    //   method: "post",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(newFormFields),
    // });
  };

  /**
   *
   * @param {String} existingEmail email to be passed if lead already registered in a diffirent program.
   */
  const submitFn = async (existingEmail) => {
    setBtnClicked(true);

    // if(duplicateLeadEmail === formFields.email) {
    //   setEmailAlreadyExists(true);

    //   return;
    // }

    // setDuplicateLeadEmail("");

    if (!allFilled) {
      if (!formFields.email) {
        setEmailNotExists(true);
      }

      return;
    }

    setScrollValidation(!scrollValidation); //to scroll page where user has not enter data
    setBtnClicked(true);

    const pass = checkAll(); // to check if all the fields are filled

    if (pass) {
      setBtnLoading(true); //enable loading of button
      let countryCode = formatPhoneNumberIntl(formFields.phone).split(" ")[0];
      let phone = formFields.phone.split(countryCode)[1];

      try {
        let leadData = {
          campaign_id: campaignId,
          course_ids: selectedCourse,
          screening_test_id: selectedSlot,
          email: existingEmail ?? formFields.email,
          form_page_type: "DMM",
          // is_drop_off: detectDropOut,
          is_drop_off: false,
          whatsapp_consent: formFields.opt_in === "Yes" ? true : false,
          role: "Studying",
          phone: phone,
          country_code: countryCode,
          name: formFields.name,
          is_eligible: false,
          gclid:
            (gclid?.value ?? null) ||
            (wbraid?.value ?? null) ||
            (gbraid?.value ?? null),
          gclsrc: gclsrc,
          additional_data: {
            gaId: formFields.gaID,
            utmMedium: formFields.utmMedium,
            utmCampaign: formFields.utmCampaign,
            utmSource: formFields.utmSource,
            utmContent: formFields.utmContent,
            utmTerm: formFields.utmTerm,
            slotDate: formFields.preferredSlot,
            recommendation_code: formFields.recommendation_code,
            gclid_type:
              (gclid?.value ? "gclid" : null) ||
              (wbraid?.value ? "wbraid" : null) ||
              (gbraid?.value ? "gbraid" : null),
          },
        };

        leadData.is_eligible = true;

        const postLeadData = await fetch(`${CONVEX_API_URL}/lead/create`, {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadData),
        });

        const resData = await postLeadData.json();

        if (resData.message === "Invalid Email ID." && resData.status === 409) {
          setEmailNotExists(true);
          setBtnLoading(false);

          return;
        }

        if (resData.message == "Lead already exists.") {
          // setDuplicateLeadEmail(leadData.email);
          setEmailAlreadyExists(true);
          setBtnLoading(false);

          throw resData;
        }

        // await storeOnClassApi(resData, existingEmail);

        setBtnLoading(false);

        /** Fire GTM */
        let enhanced_conversion_data = {
          email: formFields.email,
          countryCode: countryCode,
          phone_number: formFields.phone,
          first_name: formFields.name,
          last_name: "",
        };

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "form_complete",
          enhanced_conversion_data: {
            email: formFields.email,
          },
        });

        // return null;
        setShowForm(false);
        setShowInEligible(false);
        setShowThankYou(true);
        scrollToMessage("thank-you-screen");

        if (typeof window !== "undefined") {
          if (window.fbq != null) {
            console.log("fbq ran");
            window.fbq("trackCustom", "FormSubmitMLP");
          }

          if (window.gtag != null) {
            console.log("gtag ran");
            window.gtag("config", "AW-819495038");
            window.gtag("event", "conversion", {
              send_to: "AW-819495038/znKGCJPX2N8BEP6A4oYD",
              ...enhanced_conversion_data,
            });
            window.gtag("event", "conversion", {
              send_to: "AW-819495038/znKGCJPX2N8BEP6A4oYD",
            });
          }

          if (window.ir) {
            window.ir("track", {
              orderID: formFields.email ?? null, // Order ID
              event: "register",
              fname: formFields.name, // Order Name
            });
          }
        }

        /* Once everything is done navigate to screening-test page */
        if (resData?.id && selectedSlot) {
          // navigate(
          //   `/marketing-launchpad/digital-marketing-course/screening-test/${selectedSlot}/${resData.id}`,
          //   {
          //     state: { formFields, campaignId },
          //   }
          // );
          redirectToTestPage(resData.id, selectedSlot, !!existingEmail);
        }
      } catch (err) {
        setBtnLoading(false);
        console.log("err", err);
        setErrorOccured(true);
      }
    } else {
    }
  };

  const scrollToMessage = (className) => {
    const errElement = document.querySelector(`.${className}`);

    if (errElement) {
      errElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };
  const syncGclId = () => {
    let gclidParam = params.get("gclid");
    let wbraidParam = params.get("wbraid");
    let gbraidParam = params.get("gbraid");
    let gclidRecord = null;
    let wbraidRecord = null;
    let gbraidRecord = null;
    let currGclidFormField = document.getElementById("gclid");
    let currWbraidFormField = document.getElementById("wbraid");
    let currGbraidFormField = document.getElementById("gbraid");
    let gclsrcParam = params.get("gclsrc");

    let isGclsrcValid = !gclsrcParam || gclsrcParam.indexOf("aw") !== -1;

    if (gclidParam || wbraidParam || (gbraidParam && isGclsrcValid)) {
      gclidRecord = getExpiryRecord(gclidParam);
      wbraidRecord = getExpiryRecord(wbraidParam);
      gbraidRecord = getExpiryRecord(gbraidParam);
      localStorage.setItem("gclid", JSON.stringify(gclidRecord));
      localStorage.setItem("wbraid", JSON.stringify(wbraidRecord));
      localStorage.setItem("gbraid", JSON.stringify(gbraidRecord));
    }

    let gclid = gclidRecord || JSON.parse(localStorage.getItem("gclid"));
    let wbraid = wbraidRecord || JSON.parse(localStorage.getItem("wbraid"));
    let gbraid = gbraidRecord || JSON.parse(localStorage.getItem("gbraid"));
    let isGclidValid =
      (gclid && new Date().getTime() < gclid.expiryDate) ||
      (wbraid && new Date().getTime() < wbraid.expiryDate) ||
      (gbraid && new Date().getTime() < gbraid.expiryDate);

    if (
      currGclidFormField ||
      currWbraidFormField ||
      (currGbraidFormField && isGclidValid)
    ) {
      setGclid(gclid);
      setGclidSrc(gclsrc);
      setWbraid(wbraid);
      setGbraid(gbraid);
    }
  };

  const genrateOTP = async () => {
    try {
      setEmailNotExists(false);
      setBtnClicked(true);

      if (!allFilled) {
        if (!formFields.email) {
          setEmailNotExists(true);
        }

        return;
      }

      setScrollValidation(!scrollValidation); //to scroll page where user has not enter data
      setBtnClicked(true);

      const pass = checkAll(); // to check if all the fields are filled

      if (!pass) return;

      setBtnLoading(true); //enable loading of button
      let countryCode = formatPhoneNumberIntl(formFields.phone).split(" ")[0];
      let phone = formFields.phone.split(countryCode)[1];
      let extraData = {
        campaign_id: campaignId,
        course_ids: selectedCourse,
        screening_test_id: selectedSlot,
        email: formFields.email,
        // is_drop_off: detectDropOut,
        is_drop_off: false,
        whatsapp_consent: formFields.opt_in === "Yes" ? true : false,
        role: "Studying",
        phone: phone,
        country_code: countryCode,
        name: formFields.name,
        is_eligible: false,
        gclid:
          (gclid?.value ?? null) ||
          (wbraid?.value ?? null) ||
          (gbraid?.value ?? null),
        gclsrc: gclsrc,
        additional_data: {
          gaId: formFields.gaID,
          utmMedium: formFields.utmMedium,
          utmCampaign: formFields.utmCampaign,
          utmSource: formFields.utmSource,
          utmContent: formFields.utmContent,
          utmTerm: formFields.utmTerm,
          slotDate: formFields.preferredSlot,
          recommendation_code: formFields.recommendation_code,
          gclid_type:
            (gclid?.value ? "gclid" : null) ||
            (wbraid?.value ? "wbraid" : null) ||
            (gbraid?.value ? "gbraid" : null),
        },
      };

      const leadData = {
        campaign_id: campaignId,
        user_id: formFields.email,
        user_type: 8,
        request_type: 2,
        validation_data: Number(phone),
        change_in_original_detail: 0,
        extra_data: JSON.stringify(extraData),
        form_page_type: "DMM",
      };

      const postLeadData = await fetch(`${CONVEX_API_URL}/otp-validation/`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
      });

      const resData = await postLeadData.json();

      if (resData.message === "Invalid Email ID." && resData.status === 409) {
        setEmailNotExists(true);
        setBtnLoading(false);

        return;
      }

      // if (resData.message == "Lead already exists.") {
      //   setDuplicateLeadEmail(leadData.email);
      //   setEmailAlreadyExists(true);
      //   setBtnLoading(false);

      //   return null;
      // }

      if (resData.status === 400 || !postLeadData.ok) {
        throw resData;
      }

      setBtnLoading(false);

      // return null;
      // if(resData?.message === "SUCCESS") {
      //   setNewLead(true);
      //   setLeadID(null);
      // } else if(resData?.id) {
      //   setNewLead(false);
      //   setLeadID(resData?.id);
      // }

      setShowForm(false);
      setErrorOccured(false);
      setShowInEligible(false);
    } catch (err) {
      console.error(err);
      setBtnLoading(false);
      setErrorOccured(true);
    }
  };

  const resendOTP = async () => {
    try {
      let countryCode = formatPhoneNumberIntl(formFields.phone).split(" ")[0];
      let phone = formFields.phone.split(countryCode)[1];
      const leadData = {
        campaign_id: campaignId,
        user_id: formFields.email,
        user_type: 8,
        request_type: 3,
        validation_data: Number(phone),
        change_in_original_detail: 0,
        form_page_type: "DMM",
      };

      const postLeadData = await fetch(`${CONVEX_API_URL}/otp-validation/`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
      });

      const resData = await postLeadData.json();

      console.log(resData);
    } catch (error) {
      console.error(error);
    }
  };

  const redirectToTestPage = (
    newleadID = leadID,
    testID = selectedSlot,
    isNewEmail = false
  ) => {
    if (!!newleadID && !!testID) {
      navigate(
        `/marketing-launchpad/digital-marketing-course/screening-test/${testID}/${newleadID}`,
        {
          state: { isNewEmail, isRedirect: true },
        }
      );
    }
  };

  const handleGoBack = () => {
    setShowForm(true);
  };

  if (showForm)
    return (
      <div id="main-mlp-form" className="main-mlp-form mlp-form-bg">
        <Script defer id="invite-referrals-script">
          {`
            var ir = ir || function () { (window.ir.q = window.ir.q || []).push(arguments) };
            var invite_referrals = window.invite_referrals || {};
            (function () {
              invite_referrals.auth = {
                bid_e: '43BA7F58357BECE6E746561E17B94EA2',
                bid: '65117',
                t: '420',
                // email : '', 
                // userParams : {'fname': ''}
              };
              invite_referrals.async = false;
              var script = document.createElement('script');
              script.src = "//cdn.invitereferrals.com/js/invite-referrals-1.0.js";
    
              var entry = document.getElementsByTagName('script')[0]; entry.parentNode.insertBefore(script, entry);
            })();
          `}
        </Script>
        {/* {
          !pathname?.includes("/marketing-launchpad/digital-marketing-course/thank-you/") && 
          showForm && ( */}
        <div className="form-content">
          {nonBranding ? (
            <div className="mlp-form-header">
              <div className="mlp-form-non-brand-head">Need Assistance?</div>
              <div className="mlp-form-non-brand-desc">
                Request a callback from our
                <br className="mobile-none" /> Admissions team
              </div>
            </div>
          ) : (
            <>
              <div className="mlp-form-header mobile-none">
                Apply for the <b> Marketing Launchpad </b>
              </div>
              <div className="mlp-form-header pc-none">
                Apply for{" "}
                <b>
                  the <br /> Marketing Launchpad{" "}
                </b>
              </div>
            </>
          )}
          {visitorLoading ? (
            <p>Loading...</p>
          ) : (
            <React.Fragment>
              <Input
                type="hidden"
                id="gclid"
                name="gclid"
                isRequired={false}
                value={gclid}
              />
              <Input
                type="text"
                name="name"
                placeholder="Name*"
                //isRequired={true}
                btnClicked={btnClicked}
                getValuesFn={getValuesFn}
                value={formFields.name}
              />
              {btnClicked && !formFields.name && (
                <div className="bb-error-msg">
                  Please enter name here
                  {/* <a href="mailto:hi@kraftshala.com">hi@kraftshala.com</a> */}
                </div>
              )}
              <Input
                type="email"
                name="email"
                placeholder="Email*"
                //isRequired={true}
                //btnClicked={btnClicked}
                getValuesFn={getValuesFn}
                value={formFields.email}
              />
              {btnClicked && emailNotExists && (
                <div className="bb-error-msg">
                  Please enter valid email ID here
                  {/* <a href="mailto:hi@kraftshala.com">hi@kraftshala.com</a> */}
                </div>
              )}
              <PhoneInputInternational
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                //isRequired={true}
                btnClicked={btnClicked}
                getValuesFn={getValuesFn}
                value={formFields.phone}
              />

              <div className="slot-group mtop-1-25" />
              <div className="whatsapp_optin">
                <label className="optin-container">
                  {/* Send me the admission process & test details on app */}
                  <div className="wrapper-check">
                    Get screening test details on*{" "}
                    <StaticImage
                      src="../../../../static/assets/whatsappIcon.webp"
                      alt="whatsapp icon"
                      className="whatsapp"
                      placeholder="none"
                    />
                  </div>
                </label>
              </div>
          

              <div class="radio-group">
                <div class="radio-option">
                  <input
                    type="radio"
                    name="opt_in"
                    value="Yes"
                    class="radio-input"
                    id="radio-yes1"
                    onClick={handleRadioChange}
                  />
                  <label class="radio-label" for="radio-yes1">
                    Yes
                  </label>
                </div>
                <div class="radio-option">
                  <input
                    type="radio"
                    name="opt_in"
                    value="No"
                    class="radio-input"
                    id="radio-no1"
                    onClick={handleRadioChange}
                  />
                  <label class="radio-label" for="radio-no1">
                    No
                  </label>
                </div>
              </div>

              {btnClicked && !formFields.opt_in && (
                <div className="bb-error-msg mtop-1">Please enter value</div>
              )}
              {showRecommendation && (
                <ReferralCode
                  type="text"
                  name="recommendation_code"
                  placeholder="Enter code"
                  isRequired={false}
                  btnClicked={btnClicked}
                  getValuesFn={getValuesFn}
                  recommendationCode={recommendationCode}
                  refererCampaignId={refererCampaignId}
                  utm_source={utm_source}
                />
              )}

              {/* <div className="notice mtop-2">
                  Only complete and accurate applications will be processed.
                </div> */}
              {errorOccured && (
                <div className="alreadyExists mtop-1">
                  !Oops, something went wrong. Please try again later
                </div>
              )}

              {emailAlreadyExists && (
                <div className="alreadyExists mtop-1">
                  Aha! You've applied earlier - We've resent your unique test
                  link on <a href="#">{formData.email}</a> <br />
                </div>
              )}

              <div className="submit-btn-helper-txt">
                Join over 1800+ Launchpad students
              </div>

              {nonBranding && !popUp ? (
                <div className="submit-btn-helper-txt-2">
                  Scholarship Deadline: {formattedDate}
                </div>
              ) : (
                <div className="submit-btn-helper-txt-2">
                  Application Deadline: {formattedDate}
                </div>
              )}

              <div className="mlp-submit">
                {btnLoading ? (
                  <div
                    className={`submit-btn ${
                      allFilled ? "yellow-bg" : "gray-bg"
                    }`}
                  >
                    Loading...
                  </div>
                ) : (
                  <button
                    className={`submit-btn yellow-bg`}
                    aria-hidden="true"
                    type="submit"
                    onClick={genrateOTP}
                  >
                    {nonBranding ? "Proceed" : "Submit"}
                  </button>
                )}
              </div>

              {/* </form>  */}
            </React.Fragment>
          )}
        </div>
        {showInEligible && (
          <div className="ineligible-screen">
            <InEligible />
          </div>
        )}
      </div>
    );

  if (!showForm)
    return (
      <OTPVerificationForm
        campaignId={campaignId}
        email={formFields.email}
        phone={formFields.phone}
        btnLoading={btnLoading}
        errorOccured={errorOccured}
        goBack={handleGoBack}
        resendOTP={resendOTP}
        submitFn={submitFn}
        redirectToTestPage={redirectToTestPage}
        formPageType={"DMM"}
      />
    );
}

export default MLPForm;

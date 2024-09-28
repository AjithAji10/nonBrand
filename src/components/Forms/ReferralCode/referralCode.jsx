import React, { useEffect, useState } from "react";
import { CONVEX_API_URL } from "../../../../config/config";
import axios from 'axios';
import { REFERER_BRAND_ID,REFERER_API_KEY } from "../../../../config/config";

const ReferralCode = (props) => {
  
  const { name, placeholder, type, getValuesFn } = props;
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isDisabled, setDisabled] = useState(false);

  
  useEffect(() => {
    if (props.recommendationCode && props.utm_source && props.utm_source === 'invitereferrals') {
      //call api
      getRecommendationEmail(props.refererCampaignId, props.recommendationCode);
    }
  }, []);

  const getRecommendationEmail = async (refererCampaignId,recommendationCode) => {
    try {
      //recommendationCode
      let data = {
        campaign_id: refererCampaignId,
        referrer_code: recommendationCode,
      };

      const Rmail = await fetch(
        "https://try.readme.io/https://www.ref-r.com/api/v1/conversion/confirm_referrer_code",
        {
          method: "post",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            "x-api-key": REFERER_API_KEY,
            "x-brand-id": REFERER_BRAND_ID,
          },
          body: JSON.stringify(data),
        }
      );
      let Response = await Rmail.json();
      let email = Response.referrer_details?.referrer_email_org;

      if(!email){
        setValue("INVALID CODE");
        setSuccess(false);
        setError(true);

        return;
      }

      let RecomendId = await fetch(
        `https://service.kraftshala.com/referral/verify`,
        {
          method: "POST", 
          body: JSON.stringify({
            email: email,
            status: 1
          }),
          headers: {
            "Content-Type": "application/json", 
            accept: "application/json"
          }
        }
      );

      RecomendId = await RecomendId.json();

      setValue(RecomendId.referral_code ?? "");

      if (RecomendId.status === 1) {
        setSuccess(true);
        const data = {
          value: RecomendId.referral_code ?? "",
          id: name,
        };

        getValuesFn(data);
        setSuccess(true);
        setDisabled(true);
      }  else {
        setValue("INVALID CODE");
        setSuccess(false);
        setError(true);
      }
    } catch (error) {
      setValue("INVALID CODE");
      setSuccess(false);
      setError(true);
      console.error(error);
    }
  };

  const applyCode = async () => {
    if (value.length < 4) {
      setError(true);

      return;
    }

    try {
      const res = await axios.post(`${CONVEX_API_URL}/referral/verify`, {
        referral_code: value,
      });

      if (res.data.status === 1) {
        setSuccess(true);
        const data = {
          value: value,
          id: name,
        };

        getValuesFn(data);
      } else {
        setSuccess(false);
        setError(true);
      }
    } catch (err) {
      //setValue("INVALID CODE");
      setSuccess(false);
      setError(true);
      console.error(error);
    }
  };

  const removeCode = () => {
    if(isDisabled)
      return;
    setValue("");
    setError(false);
    setSuccess(false);
  };

  const handleChange = (event) => {
    setError(false);
    setValue(event.target.value);
  };

  return (
    <div className="form-input mtop-1-25">
      <div className="form-referral recommendation-box">
        <div class="outer-block-referal-code">
          <input
            type={type}
            onChange={handleChange}
            name={name}
            placeholder="Have a recommendation code?"
            value={value}
            disabled={isDisabled}
          />
          {success ? (
            <div class="message-block">Success! Code Applied</div>
          ) : (
            ""
          )}
          {error ? (
            <div class="message-block error">
              Invalid code. Please try again.
            </div>
          ) : (
            ""
          )}
        </div>

        {success || error ? (
          <div
            className="referral-btn error"
            aria-hidden="true"
            onClick={removeCode}
          >
            REMOVE
          </div>
        ) : (
          <div className="referral-btn " aria-hidden="true" onClick={applyCode}>
            Apply
          </div>
        )}
      </div>
    </div>
  );
};

export default ReferralCode;

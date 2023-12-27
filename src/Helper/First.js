import React, { useState } from "react";
import styles from "./FormFirstPage.module.scss";
import RadioSelectorOptions from "../../components/radioselector/RadioSelectorOptions";
import SelectorDropDown from "../../components/selector/SelectorDropDown";
import FormInput from "../../components/forminput/FormInput";
import Button from "../../components/button/Button";
import Table from "../../components/table/Table";

function FormFirstPage() {
  const [citizenIndia, setCitizenIndia] = useState("true");

  const handleCitizenIndiaChange = (value) => {
    setCitizenIndia(value);
  };

  return (
    <form className={styles.mainForm}>
      {/* ... other sections ... */}
      <div className={styles.section2}>
        <hr style={{ width: "100%" }} />
        <h3>Section 2</h3>
        <RadioSelectorOptions
          labelTitle="Are you citizen of India"
          star="*"
          radioName="citizenIndia"
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
          onChange={handleCitizenIndiaChange}
        />

        {/* Other elements in Section 2 */}
        {/* Disable elements based on the value of citizenIndia */}
        <SelectorDropDown
          label="If yes then select category"
          star="*"
          options={[
            { value: "", label: "select category" },
            { value: "obc", label: "OBC" },
            { value: "sc", label: "SC" },
          ]}
          disabled={citizenIndia === "false"}
        />
        {/* Other elements with similar pattern */}
        <SelectorDropDown
          label="Name of Caste"
          star="*"
          options={[
            { value: "", label: "select caste" },
            { value: "obc", label: "OBC" },
            { value: "sc", label: "SC" },
          ]}
          disabled={citizenIndia === "false"}
        />
        <RadioSelectorOptions
          labelTitle="Select ID Type"
          star="*"
          radioName="aadhar"
          options={[
            { value: "Aadhar no", label: "Aadhar No" },
            { value: "PAN no", label: "PAN No" },
            { value: "Driving License no", label: "Driving No" },
          ]}
          disabled={citizenIndia === "false"}
        />
        <FormInput
          labelTitle="Aadhar No.)"
          placeHolder="Enter selected Aadhar No."
          disabled={citizenIndia === "false"}
        />
      </div>
      {/* ... other sections ... */}
      <div className={styles.NextButton}>
        <Button
          title="Next"
          padding="8px 25px "
          backgroundColor="#007bff"
          color="white"
          fontSize="16px"
          fontWeight="500"
        />
      </div>
      <Table />
    </form>
  );
}

export default FormFirstPage;

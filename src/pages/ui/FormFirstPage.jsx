import React from "react";
import { useState } from "react";

import styles from "./FormFirstPage.module.scss";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SlCalender } from "react-icons/sl";
import Button from "../../components/button/Button";
import FormInput from "../../components/forminput/FormInput";
import RadioSelectorOptions from "../../components/radioselector/RadioSelectorOptions";
import SelectorDropDown from "../../components/selector/SelectorDropDown";
import InputBox from "../../components/inputbox/InputBox";
import Table from "../../components/table/Table";

function FormFirstPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [bpscData, setBpscData] = useState({
    //section 1
    candidateFirstName: "",
    candidateMiddleName: "",
    candidateLastName: "",
    fatherName: "",
    husBandName: "",
    motherName: "",
    DOB: "",
    gender: "",

    // section 2
    isCitizenIndia: "",
    isParmaBihar: "",
    doReservedCat: "",
    chooseCategory: "",
    chooseCaste: "",
    isSelectId: "",
    selectedIdNumber: "",

    // section 3
    arePhysicallyDisabled: "false",
    natureOfDisability: "",
    percentageOfDisability: "",
    isRequiredScribe: "false",
    areExBiharEmployee: "false",
    ifYesDegination: "",
    ifYesOffice: "",
    ifYesPlace: "",
    areYouExServiceman: "false",
    doYouClaimUpperAge: "false",
    areYouGrandSonFreedomFighter: "false",
    doMinEligibility: "",

    //section 4 payment details

    //section 5
    mobileNo: "",
    email: "",

    // section 6 Address

    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    state: "",
    district: "",
    block: "",
    pincode: "",
    //permanentadderss
    permanentAddressLine1: "",
    permanentAddressLine2: "",
    permanentAddressLine3: "",
    permanentState: "",
    permanentDistrict: "",
    permanentBlock: "",
    permanentPincode: "",

    //section 7
    maritalStatus: "",
    doReadWriteHindi: "",
    //section 9
    lastEmployer: "",
  });
  // Form Input field  change
  const handleChangeText = (field, inputValue) => {
    setBpscData({ ...bpscData, [field]: inputValue });
  };

  console.log(bpscData);
  return (
    <form className={styles.mainForm}>
      <div className={styles.section1}>
        <h3>Section 1</h3>
        
          <FormInput
            labelTitle="Candidate's First Name"
            placeHolder="Enter first Name"
            star="*"
            onChange={(inputValue) =>
              handleChangeText("candidateFirstName", inputValue)
            }

          />

          <FormInput
            labelTitle="Candidate's Middle Name"
            placeHolder="Enter middle Name"
            onChange={(inputValue) =>
              handleChangeText("candidateMiddleName", inputValue)
            }
          />

          <FormInput
            labelTitle="Candidate's Last Name"
            placeHolder="Enter last Name"
            star="*"
            onChange={(inputValue) =>
              handleChangeText("candidateLastName", inputValue)
            }
          />
        

        <FormInput
          labelTitle="Father's Name"
          placeHolder="Enter Father's Name"
          star="*"
          onChange={(inputValue) => handleChangeText("fatherName", inputValue)}
        />

        <FormInput
          labelTitle="Husband's Name ( केवल विवाहित महिलाओं के लिए )"
          placeHolder="Enter Husband's Name"
          onChange={(inputValue) => handleChangeText("husBandName", inputValue)}
        />

        <FormInput
          labelTitle="Mother's Name"
          placeHolder="Enter Mother's Name"
          star="*"
          onChange={(inputValue) => handleChangeText("motherName", inputValue)}
        />

        <div className={styles.fname}>
          <div className={styles.fnamelabel}>
            <label htmlFor="fname">
              Date of Birth<span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <div className={styles.datePickerStyle}>
            <InputBox
              type="date"
              placeholder="dd-mm-yyyy"
              InputWidth="20%"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              min="1997-01-01"
              max="2030-12-31"
            />

            <SlCalender style={{ cursor: "pointer" }} size={32} />
          </div>
        </div>
        <RadioSelectorOptions
          labelTitle="Gender"
          star="*"
          radioName="gender"
          options={[
            { value: "male", label: "Male " },
            { value: "female", label: "Female" },
            { value: "transgender", label: "Transgender" },
          ]}
          selectedValue={bpscData.gender}
          onChange={(inputValue) => handleChangeText("gender", inputValue)}
        />
      </div>
      <div className={styles.section2}>
        <hr style={{ width: "100%" }} />
        <h3>Section 2</h3>
        <RadioSelectorOptions
          labelTitle="Are you citizen of India"
          star="*"
          radioName="citizenIndia"
          options={[
            { value: "true", label: "Yes " },
            { value: "false", label: "No" },
          ]}
          selectedValue={bpscData.isCitizenIndia}
          onChange={(inputValue) =>
            handleChangeText("isCitizenIndia", inputValue)
          }
        />
        <RadioSelectorOptions
          labelTitle="Are you citizen of Bihar"
          star="*"
          radioName="citizenbihar"
          options={[
            { value: "true", label: "Yes " },
            { value: "false", label: "No" },
          ]}
          selectedValue={bpscData.isParmaBihar}
          onChange={(inputValue) =>
            handleChangeText("isParmaBihar", inputValue)
          }
        />
        <RadioSelectorOptions
          labelTitle=" Do you have any reserved Category"
          star="*"
          radioName="reservedCat"
          options={[
            { value: "true", label: "Yes " },
            { value: "false", label: "No" },
          ]}
          selectedValue={bpscData.doReservedCat}
          onChange={(inputValue) =>
            handleChangeText("doReservedCat", inputValue)
          }
        />
        <SelectorDropDown
          label="If yes then select category"
          star="*"
          options={[
            { value: "", label: "select category" },
            { value: "obc", label: "OBC" },
            { value: "sc", label: "SC" },
          ]}
        />
        <SelectorDropDown
          label="Name of Caste"
          star="*"
          options={[
            { value: "", label: "select caste" },
            { value: "obc", label: "OBC" },
            { value: "sc", label: "SC" },
          ]}
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
          selectedValue={bpscData.isSelectId}
          onChange={(inputValue) => handleChangeText("isSelectId", inputValue)}
        />
        <FormInput
          labelTitle="Aadhar No.)"
          placeHolder="Enter selected Aadhar No."
          onChange={(inputValue) =>
            handleChangeText("selectedIdNumber", inputValue)
          }
        />
      </div>
      <div className={styles.section3}>
        <hr style={{ width: "100%" }} />
        <h3>Section 3</h3>
        <RadioSelectorOptions
          labelTitle="Are you Physically disabled"
          star="*"
          radioName="physicallyDisabled"
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
          selectedValue={bpscData.arePhysicallyDisabled}
          onChange={(inputValue) =>
            handleChangeText("arePhysicallyDisabled", inputValue)
          }
        />
        <RadioSelectorOptions
          labelTitle="If yes, Nature of disability"
          star="*"
          radioName="physicallyDisabledYes"
          options={[
            { value: "visually", label: "1-Visually disabled" },
            { value: "hearing", label: "2-Hearing disabled" },
            { value: "ortho", label: "3-Orthopedically disabled" },
            {
              value: "mentally",
              label: "4-Mentally disabled/ Multiple disabled",
            },
          ]}
          selectedValue={bpscData.natureOfDisability}
          onChange={(inputValue) =>
            handleChangeText("natureOfDisability", inputValue)
          }
        />
        <RadioSelectorOptions
          labelTitle="Percentage of disability ( Applicable for Person With Bentchmark
            Disability)"
          radioName="PercentagephysicallyDisabledYes"
          options={[{ value: "visually", label: "More or Equal to 40%" }]}
          selectedValue={bpscData.percentageOfDisability}
          onChange={(inputValue) =>
            handleChangeText("percentageOfDisability", inputValue)
          }
        />
        <RadioSelectorOptions
          labelTitle="Required Scribe"
          radioName="reqScribe"
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
          selectedValue={bpscData.isRequiredScribe}
          onChange={(inputValue) =>
            handleChangeText("isRequiredScribe", inputValue)
          }
        />
        <RadioSelectorOptions
          labelTitle="Are you Bihar government Employee"
          radioName="BiharGovEmployee"
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
          selectedValue={bpscData.areExBiharEmployee}
          onChange={(inputValue) =>
            handleChangeText("areExBiharEmployee", inputValue)
          }
        />
        <FormInput
          labelTitle="If Yes,"
          placeHolder="Enter Degination"
          onChange={(inputValue) =>
            handleChangeText("ifYesDegination", inputValue)
          }
        />
        <FormInput
          labelTitle="Office"
          placeHolder="Enter Office"
          onChange={(inputValue) => handleChangeText("ifYesOffice", inputValue)}
        />
        <FormInput
          labelTitle="Place"
          placeHolder="Enter Place"
          onChange={(inputValue) => handleChangeText("ifYesPlace", inputValue)}
        />
        <RadioSelectorOptions
          labelTitle="Are you Ex-serviceman"
          radioName="exServiceman"
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
          selectedValue={bpscData.areYouExServiceman}
          onChange={(inputValue) =>
            handleChangeText("areYouExServiceman", inputValue)
          }
        />
        <RadioSelectorOptions
          labelTitle="Do you claim age relexation in upper age limit?"
          radioName="agerelex"
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
          selectedValue={bpscData.doYouClaimUpperAge}
          onChange={(inputValue) =>
            handleChangeText("doYouClaimUpperAge", inputValue)
          }
        />
        <RadioSelectorOptions
          labelTitle="Are you grandson of freedom fighter"
          radioName="grandSon"
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
          selectedValue={bpscData.areYouGrandSonFreedomFighter}
          onChange={(inputValue) =>
            handleChangeText("areYouGrandSonFreedomFighter", inputValue)
          }
        />
        <RadioSelectorOptions
          labelTitle="Do you have minimum required eligibility criteria as mentioned in the advertisement?"
          radioName="minEligibilityCriteria"
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
          selectedValue={bpscData.doMinEligibility}
          onChange={(inputValue) =>
            handleChangeText("doMinEligibility", inputValue)
          }
        />
      </div>
      <div className={styles.section4}>
        <hr style={{ width: "100%" }} />
        <h3>Section 4</h3>
        <p style={{ fontWeight: "600" }}>Address of Correspondance</p>
        <FormInput
          star="*"
          labelTitle="Address Line 1"
          placeHolder="Address Line 1"
          onChange={(inputValue) =>
            handleChangeText("addressLine1", inputValue)
          }
        />
        <FormInput
          labelTitle="Address Line 2"
          placeHolder="Address Line 2"
          onChange={(inputValue) =>
            handleChangeText("addressLine2", inputValue)
          }
        />

        <FormInput
          labelTitle="Address Line 3"
          placeHolder="Address Line 3"
          onChange={(inputValue) =>
            handleChangeText("addressLine3", inputValue)
          }
        />
        <SelectorDropDown
          label="State"
          star="*"
          options={[
            { value: "", label: "select state" },
            { value: "bihar", label: "Bihar" },
            { value: "west bengal", label: "West Bengal" },
          ]}

          // selectedValue={selectedStateValue}
          // onChange={handleStateChange}
        />
        <SelectorDropDown
          label="District"
          star="*"
          options={[
            { value: "", label: "select district" },

            { value: "siwan", label: "Siwan" },
            { value: "gopalganj bengal", label: "Gopalganj" },
          ]}

          // selectedValue={selectedStateValue}
          // onChange={handleStateChange}
        />
        <SelectorDropDown
          label="Block"
          star="*"
          options={[
            { value: "", label: "select block" },

            { value: "siwan", label: "Siwan" },
          ]}

          // selectedValue={selectedStateValue}
          // onChange={handleStateChange}
        />
        <FormInput
          star="*"
          labelTitle="Enter Pincode"
          placeHolder="Enter Pincode"
        />
        <hr style={{ width: "100%" }} />
        <p style={{ fontWeight: "600" }}>Permanent Address</p>
        <div className={styles.addressLine}>
          <div className={styles.addressLine1label}>
            <label htmlFor="fname">Check if both Addresses are same</label>
          </div>
          <div className={styles.addressLineinput}>
            <input type="checkbox" />
          </div>
        </div>
        <FormInput
          star="*"
          labelTitle="Address Line 1"
          placeHolder="Address Line 1"
        />
        <FormInput labelTitle="Address Line 2" placeHolder="Address Line 2" />
        <FormInput labelTitle="Address Line 3" placeHolder="Address Line 3" />
        <SelectorDropDown
          label="State"
          star="*"
          options={[
            { value: "bihar", label: "Bihar" },
            { value: "west bengal", label: "West Bengal" },
          ]}

          // selectedValue={selectedStateValue}
          // onChange={handleStateChange}
        />
        <SelectorDropDown
          label="District"
          star="*"
          options={[
            { value: "siwan", label: "Siwan" },
            { value: "gopalganj bengal", label: "Gopalganj" },
          ]}

          // selectedValue={selectedStateValue}
          // onChange={handleStateChange}
        />
        <SelectorDropDown
          label="Block"
          star="*"
          options={[{ value: "siwan", label: "Siwan" }]}

          // selectedValue={selectedStateValue}
          // onChange={handleStateChange}
        />
        <FormInput
          star="*"
          labelTitle="Enter Pincode"
          placeHolder="Enter Pincode"
        />
      </div>
      <div className={styles.section5}>
        <hr style={{ width: "100%" }} />
        <h3>Section 5</h3>
        <RadioSelectorOptions
          labelTitle="Marital Status"
          radioName="maritalStatus"
          options={[
            { value: "married", label: "Married" },
            { value: "unmarried", label: "Unmarried" },
            { value: "others", label: "Otheres" },
          ]}
          selectedValue={bpscData.maritalStatus}
          onChange={(inputValue) =>
            handleChangeText("maritalStatus", inputValue)
          }
        />
        <RadioSelectorOptions
          labelTitle="Weather you read and write in Hindi?"
          radioName="readWriteHindi"
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
          selectedValue={bpscData.doReadWriteHindi}
          onChange={(inputValue) =>
            handleChangeText("doReadWriteHindi", inputValue)
          }
        />
      </div>

      <div className={styles.NextButton}>
        <Button
          type="button"
          title="Next"
          padding="8px 25px "
          backgroundColor="#007bff"
          color="white"
          fontSize="16px"
          fontWeight="500"
        />
      </div>
      <div className={styles.section6}>
        <hr style={{ width: "100%" }} />
        <h3>Section 6</h3>
        <Table />
      </div>

      <div className={styles.section7}>
        <hr style={{ width: "100%" }} />
        <h3>Section 7</h3>
        <RadioSelectorOptions
          labelTitle="Present/Previous last employment detail"
          radioName="past_present_employment"
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
          selectedValue={bpscData.lastEmployer}
          onChange={(inputValue) =>
            handleChangeText("lastEmployer", inputValue)
          }
        />
      </div>

      {/* <div className={styles.section9}>
      <hr style={{ width: "100%" }} />
        <h3>Section 9</h3>
        
        <table>
            <tbody>
                <thead>
                    <tr>
                        <th>Name of Post</th>
                        <th>Permanent/Temporary</th>
                        <th>Date of Joining</th>
                        <th>Date of Leaving</th>
                        <th>Reason for Leaving</th>
                        <th>Salary</th>
                        <th>Appointing Officer (Degination)</th>
                    </tr>
                </thead>
               <tr>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    
                </tr>
            </tbody>
        </table>
      </div>
      <TableResuable/> */}
    </form>
  );
}

export default FormFirstPage;

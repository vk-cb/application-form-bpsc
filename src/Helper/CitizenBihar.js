const [citizenBihar, setCitizenBihar] = useState(false);
const [residentCertificate, setResidentCertificate] = useState(null);
const [certificateNumber, setCertificateNumber] = useState("");
<RadioSelectorOptions
  labelTitle="Are you citizen of Bihar"
  star="*"
  radioName="citizenBihar"
  options={[
    { value: "true", label: "Yes" },
    { value: "false", label: "No" },
  ]}
  onChange={(e) => setCitizenBihar(e.target.value === "true")}
/>

// here new data
{citizenBihar && (
    <>
      <div className={styles.fileUpload}>
        <label htmlFor="residentCertificate">Upload Resident Certificate</label>
        <input
          type="file"
          id="residentCertificate"
          onChange={(e) => setResidentCertificate(e.target.files[0])}
        />
      </div>
      <FormInput
        labelTitle="Certificate Number"
        placeHolder="Enter Certificate Number"
        star="*"
        value={certificateNumber}
        onChange={(e) => setCertificateNumber(e.target.value)}
      />
    </>
  )}
  

  // section 2
isCitizenIndia: "",
isParmaBihar: "",
doReservedCat: "",
chooseCategory: "",
isSelectId: "",
selectedIdNumber: "",
residentCertificate: citizenBihar ? residentCertificate : null,
certificateNumber: citizenBihar ? certificateNumber : "",
// ... (other properties)

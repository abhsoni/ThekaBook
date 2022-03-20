import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function PartyPayment(props) {
  const {
    paidTo,
    setPaidTo,
    paidBy,
    setPaidBy,
    paidAmount,
    setPaidAmount,
    pettyPayment,
    setPettyPayment,
  } = props;
  const [showAddPettyPayment, setAddPettyPayment] = useState(false);
  const addPettyPaymentButton = (
    <button
      style={{
        border: "none",
        textAlign: "left",
        background: "#ffffff",
      }}
      onClick={() => setAddPettyPayment(true)}
    >
      <h3 style={{ marginTop: "24px", color: "#F9C710" }}>
        <i class="bi bi-plus-circle"></i>&nbsp;&nbsp; Add Petty Payments
      </h3>
    </button>
  );
  const addPettyPaymentBox = (
    <div>
      <h3 style={{ marginTop: "24px" }}>Add Petty Payment</h3>
      <div className="row dropdown mt-3 g-0">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Amount"
            variant="outlined"
            type="number"
            value={pettyPayment}
            onChange={(event) => {
              setPettyPayment(event.target.value);
            }}
          />
        </Box>
      </div>
    </div>
  );

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <section>
      <div className="project">
        <div className="container">
          <div className="card">
            <h3>Select Party</h3>
            <div className="row dropdown mt-2 g-0">
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Milestone
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Select Milestone"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Vendor</MenuItem>
                    <MenuItem value={20}>Vendor</MenuItem>
                    <MenuItem value={30}>Vendor</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <h3 style={{ marginTop: "24px" }}>Paid to</h3>
              <div className="row dropdown mt-2 g-0">
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="Enter Name"
                    variant="outlined"
                    value={paidTo}
                    onChange={(event) => {
                      setPaidTo(event.target.value);
                    }}
                  />
                </Box>
              </div>
              <h3 style={{ marginTop: "24px" }}>Paid by</h3>
              <div className="row dropdown mt-2 g-0">
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="Enter Name"
                    variant="outlined"
                    value={paidBy}
                    onChange={(event) => {
                      setPaidBy(event.target.value);
                    }}
                  />
                </Box>
              </div>
              <h3 style={{ marginTop: "24px" }}>Paid Amount</h3>
              <div className="row dropdown mt-2 g-0">
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="Amount"
                    variant="outlined"
                    type="number"
                    value={paidAmount}
                    onChange={(event) => {
                      setPaidAmount(event.target.value);
                    }}
                  />
                </Box>
              </div>
              {showAddPettyPayment ? addPettyPaymentBox : addPettyPaymentButton}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PartyPayment;

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function AddPayment(props) {
  const { item, setItem, qty, setQty, payment, setPayment } = props;
  const [showAddPaymentBox, setShowAddPaymentBox] = useState(false);

  const addPaymentsButton = (
    <button
      style={{
        border: "none",
        textAlign: "left",
        background: "#ffffff",
        paddingLeft: "0",
      }}
      onClick={() => setShowAddPaymentBox(true)}
    >
      <h3 style={{ marginTop: "24px", color: "#F9C710" }}>
        <i class="bi bi-plus-circle"></i>&nbsp;&nbsp; Add Payments
      </h3>
    </button>
  );
  const addPaymentBox = (
    <div>
      <h3 style={{ marginTop: "24px" }}>Add Payment</h3>
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
            value={payment}
            onChange={(event) => {
              setPayment(event.target.value);
            }}
          />
        </Box>
      </div>
    </div>
  );

  return (
    <section>
      <div className="project">
        <div className="container">
          <div className="card">
            <h3>Select Project Site</h3>
            <div className="row align-items-center g-0 mt-1">
              <div className="col-2 circle">
                <i class="bi bi-check-lg"></i>
              </div>
              <div className="col-10 pt-1">
                <a className="a">Material Recived Note (MRN)</a>
              </div>
            </div>
            <div className="row align-items-center g-0 mt-2">
              <div className="col-2 circle">
                <i class="bi bi-check-lg"></i>
              </div>
              <div className="col-10 pt-1">
                <a className="a">Material Issue Note</a>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-8 col-lg-4">
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
                    label="Item"
                    variant="outlined"
                    value={item}
                    onChange={(event) => {
                      setItem(event.target.value);
                    }}
                  />
                </Box>
              </div>
              <div className="col-4 col-lg-2 ">
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
                    label="Qty"
                    variant="outlined"
                    type="number"
                    value={qty}
                    onChange={(event) => {
                      setQty(event.target.value);
                    }}
                  />
                </Box>
              </div>
            </div>
            {showAddPaymentBox ? addPaymentBox : addPaymentsButton}
          </div>
        </div>
      </div>
    </section>
  );
}
export default AddPayment;

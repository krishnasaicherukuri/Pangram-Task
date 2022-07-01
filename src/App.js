import React, { useState } from "react";
import "./App.css";
import { Card, Row, Col, Button, Input, Label } from "reactstrap";
import TimezoneSelect from "react-timezone-select";
import {
  format,
  addDays,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks,
  subDays,
} from "date-fns";
import moment from "moment";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

function App() {
  const [selectedTimezone, setSelectedTimezone] = useState({});

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const curr = new Date(); // get current date
  const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
  const firstday = new Date(curr.setDate(first));

  const [startDate, setStartDate] = useState(firstday);

  const changeWeekHandle = (btnType) => {
    if (btnType === "prev") {
      setStartDate((date) => {
        return subDays(date, 7);
      });
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      setStartDate((date) => {
        return addDays(date, 7);
      });
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  const Dates = () => {
    return (
      <>
        <Row>
          <Col>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              8:00 AM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              8:30 AM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              9:00 AM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              9:30 AM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              10:00 AM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              10:30 AM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              11:00 AM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              11:30 AM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              12:00 PM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              12:30 PM
            </Label>
          </Col>
        </Row>
        <Row>
          <Col>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              1:00 PM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              1:30 PM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              2:00 PM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              2:30 PM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              3:00 PM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              3:30 PM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              4:00 PM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              4:30 PM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              5:00 PM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              5:30 PM
            </Label>
          </Col>
        </Row>
        <Row>
          <Col>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              6:00 PM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              6:30 PM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              7:00 PM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              7:30 PM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              8:00 PM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              8:30 PM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              9:00 PM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              9:30 PM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              10:00 PM
            </Label>
            <Input type="checkbox" />
            <Label className="checkboxStyle" check>
              10:30 PM
            </Label>
          </Col>
        </Row>
      </>
    );
  };

  function disablePrevDates(startDate) {
    const todayTimeStamp = moment().unix();
    const date = moment(startDate).unix();
    return todayTimeStamp > date;
  }

  const renderCells = () => {
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = "d ";
    const dateFormatMonth = " MMM ";
    const dateFormatWeek = "EEE";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    let formattedDateMonth = "";
    let formattedDateWeek = "";
    // while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      console.log(day);
      formattedDate = format(day, dateFormat);
      formattedDateMonth = format(day, dateFormatMonth);
      formattedDateWeek = format(day, dateFormatWeek);
      days.push(
        <Row style={{ borderBottom: " 1px solid" }}>
          <Col xs="1">
            <div key={day} className="mt-5">
              <div style={{ fontSize: "20px", color: "red" }}>
                {formattedDateWeek}
              </div>
              <div className="">{formattedDate}</div>
              <div>{formattedDateMonth}</div>
            </div>
          </Col>

          {disablePrevDates(day) ? (
            <Col className="mt-5">Past</Col>
          ) : (
            <Col className="mt-5">{Dates()}</Col>
          )}
        </Row>
      );
      day = addDays(day, 1);
    }
    rows.pop();
    rows.push(<div key={day}>{days}</div>);
    days = [];
    // }

    window.console.log(startDate, new Date());

    return <div className=""> {rows}</div>;
  };

  return (
    <div className="">
      <Card style={{ padding: "1rem" }}>
        {" "}
        <Row>
          <Col className="d-flex justify-content-start">
            <Button
              outline
              color="info"
              onClick={() => changeWeekHandle("prev")}
            >
              <MdArrowBackIosNew /> Prev
            </Button>
          </Col>
          <Col className="d-flex justify-content-center">
            {" "}
            {new Date().toLocaleString()}
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              outline
              color="info"
              onClick={() => changeWeekHandle("next")}
            >
              Next <MdArrowForwardIos />
            </Button>
          </Col>
        </Row>
        <h4 className="mt-3">Time zone:</h4>
        <TimezoneSelect
          value={selectedTimezone}
          onChange={setSelectedTimezone}
        />
        <div>{renderCells()}</div>
      </Card>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import { Grid } from "@material-ui/core";
// import {
//   format,
//   addDays,
//   lastDayOfWeek,
//   getWeek,
//   addWeeks,
//   subWeeks,
//   subDays,
// } from "date-fns";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
// import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     "& > *": {
//       margin: "20px 20px 0px 20px",
//       width: theme.spacing(16),
//       height: "auto",
//     },
//   },
//   paper: {
//     width: "100%",
//   },
//   calender: {
//     float: "right",
//     margin: "20px 10px",
//   },
//   heading: {
//     marginLeft: "20px",
//   },
//   layout: {
//     margin: "40px 20px",
//   },
//   icon: {
//     border: "1px solid #ADD8E6",
//     padding: "5px",
//     color: "#0000FF",
//   },
//   Dateicon: {
//     display: "inline-block",
//     border: "1px solid #ADD8E6",
//     padding: "5px",
//     color: "#0000FF",
//   },
//   view: {
//     padding: "5px",
//     width: "120px",
//   },
//   week: {
//     color: "#0000FF",
//     textTransform: "uppercase",
//     fontWeight: "600",
//     fontSize: "18px",
//   },
//   day: {
//     color: "#000000c9",
//     fontSize: "24px",
//   },
//   main: {
//     background: "#8080802b",
//     padding: "0px 20px",
//   },
// }));

// export default function App() {
//   const classes = useStyles();
//   const [currentMonth, setCurrentMonth] = useState(new Date());
//   const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
//   const [startDate, setStartDate] = useState(new Date());

//   const changeWeekHandle = (btnType) => {
//     if (btnType === "prev") {
//       setStartDate((date) => {
//         return subDays(date, 7);
//       });
//       setCurrentMonth(subWeeks(currentMonth, 1));
//       setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
//     }
//     if (btnType === "next") {
//       setStartDate((date) => {
//         return addDays(date, 7);
//       });
//       setCurrentMonth(addWeeks(currentMonth, 1));
//       setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
//     }
//   };
//   const ExampleCustomInput = ({ value, onClick }) => {
//     return <CalendarTodayIcon className={classes.Dateicon} onClick={onClick} />;
//   };

//   const renderCells = () => {
//     const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
//     const dateFormat = "d ";
//     const dateFormatMonth = " MMM ";
//     const dateFormatWeek = "EEE";
//     const rows = [];
//     let days = [];
//     let day = startDate;
//     let formattedDate = "";
//     let formattedDateMonth = "";
//     let formattedDateWeek = "";
//     // while (day <= endDate) {
//     for (let i = 0; i < 7; i++) {
//       console.log(day);
//       formattedDate = format(day, dateFormat);
//       formattedDateMonth = format(day, dateFormatMonth);
//       formattedDateWeek = format(day, dateFormatWeek);
//       days.push(
//         <div
//           key={day}
//           className={classes.view}
//           style={{ display: "inline-block" }}
//         >
//           <div className={classes.week}>{formattedDateWeek}</div>
//           <div className={classes.day}>{formattedDate}</div>
//           <div>{formattedDateMonth}</div>
//         </div>
//       );
//       day = addDays(day, 1);
//     }
//     rows.pop();
//     rows.push(<div key={day}>{days}</div>);
//     days = [];
//     // }

//     return (
//       <div className={classes.main}>
//         <Grid container>
//           <Grid item lg={2}>
//             <div>
//               <h4>Rooms & Rates</h4>
//             </div>
//           </Grid>
//           <Grid item lg={10}>
//             <div>{rows}</div>
//           </Grid>
//         </Grid>
//       </div>
//     );
//   };
//   return (
//     <>
//       <div className={classes.root}>
//         <Paper className={classes.paper} variant="outlined" elevation={0}>
//           <Grid container spacing={2}>
//             <Grid item lg={8}>
//               <div className={classes.calender}>
//                 <div style={{ display: "inline-block" }}>
//                   <ArrowBackIosIcon
//                     onClick={() => changeWeekHandle("prev")}
//                     className={classes.icon}
//                   />
//                 </div>
//                 <div style={{ display: "inline-block" }}>
//                   <DatePicker
//                     selected={startDate}
//                     onChange={(date) => setStartDate(date)}
//                     customInput={<ExampleCustomInput />}
//                   />
//                 </div>
//                 <div style={{ display: "inline-block" }}>
//                   <ArrowForwardIosIcon
//                     onClick={() => changeWeekHandle("next")}
//                     className={classes.icon}
//                   />
//                 </div>
//               </div>
//             </Grid>
//           </Grid>
//           <div className={classes.layout}>{renderCells()}</div>
//         </Paper>
//       </div>
//     </>
//   );
// }

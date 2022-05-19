import { useContext, useState } from "react";
import Button from "../../components/atoms/button";
import TextField from "../../components/atoms/textfield";
import Typography from "../../components/atoms/typography";
import Template from "../../components/templates/template";

import { useFormik } from "formik";
import * as Yup from "yup";
import { generalContext } from "../../store/store";
import { addTasks } from "../../store/tasksAction";

function HomePage() {
  const { tasksState, dispatchTasks } = useContext(generalContext);

  const [timer, setTimer] = useState();
  const [timerValue, setTimerValue] = useState(0);
  const [startDate, setStartDate] = useState();
  const [disabled, setDisabled] = useState(false);
  const [task, setTask] = useState({});

  const validationSchema = Yup.object().shape({
    description: Yup.string().required("Description required"),
  });

  const formik = useFormik({
    initialValues: {
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      timerHandler(true);
      setDisabled(true);
      let description = values.description;
      let startTime = new Date().toLocaleString("ur").slice(10, 18);
      setStartDate(new Date());
      setTask({
        description,
        startTime,
      });
    },
  });

  const timerHandler = (flag) => {
    if (flag) {
      let a = setInterval(() => {
        setTimerValue((prevValue) => prevValue + 1);
        console.log(timerValue);
      }, 1000);

      setTimer(a);
    } else {
      clearInterval(timer);
      let endTime = new Date();
      let duration = new Date(endTime.getTime() - startDate.getTime()) / 1000;

      console.log(duration);
      dispatchTasks(
        addTasks({
          ...task,
          duration: duration,
          endTime: endTime.toLocaleString("ur").slice(10, 18),
        })
      );
      setTimerValue(0);
      setTask({});
      setDisabled(false);
    }
  };

  const { handleSubmit, handleChange, errors } = formik;

  return (
    <>
      <Template className="py-5 space-y-5">
        <div className="w-full bg-[#F7F7F7] p-5 md:px-[100px] rounded-lg">
          <div className="flex row space-x-5">
            <div className="flex row items-center space-x-1 ">
              <Typography variant="strong">Started at:</Typography>
              <Typography variant="text">{task.startTime}</Typography>
            </div>
            <div className="flex row items-center space-x-1">
              <Typography variant="strong">Timer:</Typography>
              <Typography variant="text">{timerValue}</Typography>
            </div>
          </div>
          <form onSubmit={handleSubmit} id="form">
            <div className="flex flex-col py-2">
              <Typography variant="text" className="text-sm">
                Task description:
              </Typography>
              <TextField
                placeholder="Went for a run"
                name="description"
                onChange={handleChange}
              />
            </div>
            {errors.description && (
              <Typography variant="text" className="text-red-600">
                {errors.description}
              </Typography>
            )}
          </form>
          <div className="flex justify-end">
            {!disabled ? (
              <Button
                variant="blue"
                type="submit"
                form="form"
                disabled={disabled}
              >
                START
              </Button>
            ) : (
              <Button variant="white" onClick={() => timerHandler(false)}>
                STOP
              </Button>
            )}
          </div>
        </div>

        <Typography variant="h1" className="font-bold">
          Previous Tasks
        </Typography>

        <div className="w-full bg-[#F7F7F7] p-5 rounded-lg  hidden md:block">
          <div className="grid grid-cols-2">
            <Typography variant="strong">Description</Typography>
            <div className="grid grid-cols-3">
              <Typography variant="strong">Start Time</Typography>
              <Typography variant="strong">End Time</Typography>
              <Typography variant="strong">Duration</Typography>
            </div>
          </div>
          {tasksState.tasks.map((task, idx) => (
            <div
              className="grid grid-cols-2 border-b-2 border-slate-300 py-3"
              key={idx}
            >
              <Typography variant="text">{task.description}</Typography>
              <div className="grid grid-cols-3">
                <Typography variant="text">{task.startTime}</Typography>
                <Typography variant="text">{task.endTime}</Typography>
                <Typography variant="text">{task.duration}</Typography>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full bg-[#F7F7F7] p-5 rounded-lg  block md:hidden">
          {tasksState.tasks.map((task, idx) => (
            <div
              className="grid grid-rows-2 border-b-2 border-slate-300 py-2"
              key={idx}
            >
              <div>
                <Typography variant="strong">Description</Typography>
                <Typography variant="text">{task.description}</Typography>
              </div>
              <div className="grid grid-cols-3 ">
                <div className="flex flex-col">
                  <Typography variant="strong">Start Time</Typography>
                  <Typography variant="text">{task.startTime}</Typography>
                </div>
                <div className="flex flex-col">
                  <Typography variant="strong">End Time</Typography>
                  <Typography variant="text">{task.endTime}</Typography>
                </div>
                <div className="flex flex-col">
                  <Typography variant="strong">Duration</Typography>
                  <Typography variant="text">{task.duration}</Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Template>
    </>
  );
}

export default HomePage;

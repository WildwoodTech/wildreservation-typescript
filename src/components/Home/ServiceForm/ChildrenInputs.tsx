import { mainFormChangeStudentNumberHandler } from "../../../utils/formReducers/mainFormReducer";

interface Props {
  mainFormDispatch: React.Dispatch<any>;
}

const ChildrenInputs = (props: Props) => {
  return (
    <>
      <label htmlFor="nursery">How many 0 - 23 months old?</label>
      <select
        onChange={(e) =>
          mainFormChangeStudentNumberHandler(e, props.mainFormDispatch)
        }
        name="nursery"
        className="inputs__control"
        defaultValue=""
        required
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <label htmlFor="twoyears">How many 2 year olds?</label>
      <select
        onChange={(e) =>
          mainFormChangeStudentNumberHandler(e, props.mainFormDispatch)
        }
        name="twoyears"
        className="inputs__control"
        defaultValue=""
        required
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <label htmlFor="threeyears">How many 3 year olds?</label>
      <select
        onChange={(e) =>
          mainFormChangeStudentNumberHandler(e, props.mainFormDispatch)
        }
        name="threeyears"
        className="inputs__control"
        defaultValue=""
        required
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <label htmlFor="fouryears">How many 4 year olds?</label>
      <select
        onChange={(e) =>
          mainFormChangeStudentNumberHandler(e, props.mainFormDispatch)
        }
        name="fouryears"
        className="inputs__control"
        defaultValue=""
        required
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <label htmlFor="kindergarten">How many 5 years old - Kindergarten?</label>
      <select
        onChange={(e) =>
          mainFormChangeStudentNumberHandler(e, props.mainFormDispatch)
        }
        name="kindergarten"
        className="inputs__control"
        defaultValue=""
        required
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <label htmlFor="wildlife">How many in 1st - 5th grade?</label>
      <select
        onChange={(e) =>
          mainFormChangeStudentNumberHandler(e, props.mainFormDispatch)
        }
        name="wildlife"
        className="inputs__control"
        defaultValue=""
        required
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </>
  );
};

export default ChildrenInputs;

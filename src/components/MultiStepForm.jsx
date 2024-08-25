import React, { useEffect, useState } from "react";
import FormStep from "./FormStep";
import axios from "axios";
import { fetchMakes, fetchModels } from "../api";

const fetchData = async (endpoint) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/${endpoint}`
  );
  return response.data;
};

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    make: "",
    model: "",
    generation: "",
    engine: "",
    ECU: "",
    year: "",
    gearbox: "",
    fuel: "",
    master_or_slave: "",
    hardware_number: "",
    software_number: "",
    tuning_type: "",
    tunning_options: "",
    archivo: "",
    terms_and_conditions: false,
    no_refund_policy: false,
  });

  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [generations, setGenerations] = useState([]);
  const [engines, setEngines] = useState([]);
  const [ecus, setEcus] = useState([]);
  const [years, setYears] = useState([]);
  const [gearboxes, setGearboxes] = useState([]);
  const [fuels, setFuels] = useState([]);
  const [tuningTypes, setTuningTypes] = useState([]);
  const [tunningOptions, setTunningOptions] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const makesData = await fetchMakes();
        console.log("makesData", makesData);
        setMakes(makesData);
        const modelsData = await fetchModels("models");
        setModels(modelsData);

        const generationsData = await fetchData("generations");
        const enginesData = await fetchData("engines");
        const ecusData = await fetchData("ecus");
        const yearsData = await fetchData("years"); // Asegúrate de que "years" esté en tu API
        // const gearboxesData = await fetchData("gearboxes"); // Asegúrate de que "gearboxes" esté en tu API
        const fuelsData = await fetchData("fuels"); // Asegúrate de que "fuels" esté en tu API
        const tuningTypesData = await fetchData("tuning-types"); // Asegúrate de que "tuning-types" esté en tu API
        const tunningOptionsData = await fetchData("tunning-options");
        setGenerations(generationsData);
        setEngines(enginesData);
        setEcus(ecusData);
        setYears(yearsData);
        // setGearboxes(gearboxesData);
        setFuels(fuelsData);
        setTuningTypes(tuningTypesData);
        setTunningOptions(tunningOptionsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted values:", formValues);
  };

  const renderStepHeader = () => {
    switch (step) {
      case 1:
        return "Vehicle Details";
      case 2:
        return "Tuning Information";
      case 3:
        return "Confirmation";
      default:
        return "";
    }
  };

  const getStepIcon = (stepNumber) => {
    switch (stepNumber) {
      case 1:
        return "fas fa-car"; // Example icon
      case 2:
        return "fas fa-tachometer-alt"; // Example icon
      case 3:
        return "fas fa-check-circle"; // Example icon
      default:
        return "";
    }
  };

  return (
    <div className="container">
      {/* <h1>{renderStepHeader()}</h1> */}
      <div className="step-indicators">
        <div
          className={`step ${
            step === 1 ? "active" : step > 1 ? "completed" : ""
          }`}
        >
          <i className={getStepIcon(1)}></i>
          <span>Vehicle Details</span>
        </div>
        <div
          className={`step ${
            step === 2 ? "active" : step > 2 ? "completed" : ""
          }`}
        >
          <i className={getStepIcon(2)}></i>
          <span>Tuning Information</span>
        </div>
        <div className={`step ${step === 3 ? "active" : ""}`}>
          <i className={getStepIcon(3)}></i>
          <span>Confirmation</span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <FormStep step={step} setStep={setStep}>
            <div className="form-field make-field">
              <label>Make</label>
              <select
                name="make"
                value={formValues.make}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select...</option>
                {makes.map((make) => (
                  <option key={make.id} value={make.id}>
                    {make.attributes.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field model-field">
              <label>Model</label>
              <select
                name="model"
                value={formValues.model}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select...</option>
                {models.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.attributes.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field generation-field">
              <label>Generation</label>
              <select
                name="generation"
                value={formValues.generation}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select...</option>
                {generations.map((generation) => (
                  <option key={generation.id} value={generation.id}>
                    {generation.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field engine-field">
              <label>Engine</label>
              <select
                name="engine"
                value={formValues.engine}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select...</option>
                {engines.map((engine) => (
                  <option key={engine.id} value={engine.id}>
                    {engine.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field ecu-field">
              <label>ECU</label>
              <select
                name="ECU"
                value={formValues.ECU}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select...</option>
                {ecus.map((ecu) => (
                  <option key={ecu.id} value={ecu.id}>
                    {ecu.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field year-field">
              <label>Year</label>
              <select
                name="year"
                value={formValues.year}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select...</option>
                {years.map((year) => (
                  <option key={year.id} value={year.id}>
                    {year.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field gearbox-field">
              <label>Gearbox</label>
              <select
                name="gearbox"
                value={formValues.gearbox}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select...</option>
                {gearboxes.map((gearbox) => (
                  <option key={gearbox.id} value={gearbox.id}>
                    {gearbox.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field fuel-field">
              <label>Fuel</label>
              <select
                name="fuel"
                value={formValues.fuel}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select...</option>
                {fuels.map((fuel) => (
                  <option key={fuel.id} value={fuel.id}>
                    {fuel.name}
                  </option>
                ))}
              </select>
            </div>
          </FormStep>
        )}

        {step === 2 && (
          <FormStep step={step} setStep={setStep}>
            <div className="form-field master-or-slave-field">
              <label>Master or Slave</label>
              <select
                name="master_or_slave"
                value={formValues.master_or_slave}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select...</option>
                <option value="master">Master</option>
                <option value="slave">Slave</option>
              </select>
            </div>
            <div className="form-field hardware-number-field">
              <label>Hardware Number</label>
              <select
                name="hardware_number"
                value={formValues.hardware_number}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select...</option>
                {/* Add options here */}
              </select>
            </div>
            <div className="form-field software-number-field">
              <label>Software Number</label>
              <select
                name="software_number"
                value={formValues.software_number}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select...</option>
                {/* Add options here */}
              </select>
            </div>
            <div className="form-field tuning-type-field">
              <label>Tuning Type</label>
              <select
                name="tuning_type"
                value={formValues.tuning_type}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select...</option>
                {tuningTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
          </FormStep>
        )}

        {step === 3 && (
          <FormStep step={step} setStep={setStep} isLastStep={true}>
            <div className="form-field tunning-options-field full-width">
              <label>Tunning Options</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="tunning_options"
                    value="option1"
                    checked={formValues.tunning_options === "option1"}
                    onChange={handleChange}
                  />
                  Option 1
                </label>
                <label>
                  <input
                    type="radio"
                    name="tunning_options"
                    value="option2"
                    checked={formValues.tunning_options === "option2"}
                    onChange={handleChange}
                  />
                  Option 2
                </label>
                {/* Add more radio options here */}
              </div>
            </div>
            <div className="form-field archivo-field full-width">
              <label>Archivo</label>
              <input
                type="file"
                name="archivo"
                onChange={(e) =>
                  setFormValues({ ...formValues, archivo: e.target.files[0] })
                }
                className="form-file"
              />
            </div>
            <div className="form-field terms-and-conditions-field full-width">
              <label>
                <input
                  type="checkbox"
                  name="terms_and_conditions"
                  checked={formValues.terms_and_conditions}
                  onChange={handleChange}
                />
                Yes, I agree to the terms and conditions.
              </label>
            </div>
            <div className="form-field no-refund-policy-field full-width">
              <label>
                <input
                  type="checkbox"
                  name="no_refund_policy"
                  checked={formValues.no_refund_policy}
                  onChange={handleChange}
                />
                Yes, I agree to the no refund policy.
              </label>
            </div>
          </FormStep>
        )}

        <div className="form-buttons">
          {step > 1 && (
            <button
              type="button"
              className="back"
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
          )}
          {step < 3 && (
            <button
              type="button"
              className="next"
              onClick={() => setStep(step + 1)}
            >
              Next
            </button>
          )}
          {step === 3 && (
            <button type="submit" className="submit">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;

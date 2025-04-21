"use client"

import { useState } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "../styles/RegistrationForm.css"

function SchoolRegistrationForm() {
  const [formData, setFormData] = useState({
    schoolName: "",
    district: "",
    category: "",
    udise: "",
    ebrc: "",
  })

  const [errors, setErrors] = useState({})

  const districts = [
    "Chümoukedima",
    "Dimapur",
    "Kiphire",
    "Kohima",
    "Longleng",
    "Meluri",
    "Mokokchung",
    "Mon",
    "Niuland",
    "Noklak",
    "Peren",
    "Phek",
    "Shamator",
    "Tuensang",
    "Tseminyü",
    "Wokha",
    "Zunheboto",
  ]

  const categories = ["Elementary", "Secondary", "Higher-Secondary", "PM Shri", "NSCBAV", "DA JGUA", "KGBV-IVEBRC"]

  const handleChange = (e) => {
    const { name, value } = e.target
    
    // Special validation for UDISE - only allow numbers and max 11 digits
    if (name === 'udise') {
      const numericValue = value.replace(/\D/g, ''); // Remove any non-digit characters
      if (numericValue.length <= 11) {
        setFormData({
          ...formData,
          [name]: numericValue,
        })
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  return (
    <div className="app-container">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="form-wrapper">
        <p className="form-title">School Registration Form</p>
        
        <div className="form-content">
          <div className="field-row school-name-row">
            <p className="school-name-label">
              School Name <span className="required">*</span>
            </p>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              className={errors.schoolName ? "error" : ""}
              placeholder="Enter school name"
            />
            {errors.schoolName && <div className="error-message">{errors.schoolName}</div>}
          </div>

          <div className="field-row-inline">
            <div className="field-column">
              <p className="district-label">
                District <span className="required">*</span>
              </p>
              <div className="custom-select">
                <select
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className={errors.district ? "error" : ""}
                >
                  <option value="">Select District</option>
                  {districts.map((district, index) => (
                    <option key={index} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>
              {errors.district && <div className="error-message">{errors.district}</div>}
            </div>

            <div className="field-column">
              <p className="category-label">
                Category of School <span className="required">*</span>
              </p>
              <div className="custom-select">
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={errors.category ? "error" : ""}
                >
                  <option value="">Select Category</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              {errors.category && <div className="error-message">{errors.category}</div>}
            </div>
          </div>

          <div className="field-row-inline">
            <div className="field-column">
              <p className="udise-label">
                UDISE (11 digits) <span className="required">*</span>
              </p>
              <input
                type="text"
                id="udise"
                name="udise"
                value={formData.udise}
                onChange={handleChange}
                className={errors.udise ? "error" : ""}
                placeholder="Enter UDISE number"
                maxLength="11"
                pattern="[0-9]*"
                inputMode="numeric"
              />
              {errors.udise && <div className="error-message">{errors.udise}</div>}
            </div>

            <div className="field-column">
              <p className="ebrc-label">
                eBRC <span className="required">*</span>
              </p>
              <input
                type="text"
                id="ebrc"
                name="ebrc"
                value={formData.ebrc}
                onChange={handleChange}
                className={errors.ebrc ? "error" : ""}
                placeholder="Enter eBRC"
              />
              {errors.ebrc && <div className="error-message">{errors.ebrc}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchoolRegistrationForm;
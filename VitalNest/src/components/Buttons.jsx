import { useState } from "react";
import '../styles/Buttons.css'
import '../styles/ButtonIndex.css'
export default function Buttons() {
  const [openIndex, setOpenIndex] = useState(null);

  const buttons = [
   <h2>Vitamin D deficiency</h2>, <h2>Antibiotic resistance</h2>, <h2>Common Cold/Fever</h2>, <h2>Irritation</h2>, <h2>Headache</h2>,
    <h2>Fatigue</h2>, <h2>Muscle Pain</h2>, <h2>Nausea</h2>, <h2>Bellyache</h2>, <h2>Insomnia</h2>
  ];

  return (
    <main className="page">
      <div className="sidebar">
        {buttons.map((title, index) => (
          <div key={index} className="sidebar-item">
            <button
              className="sidebar-btn"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              {title}
              <span className="arrow">→</span>
            </button>

            {openIndex === index && (
              <div className="sidebar-content">
                <input
                  type="text"
                  placeholder={`Type info for ${title}`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}




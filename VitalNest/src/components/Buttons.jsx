import { useState } from "react";
import '../styles/Buttons.css';
import '../styles/ButtonIndex.css';
import TipButton from "./Tipbutton"; 

export default function Buttons() {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      name: "Vitamin D deficiency",
      desc: "To avoid vitamin D deficiency, aim to get regular, moderate sun exposure - depending on your skin tone and location. Include vitamin D-rich foods in your diet such as fatty fish, egg yolks, milk and cereals."
    },
    {
      name: "Antibiotic resistance",
      desc: "To prevent antibiotic resistance, only use antibiotics when prescribed by a healthcare professional. Complete the full course of treatment, even if you feel better. Avoid using leftover antibiotics or sharing them with others."
    },
    {
      name: "Common Cold/Fever",
      desc: "To manage common cold and fever, rest and stay hydrated. Use over-the-counter medications like acetaminophen or ibuprofen to reduce fever and alleviate symptoms. Consult a healthcare professional if symptoms worsen or persist."
    },
    {
      name: "Irritation",
      desc: "To soothe irritation, identify and avoid the irritant. Use gentle skincare products, moisturizers, and avoid scratching the affected area. If irritation persists, seek advice from a healthcare professional."
    },
    {
      name: "Headache",
      desc: "To relieve headaches, stay hydrated, rest in a quiet, dark room, and use over-the-counter pain relievers like ibuprofen or acetaminophen. If headaches are frequent or severe, consult a healthcare professional."
    },
    {
      name: "Fatigue",
      desc: "To combat fatigue, ensure you get enough sleep, maintain a balanced diet, stay hydrated, and engage in regular physical activity. Manage stress through relaxation techniques such as meditation or yoga."
    },
    {
      name: "Muscle Pain",
      desc: "To alleviate muscle pain, rest the affected muscles, apply ice or heat, and use over-the-counter pain relievers like ibuprofen or acetaminophen. Gentle stretching and massage can also help."
    },
    {
      name: "Nausea",
      desc: "To manage nausea, eat small, frequent meals, avoid strong odors, and stay hydrated. Ginger or peppermint tea can help soothe the stomach. If nausea persists, consult a healthcare professional."
    },
    {
      name: "Bellyache",
      desc: "To relieve bellyache, rest and avoid heavy or greasy foods. Drink clear fluids and consider over-the-counter antacids if appropriate. If pain is severe or persistent, seek medical advice."
    },
    {
      name: "Insomnia",
      desc: "To improve insomnia, establish a regular sleep schedule, create a relaxing bedtime routine, and limit exposure to screens before bed. Avoid caffeine and heavy meals in the evening. If insomnia persists, consult a healthcare professional."
    }
  ];

  return (
    <main className="buttons_container">
      <div className="sidebar">
        {data.map((item, index) => (
          <div key={index} className="sidebar-item">
            <button
              className="sidebar-btn"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <h2>{item.name}</h2>
            </button>

            {openIndex === index && (
              <div className="sidebar-content">
                <TipButton name={item.name} desc={item.desc} />
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
    }

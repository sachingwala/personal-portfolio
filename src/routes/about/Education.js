import { educationData } from "../../data/experienceData";

const Education = () => {
  return (
    <section className="education">
      <h2 className="title-font pink-text h2-tag">Education</h2>
      {educationData.map((info, index) => (
        <section key={index}>
          <h3>B.TECH</h3>
          <p>COMPUTER SCIENCE</p>
          <p>2023</p>
        </section>
      ))}
    </section>
  );
};

export default Education;

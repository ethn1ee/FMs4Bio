"use client";

const About = () => {
  return (
    <section id="about" className="w-[70vw] mx-auto py-[100px] flex flex-col gap-10">
      <h1 className="text-[40px] font-bold text-neutral-100">
        ABOUT
      </h1>
      <div>
        <p>
          Foundation models (FMs) have transformed natural language
          understanding and computer vision. In particular, research on LLMs and
          multi-modal LLMs in these two domains is progressing rapidly, and this
          progress is starting to permeate a broad range of scientific
          disciplines.
        </p>
        <p>
          In this second offering of our workshop, our focus is on FMs for
          advancing biological discoveries. Current efforts have revealed that
          indeed FMs are advancing our ability to conduct biological research in
          silico, formulate interesting hypotheses and even design novel
          molecules, but biology remains complex and is ultimately a
          multi-systems discipline.
        </p>
        <p>
          Biology occurs when molecules come together, governed by an underlying
          physics advancing processes that occur at disparate spatio-temporal
          scales, only probed in the wet laboratories at different conditions,
          at different granularities, at different levels of fidelity, and
          incompletely. This workshop poses and advances the following
          question:&nbsp;
          <strong>
            How can we advance foundation models to transform biological
            research?&nbsp;
          </strong>
          This workshop brings together an interdisciplinary community of
          researchers at various levels of their career to nucleate a community
          that advances this question.
        </p>
      </div>
    </section>
  );
};

export default About;

"use client";

import { ExternalLinkIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useState } from "react";

const Details = () => {
  const details = [
    {
      title: "TOPICS",
      content: `
        <p>In addition to the following research themes, but we encourage novel contributions from researchers that bring different perspectives on the core focus of the workshop:</p>
        <ul>
          <li>Learning from Incomplete Data of Different Modalities</li>
          <li>Grounding Foundation Models in Knowledge Beyond the Data</li>
          <li>Reconciling Disparate Spatio-temporal scale and Varying Fidelity in Multimodal Data</li>
          <li>Beyond Prediction: Answering the How and the Why</li>
          <li>Quantifying Confidence of Predictions with Foundation Models</li>
        </ul>
      `,
    },
    {
      title: "FORMAT",
      content: `
        <p>The workshop is planned for a <strong>full day</strong>.</p>
        <p>
          We will structure it into sessions aligned with distinct research themes. 
          Each session will open with a featured invited talk, with the rest focusing on presentations by authors of accepted papers.
          These will vary in length depending on the submission type and reviewer feedback.
          A final session will contain a panel discussion by senior and up-and-coming researchers, focusing on next steps for the community.
        </p>
      `,
    },
    {
      title: "ATTENDANCE",
      content: `
        <p>Invited speakers and other attendees will fall into three groups:</p>
        <ul>
          <li>Foundational AI researchers</li>
          <li>Biological researchers that have started to utilize FMs</li>
          <li>Biological researchers with a track record in ML but not FMs</li>
        </ul>
        <p>
          Based on our first offering at AAAI 2024, which focused on LLMs, successful workshop at AAAI 2024, we expect to attract at least 75 attendees.
          We do not expect to exceed 100 attendees.
        </p>
      `,
    },
    {
      title: "SUBMISSION",
      content: `
        <p>To reflect the disciplinary diversity, we will encourage submissions of varying length:</p>
        <ul>
          <li>1-page position papers</li>
          <li>4-page papers with focus on breaking results, datasets, benchmarks</li>
          <li>6-8-page papers for more detailed investigations</li>
        </ul>
        <p>For author submission inquiries, please contact us at <strong>llms4science@gmail.com.</strong></p>
      `,
    },
  ];

  const [selectedDetail, setSelectedDetail] = useState(null);

  return (
    <section id="details" className="py-[200px] flex gap-10">
      <h1 className="w-[calc((100vw-240px)/4)] text-[40px] font-bold text-neutral-100">
        DETAILS
      </h1>
      <div className="w-[calc((100vw-240px)/2)] flex flex-col">
        {details.map((detail, i) => (
          <ToggleDetail
            key={i}
            title={detail.title}
            content={detail.content}
            selectedDetail={selectedDetail}
            setSelectedDetail={setSelectedDetail}
          />
        ))}
      </div>
    </section>
  );
};

const ToggleDetail = ({
  title,
  content,
  selectedDetail,
  setSelectedDetail,
}) => {
  const isSelected = selectedDetail === title;

  const handleClick = () => {
    if (isSelected) {
      setSelectedDetail(null);
      return;
    }
    setSelectedDetail(title);
  };

  return (
    <div className="border-t-2 border-neutral-100 overflow-hidden">
      <motion.div
        onClick={handleClick}
        whileHover={{ gap: isSelected ? "12px" : "20px" }}
        className="flex gap-3 items-center py-[24px] cursor-pointer"
      >
        <motion.div animate={{ rotate: isSelected ? 90 : 0 }}>
          <ChevronRightIcon className="h-[24px] w-[24px] text-neutral-200" />
        </motion.div>
        <h2 className="text-[24px] font-bold">{title}</h2>
      </motion.div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isSelected ? "auto" : 0 }}
        className="pl-[36px]"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default Details;

"use client";

const Organizers = () => {
  const workshopCommittee = [
    {
      name: "Amarda Shehu",
      school: "George Mason University",
      email: "amarda@gmu.edu",
    },
    {
      name: "Yana Bromberg",
      school: "Emory University",
      email: "yana@bromberglab.org",
    },
    {
      name: "Liang Zhao",
      school: "Emory University",
      email: "liang.zhao@emory.edu",
    },
  ];

  return (
    <section
      id="organizers"
      className="w-[70vw] mx-auto py-[100px] flex flex-col gap-10"
    >
      <h1 className="text-[40px] font-bold text-neutral-100">ORGANIZERS</h1>

      <div className="flex flex-col gap-10">
        {/* <h2 className="text-[24px] font-bold mb-6">WORKSHOP ORGANIZERS</h2> */}
        <div className="flex flex-wrap gap-6">
          {workshopCommittee.map((person, i) => (
            <PeopleCard
              key={i}
              name={person.name}
              school={person.school}
              email={person.email}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const PeopleCard = ({ name, school, email }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="bg-neutral-100 size-[160px] rounded-xl"></div>
      <div className="">
        <h3 className="text-[18px] font-semibold mb-1">{name}</h3>
        <p className="text-[14px] m-0 text-neutral-200">{school}</p>
        <p className="text-[14px] m-0 text-neutral-200">{email}</p>
      </div>
    </div>
  );
};

export default Organizers;

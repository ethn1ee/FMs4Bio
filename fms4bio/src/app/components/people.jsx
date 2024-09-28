"use client";

const People = () => {
  const workshopChair = {
    name: "Amarda Shehu",
    school: "George Mason University",
    email: "amarda@gmu.edu",
  };

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
    <section id="people" className="py-[200px] flex gap-10">
      <h1 className="w-[calc((100vw-240px)/4)] text-[40px] font-bold text-neutral-100">
        PEOPLE
      </h1>

      <div className="w-[calc((100vw-240px)/2)] flex flex-col gap-10">
        <div>
          <h2 className="text-[24px] font-bold mb-6">WORKSHOP CHAIR</h2>
          <PeopleCard
            name={workshopChair.name}
            school={workshopChair.school}
            email={workshopChair.email}
          />
        </div>
        <div>
          <h2 className="text-[24px] font-bold mb-6">WORKSHOP COMITTEE</h2>
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
      </div>
    </section>
  );
};

const PeopleCard = ({ name, school, email }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="bg-neutral-100 size-[160px] rounded-xl"></div>
      <div className="">
        <h3 className="text-[18px] font-semibold mb-2">{name}</h3>
        <p className="text-[14px] m-0 text-neutral-200">{school}</p>
        <p className="text-[14px] m-0 text-neutral-200">{email}</p>
      </div>
    </div>
  );
};

export default People;

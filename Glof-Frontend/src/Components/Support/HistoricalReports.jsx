// src/Components/HistoricalReports.jsx
import React from "react";
import DimTsho from "../../images/dimTsho.jpg";
import chorabariLake from "../../images/chorabariLake.jpg";
import LuggyeTsho from "../../images/luggyeTsho.jpg";
import Peru from "../../images/peru.jpg";
import ZanskarValley from "../../images/ZanskarValley.png";
import BaraShigriGlacier from "../../images/BaraShigriGlacier.png";
const reports = [

  {
   title:" Zanskar Valley, India (2021)",
   image:ZanskarValley,
  description:"In June 2021, a GLOF in the remote Zanskar Valley of Ladakh washed away bridges and parts of roads. The event was linked to rapid glacial melt due to unusually high summer temperatures."
  },
  {
    title:"Bara Shigri Glacier, India (2014)",
    image:BaraShigriGlacier,
  description:"In Himachal Pradesh, meltwater from the Bara Shigri Glacier caused a lake outburst in 2014. The flood damaged roads and cut off several villages in the Spiti Valley for days."
  },
 
  {
    title: "Chorabari Lake, India (2013)",
    image: chorabariLake,
    description:
      "In June 2013, heavy rainfall and rapid snowmelt caused Chorabari Lake in Uttarakhand to overflow. The resulting flood devastated Kedarnath town, killing thousands. Although partly rainfall-driven, the sudden release of lake water worsened the tragedy.",
  },
  {
    title: "Luggye Tsho, Bhutan (1994)",
    image: LuggyeTsho,
    description:
      "A glacial lake outburst flood from Luggye Tsho in October 1994 killed 21 people and destroyed farmland downstream. The event led Bhutan to start regular lake monitoring and install warning systems in vulnerable valleys.",
  },

  {
    title:"Peru – Lake Palcacocha (1941)",
    image:Peru,
    description:"In 1941, Lake Palcacocha in the Peruvian Andes burst after an ice avalanche fell into it. The flood swept into the city of Huaraz, killing around 1,800 people. It remains one of the deadliest GLOF events in history."

    

  },
   {
    title: "Dig Tsho, Nepal (1985)",
    image: DimTsho,
    description:
      "In August 1985, the Dig Tsho glacial lake in the Khumbu region of Nepal burst its moraine dam. The flood destroyed bridges, farmland, and a nearly completed hydropower plant. This disaster highlighted the risks of glacier retreat in the Himalayas.",
  },
];

function HistoricalReports() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-cyan-800 my-8 text-center">
        Historical GLOF Events
      </h1>
      <div className="flex flex-col gap-10 w-full max-w-4xl">
        {reports.map((report, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row bg-white/80 backdrop-blur rounded-xl shadow-lg border border-cyan-100 overflow-hidden"
          >
            <img
              src={report.image}
              alt={report.title}
              className="w-full md:w-1/3 object-cover h-56 md:h-auto"
              loading="lazy"
            />
            <div className="flex-1 p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-cyan-700 mb-2">{report.title}</h2>
              <p className="text-gray-800 leading-relaxed">{report.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoricalReports;

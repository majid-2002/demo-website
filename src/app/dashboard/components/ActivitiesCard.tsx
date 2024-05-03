import React from "react";

interface ActivityProps {
  activities: string[];
}

const ActivitiesCard = ({ activities }: ActivityProps) => {
  const higlighting = (activity: string) => {
    const allNames = ["Gurpreet Singh", "Aman"];

    const allSentences = [
      "(Dispatch team)",
      "has created",
      "will start added by",
      "will",
      "will be",
      "goods at",
      "(Driver)",
    ];

    const nameMatch = allNames.find((name) => activity.includes(name));

    const sentenceMatch = allSentences.find((sentence) =>
      activity.includes(sentence)
    );

    if (sentenceMatch) {
      activity = activity.replace(
        sentenceMatch,
        `<span style="color: grey">${sentenceMatch}</span>`
      );
    }

    if (nameMatch) {
      activity = activity.replace(
        nameMatch,
        `<span style="color: #1A3875">${nameMatch}</span>`
      );
    }

    return <p key={activity} dangerouslySetInnerHTML={{ __html: activity }} />;
  };

  return (
    <div className="text-black ">
      {activities.map((activity, index) => {
        return (
          <div
            key={activity}
            className={`p-4  text-sm border-t border-x border-gray-300 ${
              index == 0 && "rounded-t-md"
            } ${index == activities.length - 1 && " rounded-b-md border-b"}`}
          >
            {higlighting(activity)}
          </div>
        );
      })}
    </div>
  );
};

export default ActivitiesCard;

import React from "react";

/**
 * Props interface for the ActivitiesCard component
 */
interface ActivityProps {
  activities: string[];
}

/**
 * ActivitiesCard component to display activity items with highlighting
 *
 * @param {ActivityProps} props - Props containing activities data
 * @returns {JSX.Element} JSX representation of the ActivitiesCard component
 */
const ActivitiesCard = ({ activities }: ActivityProps) => {
  const higlighting = (activity: string) => {
    //? Dummy data for names and sentences to highlight the text
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

    //? Find the name and sentence to highlight
    const nameMatch = allNames.find((name) => activity.includes(name));
    const sentenceMatch = allSentences.find((sentence) =>
      activity.includes(sentence)
    );

    //? Highlight the name and sentence
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

    //? Return the highlighted activity item
    return <p key={activity} dangerouslySetInnerHTML={{ __html: activity }} />;
  };

  return (
    <div className="text-black ">
      {activities.slice(0, 4).map((activity, index) => {
        return (
          <div
            key={activity}
            className={`p-4  text-sm border-t border-x border-gray-300 ${
              index == 0 && "rounded-t-md"
            } ${index == activities.length - 1 && " rounded-b-md border-b"}`} //? Add rounded corners to the first and last activity items
          >
            {higlighting(activity)}
          </div>
        );
      })}
    </div>
  );
};

export default ActivitiesCard;

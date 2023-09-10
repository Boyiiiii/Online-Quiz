import React from "react";

export default function FinishScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🙌";
  if (percentage >= 50 && percentage < 80) emoji = "💪";
  if (percentage < 50) emoji = "🤔";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You Scored <strong>{points}</strong> Out Of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Test!
      </button>
    </>
  );
}

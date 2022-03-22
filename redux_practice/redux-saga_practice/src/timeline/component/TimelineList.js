import React from "react";

export default function TimelineList({ timelines, onLike }) {
  return (
    <ul>
      {timelines.map((timeline) => (
        <li key={timeline.id}>
          {timeline.desc}
          <button
            data-id={timeline.id}
            onClick={onLike}
          >{`좋아요(${timeline.likes})`}</button>
        </li>
      ))}
    </ul>
  );
}

import React from 'react';
import { formatDistanceToNowStrict } from 'date-fns';

const TimeSincePost = ({ date }) => {
  const postDate = new Date(date);

  const timeAgo = formatDistanceToNowStrict(new Date(date), { addSuffix: true });

  return (
    <span>
      {timeAgo}
    </span>
  );
};

export default TimeSincePost;
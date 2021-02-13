import React, { Component } from "react";
import "./Feed.css";

import CommunityPost from "./CommunityPost";

class Feed extends Component {
  state = {
    posts: [
      {
        id: "1",
        author: {
          name: "Ahmed AlRamahi",
          avatar: "https://i.pravatar.cc/150?u=a042581f4e29046704d",
        },
        date: "22 Jan 2021",
        content: "Can anyone guide me how to destruct objects in JavaScript?",
        comments: [
          {
            id: 1,
            author: {
              name: "Hani Ali",
              avatar: "https://i.pravatar.cc/150?u=a042581f4e79046704d",
            },
            date: "23 Jan 2021",
            content:
              "I will send the steps in the community room today we can fall along with it  one by one!",
          },
          {
            id: 2,
            author: {
              name: "Lana AlRamahi",
              avatar: "https://i.pravatar.cc/150?u=a048583f9e79046784d",
            },
            date: "23 Jan 2021",
            content:
              "Invite me to the room guys, I want also to learn how to do it!",
          },
        ],
      },
      {
        id: "2",
        author: {
          name: "Lana AlRamahi",
          avatar: "https://i.pravatar.cc/150?u=a048583f9e79046784d",
        },
        date: "18 Jan 2021",
        content:
          "Today I came up with an approach to implement JWT inside my project and I think it was AMAZING!!",
        comments: [
          {
            id: 1,
            author: {
              name: "Hani Ali",
              avatar: "https://i.pravatar.cc/150?u=a042581f4e79046704d",
            },
            date: "18 Jan 2021",
            content:
              "Good Job Lana, we will be happy to get the idea and how to implement it :D",
          },
          {
            id: 2,
            author: {
              name: "Ahmad AlRamahi",
              avatar: "https://i.pravatar.cc/150?u=a042581f4e29046704d",
            },
            date: "19 Jan 2021",
            content:
              "I think i saw the same approach but with different steps about a month ago, let's meet today and discuss it!",
          },
        ],
      },
      {
        id: "3",
        author: {
          name: "Ahmad AlRamahi",
          avatar: "https://i.pravatar.cc/150?u=a042581f4e29046704d",
        },
        date: "10 Jan 2021",
        content:
          "Hello guys, I am trying to find commercial project ideas, any suggestions please?",
        comments: [
          {
            id: 1,
            author: {
              name: "Hani Ali",
              avatar: "https://i.pravatar.cc/150?u=a042581f4e79046704d",
            },
            date: "10 Jan 2021",
            content: "In which commercial field you mean?",
          },
          {
            id: 2,
            author: {
              name: "Lana AlRamahi",
              avatar: "https://i.pravatar.cc/150?u=a048583f9e79046784d",
            },
            date: "21 Jul 2019",
            content:
              "Today's session at Tank by Umniah we got some ideas i will shortlist some of them and send it to you ASAP",
          },
          {
            id: 3,
            author: {
              name: "Ahmad AlRamahi",
              avatar: "https://i.pravatar.cc/150?u=a042581f4e29046704d",
            },
            date: "10 Jan 2021",
            content: "@HaniAli Maybe the tech one",
          },
        ],
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="feed-body">
        {posts.map((post) => (
          <CommunityPost key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default Feed;

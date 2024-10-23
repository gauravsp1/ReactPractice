export const sampleData = [
  {
    id: 1,
    comment: "first comment",
    author: "Gaurav",
    replies: [
      { id: 11, comment: "first comment reply", author: "Ankita", replies: [] },
      {
        id: 12,
        comment: "second comment reply",
        author: "Test",
        replies: [
          {
            id: 121,
            comment: "second comment second reply",
            author: "Gaurav",
            replies: [],
          },
        ],
      },
      //   { id: 13, comment: "third comment reply", author: "Ankita", replies: [] },
    ],
  },
  {
    id: 2,
    comment: "firstsss comment",
    author: "Gaurav",
    replies: [
      { id: 21, comment: "first comment reply", author: "Ankita", replies: [] },
      {
        id: 22,
        comment: "second comment reply",
        author: "Gaurav",
        replies: [
          {
            id: 221,
            comment: "second comment second reply",
            author: "Ankita",
            replies: [],
          },
        ],
      },
      { id: 23, comment: "third comment reply", author: "Gaurav", replies: [] },
    ],
  },
];

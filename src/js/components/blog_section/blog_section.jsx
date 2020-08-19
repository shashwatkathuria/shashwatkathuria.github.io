import React from 'react';
import BlogCard from './blog_card.jsx';

export default class BlogSection extends React.Component {
  constructor(props) {
    super(props);
    this.blogs = [
      {
       title: 'My GSoC Selection & Community Bonding Experience',
       description: 'I’ve been hearing about Google Summer of Code since I have started college and always wondered what it was like, to be part of such a prestigious program, and code in real world projects with mentors……Fast forward three years, I get selected as a GSoC intern for Wikimedia Foundation!! So, starting to contribute is always the toughest period in my opinion, it takes some decent amount of effort to understand the code base, how things work and even more so to give sensible logical contributions apart from the usual UI bugs and testing.',
       imageUrl: './assets/gsoc-outreachy-intro.png',
       blogUrl: 'https://medium.com/@shashwatkathuria7/my-gsoc-selection-community-bonding-experience-280e1bda4f56'
      }, {
        title: 'The Starting: Exploring Error Tracking Techniques',
        description: 'I had a video call for the first time with my mentor Sage Ross and co-intern and had a very nice welcome introduction. We talked about our hobbies, cracked some jokes and officially started the coding journey of our Google Summer of Code projects with Wikimedia Foundation. In the initial days just after the onboarding phase of Google Summer of Code, I started exploring the ways in which errors can be tracked with the help of my mentor. Unlike the past, this time the part I was working on was comparatively very huge and important, and I had to carefully work around the techniques to make sure everything works as expected.',
        imageUrl: './assets/gsoc.png',
        blogUrl: 'https://medium.com/@shashwatkathuria7/the-starting-exploring-error-tracking-techniques-55d9aa38467d'
      }, {
        title: 'An Amazing Architecture: Tracking Errors by Storing only 2 Variables (via Sentry)',
        description: 'The past few days have been F U L L of learnings. I have been using a tool called Sentry, which helps in error monitoring and also learnt some crazy amount of refactoring of code along the way to implement the error tracking system in course data update process due to various APIs. So, continuing with the previous blog, we decided to go forward with the first technique, ‘pass down the course’, only that it was changed to a more generic version, ‘pass down the update service’ as part of my Google Summer of Code project with Wikimedia Foundation.',
        imageUrl: './assets/sentry.png',
        blogUrl: 'https://medium.com/@shashwatkathuria7/an-amazing-architecture-tracking-errors-by-storing-only-2-variables-via-sentry-e90ac7690067'
      }, {
        title: 'GSoC First Phase Completed!🎉🎊',
        imageUrl: './assets/gsoc-first-phase-completed.png',
        description: 'The first phase of my wonderful Google Summer of Code journey with Wikimedia Foundation completes, Yay🎉😄😄!! I learnt a whole lot of new things in this time phase from error tracking techniques to tools like Sentry and Replag to learning even more about refactoring, all thanks to my amazing mentor Sage Ross for helping me throughout. My experience in GSoC till now has been perfect in everything I could have ever wished for, and also, exceeding my expectations!! I got a couple of features merged into production code through this time: Error tracking system for errors occuring in course data update process and Surfacing errors to the UI for informing users about missing data',
        blogUrl: 'https://medium.com/@shashwatkathuria7/gsoc-first-phase-completed-c0d1eaeb9c41'
      }, {
        title: 'Background Jobs & Orphan Locks',
        imageUrl: './assets/sidekiq.png',
        description: 'Sooooo….here I start 🙅‍♂️ the second phase of my Google Summer of Code👨‍💻 internship under Wikimedia Foundation with my mentor Sage Ross. My main focus in these previous 15–20 days has been on orphan locks, which are left behind by unique background jobs when the system abruptly shuts down, runs out of memory, etc which leads to the job crashing and leaving the unique lock belonging to that job behind, which was supposed to be removed along with the job ideally, when the job was supposed to end.',
        blogUrl: 'https://medium.com/@shashwatkathuria7/backgound-jobs-orphan-locks-88fb07e5e4fd'
      }, {
        title: 'GSoC Second Phase Completed!👨‍💻🚀',
        imageUrl: './assets/gsoc-outreachy-update-meetup-1.png',
        description: 'Its been three months since I started my Google Sumer of Code journey and it has been amazing so far. I just completed the second phase and I am gearing up for the final phase now. Recently all of the interns under Wikimedia Foundation had a meetup in which we all talked about our projects and what we have been able to achieve so far. It was super fun, getting to know everyone’s projects in details along with their demos. Also, we were able to get a nice picture in the end😄',
        blogUrl: 'https://medium.com/@shashwatkathuria7/gsoc-second-phase-completed-f2ccf5af44e0'
      }
    ];
  }

  render() {
    return (
      <div class='blog-section'>
        <h1 class='section-title'>Blogs</h1>
        <div class='horizontal-line'></div>
        <div class='blog-cards'>
          { [...this.blogs].reverse().map((blogData, index) => <BlogCard data={blogData} index={index}/> )}
        </div>
      </div>
    );
  }
}

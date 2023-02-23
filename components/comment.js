import React, { Component } from 'react'
import timeAgo from '../lib/time-ago';

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      toggled: !this.state.toggled
    })
  }

  render() {
    const { user, text, date, comments } = this.props;
    return (
      <div className="comment">
        <div className="meta">
          {user} {timeAgo(new Date(date))} ago
          <span onClick={this.toggle} className="toggle">
            {
              this.state.toggled
                ? `${(this.props.commentsCount || 0) + 1}`
                : "[-]"
            }
          </span>
        </div>

        {this.state.toggled ? null : [
          <div key="text" className="text" dangerouslySetInnerHTML={
            {
              __html: text
            }
          } />,
          <div key="children" className="children">
            {comments.map(comment => (
              <Comment key={comment.id} {...comment} />
            ))}
          </div>,
        ]}
        <style jsx>
          {`
            .comment {
              padding-top: 15px;
            }

            .meta {
              font-size: 12px;
              margin-bottom: 5px;
            }

            .children {
              padding-top: 20px;
            }

            .toggle {
              cursor: pointer;
              font-size: 12px;
            }
            
            .text:global(pre) {
              margin-bottom: 10px;
              max-width: 850px;
              overflow: auto;
              padding: 2px;
              white-space: pre-wrap;
            }

            .text:global(a) {
              color: #000;
            }

          `}
        </style>
      </div>
    )
  }

}

import React from "react";

import Comment from "../PostListComment";

export default function PostListItem({ data }) {
	return (
		<div className="post-list-item">
			<div className="post-list-item-info">
				<div className="post-list-item-header">
					<img src={data.author.avatar} alt="" />

					<div>
						<span className="post-list-item-name">
							{data.author.name}
						</span>
						<span className="post-list-item-date">{data.date}</span>
					</div>
				</div>

				<p>{data.content}</p>
			</div>

			{data.comments &&
				data.comments.map(c => <Comment key={c.id} data={c} />)}
		</div>
	);
}

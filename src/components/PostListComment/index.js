import React from "react";

export default function PostListComment({ data }) {
	return (
		<div className="comment">
			<img src={data.author.avatar} alt="" />

			<p className="comment-content">
				<b>{data.author.name}</b> {data.content}
			</p>
		</div>
	);
}

import React, { Component } from "react";

import avatar_image from "../../assets/images/avatar.png";

import Post from "../PostListItem";

export default class PostList extends Component {
	state = {
		posts: [
			{
				id: 1,
				author: {
					name: "Julio Alcantara",
					avatar: avatar_image
				},
				date: "04 Jun 2019",
				content:
					"Pessoal, alguém sabe se a Rocketseat está contratando?",
				comments: [
					{
						id: 1,
						author: {
							name: "Diego Fernandes",
							avatar: avatar_image
						},
						content: "Conteúdo do comentário"
					},
					{
						id: 2,
						author: {
							name: "Diego Fernandes",
							avatar: avatar_image
						},
						content: "Conteúdo do comentário"
					},
					{
						id: 3,
						author: {
							name: "Diego Fernandes",
							avatar: avatar_image
						},
						content: "Conteúdo do comentário"
					}
				]
			},
			{
				id: 2,
				author: {
					name: "Julio Alcantara",
					avatar: avatar_image
				},
				date: "04 Jun 2019",
				content:
					"Pessoal, alguém sabe se a Rocketseat está contratando?",
				comments: [
					{
						id: 1,
						author: {
							name: "Diego Fernandes",
							avatar: avatar_image
						},
						content: "Conteúdo do comentário"
					},
					{
						id: 2,
						author: {
							name: "Diego Fernandes",
							avatar: avatar_image
						},
						content: "Conteúdo do comentário"
					},
					{
						id: 3,
						author: {
							name: "Diego Fernandes",
							avatar: avatar_image
						},
						content: "Conteúdo do comentário"
					}
				]
			}
		]
	};

	render() {
		const { posts } = this.state;

		return (
			<div className="post-list">
				{posts && posts.map(p => <Post key={p.id} data={p} />)}
			</div>
		);
	}
}

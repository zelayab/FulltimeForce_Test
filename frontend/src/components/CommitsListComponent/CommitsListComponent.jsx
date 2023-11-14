import axios from 'axios';
import React from 'react';
import { CommitComponent } from '../CommitComponent/CommitComponent.jsx';

const Commits = props => (
	<>{props.commit.url.split('/')[5]}</>
)

export const CommitsListComponent = (props) => {
	const [commits, setCommits] = React.useState([]);

	React.useEffect(() => {
		axios.get('http://localhost:3001/github/commits')
			.then(response => {
				setCommits(response.data)
			})
			.catch((error) => {
				console.log(error);
			})
	}, [])


	return (
		<div>
			<h1 className="text-3xl font-bold text-center text-gray-900 mb-10">
				Commits List
			</h1>
			<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
				Link to last Commit :
				<a href={commits.length > 0 && commits[0].html_url} target="_blank" className="text-blue-500 hover:text-blue-800 font-bold py-2 px-4 rounded inline-flex items-center pl-4">
					{commits.length > 0 && <Commits commit={commits[0]} />}
				</a>
			</button>
			<div className="grid grid-cols-3 gap-4">
				{commits.map(
					commit =>
						<CommitComponent
							name={commit.commit.author.name}
							message={commit.commit.message}
							date={commit.commit.author.date}
							img={commit.author.avatar_url}
							toCommit={commit.html_url}
							key={commit.author.id}
						/>
				)
				}
			</div>
		</div>
	)
}



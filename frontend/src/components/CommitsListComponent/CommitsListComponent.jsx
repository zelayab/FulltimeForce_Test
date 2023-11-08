import axios from 'axios';
import React from 'react';
import { CommitComponent } from '../CommitComponent/CommitComponent';

const Commits = props=>(
		<h4>{props.commits._id}</h4>
)

export  const CommitsListComponent = (props) => {
	const [commits, setCommits] = React.useState([]);

	React.useEffect(() => {
		axios.get('http://localhost:3001/github/commits')
			.then(response => {
				console.log(response.data)
				setCommits(response.data)
			})
			.catch((error) => {
				console.log(error);
			})
	}, [])


	return(
		<div>
			<h1 className="text-3xl font-bold text-center text-gray-900 mb-10">
				Commits List
			</h1>
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
	)
}



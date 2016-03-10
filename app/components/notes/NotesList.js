import React from 'react'

const NotesList = ({notes}) => {
	notes = notes.map((note, index) => (
		<li className="list-group-item" key={index}>{note}</li>
	))
	return (
		<ul className="list-group">
			{notes}
		</ul>
	)
}

export default NotesList
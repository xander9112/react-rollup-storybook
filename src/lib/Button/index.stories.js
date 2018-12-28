import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button, { Button as ButtonType } from './index'
import markdown from './markdown.md'

storiesOf('Buttons', module).add(
	'Button',
	() => (
		<Fragment>
			<Button onClick={action('onClick')} />
			<br />
			<Button width="200px" text="Custom width" onClick={action('onClick')} />
			<br />
			<Button
				text="Custom background"
				background="green"
				onClick={action('onClick')}
			/>
			<br />
			<Button
				width="200px"
				height="100px"
				background="red"
				fontSize={20}
				text="Custom width and height"
				onClick={action('onClick')}
			/>
			<br />
			<Button size="large" text="Custom fontSize" onClick={action('onClick')} />
			<br />
			<Button text="Custom text" onClick={action('onClick')} />
		</Fragment>
	),
	{
		notes: { markdown },
		props: {
			propTablesExclude: [Button, Fragment],
			propTables: [ButtonType],
		},
	},
)
